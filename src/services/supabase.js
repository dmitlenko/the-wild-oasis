import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ecsruqdngyperqgymqgs.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjc3J1cWRuZ3lwZXJxZ3ltcWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4NjMxNzEsImV4cCI6MjA0MzQzOTE3MX0.oFam4rcwer1ImJNotO8p9Y95rEgi2lacuCTMJLmsF3Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
