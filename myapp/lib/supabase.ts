import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table names
export const TABLES = {
  PROJECTS: 'projects',
  CERTIFICATIONS: 'certifications',
  TECH_STACK: 'tech_stack',
  CONTACT_MESSAGES: 'contact_messages',
  PROFILE: 'profile',
} as const;
