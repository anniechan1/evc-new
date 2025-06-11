"use client"

import { useState, useEffect } from "react"
import { Users, Package, ShoppingCart, FileText, GitBranch, Puzzle, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  // Add a state to track client-side rendering
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're rendering on the client
    setIsClient(true)

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [])

  const handleStakeholderClick = (stakeholder: string) => {
    switch (stakeholder) {
      case isClient ? t("welcome.stakeholders.smallholderFarmers") : "":
        onNavigate("for-producers")
        break
      case isClient ? t("welcome.stakeholders.cooperativesUnions") : "":
        onNavigate("for-producers")
        setTimeout(() => {
          const element = document.getElementById("cooperatives-section")
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
        break
      case isClient ? t("welcome.stakeholders.youthStartups") : "":
        onNavigate("data-logistic-manager")
        break
      case isClient ? t("welcome.stakeholders.exportersImporters") : "":
        onNavigate("exporters-importers")
        break
      case isClient ? t("welcome.stakeholders.academicInstitutions") : "":
        onNavigate("partnerships")
        break
      case isClient ? t("welcome.stakeholders.financialInstitutions") : "":
        onNavigate("partnerships")
        break
      default:
        break
    }
  }

  const handleEUDRClick = () => {
    onNavigate("compliance")
    setTimeout(() => {
      const element = document.getElementById("eudr-section")
      if (element) {
        const headerHeight = 80 // Approximate header height
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  // If we're rendering on the server or during initial client hydration
  // use placeholder divs with similar styles but no translation content
  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#E5E0D8]">
        {/* Simplified Placeholder Hero Slider */}
        <section className="relative h-[80vh] md:h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gray-200"></div>
        </section>

        {/* Simplified Placeholder Welcome Section */}
        <section id="welcome-section" className="py-12 md:py-20 px-4 sm:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 md:mb-12">
              <div className="h-8 bg-gray-100 rounded-md w-1/2 mx-auto"></div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="h-4 bg-gray-100 rounded-md w-full"></div>
              <div className="h-4 bg-gray-100 rounded-md w-full"></div>
              <div className="bg-[#E5E0D8] rounded-2xl p-6 md:p-10">
                <div className="h-5 bg-gray-200 rounded-md w-1/3 mb-4"></div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="flex space-x-3 p-4">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2.5 flex-shrink-0"></div>
                      <div className="w-full">
                        <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-1"></div>
                        <div className="h-3 bg-gray-100 rounded-md w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-4 bg-gray-100 rounded-md w-2/3 mx-auto"></div>
            </div>
          </div>
        </section>

        {/* Simplified Placeholder Stakeholders Section */}
        <section className="py-12 md:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#809671]/10 to-[#B3B792]/10">
          <div className="container mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <div className="h-8 bg-gray-100 rounded-md w-1/3 mx-auto mb-3"></div>
              <div className="h-5 bg-gray-100 rounded-md w-2/3 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="h-48 sm:h-64 bg-gray-200"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simplified Placeholder Mobile App Section */}
        <section className="py-12 md:py-16 px-4 sm:px-8 bg-white overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="lg:w-3/5 flex justify-center">
                <div className="relative w-full max-w-4xl h-64 md:h-80 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="lg:w-2/5 space-y-6 md:space-y-10">
                <div className="space-y-4 md:space-y-6">
                  <div className="h-8 bg-gray-100 rounded-md w-2/3"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-[#F8F6F3] border border-gray-100 rounded-xl p-4 md:p-6">
                      <div className="h-5 bg-gray-100 rounded-md w-1/2 mb-3"></div>
                      <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simplified Placeholder Digital Solutions Section */}
        <section className="relative py-20 md:py-40 px-4 sm:px-8">
          <div className="absolute inset-0 bg-gray-300"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <div className="h-8 bg-gray-100/50 rounded-md w-1/2 mx-auto mb-4"></div>
              <div className="h-5 bg-gray-100/50 rounded-md w-2/3 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl"></div>
                    <div className="w-full">
                      <div className="h-5 bg-white/30 rounded-md w-1/2 mb-2"></div>
                      <div className="h-4 bg-white/20 rounded-md w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Full content with translations (only rendered on client)
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Slider */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* First Hero - With 15% Black Overlay */}
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0">
              <img src="/images/mockup1.png" alt="African farming community" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/15"></div>
            </div>

            <div className="container mx-auto relative z-10 flex items-center h-full px-4 sm:px-8">
              <div className="max-w-3xl space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <h1
                    className="text-2xl sm:text-3xl text-white mb-4 sm:mb-8"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {t("hero.title1")}
                  </h1>
                </div>
                <p
                  className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.7",
                  }}
                >
                  {t("hero.subtitle1")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button
                    className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-6 py-2 shadow-xl w-fit"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    onClick={() => {
                      const element = document.getElementById("welcome-section")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    }}
                  >
                    {t("hero.explorePlatform")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-[#725C3A] hover:bg-white hover:text-[#725C3A] rounded-full px-6 py-2 group w-fit"
                    style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[#725C3A]">{t("hero.watchVideo")}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Hero - Simplified Compliance (KEEPS BLACK OVERLAY) */}
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0">
              <img src="/images/beekeeper.webp" alt="Beekeeper working" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto relative z-10 flex items-center h-full px-4 sm:px-8">
              <div className="max-w-3xl space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <h1
                    className="text-2xl sm:text-3xl text-white mb-4 sm:mb-8"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {t("hero.title2")}
                  </h1>
                </div>
                <p
                  className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.7",
                  }}
                >
                  {t("hero.subtitle2")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button
                    className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-6 py-2 shadow-xl w-fit"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    onClick={handleEUDRClick}
                  >
                    {t("hero.learnAboutEUDR")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Hero - Unlocking Market Borders (KEEPS BLACK OVERLAY) */}
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee%20export-TVu3hfmbh5LTDAK5H5hIHEFsehrLUl.webp"
                alt="Coffee export bags"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto relative z-10 flex items-center h-full px-4 sm:px-8">
              <div className="max-w-3xl space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <h1
                    className="text-2xl sm:text-3xl text-white mb-4 sm:mb-8"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {t("hero.title3")}
                  </h1>
                </div>
                <p
                  className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.7",
                  }}
                >
                  {t("hero.subtitle3")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <Button
                    className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-6 py-2 shadow-xl w-fit"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    onClick={() => onNavigate("marketplace")}
                  >
                    {t("hero.exploreMarketplace")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-[#E5D2B8] scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome-section" className="py-12 md:py-20 px-4 sm:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl md:text-3xl text-[#725C3A] mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                letterSpacing: "0.01em",
              }}
            >
              {t("welcome.title")}
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            <p
              className="text-base md:text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("welcome.description1")}
            </p>

            <p
              className="text-base md:text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("welcome.description2")}
            </p>

            <div className="bg-[#E5E0D8] rounded-2xl p-6 md:p-10">
              <h3
                className="text-lg md:text-xl text-[#725C3A] mb-4 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                {t("welcome.empowersTitle")}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {[
                  {
                    title: t("welcome.stakeholders.smallholderFarmers"),
                    description: t("welcome.stakeholders.smallholderFarmersDesc"),
                    clickable: true,
                  },
                  {
                    title: t("welcome.stakeholders.cooperativesUnions"),
                    description: t("welcome.stakeholders.cooperativesUnionsDesc"),
                    clickable: true,
                  },
                  {
                    title: t("welcome.stakeholders.youthStartups"),
                    description: t("welcome.stakeholders.youthStartupsDesc"),
                    clickable: true,
                  },
                  {
                    title: t("welcome.stakeholders.exportersImporters"),
                    description: t("welcome.stakeholders.exportersImportersDesc"),
                    clickable: true,
                  },
                  {
                    title: t("welcome.stakeholders.academicInstitutions"),
                    description: t("welcome.stakeholders.academicInstitutionsDesc"),
                    clickable: true,
                  },
                  {
                    title: t("welcome.stakeholders.financialInstitutions"),
                    description: t("welcome.stakeholders.financialInstitutionsDesc"),
                    clickable: true,
                  },
                ].map((stakeholder, index) => (
                  <div
                    key={index}
                    className={`flex space-x-3 ${stakeholder.clickable ? "cursor-pointer hover:bg-white/50 rounded-lg transition-colors" : ""} p-4`}
                    onClick={() => stakeholder.clickable && handleStakeholderClick(stakeholder.title)}
                  >
                    <div className="w-1.5 h-1.5 bg-[#725C3A] rounded-full mt-2.5 flex-shrink-0"></div>
                    <div>
                      <span
                        className={`font-medium text-base md:text-lg text-[#725C3A] leading-normal ${stakeholder.clickable ? "hover:text-[#809671] underline" : ""}`}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {stakeholder.title}
                      </span>
                      <span
                        className="text-sm md:text-base text-[#725C3A]"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {" "}
                        {stakeholder.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-base md:text-lg text-[#725C3A] leading-relaxed text-center"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("welcome.conclusion")}
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholders Showcase Section */}
      <section className="py-12 md:py-20 px-4 sm:px-8 bg-gradient-to-br from-[#809671]/10 to-[#B3B792]/10">
        <div className="container mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2
              className="text-2xl md:text-3xl text-[#725C3A] mb-3 md:mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("stakeholdersShowcase.title")}
            </h2>
            <p
              className="text-base md:text-xl text-[#725C3A]/90 max-w-2xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
            >
              {t("stakeholdersShowcase.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Farmers Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 sm:h-64 overflow-hidden">
                  <img
                    src="/images/coffee-farmers.webp"
                    alt="Coffee farmers with their harvest"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3
                    className="text-lg md:text-xl mb-1 md:mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {t("stakeholdersShowcase.smallholderFarmers")}
                  </h3>
                  <p
                    className="text-base md:text-lg opacity-90"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {t("stakeholdersShowcase.smallholderDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Youth Card */}
            <div className="group cursor-pointer" onClick={() => onNavigate("data-logistic-manager")}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 sm:h-64 overflow-hidden">
                  <img
                    src="/images/youth-tech.png"
                    alt="Youth working with technology"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3
                    className="text-lg md:text-xl mb-1 md:mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {t("stakeholdersShowcase.dataLogisticManagers")}
                  </h3>
                  <p
                    className="text-base md:text-lg opacity-90"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {t("stakeholdersShowcase.dataLogisticDescription")}
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-48 sm:h-64 overflow-hidden">
                  <img
                    src="/images/youth-lab.webp"
                    alt="Youth in modern laboratory"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3
                    className="text-lg md:text-xl mb-1 md:mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {t("stakeholdersShowcase.innovationResearch")}
                  </h3>
                  <p
                    className="text-base md:text-lg opacity-90"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {t("stakeholdersShowcase.innovationDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section - Phone on left, text on right */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Phone Mockups - On the left, bigger */}
            <div className="lg:w-3/5 flex justify-center">
              <div className="relative w-full max-w-4xl">
                <img
                  src="/images/frame11.png"
                  alt="EVC Mobile App - Digital Traceability Dashboard"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content - On the right */}
            <div className="lg:w-2/5 space-y-6 md:space-y-10">
              <div className="space-y-4 md:space-y-6">
                <h2
                  className="text-2xl md:text-4xl text-[#725C3A] leading-tight"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    letterSpacing: "0.01em",
                  }}
                >
                  {t("mobileApp.title")}
                </h2>
                <p
                  className="text-base md:text-lg text-[#725C3A]/80 leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.6",
                  }}
                >
                  {t("mobileApp.subtitle")}
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: t("mobileApp.singleApplication.title"),
                    description: t("mobileApp.singleApplication.description"),
                  },
                  {
                    title: t("mobileApp.simplifiedCompliance.title"),
                    description: t("mobileApp.simplifiedCompliance.description"),
                  },
                  {
                    title: t("mobileApp.panAfricanMarket.title"),
                    description: t("mobileApp.panAfricanMarket.description"),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F8F6F3] border border-gray-100 rounded-xl p-4 md:p-6 hover:bg-[#E5E0D8] hover:shadow-md transition-all duration-300"
                  >
                    <h3
                      className="text-lg md:text-xl text-[#725C3A] mb-2 md:mb-3"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm md:text-base text-[#725C3A]/90 leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Section - New Background, Minimal Cards */}
      <section className="relative py-20 md:py-40 px-4 sm:px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/tablet-agriculture.webp"
            alt="Woman using tablet in agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2
              className="text-2xl md:text-4xl text-white mb-4 md:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("platformFeatures.title")}
            </h2>
            <p
              className="text-base md:text-xl text-white/90 leading-relaxed max-w-6xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              {t("platformFeatures.subtitle")}
            </p>
          </div>

          {/* Minimal Feature List - No Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-white">
              {[
                {
                  icon: Users,
                  title: t("platformFeatures.farmerNetwork.title"),
                  description: t("platformFeatures.farmerNetwork.description"),
                },
                {
                  icon: Package,
                  title: t("platformFeatures.smartInventory.title"),
                  description: t("platformFeatures.smartInventory.description"),
                },
                {
                  icon: ShoppingCart,
                  title: t("platformFeatures.orderManagement.title"),
                  description: t("platformFeatures.orderManagement.description"),
                },
                {
                  icon: FileText,
                  title: t("platformFeatures.digitalDocuments.title"),
                  description: t("platformFeatures.digitalDocuments.description"),
                },
                {
                  icon: GitBranch,
                  title: t("platformFeatures.supplyChainTracking.title"),
                  description: t("platformFeatures.supplyChainTracking.description"),
                },
                {
                  icon: Puzzle,
                  title: t("platformFeatures.apiIntegration.title"),
                  description: t("platformFeatures.apiIntegration.description"),
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-lg md:text-xl mb-1 md:mb-2"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-base md:text-lg text-white/90"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
