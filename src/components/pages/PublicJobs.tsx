"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, MapPin, Search, Calendar, ArrowLeft, Mail, Phone, User } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import type { JobPost } from "@/lib/supabase-client"

interface PublicJobsProps {
  onNavigate: (page: string) => void
}

export default function PublicJobs({ onNavigate }: PublicJobsProps) {
  const [jobs, setJobs] = useState<JobPost[]>([])
  const [filteredJobs, setFilteredJobs] = useState<JobPost[]>([])
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("all")
  const [employmentTypeFilter, setEmploymentTypeFilter] = useState("all")

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await supabase
        .from("job_posts")
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false })

      if (error) {
        setError("Failed to fetch jobs: " + error.message)
        return
      }

      setJobs(data || [])
      setFilteredJobs(data || [])
    } catch (err) {
      setError("An unexpected error occurred")
      console.error("Error fetching jobs:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  // Filter jobs based on search and filters
  useEffect(() => {
    let filtered = [...jobs]

    // Search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.cooperative_name.toLowerCase().includes(searchLower) ||
          job.region_woreda.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower),
      )
    }

    // Region filter
    if (regionFilter !== "all") {
      filtered = filtered.filter((job) => job.work_regions.includes(regionFilter))
    }

    // Employment type filter
    if (employmentTypeFilter !== "all") {
      filtered = filtered.filter((job) => job.employment_type.includes(employmentTypeFilter))
    }

    setFilteredJobs(filtered)
  }, [jobs, searchTerm, regionFilter, employmentTypeFilter])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleJobClick = (job: JobPost) => {
    setSelectedJob(job)
  }

  const handleBackToList = () => {
    setSelectedJob(null)
  }

  const handleBackToHome = () => {
    onNavigate("home")
  }

  // Get unique regions and employment types for filters
  const availableRegions = [...new Set(jobs.flatMap((job) => job.work_regions))].sort()
  const availableEmploymentTypes = [...new Set(jobs.flatMap((job) => job.employment_type))].sort()

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#725C3A]"></div>
      </div>
    )
  }

  // Job Details View
  if (selectedJob) {
    return (
      <div className="min-h-screen bg-[#F5F5F0]">
        {/* Back Button */}
        <div className="bg-[#F5F5F0] px-6 pt-6">
          <div className="max-w-6xl mx-auto">
            <Button variant="ghost" onClick={handleBackToList} className="text-[#725C3A] hover:bg-white -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job Listings
            </Button>
          </div>
        </div>

        {/* Header Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#725C3A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                {selectedJob.title}
              </h1>
              <div className="flex items-center gap-6 text-[#725C3A] mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span className="text-lg font-medium">{selectedJob.cooperative_name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{selectedJob.region_woreda}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#725C3A] opacity-75 mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Posted on {formatDate(selectedJob.created_at)}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedJob.employment_type.map((type) => (
                  <Badge key={type} className="bg-[#725C3A] text-white hover:bg-[#809671]">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Job Description */}
              <div>
                <h2
                  className="text-2xl font-semibold text-[#725C3A] mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Job Description
                </h2>
                <p
                  className="text-[#725C3A] leading-relaxed text-base"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  {selectedJob.description}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h2
                  className="text-2xl font-semibold text-[#725C3A] mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {selectedJob.key_responsibilities.map((responsibility, index) => (
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
                <h2
                  className="text-2xl font-semibold text-[#725C3A] mb-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Requirements & Qualifications
                </h2>
                <ul className="space-y-3">
                  {selectedJob.required_skills.map((skill, index) => (
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
              {selectedJob.application_process && (
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
                      {selectedJob.application_process}
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
                      <p className="font-medium text-[#725C3A] text-base">{selectedJob.contact_person}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#725C3A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#725C3A] opacity-75 mb-1">Phone</p>
                      <p className="font-medium text-[#725C3A] text-base">{selectedJob.phone_number}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#725C3A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-[#725C3A] opacity-75 mb-1">Email</p>
                      <p className="font-medium text-[#725C3A] text-base break-all">{selectedJob.email_address}</p>
                    </div>
                  </div>
                </div>

                {/* Additional Job Info */}
                <div className="mt-8 space-y-4">
                  <div>
                    <p className="text-sm text-[#725C3A] opacity-75 mb-2">Languages Required</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedJob.required_languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#725C3A] opacity-75 mb-2">Work Locations</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedJob.work_regions.map((region) => (
                        <Badge key={region} variant="outline" className="text-xs">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {selectedJob.compensation && (
                    <div>
                      <p className="text-sm text-[#725C3A] opacity-75 mb-2">Compensation</p>
                      <p className="text-sm text-[#725C3A]">{selectedJob.compensation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Job List View
  return (
    <div className="min-h-screen bg-[#F5F5F0] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#725C3A]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Browse Job Opportunities
              </h1>
              <p className="text-[#725C3A] opacity-75 mt-2" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                Find opportunities to work with cooperatives as a Data Logistic Manager
              </p>
            </div>

          </div>

          {/* Search and Filters */}
          <Card className="border border-[#E5D2B8] shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search jobs, cooperatives, or locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-[#E5D2B8] focus:border-[#725C3A]"
                    />
                  </div>
                </div>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger className="border-[#E5D2B8] focus:border-[#725C3A]">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {availableRegions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={employmentTypeFilter} onValueChange={setEmploymentTypeFilter}>
                  <SelectTrigger className="border-[#E5D2B8] focus:border-[#725C3A]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {availableEmploymentTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        {error ? (
          <Card className="border border-red-200">
            <CardContent className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <Button
                onClick={fetchJobs}
                variant="outline"
                className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] bg-transparent"
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        ) : filteredJobs.length === 0 ? (
          <Card className="border border-[#E5D2B8]">
            <CardContent className="text-center py-12">
              <Building2 className="w-12 h-12 text-[#725C3A] opacity-50 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[#725C3A] mb-2">No jobs found</h3>
              <p className="text-[#725C3A] opacity-75">
                {searchTerm || regionFilter !== "all" || employmentTypeFilter !== "all"
                  ? "Try adjusting your search filters"
                  : "No job opportunities are currently available"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="text-sm text-[#725C3A] opacity-75 mb-4">
              Found {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""}
            </div>
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="border border-[#E5D2B8] hover:shadow-lg hover:border-[#725C3A]/30 transition-all duration-200 cursor-pointer group"
                  onClick={() => handleJobClick(job)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle
                          className="text-xl text-[#725C3A] group-hover:text-[#809671] transition-colors mb-2 line-clamp-2"
                          style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                        >
                          {job.title}
                        </CardTitle>

                        <div className="flex items-center gap-4 text-[#725C3A] opacity-75 mb-3">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm font-medium">{job.cooperative_name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="text-sm">{job.region_woreda}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.employment_type.slice(0, 3).map((type) => (
                            <Badge key={type} variant="secondary" className="bg-[#F5F5F0] text-[#725C3A] text-xs">
                              {type}
                            </Badge>
                          ))}
                          {job.employment_type.length > 3 && (
                            <Badge variant="secondary" className="bg-[#F5F5F0] text-[#725C3A] text-xs">
                              +{job.employment_type.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {/* Job Description Preview */}
                      <p
                        className="text-sm text-[#725C3A] opacity-80 line-clamp-2"
                        style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                      >
                        {job.description}
                      </p>

                      {/* Key Info Row */}
                      <div className="flex items-center justify-between text-xs text-[#725C3A] opacity-60 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                          <span>
                            Languages: {job.required_languages.slice(0, 2).join(", ")}
                            {job.required_languages.length > 2 && ` +${job.required_languages.length - 2}`}
                          </span>
                          <span>
                            Regions: {job.work_regions.slice(0, 2).join(", ")}
                            {job.work_regions.length > 2 && ` +${job.work_regions.length - 2}`}
                          </span>
                        </div>
                        <span>Posted {new Date(job.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
