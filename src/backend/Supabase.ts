
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aufblgfteyoqmgfzfwxy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1ZmJsZ2Z0ZXlvcW1nZnpmd3h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMTc2ODYsImV4cCI6MjA2OTg5MzY4Nn0.ZtXcWsCOzLwoPfBxkeICpeny5e5pin24y3AytLI4gG0"
const supabase = createClient(supabaseUrl, supabaseKey)