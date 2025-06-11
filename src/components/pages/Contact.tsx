"use client"

import { Send, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface ContactProps {
  onNavigate: (page: string) => void
}

export default function Contact({ onNavigate }: ContactProps) {
  const { t } = useTranslation()
  const [selectedOption, setSelectedOption] = useState(t("contact.inquiryOptions.general"))
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const inquiryOptions = [
    t("contact.inquiryOptions.general"),
    t("contact.inquiryOptions.partnership"),
    t("contact.inquiryOptions.technical"),
    t("contact.inquiryOptions.dlm"),
    t("contact.inquiryOptions.producer"),
    t("contact.inquiryOptions.buyer"),
  ]

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive height */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <img src="/images/seed.webp" alt="Agricultural field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-8">
            <h1
              className="text-2xl sm:text-3xl leading-tight mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("contact.title")}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("contact.subtitle").split("admin@ecopiavaluechain.com")[0]}
              <a
                href="mailto:admin@ecopiavaluechain.com?subject=Inquiry from Ecopia Value Chain Website"
                className="font-medium text-white hover:text-white/80 transition-colors underline break-all sm:break-normal"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "500",
                }}
              >
                admin@ecopiavaluechain.com
              </a>
              {t("contact.subtitle").split("admin@ecopiavaluechain.com")[1]}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Responsive layout */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white border border-[#725C3A]/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6 md:mb-8">
              <h2
                className="text-xl sm:text-2xl text-[#725C3A] mb-3 md:mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                {t("contact.formTitle")}
              </h2>
              <p
                className="text-sm sm:text-base text-[#725C3A]/80"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("contact.formSubtitle")}
              </p>
            </div>

            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder={t("contact.firstName")}
                  className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                />
                <input
                  placeholder={t("contact.lastName")}
                  className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                />
              </div>

              <input
                type="email"
                placeholder={t("contact.email")}
                className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              />

              <input
                placeholder={t("contact.organization")}
                className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              />

              {/* Custom Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20 flex items-center justify-between text-left text-gray-500"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  <span
                    className={
                      selectedOption === t("contact.inquiryOptions.general") ? "text-gray-500" : "text-[#725C3A]"
                    }
                  >
                    {selectedOption}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#725C3A]/20 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                    {inquiryOptions.map((option, index) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleOptionSelect(option)}
                        className={`w-full text-left px-3 py-2.5 sm:py-2 text-sm sm:text-base hover:bg-[#F5F5F0] transition-colors ${index === 0 ? "rounded-t-xl" : ""
                          } ${index === inquiryOptions.length - 1 ? "rounded-b-xl" : ""} ${selectedOption === option ? "bg-[#F5F5F0] text-[#725C3A]" : "text-[#725C3A]"
                          }`}
                        style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <textarea
                placeholder={t("contact.message")}
                rows={4}
                className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl resize-none py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              />

              <div className="flex justify-center pt-2 md:pt-4">
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 py-2 sm:py-2.5 border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] text-sm sm:text-base"
                  style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                >
                  {t("contact.sendMessage")}
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-[#725C3A]" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
