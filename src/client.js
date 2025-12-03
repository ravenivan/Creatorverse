import { createClient } from "@supabase/supabase-js";

const URL = 'https://bkjxqasddwdqdcvchowf.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJranhxYXNkZHdkcWRjdmNob3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5NDAxNDIsImV4cCI6MjA3OTUxNjE0Mn0._Yhspz2VN7uMNpg_h26hQ8Gh3ehU5PS4cx83McS2rRI'

export const supabase = createClient(URL, API_KEY);

