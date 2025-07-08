import { type NextRequest, NextResponse } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()

    // Fetch all the columns we need for the updated profile cards
    const { data: profiles, error } = await supabase
      .from("data_logistic_managers")
      .select(`
        id, 
        name, 
        region, 
        country, 
        degree,
        field_of_study,
        university, 
        university_city, 
        languages, 
        email, 
        phone, 
        photo_url, 
        has_fieldwork_experience,
        fieldwork_experience_description,
        has_technical_experience,
        technical_experience_description
      `)
      .order("name", { ascending: true })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Failed to fetch profiles",
          details: error.message,
        },
        { status: 500 },
      )
    }

    // Extract unique filter options from the data
    const regions = [...new Set(profiles?.map((p) => p.region) || [])].sort()
    const universities = [...new Set(profiles?.map((p) => p.university) || [])].sort()
    const universityCities = [...new Set(profiles?.map((p) => p.university_city) || [])].sort()
    const degrees = [...new Set(profiles?.map((p) => p.degree) || [])].sort()
    const fieldsOfStudy = [...new Set(profiles?.map((p) => p.field_of_study) || [])].sort()
    const languages = [...new Set(profiles?.flatMap((p) => p.languages || []) || [])].sort()

    const response = NextResponse.json({
      success: true,
      data: profiles || [],
      filters: {
        regions,
        universities,
        universityCities,
        degrees,
        fieldsOfStudy,
        languages,
      },
      total: profiles?.length || 0,
    })

    // Add cache headers for better performance
    response.headers.set("Cache-Control", "public, max-age=300, stale-while-revalidate=60")
    response.headers.set("ETag", `"dlm-profiles-${Date.now()}"`)

    return response
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
