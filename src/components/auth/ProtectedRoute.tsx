"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase-client"
import type { User } from "@/lib/supabase-client"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()

        if (error) {
          console.error("Error checking user:", error)
          router.push("/cooperative/login")
          return
        }

        if (!user) {
          router.push("/cooperative/login")
          return
        }

        setUser(user as User)
      } catch (error) {
        console.error("Authentication error:", error)
        router.push("/cooperative/login")
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        setUser(null)
        router.push("/cooperative/login")
      } else if (event === "SIGNED_IN" && session.user) {
        setUser(session.user as User)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#725C3A]"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}
