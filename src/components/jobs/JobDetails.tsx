"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Building2, MapPin, Calendar, Languages, Mail, Phone, User, DollarSign, Globe } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import type { JobPost } from "@/lib/supabase-client"

interface JobDetailsProps {
  jobId: string
}

export default function JobDetails({ jobId }: JobDetailsProps) {
  const router = useRouter()
  const [job, setJob] = useState<JobPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true)
        setError(null)

        const { data, error } = await supabase.from("job_posts").select("*").eq("id", jobId).single()

        if (error) {
          setError("Failed to fetch job details: " + error.message)
          return
        }

        setJob(data)
      } catch (err) {
        setError("An unexpected error occurred")
        console.error("Error fetching job:", err)
      } finally {
        setLoading(false)
      }
    }

    if (jobId) {
      fetchJob()
    }
  }, [jobId])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleBackToJobs = () => {
    // Navigate to dashboard with jobs tab parameter
    router.push("/cooperative/dashboard?tab=jobs")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#725C3A]"></div>
      </div>
    )
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-red-600 mb-4 text-lg">{error || "Job not found"}</p>
          <Button
            onClick={handleBackToJobs}
            variant="outline"
            className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to My Jobs
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Back Button - Repositioned above header */}
      <div className="bg-[#F5F5F0] px-6 pt-6">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" onClick={handleBackToJobs} className="text-[#725C3A] hover:bg-white -ml-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to My Jobs
          </Button>
        </div>
      </div>

      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-[#725C3A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
              {job.title}
            </h1>
            <div className="flex items-center gap-6 text-[#725C3A] mb-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="text-lg font-medium">{job.cooperative_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{job.region_woreda}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#725C3A] opacity-75 mb-4">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Posted on {formatDate(job.created_at)}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {job.employment_type.map((type) => (
                <Badge key={type} className="bg-[#725C3A] text-white hover:bg-[#809671]">
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {/* Job Overview Info - Moved to header */}
          <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Languages className="w-4 h-4 text-[#725C3A]" />
                <span className="text-sm font-medium text-[#725C3A]">Languages Required</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {job.required_languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-[#725C3A]" />
                <span className="text-sm font-medium text-[#725C3A]">Work Locations</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {job.work_regions.map((region) => (
                  <Badge key={region} variant="outline" className="text-xs">
                    {region}
                  </Badge>
                ))}
              </div>
            </div>
            {job.compensation && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-[#725C3A]" />
                  <span className="text-sm font-medium text-[#725C3A]">Compensation</span>
                </div>
                <p className="text-sm text-[#725C3A]">{job.compensation}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content - No Cards */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Job Description */}
            <div>
              <h2 className="text-2xl font-semibold text-[#725C3A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Job Description
              </h2>
              <p
                className="text-[#725C3A] leading-relaxed text-base"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                {job.description}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold text-[#725C3A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.key_responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#725C3A] font-medium mt-0.5">•</span>
                    <p
                      className="text-[#725C3A] leading-relaxed text-base"
                      style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      {responsibility}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-semibold text-[#725C3A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Requirements & Qualifications
              </h2>
              <ul className="space-y-3">
                {job.required_skills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#809671] font-medium mt-0.5">•</span>
                    <p
                      className="text-[#725C3A] leading-relaxed text-base"
                      style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    >
                      {skill}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Process */}
            {job.application_process && (
              <div>
                <h2
                  className="text-2xl font-semibold text-[#725C3A] mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  How to Apply
                </h2>
                <div className="bg-[#F8F6F3] rounded-lg p-6 border-l-4 border-[#725C3A]">
                  <p
                    className="text-[#725C3A] leading-relaxed text-base"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    {job.application_process}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-xl font-semibold text-[#725C3A] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#725C3A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#725C3A] opacity-75 mb-1">Contact Person</p>
                    <p className="font-medium text-[#725C3A] text-base">{job.contact_person}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#725C3A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#725C3A] opacity-75 mb-1">Phone</p>
                    <p className="font-medium text-[#725C3A] text-base">{job.phone_number}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#725C3A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#725C3A] opacity-75 mb-1">Email</p>
                    <p className="font-medium text-[#725C3A] text-base break-all">{job.email_address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
