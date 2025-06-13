"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Smartphone, TrendingUp, Award } from "lucide-react"
import { useTranslation } from "react-i18next"

interface DataLogisticManagerProps {
  onNavigate: (page: string) => void
}

export default function DataLogisticManager({ onNavigate }: DataLogisticManagerProps) {
  const { t } = useTranslation()

  const handleApplyNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdHY6eRAGHRjcb154z2nFstqvey49E_XK525SSK3-acwN8LVw/viewform",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full background image with text and Apply Now button */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/images/african-farmer-tech.webp"
            alt="African farmer using technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-8">
          <div className="text-center text-white space-y-6 md:space-y-8 max-w-4xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("dataLogisticManager.title")}
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("dataLogisticManager.subtitle")}
            </p>
            <Button
              onClick={handleApplyNow}
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#725C3A] rounded-full px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl shadow-2xl"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            >
              {t("dataLogisticManager.applyNow")}
            </Button>
          </div>
        </div>
      </section>
      {/* What is a DLM Section - Clean Design with Three Columns */}
      <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
        {/* Simple background */}
        <div className="absolute inset-0 bg-[#E5E0D8]"></div>

        <div className="container mx-auto max-w-7xl px-2 sm:px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#725C3A] leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              What is a Data Logistic Manager?
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-start">
            {/* First Image Column - Left side */}
            <div className="lg:w-[38%]">
              {/* First Image - Paper Records */}
              <div className="overflow-hidden rounded-xl shadow-lg h-full">
                <img
                  src="images/paper-records.jpeg"
                  alt="Handwritten agricultural records"
                  loading="lazy"
                  className="w-full h-[350px] object-cover"
                />
                <div className="bg-[#725C3A] text-white p-3">
                  <p className="text-sm font-medium">Manual record keeping being digitized</p>
                </div>
              </div>
            </div>

            {/* Content Column - Middle */}
            <div className="lg:w-[24%] space-y-6">
              <div>
                <p
                  className="text-lg text-[#725C3A] leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  {t("dataLogisticManager.whatIsDLM.description")}
                </p>
              </div>

              {/* Redesigned feature list without icons or card structure */}
              <div className="space-y-5 border-t border-[#725C3A]/20 pt-4">
                {((t("dataLogisticManager.whatIsDLM.features", { returnObjects: true }) as any[]) || []).map(
                  (item: any, index: number) => (
                    <div key={index} className="border-b border-[#725C3A]/20 pb-4 last:border-b-0 last:pb-0">
                      <h4
                        className="text-base text-[#725C3A] font-medium mb-1"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm text-[#725C3A]/80"
                        style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Second Image Column - Right side */}
            <div className="lg:w-[38%]">
              {/* Second Image - Coffee Processing */}
              <div className="overflow-hidden rounded-xl shadow-lg h-full">
                <img
                  src="images/digital.jpeg"
                  alt="digitalized version"
                  loading="lazy"
                  className="w-full h-[350px] object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Journey Steps - Responsive card design */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-[#725C3A] mb-4 md:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("dataLogisticManager.journey.title")}
            </h2>
            <p
              className="text-lg sm:text-xl text-[#725C3A]/80 max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
            >
              {t("dataLogisticManager.journey.subtitle")}
            </p>
          </div>

          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#E5D2B8] transform -translate-y-1/2 hidden lg:block"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {((t("dataLogisticManager.journey.steps", { returnObjects: true }) as any[]) || []).map(
                (item: any, index: number) => {
                  const colors = [
                    { bg: "bg-[#725C3A]", text: "text-white" },
                    { bg: "bg-[#809671]", text: "text-white" },
                    { bg: "bg-[#B3B792]", text: "text-white" },
                    { bg: "bg-[#E5D2B8]", text: "text-[#725C3A]" },
                  ]
                  const color = colors[index]

                  return (
                    <div key={index} className="relative">
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className={`${color.bg} p-6 md:p-8 text-center rounded-lg`}>
                          <div className="space-y-4 md:space-y-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                              <span
                                className={`text-xl md:text-2xl font-bold ${color.text}`}
                                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                              >
                                {item.step}
                              </span>
                            </div>
                            <h3
                              className={`text-lg md:text-xl ${color.text}`}
                              style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: "500",
                              }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className={`${color.text === "text-white" ? "text-white/90" : "text-[#725C3A]/80"} leading-relaxed text-sm md:text-base`}
                              style={{
                                fontFamily: "Source Sans Pro, sans-serif",
                                fontWeight: "300",
                                lineHeight: "1.6",
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                },
              )}
            </div>
          </div>
        </div>
      </section>
      {/* What You'll Do as a DLM - Responsibilities Section */}
      <section className="py-0">
        <div className="grid lg:grid-cols-[50%_50%]">
          {/* Text Content - Reduced padding and spacing */}
          <div className="bg-[#E5E0D8] flex items-center p-6 sm:p-10 md:p-14">
            <div className="space-y-4 md:space-y-6">
              <h2
                className="text-xl sm:text-2xl md:text-3xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                {t("dataLogisticManager.responsibilities.title")}
              </h2>
              <p
                className="text-base md:text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("dataLogisticManager.responsibilities.subtitle")}
              </p>

              <div className="space-y-2 md:space-y-3">
                {((t("dataLogisticManager.responsibilities.list", { returnObjects: true }) as string[]) || []).map(
                  (responsibility: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#725C3A] flex-shrink-0 mt-0.5" />
                      <p
                        className="text-sm md:text-base text-[#725C3A] leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.5",
                        }}
                      >
                        {responsibility}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Large Image - Coffee Processing */}
          <div className="relative">
            <img
              src="/images/coffee-processing.jpeg"
              alt="Coffee processing by local farmer"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Why Become a DLM? - Benefits Section with switched layout */}
      <section className="py-0 mt-[-1px] mb-[-2px]">
        <div className="grid lg:grid-cols-[50%_50%]">
          {/* Large Image - Coffee Farmer - Changed to show all content */}
          <div className="relative bg-[#f5f5f5]">
            <img
              src="/images/coffee-farmers.jpeg"
              alt="Coffee farmer with harvested cherries"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text Content - Reduced padding and spacing */}
          <div className="bg-white flex items-center p-6 sm:p-10 md:p-14">
            <div className="space-y-4 md:space-y-6">
              <h2
                className="text-xl sm:text-2xl md:text-3xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                {t("dataLogisticManager.benefits.title")}
              </h2>
              <p
                className="text-base md:text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("dataLogisticManager.benefits.subtitle")}
              </p>

              <div className="space-y-3 md:space-y-4">
                {((t("dataLogisticManager.benefits.list", { returnObjects: true }) as any[]) || []).map(
                  (benefit: any, index: number) => (
                    <div key={index} className="space-y-0.5 md:space-y-1">
                      <h3
                        className="text-base md:text-lg text-[#725C3A]"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        {benefit.title}
                      </h3>
                      <p
                        className="text-sm md:text-base text-[#725C3A]/80 leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.5",
                        }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
