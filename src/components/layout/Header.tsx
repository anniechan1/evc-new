"use client"

import { ChevronDown, Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface HeaderProps {
  currentPage?: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const dropdownItems = {
    "For Producers": ["Cooperatives", "Private Farms", "Outgrowers"],
    "Platform Help": ["Using the Platform", "Subscriptions"],
    Resources: ["News & Outlook", "Compliance (Certifications)", "Success Stories"],
    About: ["The Team", "Social Responsibility", "Partnerships"],
  }

  const languages = ["English", "Amharic", "AfaanOromoo"]

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (dropdownItems[item as keyof typeof dropdownItems]) {
      setHoveredDropdown(item)
    }
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null)
    }, 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    setHoveredDropdown(null)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleNavClick = (item: string) => {
    switch (item) {
      case "Marketplace":
        onNavigate("marketplace")
        break
      case "For Producers":
        onNavigate("for-producers")
        break
      case "Cooperatives":
        onNavigate("for-producers")
        setTimeout(() => {
          const element = document.getElementById("cooperatives-section")
          if (element) {
            const headerHeight = 80 // Approximate header height
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
          }
        }, 100)
        break
      case "Private Farms":
        onNavigate("for-producers")
        setTimeout(() => {
          const element = document.getElementById("private-farms-section")
          if (element) {
            const headerHeight = 80 // Approximate header height
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
          }
        }, 100)
        break
      case "Outgrowers":
        onNavigate("for-producers")
        setTimeout(() => {
          const element = document.getElementById("outgrowers-section")
          if (element) {
            const headerHeight = 80 // Approximate header height
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            })
          }
        }, 100)
        break
      case "Data Logistic Manager":
        onNavigate("data-logistic-manager")
        break
      case "Using the Platform":
        onNavigate("using-platform")
        break
      case "News & Outlook":
        onNavigate("news-outlook")
        break
      case "Compliance (Certifications)":
        onNavigate("compliance")
        break
      case "Social Responsibility":
        onNavigate("social-responsibility")
        break
      case "Partnerships":
        onNavigate("partnerships")
        break
      case "Subscriptions":
        onNavigate("subscriptions")
        break
      case "Contact":
        onNavigate("contact")
        break
      default:
        break
    }
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Dancing+Script:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');
      `}</style>

      <header className="bg-white border-b border-[#E5D2B8] sticky top-0 z-40">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center bg-transparent border-none cursor-pointer"
            >
              <img src="/images/evc-company-logo.png" alt="EVC Digital Traceability" className="h-14 w-auto" />
            </button>

            <nav className="hidden md:flex space-x-8">
              {[
                "Marketplace",
                "For Producers",
                "Data Logistic Manager",
                "Platform Help",
                "Resources",
                "About",
                "Contact",
              ].map((item) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`transition-colors relative group bg-transparent border-none cursor-pointer flex items-center ${currentPage === item.toLowerCase().replace(/\s+/g, "-")
                        ? "text-[#809671] font-medium"
                        : "text-[#725C3A] hover:text-[#809671]"
                      }`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      fontSize: "0.95rem",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item}
                    {dropdownItems[item as keyof typeof dropdownItems] && <ChevronDown className="w-4 h-4 ml-1" />}
                  </button>

                  {dropdownItems[item as keyof typeof dropdownItems] && hoveredDropdown === item && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-[#E5D2B8] py-2 min-w-48 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {dropdownItems[item as keyof typeof dropdownItems].map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => handleNavClick(subItem)}
                          className="block w-full text-left px-4 py-3 text-[#725C3A] hover:bg-[#E5E0D8] transition-colors bg-transparent border-none cursor-pointer"
                          style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language Switcher */}
            <div className="relative">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onMouseEnter={() => setHoveredDropdown("language")}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <Globe className="w-5 h-5 text-[#725C3A]" />
                <span
                  className="text-[#725C3A]"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "0.95rem" }}
                >
                  {selectedLanguage}
                </span>
                <ChevronDown className="w-4 h-4 text-[#725C3A]" />
              </div>

              {hoveredDropdown === "language" && (
                <div
                  className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-[#E5D2B8] py-2 min-w-32 z-50"
                  onMouseEnter={() => setHoveredDropdown("language")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`block w-full text-left px-4 py-2 transition-colors bg-transparent border-none cursor-pointer ${selectedLanguage === lang ? "text-[#809671] bg-[#E5E0D8]" : "text-[#725C3A] hover:bg-[#E5E0D8]"
                        }`}
                      style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
