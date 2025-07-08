import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// User interface for cooperative users
export interface User {
  id: string
  email?: string
  user_metadata?: {
    organization_name?: string
  }
}

// Profile interface
export interface Profile {
  id: string
  cooperative_name: string
  created_at: string
  updated_at: string
}

// Job Post interface
export interface JobPost {
  id: string
  title: string
  cooperative_name: string
  region_woreda: string
  contact_person: string
  phone_number: string
  email_address: string
  description: string
  key_responsibilities: string[]
  required_skills: string[]
  employment_type: string[]
  compensation: string | null
  application_process: string | null
  required_languages: string[]
  work_regions: string[]
  status: "active" | "inactive" | "closed"
  created_at: string
  created_by: string
  updated_at: string
}
