import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://cbsfpwunevgworxloixq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNic2Zwd3VuZXZnd29yeGxvaXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1NDM3MjgsImV4cCI6MjAwOTExOTcyOH0.jctp_bgttvvTlfabA2nE_0q0y2ocahkWyGGULPgUqg0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)