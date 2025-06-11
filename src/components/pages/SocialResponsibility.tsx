"use client"

import { useTranslation } from "react-i18next"

interface SocialResponsibilityProps {
  onNavigate: (page: string) => void
}

export default function SocialResponsibility({ onNavigate }: SocialResponsibilityProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Large Image */}
      <section className="relative h-[70vh]">
        <img src="/images/street.webp" alt="University students" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h1
              className="text-4xl leading-tight mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("socialResponsibility.title")}
            </h1>
            <p
              className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              {t("socialResponsibility.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement with Large Image */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Text Content */}
          <div className="bg-[#E5E0D8] flex items-center p-16">
            <div className="space-y-8">
              <p
                className="text-xl text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                {t("socialResponsibility.missionStatement.paragraph1")}
              </p>
              <p
                className="text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                {t("socialResponsibility.missionStatement.paragraph2")}
              </p>
            </div>
          </div>
          {/* Large Image */}
          <div className="relative">
            <img src="/images/gathering.png" alt="Community gathering" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Innovation Section with Reversed Layout */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Large Image */}
          <div className="relative">
            <img src="/images/youth-processing.png" alt="Classroom learning" className="w-full h-full object-cover" />
          </div>
          {/* Text Content */}
          <div className="bg-white flex items-center p-16">
            <div className="space-y-8">
              <p
                className="text-xl text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                {t("socialResponsibility.innovation.paragraph1")}
              </p>
              <p
                className="text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                {t("socialResponsibility.innovation.paragraph2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section with Full-Width Image Background */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img src="/images/students.webp" alt="Youth processing" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#725C3A]/20"></div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 px-8">
          <div className="text-center text-white space-y-12">
            <h2
              className="text-3xl leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("socialResponsibility.impact.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {((t("socialResponsibility.impact.features", { returnObjects: true }) as any[]) || []).map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/15 transition-all"
                  >
                    <h3
                      className="text-lg text-white mb-3 sm:mb-4"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-lg text-white/90 leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "400",
                        lineHeight: "1.7",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement with Large Image */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Text Content */}
          <div className="bg-white text-[#725C3A]/80 flex items-center p-16">
            <div className="space-y-8">
              <p
                className="text-xl leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.8",
                }}
              >
                {t("socialResponsibility.finalStatement.paragraph")}
              </p>
              <div className="pt-8">
                <p
                  className="text-2xl font-medium"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                >
                  {t("socialResponsibility.finalStatement.conclusion")}
                </p>
              </div>
            </div>
          </div>
          {/* Large Image */}
          <div className="relative">
            <img src="/images/lab.webp" alt="Laboratory work" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
