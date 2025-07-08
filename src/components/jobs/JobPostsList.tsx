"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Building2, MapPin, MoreVertical, Edit, Copy, Trash2, Eye } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import type { JobPost, User } from "@/lib/supabase-client"
import { useRouter } from "next/navigation"

interface JobPostsListProps {
  onCreateNew?: () => void
  refreshTrigger?: number
  showManagementOptions?: boolean
}

export default function JobPostsList({
  onCreateNew,
  refreshTrigger,
  showManagementOptions = false,
}: JobPostsListProps) {
  const router = useRouter()
  const [jobs, setJobs] = useState<JobPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const fetchJobs = async () => {
    try {
      setLoading(true)
      setError(null)

      const {
        data: { user: currentUser },
      } = await supabase.auth.getUser()

      if (!currentUser) {
        setError("You must be logged in to view your jobs")
        return
      }

      setUser(currentUser as User)

      const { data, error } = await supabase
        .from("job_posts")
        .select("*")
        .eq("created_by", currentUser.id)
        .order("created_at", { ascending: false })

      if (error) {
        setError("Failed to fetch jobs: " + error.message)
        return
      }

      setJobs(data || [])
    } catch (err) {
      setError("An unexpected error occurred")
      console.error("Error fetching jobs:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        setUser(session.user as User)
        fetchJobs()
      } else if (event === "SIGNED_OUT") {
        setUser(null)
        setJobs([])
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // Refresh when trigger changes
  useEffect(() => {
    if (refreshTrigger && refreshTrigger > 0) {
      fetchJobs()
    }
  }, [refreshTrigger])

  const handleDelete = async (jobId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click

    if (!confirm("Are you sure you want to delete this job post?")) {
      return
    }

    try {
      const { error } = await supabase.from("job_posts").delete().eq("id", jobId)

      if (error) {
        alert("Failed to delete job: " + error.message)
        return
      }

      // Remove from local state
      setJobs((prev) => prev.filter((job) => job.id !== jobId))
    } catch (err) {
      alert("An unexpected error occurred while deleting the job")
      console.error("Error deleting job:", err)
    }
  }

  const handleCardClick = (jobId: string) => {
    router.push(`/cooperative/job/${jobId}`)
  }

  const handleMenuAction = (action: string, jobId: string, e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click

    switch (action) {
      case "view":
        router.push(`/cooperative/job/${jobId}`)
        break
      case "edit":
        router.push(`/cooperative/dashboard?edit=${jobId}`)
        break
      case "duplicate":
        router.push(`/cooperative/dashboard?duplicate=${jobId}`)
        break
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-[#725C3A]">Loading your job posts...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-600 mb-4">{error}</p>
        <Button
          onClick={fetchJobs}
          variant="outline"
          className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] bg-transparent"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[#725C3A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
          My Job Posts
        </h2>
        <p className="text-[#725C3A] opacity-75 mb-4" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
          Click on any job card to view full details. Use the menu (⋯) for editing options.
        </p>
      </div>

      {jobs.length === 0 ? (
        <Card className="border border-[#E5D2B8]">
          <CardContent className="text-center py-12">
            <Building2 className="w-12 h-12 text-[#725C3A] opacity-50 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#725C3A] mb-2">No job posts yet</h3>
            <p className="text-[#725C3A] opacity-75 mb-4">
              Create your first job post to start finding qualified candidates.
            </p>
            {onCreateNew && (
              <Button
                onClick={onCreateNew}
                className="bg-[#725C3A] hover:bg-[#809671] text-white"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                Create Your First Job Post
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="border border-[#E5D2B8] hover:shadow-lg hover:border-[#725C3A]/30 transition-all duration-200 cursor-pointer group"
              onClick={() => handleCardClick(job.id)}
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

                  {showManagementOptions && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#725C3A] hover:bg-[#F5F5F0] opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={(e) => handleMenuAction("view", job.id, e)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleMenuAction("edit", job.id, e)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleMenuAction("duplicate", job.id, e)}>
                          <Copy className="w-4 h-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => handleDelete(job.id, e)} className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
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
      )}
    </div>
  )
}
