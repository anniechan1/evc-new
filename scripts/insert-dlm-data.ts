import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"

interface DLMData {
  name: string
  region: string
  country: string
  degree: string
  field_of_study: string
  university: string
  university_city: string
  languages: string[]
  email: string
  phone?: string
  photo_url?: string
  has_fieldwork_experience: boolean
  fieldwork_experience_description?: string | null
  has_technical_experience: boolean
  technical_experience_description?: string | null
}

// Validation function
function validateDLMProfile(profile: any, index: number): profile is DLMData {
  const errors: string[] = []

  if (!profile.name || typeof profile.name !== "string" || profile.name.trim().length === 0) {
    errors.push(`Profile ${index + 1}: Name is required and must be a non-empty string`)
  }

  if (!profile.region || typeof profile.region !== "string" || profile.region.trim().length === 0) {
    errors.push(`Profile ${index + 1}: Region is required and must be a non-empty string`)
  }

  if (!profile.country || typeof profile.country !== "string" || profile.country.trim().length === 0) {
    errors.push(`Profile ${index + 1}: Country is required and must be a non-empty string`)
  }

  if (!profile.degree || typeof profile.degree !== "string" || profile.degree.trim().length === 0) {
    errors.push(`Profile ${index + 1}: Degree is required and must be a non-empty string`)
  }

  if (
    !profile.field_of_study ||
    typeof profile.field_of_study !== "string" ||
    profile.field_of_study.trim().length === 0
  ) {
    errors.push(`Profile ${index + 1}: Field of study is required and must be a non-empty string`)
  }

  if (!profile.university || typeof profile.university !== "string" || profile.university.trim().length === 0) {
    errors.push(`Profile ${index + 1}: University is required and must be a non-empty string`)
  }

  if (
    !profile.university_city ||
    typeof profile.university_city !== "string" ||
    profile.university_city.trim().length === 0
  ) {
    errors.push(`Profile ${index + 1}: University city is required and must be a non-empty string`)
  }

  if (!Array.isArray(profile.languages) || profile.languages.length === 0) {
    errors.push(`Profile ${index + 1}: Languages must be a non-empty array`)
  } else if (!profile.languages.every((lang: any) => typeof lang === "string" && lang.trim().length > 0)) {
    errors.push(`Profile ${index + 1}: All languages must be non-empty strings`)
  }

  if (!profile.email || typeof profile.email !== "string") {
    errors.push(`Profile ${index + 1}: Email is required and must be a string`)
  } else {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(profile.email)) {
      errors.push(`Profile ${index + 1}: Email format is invalid`)
    }
  }

  // Boolean validations
  if (typeof profile.has_fieldwork_experience !== "boolean") {
    errors.push(`Profile ${index + 1}: has_fieldwork_experience must be a boolean`)
  }

  if (typeof profile.has_technical_experience !== "boolean") {
    errors.push(`Profile ${index + 1}: has_technical_experience must be a boolean`)
  }

  // Optional field validations
  if (profile.phone && typeof profile.phone !== "string") {
    errors.push(`Profile ${index + 1}: Phone must be a string`)
  }

  if (profile.photo_url && typeof profile.photo_url !== "string") {
    errors.push(`Profile ${index + 1}: Photo URL must be a string`)
  }

  if (profile.fieldwork_experience_description && typeof profile.fieldwork_experience_description !== "string") {
    errors.push(`Profile ${index + 1}: Fieldwork experience description must be a string`)
  }

  if (profile.technical_experience_description && typeof profile.technical_experience_description !== "string") {
    errors.push(`Profile ${index + 1}: Technical experience description must be a string`)
  }

  if (errors.length > 0) {
    console.error("❌ Validation errors:")
    errors.forEach((error) => console.error(`   ${error}`))
    return false
  }

  return true
}

async function insertDLMData() {
  try {
    console.log("🚀 Starting DLM data insertion with upsert...")

    // Read the JSON file
    const jsonPath = path.join(process.cwd(), "scripts", "dlm-data.json")

    if (!fs.existsSync(jsonPath)) {
      console.error("❌ JSON file not found:", jsonPath)
      process.exit(1)
    }

    const jsonData = fs.readFileSync(jsonPath, "utf8")
    let dlmProfiles: any[]

    try {
      dlmProfiles = JSON.parse(jsonData)
    } catch (parseError) {
      console.error("❌ Invalid JSON format:", parseError)
      process.exit(1)
    }

    if (!Array.isArray(dlmProfiles)) {
      console.error("❌ JSON must contain an array of profiles")
      process.exit(1)
    }

    console.log(`📄 Found ${dlmProfiles.length} profiles to validate and upsert`)

    // Validate all profiles
    const validProfiles: DLMData[] = []
    let hasValidationErrors = false

    for (let i = 0; i < dlmProfiles.length; i++) {
      if (validateDLMProfile(dlmProfiles[i], i)) {
        // Trim whitespace from string fields and handle optional fields
        const cleanProfile: DLMData = {
          name: dlmProfiles[i].name.trim(),
          region: dlmProfiles[i].region.trim(),
          country: dlmProfiles[i].country.trim(),
          degree: dlmProfiles[i].degree.trim(),
          field_of_study: dlmProfiles[i].field_of_study.trim(),
          university: dlmProfiles[i].university.trim(),
          university_city: dlmProfiles[i].university_city.trim(),
          languages: dlmProfiles[i].languages.map((lang: string) => lang.trim()),
          email: dlmProfiles[i].email.trim().toLowerCase(),
          has_fieldwork_experience: dlmProfiles[i].has_fieldwork_experience,
          has_technical_experience: dlmProfiles[i].has_technical_experience,
        }

        // Add optional fields if they exist
        if (dlmProfiles[i].phone) {
          cleanProfile.phone = dlmProfiles[i].phone.trim()
        }

        if (dlmProfiles[i].photo_url) {
          cleanProfile.photo_url = dlmProfiles[i].photo_url.trim()
        }

        if (dlmProfiles[i].fieldwork_experience_description) {
          cleanProfile.fieldwork_experience_description = dlmProfiles[i].fieldwork_experience_description.trim()
        }

        if (dlmProfiles[i].technical_experience_description) {
          cleanProfile.technical_experience_description = dlmProfiles[i].technical_experience_description.trim()
        }

        validProfiles.push(cleanProfile)
      } else {
        hasValidationErrors = true
      }
    }

    if (hasValidationErrors) {
      console.error("❌ Validation failed. Please fix the errors above.")
      process.exit(1)
    }

    if (validProfiles.length === 0) {
      console.log("⚠️  No valid profiles to insert")
      return
    }

    console.log(`✅ Validation passed for ${validProfiles.length} profiles`)

    // Create Supabase client
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

    // Use upsert to avoid duplicates (based on email unique constraint)
    console.log("📤 Upserting data into Supabase...")
    const { data, error } = await supabase
      .from("data_logistic_managers")
      .upsert(validProfiles, {
        onConflict: "email",
        ignoreDuplicates: false,
      })
      .select()

    if (error) {
      console.error("❌ Error upserting data:", error.message)
      console.error("Error details:", error)
      process.exit(1)
    }

    console.log(`✅ Successfully upserted ${data?.length || 0} DLM profiles`)
    console.log("📋 Upserted profiles:")
    data?.forEach((profile, index) => {
      const experienceFlags = []
      if (profile.has_fieldwork_experience) experienceFlags.push("Fieldwork")
      if (profile.has_technical_experience) experienceFlags.push("Technical")
      const experienceText =
        experienceFlags.length > 0 ? ` - ${experienceFlags.join(", ")} Experience` : " - No Experience Listed"

      console.log(
        `   ${index + 1}. ${profile.name} (${profile.degree} in ${profile.field_of_study}) - ${profile.email}${experienceText}`,
      )
    })

    console.log("🎉 Data upsert completed successfully!")
    console.log("💡 Note: Running this script again will update existing records instead of creating duplicates.")
  } catch (error) {
    console.error("❌ Script error:", error)
    process.exit(1)
  }
}

// Run the script
insertDLMData()
