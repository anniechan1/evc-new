"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Briefcase, Users, LogOut, Home } from "lucide-react"
import { supabase } from "@/lib/supabase-client"
import type { User, Profile } from "@/lib/supabase-client"
import { useRouter, useSearchParams } from "next/navigation"
import CreateJobPost from "@/components/jobs/CreateJobPost"
import JobPostsList from "@/components/jobs/JobPostsList"
import DLMSearch from "@/components/pages/DLMSearch"

export default function CooperativeDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingProfile, setLoadingProfile] = useState(true)
  const [activeTab, setActiveTab] = useState("find-dlms")
  const [refreshTrigger, setRefreshTrigger] = useState(0)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Fetch user profile
  const fetchUserProfile = async (userId: string) => {
    try {
      setLoadingProfile(true)
      const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

      if (error) {
        console.error("Error fetching profile:", error)
        return
      }

      if (data) {
        setProfile(data)
      }
    } catch (err) {
      console.error("Error fetching profile:", err)
    } finally {
      setLoadingProfile(false)
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error("Error logging out:", error)
      } else {
        router.push("/cooperative/login")
      }
    } catch (err) {
      console.error("Logout error:", err)
    }
  }

  const handleGoHome = () => {
    router.push("/")
  }

  useEffect(() => {
    // Get initial user state
    const getInitialUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user as User)
      setLoading(false)

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
      if (!session?.user) {
        router.push("/cooperative/login")
      } else {
        await fetchUserProfile(session.user.id)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router])

  // Handle URL parameters for editing/duplicating jobs and tab switching
  useEffect(() => {
    const editId = searchParams.get("edit")
    const duplicateId = searchParams.get("duplicate")
    const tabParam = searchParams.get("tab")

    if (editId || duplicateId) {
      setActiveTab("create")
    } else if (tabParam === "jobs") {
      setActiveTab("jobs")
    }
  }, [searchParams])

  const handleJobCreated = () => {
    // Refresh the job posts list
    setRefreshTrigger((prev) => prev + 1)
    // Switch to the jobs tab to see the new post
    setActiveTab("jobs")
    // Clear URL parameters
    router.replace("/cooperative/dashboard")
  }

  if (loading || loadingProfile) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#725C3A]"></div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Welcome Header */}
        <Card className="border border-[#E5D2B8] shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-[#725C3A]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Welcome{profile?.cooperative_name ? `, ${profile.cooperative_name}` : ""}
                </CardTitle>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleGoHome}
                  variant="outline"
                  className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] bg-transparent"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Homepage
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50 bg-transparent"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-[#E5D2B8]">
            <TabsTrigger value="find-dlms" className="data-[state=active]:bg-[#725C3A] data-[state=active]:text-white">
              <Search className="w-4 h-4 mr-2" />
              Find DLMs
            </TabsTrigger>
            <TabsTrigger value="create" className="data-[state=active]:bg-[#725C3A] data-[state=active]:text-white">
              <Plus className="w-4 h-4 mr-2" />
              Post Job
            </TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-[#725C3A] data-[state=active]:text-white">
              <Briefcase className="w-4 h-4 mr-2" />
              My Jobs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="find-dlms" className="space-y-6">
            <Card className="border border-[#E5D2B8] shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#725C3A] flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Find Data Logistic Managers
                </CardTitle>
                <p className="text-[#725C3A] opacity-75">
                  Search and connect with qualified Data Logistic Managers in your region.
                </p>
              </CardHeader>
              <CardContent>
                <DLMSearch />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            <CreateJobPost onJobCreated={handleJobCreated} />
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <JobPostsList refreshTrigger={refreshTrigger} showManagementOptions={true} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
