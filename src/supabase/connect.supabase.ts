import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://wdylxsfwqkkggdmsogsw.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkeWx4c2Z3cWtrZ2dkbXNvZ3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTMyODcsImV4cCI6MjA3MDU2OTI4N30.gvGOGAIHReMFJOGws5WboUxQMvx_4lIB_O358UVqyTY'
export const supabase = createClient(supabaseURL, supabaseKey)
