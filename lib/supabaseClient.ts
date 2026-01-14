import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabase;
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase env vars missing during build - using mock client for demo');
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: null, error: null }),
      insert: () => Promise.resolve({ data: [], error: null }),
      update: () => Promise.resolve({ data: [], error: null }),
      eq: () => ({ eq: () => ({}) })
    }),
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null })
    }
  } as any;
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
