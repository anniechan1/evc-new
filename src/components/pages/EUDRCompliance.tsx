"use client"

import { Calendar, ExternalLink, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

interface EUDRComplianceProps {
  onNavigate: (page: string) => void
}

export default function EUDRCompliance({ onNavigate }: EUDRComplianceProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <section className="py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 bg-[#E5E0D8] border-b border-[#725C3A]/10">
        <div className="container mx-auto max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => onNavigate("news-outlook")}
            className="mb-3 sm:mb-4 text-[#725C3A] hover:bg-[#725C3A]/10 rounded-full text-sm sm:text-base"
            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            {t("eudrCompliance.backToNews")}
          </Button>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="flex items-center space-x-1 sm:space-x-2 text-[#725C3A]/80">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span
                className="text-xs sm:text-sm"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
              >
                {t("eudrCompliance.date")}
              </span>
            </div>

            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#725C3A] leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("eudrCompliance.title")}
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-[#725C3A]/80 leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("eudrCompliance.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.introduction.title")}
              </h2>
              {((t("eudrCompliance.sections.introduction.content", { returnObjects: true }) as string[]) || []).map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed mb-4 sm:mb-5 md:mb-6"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.7",
                    }}
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            {/* What is the EUDR */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.whatIsEUDR.title")}
              </h2>
              {((t("eudrCompliance.sections.whatIsEUDR.content", { returnObjects: true }) as string[]) || []).map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed mb-4 sm:mb-5 md:mb-6"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.7",
                    }}
                  >
                    {paragraph}
                  </p>
                ),
              )}

              <p
                className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed mb-3 sm:mb-4"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("eudrCompliance.sections.whatIsEUDR.exportersMustEnsure")}
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6">
                {(
                  (t("eudrCompliance.sections.whatIsEUDR.requirements", { returnObjects: true }) as string[]) || []
                ).map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#725C3A] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                    <span
                      className="text-sm sm:text-base md:text-lg text-[#725C3A]"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.7",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("eudrCompliance.sections.whatIsEUDR.conclusion")}
              </p>
            </div>

            {/* Why This Matters */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.whyMatters.title")}
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("eudrCompliance.sections.whyMatters.content")}
              </p>
            </div>

            {/* Key Compliance Requirements */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.keyRequirements.title")}
              </h2>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {((t("eudrCompliance.sections.keyRequirements.items", { returnObjects: true }) as any[]) || []).map(
                  (requirement: any, index: number) => (
                    <div key={index} className="bg-[#F8F6F3] rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                      <h3
                        className="text-base sm:text-lg md:text-xl text-[#725C3A] mb-2 sm:mb-3"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {requirement.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.7",
                        }}
                      >
                        {requirement.content}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.challenges.title")}
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {((t("eudrCompliance.sections.challenges.items", { returnObjects: true }) as any[]) || []).map(
                  (challenge: any, index: number) => (
                    <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#725C3A] rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <div>
                        <span
                          className="text-sm sm:text-base md:text-lg text-[#725C3A] font-medium"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "500",
                          }}
                        >
                          {challenge.title}
                        </span>
                        <span
                          className="text-sm sm:text-base md:text-lg text-[#725C3A]"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                            lineHeight: "1.7",
                          }}
                        >
                          {" "}
                          {challenge.content}
                        </span>
                      </div>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* What Can Be Done */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.solutions.title")}
              </h2>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {((t("eudrCompliance.sections.solutions.items", { returnObjects: true }) as any[]) || []).map(
                  (solution: any, index: number) => (
                    <div key={index}>
                      <h3
                        className="text-base sm:text-lg md:text-xl text-[#725C3A] mb-1 sm:mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {solution.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.7",
                        }}
                      >
                        {solution.content}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-5 md:mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.conclusion.title")}
              </h2>
              {((t("eudrCompliance.sections.conclusion.content", { returnObjects: true }) as string[]) || []).map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={`text-sm sm:text-base md:text-lg text-[#725C3A] leading-relaxed ${index === 0 ? "mb-4 sm:mb-5 md:mb-6" : "font-medium"
                      }`}
                    style={{
                      fontFamily: index === 0 ? "Source Sans Pro, sans-serif" : "Poppins, sans-serif",
                      fontWeight: index === 0 ? "300" : "500",
                      lineHeight: "1.7",
                    }}
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            {/* Sources & Links */}
            <div className="bg-[#F8F6F3] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8">
              <h2
                className="text-lg sm:text-xl md:text-2xl text-[#725C3A] mb-4 sm:mb-6 md:mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {t("eudrCompliance.sections.sources.title")}
              </h2>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {((t("eudrCompliance.sections.sources.items", { returnObjects: true }) as any[]) || []).map(
                  (source: any, index: number) => (
                    <div key={index} className="border-l-2 sm:border-l-4 border-[#725C3A] pl-3 sm:pl-4 md:pl-6">
                      <h3
                        className="text-sm sm:text-base md:text-lg text-[#725C3A] mb-1 sm:mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {source.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm md:text-base text-[#725C3A]/80 mb-2 sm:mb-3 leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.6",
                        }}
                      >
                        {source.description}
                      </p>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#725C3A] hover:text-[#809671] transition-colors text-xs sm:text-sm md:text-base"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {source.linkText}
                      </a>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
