import Fuse from 'fuse.js';
import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export interface KnowledgeEntry {
  question: string;
  keywords: string;
  answer: string;
  category: string;
}

interface SearchResult {
  reply: string;
  category?: string;
  confidence: 'high' | 'low';
  suggestions?: string[];
}

let cachedKnowledge: KnowledgeEntry[] | null = null;
let cachedFuse: Fuse<KnowledgeEntry> | null = null;

function parseCSV(filePath: string): KnowledgeEntry[] {
  const csvContent = fs.readFileSync(filePath, 'utf-8');
  const parsed = Papa.parse<KnowledgeEntry>(csvContent, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data;
}

async function parsePDFsAsync(dataDir: string): Promise<KnowledgeEntry[]> {
  const entries: KnowledgeEntry[] = [];

  try {
    const files = fs.readdirSync(dataDir).filter((f) => f.endsWith('.pdf'));

    for (const file of files) {
      try {
        const { PDFParse } = await import('pdf-parse');
        const pdfBuffer = fs.readFileSync(path.join(dataDir, file));
        const uint8 = new Uint8Array(pdfBuffer);
        const parser = new PDFParse(uint8);
        const result = await parser.getText();

        const text = result.pages.map((p: { text: string }) => p.text).join('\n\n');

        const chunks = text
          .split(/\n{2,}/)
          .map((chunk: string) => chunk.trim())
          .filter((chunk: string) => chunk.length > 30);

        for (const chunk of chunks) {
          const firstLine = chunk.split('\n')[0].trim();
          const question = firstLine.length > 10 ? firstLine : chunk.slice(0, 60);

          entries.push({
            question,
            keywords: question.toLowerCase(),
            answer: chunk,
            category: 'resume',
          });
        }
      } catch {
        console.warn(`Failed to parse PDF: ${file}`);
      }
    }
  } catch {
    // No PDFs found
  }

  return entries;
}

export async function loadKnowledgeBase(): Promise<KnowledgeEntry[]> {
  if (cachedKnowledge) return cachedKnowledge;

  const dataDir = path.join(process.cwd(), 'data');
  let entries: KnowledgeEntry[] = [];

  const csvPath = path.join(dataDir, 'knowledge.csv');
  if (fs.existsSync(csvPath)) {
    entries = [...entries, ...parseCSV(csvPath)];
  }

  const pdfEntries = await parsePDFsAsync(dataDir);
  entries = [...entries, ...pdfEntries];

  cachedKnowledge = entries;
  return entries;
}

function buildFuseIndex(entries: KnowledgeEntry[]): Fuse<KnowledgeEntry> {
  if (cachedFuse) return cachedFuse;

  cachedFuse = new Fuse(entries, {
    keys: [
      { name: 'keywords', weight: 3 },
      { name: 'question', weight: 2 },
      { name: 'answer', weight: 0.5 },
    ],
    threshold: 0.5,
    includeScore: true,
    ignoreLocation: true,
    minMatchCharLength: 2,
  });

  return cachedFuse;
}

const SUGGESTION_QUESTIONS = [
  'What is your current role?',
  'What programming languages do you know?',
  'What testing tools do you use?',
  'What certifications do you have?',
];

export function searchKnowledge(
  query: string,
  entries: KnowledgeEntry[]
): SearchResult {
  const fuse = buildFuseIndex(entries);
  const results = fuse.search(query);

  if (results.length > 0 && results[0].score !== undefined && results[0].score < 0.5) {
    const best = results[0].item;
    return {
      reply: best.answer,
      category: best.category,
      confidence: 'high',
    };
  }

  return {
    reply: "I'm not sure about that one. Try asking about Rhuzzel's background, skills, projects, experience, certifications, or how to get in touch!",
    suggestions: SUGGESTION_QUESTIONS,
    confidence: 'low',
  };
}
