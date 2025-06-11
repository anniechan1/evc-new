"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

interface ExportersImportersProps {
  onNavigate: (page: string) => void
}

export default function ExportersImporters({ onNavigate }: ExportersImportersProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#E5E0D8] relative overflow-hidden">
      {/* Hero Section - Mobile responsive */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <img
          src="/images/coffeebucket.webp"
          alt="Coffee packaging and quality control"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-6 md:px-8">
            <h1
              className="text-xl sm:text-2xl md:text-3xl leading-tight mb-4 sm:mb-5 md:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("exportersImporters.title")}
            </h1>
            <p
              className="text-sm sm:text-base md:text-xl text-white/90 leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
            >
              {t("exportersImporters.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview - Mobile responsive */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 sm:space-y-7 md:space-y-8">
            <h2
              className="text-xl sm:text-2xl md:text-3xl text-[#725C3A] mb-4 sm:mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("exportersImporters.benefitsTitle")}
            </h2>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-left max-w-3xl mx-auto">
              {((t("exportersImporters.benefits", { returnObjects: true }) as any[]) || []).map(
                (benefit: any, index: number) => (
                  <div
                    key={index}
                    className="border-l-2 sm:border-l-3 md:border-l-4 border-[#809671] pl-3 sm:pl-4 md:pl-5"
                  >
                    <h3
                      className="text-sm sm:text-base md:text-lg text-[#725C3A] mb-1 sm:mb-1.5 md:mb-2"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm md:text-base text-[#725C3A]/80 leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.5",
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile responsive */}
      <section className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img src="/images/coffee.webp" alt="Partnership handshake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#725C3A]/80 via-[#725C3A]/60 to-[#809671]/40"></div>
        </div>

        {/* Decorative elements - Responsive */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-[#E5D2B8]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 bg-[#809671]/20 rounded-full blur-xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
            {/* Main heading */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h2
                className="text-xl sm:text-2xl md:text-3xl text-white leading-tight"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                {t("exportersImporters.cta.title")}
              </h2>
              <div className="w-12 h-0.5 sm:w-16 sm:h-0.5 md:w-20 md:h-1 bg-[#E5D2B8] mx-auto rounded-full"></div>
            </div>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("exportersImporters.cta.description")}
            </p>

            {/* Feature highlights - Mobile responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 my-6 sm:my-8 md:my-12">
              {((t("exportersImporters.cta.features", { returnObjects: true }) as any[]) || []).map(
                (feature: any, index: number) => (
                  <div key={index} className="text-center space-y-2 sm:space-y-2.5 md:space-y-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#E5D2B8] rounded-full"></div>
                    </div>
                    <h3
                      className="text-xs sm:text-sm md:text-base text-white font-medium"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-xs sm:text-xs md:text-sm text-white/90 leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.5",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ),
              )}
            </div>

            {/* CTA - Mobile responsive */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <p
                className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("exportersImporters.cta.finalDescription")}
              </p>

              <div className="flex justify-center">
                <Button
                  onClick={() => onNavigate("marketplace")}
                  className="bg-white text-[#725C3A] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2 shadow-xl text-xs sm:text-sm md:text-base"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  {t("exportersImporters.cta.buttonText")}
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ml-1.5 sm:ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
