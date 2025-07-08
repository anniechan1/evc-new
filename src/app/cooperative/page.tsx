"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CooperativePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to login page
    router.push("/cooperative/login")
  }, [router])

  return (
    <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#725C3A]"></div>
    </div>
  )
}
