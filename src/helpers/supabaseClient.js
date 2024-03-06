
import { createClient } from '@supabase/supabase-js'

const URL = 'https://atwhpfjjxwviwnjuuyot.supabase.co';

// Create a single supabase client for interacting with your database
export const supabase = createClient(URL, import.meta.env.VITE_KEY);