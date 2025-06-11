"use client"

import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

interface PartnershipsProps {
  onNavigate: (page: string) => void
}

export default function Partnerships({ onNavigate }: PartnershipsProps) {
  const { t } = useTranslation()

  const partners = [
    {
      name: "MINT",
      logo: "/images/logo/mint_logo.png",
      url: "https://www.facebook.com/MInT.Ethiopia/",
      categoryKey: "governmentTech",
    },
    {
      name: "Eastern Africa Farmers Federation",
      logo: "/images/logo/eaff_logo.jpeg",
      url: "https://www.eaffu.org/",
      categoryKey: "agricultural",
    },
    {
      name: "Lewis Retails",
      logo: "/images/logo/lewis_retails_logo.png",
      url: "https://lewisretails.com",
      categoryKey: "retail",
    },
    {
      name: "Pan African Chamber of Commerce",
      logo: "/images/logo/pacci_logo.png",
      url: "https://pacci.org",
      categoryKey: "trade",
    },
    {
      name: "Hochschule Weihenstephan-Triesdorf",
      logo: "/images/logo/hs_logo.png",
      url: "https://hswt.de",
      categoryKey: "academic",
    },
    {
      name: "Repha GmbH",
      logo: "/images/logo/repha_logo.jpeg",
      url: "https://repha.de",
      categoryKey: "pharmaceutical",
    },
    {
      name: "EDEKA",
      logo: "/images/logo/edeka_logo.webp",
      url: "https://edeka.de",
      categoryKey: "retail",
    },
    {
      name: "Seratera",
      logo: "/images/logo/seratera_logo.png",
      url: "https://seratera.com",
      categoryKey: "technologyIncubator",
    },
    {
      name: "Jägermeister",
      logo: "/images/logo/jagermeister_logo.png",
      url: "https://jagermeister.com",
      categoryKey: "food",
    },
    {
      name: "Heidehof Stiftung",
      logo: "/images/logo/heidehof_logo.png",
      url: "https://heidehof-stiftung.de",
      categoryKey: "foundations",
    },
    {
      name: "Mastercard Foundation",
      logo: "/images/logo/mastercard_logo.webp",
      url: "https://mastercardfdn.org",
      categoryKey: "foundations",
    },
    {
      name: "UNESCO",
      logo: "/images/logo/unesco_logo.png",
      url: "https://unesco.org",
      categoryKey: "international",
    },
    {
      name: "Novis PLC",
      logo: "/images/logo/novis_logo.png",
      url: "https://www.novisethiopia.com/",
      categoryKey: "retail",
    },
    {
      name: "Jimma University",
      logo: "/images/logo/jimma_uni_logo.png",
      url: "https://ju.edu.et",
      categoryKey: "academic",
    },
    {
      name: "Ministry of Education Ethiopia",
      logo: "/images/logo/ministry_education_logo.png",
      url: "https://moe.gov.et",
      categoryKey: "government",
    },
    {
      name: "Ministry of Agriculture Ethiopia",
      logo: "/images/logo/ministry_agriculture_logo.webp",
      url: "https://moa.gov.et",
      categoryKey: "government",
    },
    {
      name: "ICIPE",
      logo: "/images/logo/icipe_logo.png",
      url: "https://www.icipe.org/",
      categoryKey: "research",
    },
  ]

  const categories = [
    {
      title: t("partnerships.categories.academic.title"),
      description: t("partnerships.categories.academic.description"),
      count: t("partnerships.categories.academic.count"),
    },
    {
      title: t("partnerships.categories.technology.title"),
      description: t("partnerships.categories.technology.description"),
      count: t("partnerships.categories.technology.count"),
    },
    {
      title: t("partnerships.categories.government.title"),
      description: t("partnerships.categories.government.description"),
      count: t("partnerships.categories.government.count"),
    },
    {
      title: t("partnerships.categories.development.title"),
      description: t("partnerships.categories.development.description"),
      count: t("partnerships.categories.development.count"),
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full screen height */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img src="/images/nile.webp" alt="Partnership background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h1
              className="text-3xl md:text-4xl leading-tight mb-6 md:mb-8 font-semibold"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("partnerships.title")}
            </h1>
            <p
              className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("partnerships.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Categories - Appears on scroll */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("partnerships.categoriesTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#F8F6F3] rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#725C3A] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span
                    className="text-xl sm:text-2xl text-white font-bold"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                  >
                    {category.count}
                  </span>
                </div>
                <h3
                  className="text-lg sm:text-xl text-[#725C3A] mb-2 sm:mb-3"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {category.title}
                </h3>
                <p
                  className="text-[#725C3A]/80 text-xs sm:text-sm leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.6",
                  }}
                >
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Add missing translation keys */}


      {/* Partner Logos Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2
              className="text-3xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("partnerships.trustedPartnersTitle")}
            </h2>
            <p
              className="text-lg text-[#725C3A]/80 max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
            >
              {t("partnerships.trustedPartnersDescription")}
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 p-2"
                  />
                </div>
                <div className="text-center mt-2 sm:mt-3">
                  <p
                    className="text-xs sm:text-sm text-[#725C3A]/60"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    {t(`partnerships.partnerCategories.${partner.categoryKey}`)}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2
            className="text-2xl sm:text-3xl text-[#725C3A] mb-4 sm:mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            {t("partnerships.partnershipCTA.title") || "Interested in Partnering with Us?"}
          </h2>
          <p
            className="text-base sm:text-lg text-[#725C3A]/80 mb-6 sm:mb-8 leading-relaxed"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            {t("partnerships.partnershipCTA.description") ||
              "Join our growing network of partners committed to transforming African agriculture through digital innovation and sustainable practices."}
          </p>
          <div className="flex justify-center">
            <Button
              className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
              onClick={() => onNavigate("contact")}
            >
              {t("partnerships.partnershipCTA.buttonText") || "Contact Us"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
