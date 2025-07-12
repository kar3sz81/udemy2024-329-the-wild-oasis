import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://iykjuohbwsyzvkoqkvus.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5a2p1b2hid3N5enZrb3FrdnVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjAwNTAsImV4cCI6MjA2NTU5NjA1MH0.9KG-1n-60B1JcDS-VLtCFaif-9lBM3sdVUzxsHGrcjA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
