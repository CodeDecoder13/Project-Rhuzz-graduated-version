import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let _supabase: SupabaseClient | null = null;

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    if (!_supabase) {
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error(
          'Supabase URL and Anon Key must be set in environment variables.'
        );
      }
      _supabase = createClient(supabaseUrl, supabaseAnonKey);
    }
    return Reflect.get(_supabase, prop);
  },
});

// Database table names
export const TABLES = {
  PROJECTS: 'projects',
  CERTIFICATIONS: 'certifications',
  TECH_STACK: 'tech_stack',
  CONTACT_MESSAGES: 'contact_messages',
  PROFILE: 'profile',
} as const;
