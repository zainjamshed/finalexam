import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fnfpschrzgscijopjznc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZnBzY2hyemdzY2lqb3Bqem5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4OTgxMTEsImV4cCI6MjA1MDQ3NDExMX0.FLqMFtlVGAhf24JMFXZPSmJi98ebb9wzR3L9YRDTuUg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



