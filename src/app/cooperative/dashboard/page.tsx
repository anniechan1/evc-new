"use client"

import ProtectedRoute from "@/components/auth/ProtectedRoute"
import CooperativeDashboard from "@/components/cooperative/CooperativeDashboard"

export default function CooperativeDashboardPage() {
  return (
    <ProtectedRoute>
      <CooperativeDashboard />
    </ProtectedRoute>
  )
}
