"use client"

import { useTranslation } from "react-i18next"

interface TheTeamProps {
  onNavigate: (page: string) => void
}

export default function TheTeam({ onNavigate }: TheTeamProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[#725C3A]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-8">
            <h1
              className="text-2xl sm:text-3xl leading-tight mb-4 sm:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("theTeam.title")}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("theTeam.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Image and Profiles Section */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto">
          {/* Team Image */}
          <div className="flex justify-center overflow-hidden mb-2 sm:mb-3">
            <div className="w-full">
              <img
                src="/images/team.svg"
                alt="Ecopia Value Chain Leadership Team"
                loading="lazy"
                className="w-full h-auto"
                style={{
                  width: "110%",
                  maxWidth: "110%",
                  transform: "translateX(-5%)",
                }}
              />
            </div>
          </div>

          {/* Team Member Profiles - Hardcoded names and titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Member 1 - Lemlem */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h3
                className="text-lg sm:text-xl lg:text-2xl text-[#725C3A] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Lemlem Ghezai Tewolde
              </h3>
              <h4
                className="text-sm sm:text-base lg:text-lg text-[#809671] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                CFO
              </h4>
              <p
                className="text-xs sm:text-sm lg:text-base text-[#725C3A]/80 leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("theTeam.lemlem.description")}
              </p>
            </div>

            {/* Member 2 - Felix */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h3
                className="text-lg sm:text-xl lg:text-2xl text-[#725C3A] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Felix Abraham Matschie
              </h3>
              <h4
                className="text-sm sm:text-base lg:text-lg text-[#809671] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                CSO
              </h4>
              <p
                className="text-xs sm:text-sm lg:text-base text-[#725C3A]/80 leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("theTeam.felix.description")}
              </p>
            </div>

            {/* Member 3 - Mitslal */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h3
                className="text-lg sm:text-xl lg:text-2xl text-[#725C3A] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Dr. Mitslal Kifleyesus Matschie
              </h3>
              <h4
                className="text-sm sm:text-base lg:text-lg text-[#809671] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                CEO
              </h4>
              <p
                className="text-xs sm:text-sm lg:text-base text-[#725C3A]/80 leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("theTeam.mitslal.description")}
              </p>
            </div>

            {/* Member 4 - Hayridi */}
            <div className="text-center space-y-2 sm:space-y-3">
              <h3
                className="text-lg sm:text-xl lg:text-2xl text-[#725C3A] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                Hayridi Nur
              </h3>
              <h4
                className="text-sm sm:text-base lg:text-lg text-[#809671] font-medium"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                COO
              </h4>
              <p
                className="text-xs sm:text-sm lg:text-base text-[#725C3A]/80 leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("theTeam.hayridi.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
