import { NextRequest, NextResponse } from 'next/server';
import { loadKnowledgeBase, searchKnowledge } from '@/lib/chatbot';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const entries = await loadKnowledgeBase();
    const result = searchKnowledge(message.trim(), entries);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
