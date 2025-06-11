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

      {/* What is a DLM Section - Responsive layout */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#E5E0D8]"></div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full">
          <img src="/images/field-documentation.png" alt="Field documentation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 bg-white/90 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl text-[#725C3A] leading-tight"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                {t("dataLogisticManager.whatIsDLM.title")}
              </h2>
              <p
                className="text-lg sm:text-xl text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("dataLogisticManager.whatIsDLM.description")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {((t("dataLogisticManager.whatIsDLM.features", { returnObjects: true }) as any[]) || []).map(
                  (item: any, index: number) => {
                    const IconComponent = [Users, Smartphone, TrendingUp, Award][index]
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#725C3A] rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4
                            className="text-base sm:text-lg text-[#725C3A] font-medium"
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
                      </div>
                    )
                  },
                )}
              </div>
            </div>
            <div className="hidden lg:block"></div> {/* Empty space for image on desktop */}
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

      {/* Responsibilities Section - Responsive with overlay */}
      <section className="relative py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="/images/farmfield.webp" alt="Youth working with technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#725C3A]/30"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-8">
          <div className="text-center text-white mb-12 md:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("dataLogisticManager.responsibilities.title")}
            </h2>
            <p
              className="text-lg sm:text-xl text-white"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              {t("dataLogisticManager.responsibilities.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {((t("dataLogisticManager.responsibilities.list", { returnObjects: true }) as string[]) || []).map(
              (responsibility: string, index: number) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#E5D2B8] flex-shrink-0 mt-1" />
                    <p
                      className="text-base md:text-lg text-white leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.6",
                      }}
                    >
                      {responsibility}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section - Responsive background */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-8">
        <div className="absolute inset-0">
          <img src="/images/agritech.webp" alt="Youth in laboratory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#725C3A]/50"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("dataLogisticManager.benefits.title")}
            </h2>
            <p
              className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.6",
              }}
            >
              {t("dataLogisticManager.benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {((t("dataLogisticManager.benefits.list", { returnObjects: true }) as any[]) || []).map(
              (benefit: any, index: number) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <h3
                    className="text-lg md:text-xl text-white mb-2 md:mb-3"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-white/90 leading-relaxed text-sm md:text-base"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.6",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
