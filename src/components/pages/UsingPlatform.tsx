"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

interface UsingPlatformProps {
  onNavigate: (page: string) => void
}

export default function UsingPlatform({ onNavigate }: UsingPlatformProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section - With integrated description */}
      <section className="relative h-[70vh]">
        <img
          src="/images/training.webp"
          alt="Online training session with video conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h1
              className="text-3xl leading-tight mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("usingPlatform.title")}
            </h1>
            <p
              className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("usingPlatform.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features - Grid layout */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl text-[#725C3A] mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("usingPlatform.platformFeatures")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {((t("usingPlatform.features", { returnObjects: true }) as any[]) || []).map(
              (feature: any, index: number) => (
                <div
                  key={index}
                  className="bg-[#F8F6F3] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-gray-100 flex flex-col"
                >
                  <div className="flex-1 mb-8">
                    <h3
                      className="text-xl text-[#725C3A] mb-4"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="leading-relaxed text-[#725C3A]/80 text-base"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.6",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex justify-center">
                      <Button
                        className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full group-hover:scale-105 transition-transform px-6 py-2"
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        {t("usingPlatform.watchVideo")}
                      </Button>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
