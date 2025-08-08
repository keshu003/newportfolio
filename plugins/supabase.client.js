import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const supabaseUrl = process.env.SUPABASE_URL || 'https://bruqgipiahcrpelverjr.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJydXFnaXBpYWhjcnBlbHZlcmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1ODEyNTQsImV4cCI6MjA3MDE1NzI1NH0.0s5mowqQtd5Tv7UM9IdUCqKJGvLwVKUR94Xosp1KoLQ'
  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabase
    }
  }
})
