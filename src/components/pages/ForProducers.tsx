"use client"

import { Users, MapPin, CheckCircle, Database } from "lucide-react"
import { useTranslation } from "react-i18next"

interface ForProducersProps {
  onNavigate: (page: string) => void
}

export default function ForProducers({ onNavigate }: ForProducersProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section - Full screen height with field.jpg background */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/images/field1.webp" alt="Agricultural field" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-8">
          <h1
            className="text-3xl sm:text-4xl md:text-4xl text-white mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            {t("forProducers.title")}
          </h1>
          <p
            className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "400",
              lineHeight: "1.7",
            }}
          >
            {t("forProducers.subtitle")}
          </p>
        </div>
      </section>

      {/* Producer Types Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Title and icon as subheader */}
          <div id="cooperatives-section" className="flex items-center justify-start space-x-4 mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3
              className="text-xl sm:text-2xl text-[#725C3A]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
              }}
            >
              {t("forProducers.cooperatives.title")}
            </h3>
          </div>

          {/* Introduction with image and text */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            {/* Coffee drying image - Left */}
            <div className="overflow-hidden rounded-xl">
              <img
                src="images/coffee-drying.jpeg"
                alt="Coffee drying process with women working on yellow tarps"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Introduction text - Right */}
            <div>
              <p
                className="text-base sm:text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                {t("forProducers.cooperatives.description")}
              </p>
            </div>
          </div>

          {/* Two-column layout: Text left, Image right */}
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center mb-16 sm:mb-24 md:mb-32">
            {/* Text Content - Left side (4 columns) */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8">
              <div>
                <h4
                  className="text-lg sm:text-xl text-[#725C3A] font-medium mb-4 sm:mb-6"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  {t("forProducers.cooperatives.features")}
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {((t("forProducers.cooperatives.featuresList", { returnObjects: true }) as string[]) || []).map(
                    (feature: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#725C3A] mt-0.5 flex-shrink-0" />
                        <span
                          className="text-sm sm:text-base text-[#725C3A]"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div>
                <h5
                  className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-[#725C3A]"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  {t("forProducers.cooperatives.benefits")}
                </h5>
                <p
                  className="text-base sm:text-lg text-[#725C3A]"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.6",
                  }}
                >
                  {t("forProducers.cooperatives.benefitsText")}
                </p>
              </div>
            </div>

            {/* Image - Right side (8 columns) - UNCHANGED */}
            <div className="lg:col-span-8 flex justify-center lg:justify-end">
              <div className="w-full">
                <img
                  src="/images/frame5.png"
                  alt="EVC Platform on mobile and tablet devices"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>


          {/* Private Farms - With location.jpg background */}
          <div className="mb-16 sm:mb-24 md:mb-32">
            <div id="private-farms-section" className="flex items-center justify-start space-x-4 mb-8 sm:mb-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3
                className="text-xl sm:text-2xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                {t("forProducers.privateFarms.title")}
              </h3>
            </div>

            {/* Content with background image */}
            <div className="relative py-12 sm:py-16 px-4 sm:px-8 rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0">
                <img src="/images/location.webp" alt="Farm location" loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-8 sm:space-y-12 text-white">
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.7",
                  }}
                >
                  {t("forProducers.privateFarms.description")}
                </p>

                <div>
                  <h4
                    className="text-lg sm:text-xl font-medium mb-6 sm:mb-8"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {t("forProducers.privateFarms.features")}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {((t("forProducers.privateFarms.featuresList", { returnObjects: true }) as string[]) || []).map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-0.5 flex-shrink-0" />
                          <span
                            className="text-sm sm:text-base"
                            style={{
                              fontFamily: "Source Sans Pro, sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h5
                    className="text-lg sm:text-xl font-medium mb-3 sm:mb-4"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {t("forProducers.privateFarms.benefits")}
                  </h5>
                  <p
                    className="text-base sm:text-lg"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.6",
                    }}
                  >
                    {t("forProducers.privateFarms.benefitsText")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outgrowers and Contract Schemes - Image far left, text on right */}
          <div className="mb-16 sm:mb-24 md:mb-32">
            <div id="outgrowers-section" className="flex items-center justify-start space-x-4 mb-8 sm:mb-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3
                className="text-xl sm:text-2xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                {t("forProducers.outgrowers.title")}
              </h3>
            </div>

            {/* Mobile layout (stacked) */}
            <div className="block md:hidden">
              <div className="mb-6">
                <img src="/images/app.png" alt="Mobile app interface" loading="lazy" className="w-full h-auto" />
              </div>

              <div className="bg-white/90 border border-gray-100 rounded-xl p-6 space-y-6">
                <p
                  className="text-base text-[#725C3A] leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  {t("forProducers.outgrowers.description")}
                </p>

                <div>
                  <h4
                    className="text-lg text-[#725C3A] font-medium mb-4"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {t("forProducers.outgrowers.features")}
                  </h4>
                  <div className="space-y-3">
                    {((t("forProducers.outgrowers.featuresList", { returnObjects: true }) as string[]) || []).map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-[#725C3A] mt-0.5 flex-shrink-0" />
                          <span
                            className="text-sm text-[#725C3A]"
                            style={{
                              fontFamily: "Source Sans Pro, sans-serif",
                              fontWeight: "300",
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h5
                    className="text-lg font-medium mb-3 text-[#725C3A]"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {t("forProducers.outgrowers.benefits")}
                  </h5>
                  <p
                    className="text-base text-[#725C3A]"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    {t("forProducers.outgrowers.benefitsText")}
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop layout (image left, text right) */}
            <div className="hidden md:block relative">
              {/* Image positioned to the left */}
              <div className="w-full" style={{ marginLeft: "-18rem" }}>
                <img src="/images/app.png" alt="Mobile app interface" loading="lazy" className="w-full h-auto" />
              </div>

              {/* Text Content - Positioned on the right side */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/2 lg:w-5/12 bg-white/40 p-8 space-y-6">
                <p
                  className="text-lg text-[#725C3A] leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  {t("forProducers.outgrowers.description")}
                </p>

                <div>
                  <h4
                    className="text-xl text-[#725C3A] font-medium mb-6"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {t("forProducers.outgrowers.features")}
                  </h4>
                  <div className="space-y-4">
                    {((t("forProducers.outgrowers.featuresList", { returnObjects: true }) as string[]) || []).map(
                      (feature: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#725C3A] mt-0.5 flex-shrink-0" />
                          <span
                            className="text-base text-[#725C3A]"
                            style={{
                              fontFamily: "Source Sans Pro, sans-serif",
                              fontWeight: "300",
                            }}
                          >
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h5
                    className="text-xl font-medium mb-4 text-[#725C3A]"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {t("forProducers.outgrowers.benefits")}
                  </h5>
                  <p
                    className="text-lg text-[#725C3A]"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    {t("forProducers.outgrowers.benefitsText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
