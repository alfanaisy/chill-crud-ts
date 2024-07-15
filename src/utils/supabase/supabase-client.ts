import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nbpdygiwxlsthzeqqugs.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5icGR5Z2l3eGxzdGh6ZXFxdWdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5OTcxMTksImV4cCI6MjAzNjU3MzExOX0.6qHWOyIa8dxSNRjO8Au6zQOgAkG1Ye6oZiHZbJSY_sc';

export const supabase = createClient(supabaseUrl, supabaseKey);
