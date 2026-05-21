import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// ❗ IMPORTANT: on ne crée le client que côté browser
export const supabase =
  typeof window !== "undefined"
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;