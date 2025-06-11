"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t, ready } = useTranslation()
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Don't render until translations are ready
  if (!ready) {
    return (
      <footer className="bg-[#725C3A] text-white py-12 md:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <img
                  src="/images/evc-company-logo.png"
                  alt="EVC Digital Traceability"
                  className="h-10 md:h-12 w-auto"
                />
              </div>
              <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse"></div>
            </div>
            <div className="h-20 bg-white/10 rounded animate-pulse"></div>
            <div className="h-20 bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-[#725C3A] text-white py-12 md:py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <img src="/images/evc-company-logo.png" alt="EVC Digital Traceability" className="h-10 md:h-12 w-auto" />
            </div>
            <p
              className="text-white/80 leading-relaxed text-sm md:text-base"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
              suppressHydrationWarning={true}
            >
              {t("footer.description")}
            </p>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#E5D2B8]" />
              <span
                className="text-white/90 text-sm md:text-base"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
              >
                admin@ecopiavaluechain.com
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4
              className="mb-4 md:mb-6 text-[#E5D2B8] text-base md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
              suppressHydrationWarning={true}
            >
              {t("footer.platform")}
            </h4>
            <ul
              className="space-y-2 md:space-y-3 text-white/80 text-sm md:text-base"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
            >
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("for-producers")}
                suppressHydrationWarning={true}
              >
                {t("header.forProducers")}
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("data-logistic-manager")}
                suppressHydrationWarning={true}
              >
                {t("header.dataLogisticManager")}
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("marketplace")}
                suppressHydrationWarning={true}
              >
                {t("header.marketplace")}
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("compliance")}
                suppressHydrationWarning={true}
              >
                {t("footer.complianceTools")}
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="mb-4 md:mb-6 text-[#E5D2B8] text-base md:text-lg"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
              suppressHydrationWarning={true}
            >
              {t("footer.resources")}
            </h4>
            <ul
              className="space-y-2 md:space-y-3 text-white/80 text-sm md:text-base"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
            >
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("using-platform")}
                suppressHydrationWarning={true}
              >
                {t("header.usingPlatform")}
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("news-outlook")}
                suppressHydrationWarning={true}
              >
                {t("header.newsOutlook")}
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("partnerships")}
                suppressHydrationWarning={true}
              >
                {t("header.partnerships")}
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("contact")}
                suppressHydrationWarning={true}
              >
                {t("header.contact")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#809671] mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p
            className="text-white/60 text-xs md:text-sm"
            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
            suppressHydrationWarning={true}
          >
            {t("footer.copyright", { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}
