"use client"
import { useState, useEffect } from "react"
import HomePage from "@/components/pages/HomePage"
import ForProducers from "@/components/pages/ForProducers"
import DataLogisticManager from "@/components/pages/DataLogisticManager"
import Compliance from "@/components/pages/Compliance"
import SocialResponsibility from "@/components/pages/SocialResponsibility"
import Marketplace from "@/components/pages/Marketplace"
import ExportersImporters from "@/components/pages/ExportersImporters"
import Subscriptions from "@/components/pages/Subscriptions"
import Partnerships from "@/components/pages/Partnerships"
import Contact from "@/components/pages/Contact"
import UsingPlatform from "@/components/pages/UsingPlatform"
import NewsOutlook from "@/components/pages/NewsOutlook"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home")

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const renderPage = () => {
    const pageProps = { onNavigate: setCurrentPage }

    switch (currentPage) {
      case "home":
        return <HomePage {...pageProps} />
      case "marketplace":
        return <Marketplace {...pageProps} />
      case "for-producers":
        return <ForProducers {...pageProps} />
      case "data-logistic-manager":
        return <DataLogisticManager {...pageProps} />
      case "exporters-importers":
        return <ExportersImporters {...pageProps} />
      case "compliance":
        return <Compliance {...pageProps} />
      case "social-responsibility":
        return <SocialResponsibility {...pageProps} />
      case "partnerships":
        return <Partnerships {...pageProps} />
      case "subscriptions":
        return <Subscriptions {...pageProps} />
      case "contact":
        return <Contact {...pageProps} />
      case "using-platform":
        return <UsingPlatform {...pageProps} />
      case "news-outlook":
        return <NewsOutlook {...pageProps} />
      default:
        return <HomePage {...pageProps} />
    }
  }

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}
