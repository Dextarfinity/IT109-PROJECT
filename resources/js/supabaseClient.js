// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ewapfdvxofefoqarsngo.supabase.co'  // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3YXBmZHZ4b2ZlZm9xYXJzbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NjA5NzMsImV4cCI6MjA0NDUzNjk3M30.wD_apCd9IpWMg0WLTJglkP1t-jv6WlYqut_T1xsOE6E'  // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
