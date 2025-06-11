"use client"

import { CheckCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

interface ComplianceProps {
  onNavigate: (page: string) => void
}

export default function Compliance({ onNavigate }: ComplianceProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section - Reduced overlay opacity to show more original colors */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <img src="/images/geo1.webp" alt="Farmers community" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-6 md:px-8">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 sm:mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("compliance.title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction Section - Mobile responsive */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 md:space-y-8">
            <p
              className="text-base sm:text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("compliance.introduction.paragraph1")}
            </p>

            <p
              className="text-base sm:text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("compliance.introduction.paragraph2")}
            </p>
          </div>
        </div>
      </section>

      {/* EUDR Section - Mobile responsive */}
      <section id="eudr-section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#E5D2B8]">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 md:space-y-8">
            <h2
              className="text-xl sm:text-2xl text-[#725C3A] mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
              }}
            >
              {t("compliance.whatIsEUDR.title")}
            </h2>

            <p
              className="text-base sm:text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("compliance.whatIsEUDR.description")}
            </p>

            <div className="space-y-3 sm:space-y-4">
              {((t("compliance.whatIsEUDR.requirements", { returnObjects: true }) as string[]) || []).map(
                (item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#809671] flex-shrink-0" />
                    <span
                      className="text-base sm:text-lg text-[#725C3A]"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>

            <p
              className="text-base sm:text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("compliance.whatIsEUDR.conclusion")}
            </p>
          </div>
        </div>
      </section>

      {/* How EVC Helps with EUDR - With geo.jpg image and mobile responsive */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0">
          <img src="/images/geo.webp" alt="GPS mapping and geo-data" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2
            className="text-xl sm:text-2xl text-white mb-8 sm:mb-10 md:mb-12 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            {t("compliance.howEVCHelps.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {((t("compliance.howEVCHelps.items", { returnObjects: true }) as string[]) || []).map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 hover:bg-white/15 transition-all"
              >
                <div className="text-base sm:text-lg md:text-xl leading-relaxed text-white">
                  <span className="font-medium">•</span>
                  <span
                    className="ml-3"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-white text-center max-w-6xl mx-auto">
            <p
              className="text-base sm:text-lg md:text-xl"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
              }}
            >
              {t("compliance.howEVCHelps.conclusion")}
            </p>
          </div>
        </div>
      </section>

      {/* Ecopia Certification Section - Mobile responsive */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0">
          <img src="/images/beekeeper.webp" alt="Beekeeper" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              <a
                href="https://ecocertification.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5D2B8] hover:text-white transition-colors underline decoration-2 underline-offset-4"
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontWeight: "600",
                  fontSize: "1.1em",
                }}
              >
                {t("compliance.ecopiaCertification.title")}
              </a>
              <span className="text-white">{t("compliance.ecopiaCertification.tagline")}</span>
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              {t("compliance.ecopiaCertification.description")}
            </p>
          </div>

          <h3
            className="text-xl sm:text-2xl text-white mb-6 md:mb-8 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
            }}
          >
            {t("compliance.ecopiaCertification.features.title")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
            {[
              {
                title: t("compliance.ecopiaCertification.features.traceability.title"),
                description: t("compliance.ecopiaCertification.features.traceability.description"),
              },
              {
                title: t("compliance.ecopiaCertification.features.inclusion.title"),
                description: t("compliance.ecopiaCertification.features.inclusion.description"),
              },
              {
                title: t("compliance.ecopiaCertification.features.sustainability.title"),
                description: t("compliance.ecopiaCertification.features.sustainability.description"),
              },
              {
                title: t("compliance.ecopiaCertification.features.ethics.title"),
                description: t("compliance.ecopiaCertification.features.ethics.description"),
              },
              {
                title: t("compliance.ecopiaCertification.features.transparency.title"),
                description: t("compliance.ecopiaCertification.features.transparency.description"),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10"
              >
                <h4
                  className="text-base sm:text-lg md:text-xl text-white font-medium"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm sm:text-base text-white/90 leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white">
            <h3
              className="text-xl sm:text-2xl mb-6 md:mb-8 text-center"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
              }}
            >
              {t("compliance.ecopiaCertification.howToGetCertified.title")}
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {(
                (t("compliance.ecopiaCertification.howToGetCertified.steps", { returnObjects: true }) as string[]) || []
              ).map((step, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-sm sm:text-xl text-white font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.6",
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <p
                className="text-base sm:text-lg text-white/90 leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                <a
                  href="https://ecocertification.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg text-[#E5D2B8] hover:text-white transition-colors underline decoration-2 underline-offset-2"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  {t("compliance.ecopiaCertification.title")}
                </a>{" "}
                {t("compliance.ecopiaCertification.howToGetCertified.conclusion")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters - Mobile responsive */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
        <div className="absolute inset-0">
          <img src="/images/handshake.webp" alt="Partnership handshake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#725C3A]/60 via-[#725C3A]/40 to-[#809671]/30"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2
            className="text-2xl sm:text-3xl text-white mb-12 sm:mb-14 md:mb-16 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            {t("compliance.whyCompliance.title")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16">
            {((t("compliance.whyCompliance.benefits", { returnObjects: true }) as any[]) || []).map(
              (benefit, index) => (
                <div key={index} className="text-center space-y-3 sm:space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <span
                      className="text-xl sm:text-2xl text-white font-bold"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                    >
                      {benefit.number}
                    </span>
                  </div>
                  <h3
                    className="text-lg sm:text-xl text-white mb-3 sm:mb-4"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-base sm:text-lg text-white/90 leading-relaxed"
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

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
              <p
                className="text-base sm:text-lg text-white leading-relaxed"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("compliance.whyCompliance.conclusion")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
