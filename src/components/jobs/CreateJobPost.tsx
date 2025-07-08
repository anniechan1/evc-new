"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X, AlertCircle, CheckCircle, Building2, ArrowLeft } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import type { User, Profile } from "@/lib/supabase-client"
import { useRouter, useSearchParams } from "next/navigation"

interface CreateJobPostProps {
  onJobCreated?: () => void
  editJobId?: string
}

export default function CreateJobPost({ onJobCreated, editJobId }: CreateJobPostProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const jobId = editJobId || searchParams.get("edit")
  const duplicateId = searchParams.get("duplicate")
  const isEditing = Boolean(jobId)
  const isDuplicating = Boolean(duplicateId)

  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    cooperative_name: "",
    region_woreda: "",
    contact_person: "",
    phone_number: "",
    email_address: "",
    description: "",
    key_responsibilities: [""],
    required_skills: [""],
    compensation: "",
    application_process: "",
  })
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [fetchingJob, setFetchingJob] = useState(false)
  const [loadingProfile, setLoadingProfile] = useState(true)

  const availableLanguages = ["Amharic", "English", "Oromo", "Tigrinya", "Somali", "Sidamo", "Arabic", "French"]
  const availableRegions = [
    "Addis Ababa",
    "Oromia",
    "Amhara",
    "Tigray",
    "SNNPR",
    "Somali",
    "Afar",
    "Benishangul-Gumuz",
    "Gambela",
    "Harari",
    "Dire Dawa",
    "Other",
  ]

  const regionWoredas = [
    "Addis Ababa - Addis Ketema",
    "Addis Ababa - Akaki Kality",
    "Addis Ababa - Arada",
    "Addis Ababa - Bole",
    "Addis Ababa - Gullele",
    "Addis Ababa - Kirkos",
    "Addis Ababa - Kolfe Keranio",
    "Addis Ababa - Lideta",
    "Addis Ababa - Nifas Silk-Lafto",
    "Addis Ababa - Yeka",
    "Oromia - Adama",
    "Oromia - Jimma",
    "Oromia - Nekemte",
    "Oromia - Harar",
    "Oromia - Shashamene",
    "Oromia - Ambo",
    "Oromia - Asella",
    "Oromia - Dire Dawa",
    "Amhara - Bahir Dar",
    "Amhara - Gondar",
    "Amhara - Dessie",
    "Amhara - Debre Birhan",
    "Amhara - Debre Markos",
    "Amhara - Kombolcha",
    "Tigray - Mekelle",
    "Tigray - Axum",
    "Tigray - Adigrat",
    "Tigray - Shire",
    "SNNPR - Hawassa",
    "SNNPR - Arba Minch",
    "SNNPR - Wolaita Sodo",
    "SNNPR - Dilla",
    "SNNPR - Hosanna",
    "Other",
  ]

  const employmentTypes = ["Full-Time", "Part-Time", "Contractual", "Internship", "Freelance", "Other"]

  const defaultResponsibilities = [
    "e.g. Train smallholder farmers on how to use the mobile app for EUDR compliance",
    "e.g. Collect geolocation data (GPS coordinates) of farm plots",
    "e.g. Upload compliance documents (e.g. land use proof, photos) to the platform",
    "e.g. Support the cooperative in maintaining accurate farmer records",
    "e.g. Travel to farm locations as needed and report on progress",
    "e.g. Communicate with cooperative staff and farmers in local language",
  ]

  const defaultSkills = [
    "e.g. University student or graduate in agriculture, environmental science, geography, or IT",
    "e.g. Experience with smartphones, mobile apps, or data collection tools",
    "e.g. Familiarity with basic GPS or mapping tools (a plus)",
    "e.g. Strong communication skills and ability to train others",
    "e.g. Fieldwork experience or willingness to travel to rural areas",
    "e.g. Fluent in [e.g. Afan Oromo / Amharic / Tigrinya]",
  ]

  // Fetch user profile
  const fetchUserProfile = async (userId: string) => {
    try {
      setLoadingProfile(true)
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

      if (error) {
        console.error("Error fetching profile:", error)
        setError("Failed to load profile information")
        return
      }

      if (data) {
        setProfile(data)
        // Auto-fill cooperative name from profile
        setFormData((prev) => ({
          ...prev,
          cooperative_name: data.cooperative_name,
        }))
      }
    } catch (err) {
      console.error("Error fetching profile:", err)
      setError("Failed to load profile information")
    } finally {
      setLoadingProfile(false)
    }
  }

  // Fetch job data for editing or duplicating
  const fetchJobData = async (id: string) => {
    try {
      setFetchingJob(true)
      const { data, error } = await supabase.from("job_posts").select("*").eq("id", id).single()

      if (error) {
        setError("Failed to fetch job data: " + error.message)
        return
      }

      if (data) {
        setFormData({
          title: data.title,
          cooperative_name: data.cooperative_name,
          region_woreda: data.region_woreda,
          contact_person: data.contact_person,
          phone_number: data.phone_number,
          email_address: data.email_address,
          description: data.description,
          key_responsibilities: data.key_responsibilities,
          required_skills: data.required_skills,
          compensation: data.compensation || "",
          application_process: data.application_process || "",
        })
        setSelectedLanguages(data.required_languages)
        setSelectedRegions(data.work_regions)
        setSelectedEmploymentTypes(data.employment_type)
      }
    } catch (err) {
      setError("Failed to fetch job data")
      console.error("Error fetching job:", err)
    } finally {
      setFetchingJob(false)
    }
  }

  useEffect(() => {
    // Get initial user state
    const getInitialUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user as User)

      if (user) {
        await fetchUserProfile(user.id)
      }
    }

    getInitialUser()

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser((session?.user as User) || null)

      if (session?.user) {
        await fetchUserProfile(session.user.id)
      }

      // Clear form and reset states when user logs out
      if (event === "SIGNED_OUT") {
        setProfile(null)
        setFormData({
          title: "",
          cooperative_name: "",
          region_woreda: "",
          contact_person: "",
          phone_number: "",
          email_address: "",
          description: "",
          key_responsibilities: [""],
          required_skills: [""],
          compensation: "",
          application_process: "",
        })
        setSelectedLanguages([])
        setSelectedRegions([])
        setSelectedEmploymentTypes([])
        setError(null)
        setSuccess(false)
      }
    })

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Fetch job data when editing or duplicating
  useEffect(() => {
    if (user && (jobId || duplicateId)) {
      fetchJobData(jobId || duplicateId!)
    }
  }, [user, jobId, duplicateId])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field: "key_responsibilities" | "required_skills", index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }))
  }

  const addArrayItem = (field: "key_responsibilities" | "required_skills") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }))
  }

  const removeArrayItem = (field: "key_responsibilities" | "required_skills", index: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  const toggleSelection = (item: string, selectedItems: string[], setSelectedItems: (items: string[]) => void) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleBackToJobs = () => {
    // Navigate to dashboard with jobs tab parameter
    router.push("/cooperative/dashboard?tab=jobs")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      // Check if user is authenticated
      if (!user) {
        setError("You must be logged in to create a job")
        return
      }

      // Validate required fields
      if (!formData.title.trim() || !formData.description.trim()) {
        setError("Title and description are required")
        return
      }

      if (!formData.cooperative_name.trim() || !formData.region_woreda.trim()) {
        setError("Cooperative name and region/woreda are required")
        return
      }

      if (!formData.contact_person.trim() || !formData.phone_number.trim() || !formData.email_address.trim()) {
        setError("Contact person, phone number, and email address are required")
        return
      }

      if (selectedEmploymentTypes.length === 0) {
        setError("At least one employment type must be selected")
        return
      }

      if (selectedLanguages.length === 0) {
        setError("At least one language must be selected")
        return
      }

      if (selectedRegions.length === 0) {
        setError("At least one work region must be selected")
        return
      }

      // Filter out empty strings from arrays
      const cleanResponsibilities = formData.key_responsibilities.filter((resp) => resp.trim() !== "")
      const cleanSkills = formData.required_skills.filter((skill) => skill.trim() !== "")

      if (cleanResponsibilities.length === 0) {
        setError("At least one key responsibility must be specified")
        return
      }

      if (cleanSkills.length === 0) {
        setError("At least one required skill must be specified")
        return
      }

      const jobData = {
        title: formData.title.trim(),
        cooperative_name: formData.cooperative_name.trim(),
        region_woreda: formData.region_woreda,
        contact_person: formData.contact_person.trim(),
        phone_number: formData.phone_number.trim(),
        email_address: formData.email_address.trim(),
        description: formData.description.trim(),
        key_responsibilities: cleanResponsibilities,
        required_skills: cleanSkills,
        employment_type: selectedEmploymentTypes,
        compensation: formData.compensation.trim() || null,
        application_process: formData.application_process.trim() || null,
        required_languages: selectedLanguages,
        work_regions: selectedRegions,
        status: "active",
      }

      let data, error

      if (isEditing && jobId) {
        // Update existing job - RLS will enforce ownership
        ; ({ data, error } = await supabase.from("job_posts").update(jobData).eq("id", jobId).select())
      } else {
        // Create new job
        ; ({ data, error } = await supabase
          .from("job_posts")
          .insert([
            {
              ...jobData,
              created_by: user.id,
            },
          ])
          .select())
      }

      if (error) {
        setError(error.message)
        return
      }

      setSuccess(true)

      if (!isEditing) {
        // Reset form for new posts (but keep cooperative name)
        setFormData({
          title: "",
          cooperative_name: profile?.cooperative_name || "",
          region_woreda: "",
          contact_person: "",
          phone_number: "",
          email_address: "",
          description: "",
          key_responsibilities: [""],
          required_skills: [""],
          compensation: "",
          application_process: "",
        })
        setSelectedLanguages([])
        setSelectedRegions([])
        setSelectedEmploymentTypes([])
      }

      if (onJobCreated) {
        onJobCreated()
      }

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccess(false)
        if (isEditing || isDuplicating) {
          router.push("/cooperative/dashboard?tab=jobs")
        }
      }, 3000)
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error("Job creation/update error:", err)
    } finally {
      setLoading(false)
    }
  }

  if (fetchingJob || loadingProfile) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-[#725C3A]">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Back Button - Repositioned outside the card */}
      {(isEditing || isDuplicating) && (
        <div className="flex items-center">
          <Button variant="ghost" onClick={handleBackToJobs} className="text-[#725C3A] hover:bg-[#F5F5F0] -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to My Jobs
          </Button>
        </div>
      )}

      <Card className="border border-[#E5D2B8] shadow-lg">
        <CardHeader>
          <CardTitle
            className="text-xl text-[#725C3A] flex items-center gap-2"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
            }}
          >
            <Building2 className="w-5 h-5" />
            {isEditing ? "Edit Job" : isDuplicating ? "Duplicate Job" : "Post a New Job"}
          </CardTitle>

          {/* Instructions */}
          <div className="mt-4">
            <p className="text-sm text-[#725C3A]" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
              Use this form to post opportunities for support tasks related to your cooperative's farming activities and
              EUDR compliance. These roles may include training farmers on digital tools, collecting geolocation data in
              the field, and helping document proof of deforestation-free production. The listing will be visible on the
              site to university students, recent graduates, and skilled individuals who can assist your cooperative and
              member farmers in meeting international requirements and improving farm operations.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <p className="text-green-800 text-sm">Job {isEditing ? "updated" : "posted"} successfully!</p>
              </div>
            )}

            {/* Job Title */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Job Title *</label>
              <Input
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="e.g. Field Assistant for EUDR Farmer Onboarding/Digital Training Support for Farmers..."
                className="border-[#E5D2B8] focus:border-[#725C3A]"
                required
                disabled={loading}
              />
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Job Description *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="e.g. Support the onboarding of farmers by collecting GPS coordinates, uploading compliance documents, and training farmers on how to use the mobile app for EUDR traceability. Travel to farms in the region may be required."
                rows={4}
                className="border-[#E5D2B8] focus:border-[#725C3A]"
                required
                disabled={loading}
              />
            </div>

            {/* Employment Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Employment Type *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {employmentTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEmploymentTypes.includes(type)}
                      onChange={() => toggleSelection(type, selectedEmploymentTypes, setSelectedEmploymentTypes)}
                      className="rounded border-[#E5D2B8] text-[#725C3A] focus:ring-[#725C3A]"
                      disabled={loading}
                    />
                    <span className="text-sm text-[#725C3A]">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Key Responsibilities *</label>
              {formData.key_responsibilities.map((responsibility, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={responsibility}
                    onChange={(e) => handleArrayChange("key_responsibilities", index, e.target.value)}
                    placeholder={defaultResponsibilities[index] || ""}
                    className="border-[#E5D2B8] focus:border-[#725C3A]"
                    disabled={loading}
                  />
                  {formData.key_responsibilities.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("key_responsibilities", index)}
                      className="border-red-300 text-red-600 hover:bg-red-50"
                      disabled={loading}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addArrayItem("key_responsibilities")}
                className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0]"
                disabled={loading}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Responsibility
              </Button>
            </div>

            {/* Required Skills and Qualifications */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Required Skills and Qualifications *</label>
              {formData.required_skills.map((skill, index) => (
                <div key={index} className="flex space-x-2">
                  <Input
                    value={skill}
                    onChange={(e) => handleArrayChange("required_skills", index, e.target.value)}
                    placeholder={defaultSkills[index] || ""}
                    className="border-[#E5D2B8] focus:border-[#725C3A]"
                    disabled={loading}
                  />
                  {formData.required_skills.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeArrayItem("required_skills", index)}
                      className="border-red-300 text-red-600 hover:bg-red-50"
                      disabled={loading}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addArrayItem("required_skills")}
                className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0]"
                disabled={loading}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Skill/Qualification
              </Button>
            </div>

            {/* Required Languages */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Required Languages *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableLanguages.map((language) => (
                  <label key={language} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(language)}
                      onChange={() => toggleSelection(language, selectedLanguages, setSelectedLanguages)}
                      className="rounded border-[#E5D2B8] text-[#725C3A] focus:ring-[#725C3A]"
                      disabled={loading}
                    />
                    <span className="text-sm text-[#725C3A]">{language}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Work Regions */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Work Regions *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableRegions.map((region) => (
                  <label key={region} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRegions.includes(region)}
                      onChange={() => toggleSelection(region, selectedRegions, setSelectedRegions)}
                      className="rounded border-[#E5D2B8] text-[#725C3A] focus:ring-[#725C3A]"
                      disabled={loading}
                    />
                    <span className="text-sm text-[#725C3A]">{region}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Compensation */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Compensation (Optional)</label>
              <Textarea
                value={formData.compensation}
                onChange={(e) => handleInputChange("compensation", e.target.value)}
                placeholder="e.g. xx ETB per day + transport allowance"
                rows={3}
                className="border-[#E5D2B8] focus:border-[#725C3A]"
                disabled={loading}
              />
            </div>

            {/* Application Process */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#725C3A]">Application Process (Optional)</label>
              <Textarea
                value={formData.application_process}
                onChange={(e) => handleInputChange("application_process", e.target.value)}
                placeholder="e.g. Please send your CV and a short motivation to [your email]"
                rows={3}
                className="border-[#E5D2B8] focus:border-[#725C3A]"
                disabled={loading}
              />
            </div>

            {/* Cooperative Information Section - Moved to the end */}
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-[#725C3A]">Cooperative Information</h3>

              {/* Cooperative Name - Auto-filled and disabled */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#725C3A]">Cooperative Name *</label>
                <Input
                  value={formData.cooperative_name}
                  className="border-[#E5D2B8] bg-gray-100 text-gray-600"
                  disabled={true}
                  placeholder="Loading cooperative name..."
                />
                <p className="text-xs text-gray-500">
                  This is automatically filled from your profile and cannot be changed.
                </p>
              </div>

              {/* Region/Woreda */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#725C3A]">Region/Woreda *</label>
                <Select
                  value={formData.region_woreda}
                  onValueChange={(value) => handleInputChange("region_woreda", value)}
                >
                  <SelectTrigger className="border-[#E5D2B8] focus:border-[#725C3A]">
                    <SelectValue placeholder="Select region and woreda" />
                  </SelectTrigger>
                  <SelectContent>
                    {regionWoredas.map((regionWoreda) => (
                      <SelectItem key={regionWoreda} value={regionWoreda}>
                        {regionWoreda}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#725C3A]">Contact Person *</label>
                <Input
                  value={formData.contact_person}
                  onChange={(e) => handleInputChange("contact_person", e.target.value)}
                  placeholder="Name of the contact person"
                  className="border-[#E5D2B8] focus:border-[#725C3A]"
                  required
                  disabled={loading}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#725C3A]">Phone Number *</label>
                <Input
                  value={formData.phone_number}
                  onChange={(e) => handleInputChange("phone_number", e.target.value)}
                  placeholder="+251-9-12-34-56-78"
                  className="border-[#E5D2B8] focus:border-[#725C3A]"
                  required
                  disabled={loading}
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#725C3A]">Email Address *</label>
                <Input
                  type="email"
                  value={formData.email_address}
                  onChange={(e) => handleInputChange("email_address", e.target.value)}
                  placeholder="contact@cooperative.org.et"
                  className="border-[#E5D2B8] focus:border-[#725C3A]"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#725C3A] hover:bg-[#809671] text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
              disabled={loading}
            >
              {loading ? (isEditing ? "Updating Job..." : "Posting Job...") : isEditing ? "Update Job" : "Post Job"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
