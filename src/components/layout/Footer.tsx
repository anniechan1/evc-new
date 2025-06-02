"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-[#725C3A] text-white py-16 px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/evc-company-logo.png" alt="EVC Digital Traceability" className="h-12 w-auto" />
            </div>
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
            >
              Empowering African farmers through digital innovation and sustainable agriculture technology.
            </p>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#E5D2B8]" />
              <span className="text-white/90" style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}>
                admin@ecopiavaluechain.com
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="mb-6 text-[#E5D2B8]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}>
              Platform
            </h4>
            <ul
              className="space-y-3 text-white/80"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
            >
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("for-producers")}
              >
                For Producers
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("data-logistic-manager")}
              >
                Data Logistic Managers
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("marketplace")}
              >
                Marketplace
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("compliance")}
              >
                Compliance Tools
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-6 text-[#E5D2B8]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}>
              Resources
            </h4>
            <ul
              className="space-y-3 text-white/80"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
            >
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("using-platform")}
              >
                Using the Platform
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("news-outlook")}
              >
                News & Outlook
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("partnerships")}
              >
                Partnerships
              </li>
              <li
                className="hover:text-[#E5D2B8] transition-colors cursor-pointer"
                onClick={() => onNavigate("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#809671] mt-12 pt-8 text-center">
          <p className="text-white/60" style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}>
            © {currentYear} Ecopia Value Chain. Powered by Ticker Tape Technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
