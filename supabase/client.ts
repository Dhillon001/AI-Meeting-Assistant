/**
 * Supabase client placeholder for future database integration.
 *
 * When you're ready to persist meetings, tasks, and projects:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
 * 3. Install @supabase/supabase-js and implement the client below
 */

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};

export function isSupabaseConfigured(): boolean {
  return Boolean(supabaseConfig.url && supabaseConfig.anonKey);
}
