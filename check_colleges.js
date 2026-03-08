import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://idvwckpcsktnplnvwvba.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkdndja3Bjc2t0bnBsbnZ3dmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExMDYzNDgsImV4cCI6MjA3NjY4MjM0OH0.PnjVgnLBrNC0J0rCpRTZZG4vY9vjAKjcFalyJDsD8K4';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColleges() {
  const { data, error } = await supabase
    .from('colleges')
    .select('*')
    .limit(5);
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}

checkColleges();
