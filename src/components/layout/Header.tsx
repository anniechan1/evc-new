"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useTranslation } from "react-i18next"

interface HeaderProps {
  currentPage?: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const { t, i18n, ready } = useTranslation()
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const languageDropdownRef = useRef<HTMLDivElement>(null)

  const dropdownItems = {
    [t("header.forProducers")]: [t("header.cooperatives"), t("header.privateFarms"), t("header.outgrowers")],
    [t("header.platformHelp")]: [t("header.usingPlatform"), t("header.subscriptions")],
    [t("header.resources")]: [t("header.newsOutlook"), t("header.compliance"), t("header.successStories")],
    [t("header.about")]: [t("header.theTeam"), t("header.socialResponsibility"), t("header.partnerships")],
  }

  const languages = [
    { code: "en", name: "English", flag: "/images/en.png" },
    { code: "am", name: "አማርኛ", flag: "/images/am.webp" },
    { code: "or", name: "Oromoo", flag: "/images/or.png" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setHoveredDropdown(null)
    setMobileMenuOpen(false)
  }

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setHoveredDropdown(item)
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
    timeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (item: string) => {
    setMobileDropdown(mobileDropdown === item ? null : item)
  }

  const handleNavClick = (item: string) => {
    setMobileMenuOpen(false)
    setMobileDropdown(null)

    // Map translated items back to navigation keys
    const navigationMap: { [key: string]: string } = {
      [t("header.marketplace")]: "marketplace",
      [t("header.forProducers")]: "for-producers",
      [t("header.cooperatives")]: "for-producers",
      [t("header.privateFarms")]: "for-producers",
      [t("header.outgrowers")]: "for-producers",
      [t("header.dataLogisticManager")]: "data-logistic-manager",
      [t("header.usingPlatform")]: "using-platform",
      [t("header.newsOutlook")]: "news-outlook",
      [t("header.compliance")]: "compliance",
      [t("header.socialResponsibility")]: "social-responsibility",
      [t("header.partnerships")]: "partnerships",
      [t("header.subscriptions")]: "subscriptions",
      [t("header.contact")]: "contact",
      [t("header.theTeam")]: "the-team",
    }

    const navigationKey = navigationMap[item]
    if (navigationKey) {
      onNavigate(navigationKey)

      // Handle section scrolling for specific items
      if (item === t("header.cooperatives")) {
        setTimeout(() => {
          const element = document.getElementById("cooperatives-section")
          if (element) {
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({ top: elementPosition, behavior: "smooth" })
          }
        }, 100)
      } else if (item === t("header.privateFarms")) {
        setTimeout(() => {
          const element = document.getElementById("private-farms-section")
          if (element) {
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({ top: elementPosition, behavior: "smooth" })
          }
        }, 100)
      } else if (item === t("header.outgrowers")) {
        setTimeout(() => {
          const element = document.getElementById("outgrowers-section")
          if (element) {
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({ top: elementPosition, behavior: "smooth" })
          }
        }, 100)
      }
    }
  }

  // Handle clicks outside the language dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node) &&
        hoveredDropdown === "language"
      ) {
        setHoveredDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [hoveredDropdown])

  // Effect to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  // Handle cleanup of timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Don't render until translations are ready
  if (!ready) {
    return (
      <header className="bg-white border-b border-[#E5D2B8] sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center bg-transparent border-none cursor-pointer"
            >
              <img src="/images/evc-company-logo.png" alt="EVC Digital Traceability" className="h-10 sm:h-14 w-auto" />
            </button>
            <div className="w-6 h-6 animate-pulse bg-gray-200 rounded"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&family=Dancing+Script:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');
      `}</style>

      <header className="bg-white border-b border-[#E5D2B8] sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center bg-transparent border-none cursor-pointer"
            >
              <img src="/images/evc-company-logo.png" alt="EVC Digital Traceability" className="h-10 sm:h-14 w-auto" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8">
              {[
                t("header.marketplace"),
                t("header.forProducers"),
                t("header.dataLogisticManager"),
                t("header.platformHelp"),
                t("header.resources"),
                t("header.about"),
                t("header.contact"),
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

            {/* Language Switcher - Desktop - Fixed to behave like other buttons */}
            <div className="hidden md:block relative" ref={languageDropdownRef}>
              <button
                className="flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-[#E5E0D8] transition-colors bg-transparent border-none"
                onClick={() => setHoveredDropdown(hoveredDropdown === "language" ? null : "language")}
                onMouseEnter={() => handleMouseEnter("language")}
                onMouseLeave={handleMouseLeave}
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400", fontSize: "0.95rem" }}
              >
                <img
                  src={currentLanguage.flag || "/placeholder.svg"}
                  alt={`${currentLanguage.name} flag`}
                  className="w-5 h-4 object-cover rounded-sm mr-1"
                />
                <span className="text-[#725C3A]">{currentLanguage.name}</span>
                <ChevronDown className="w-4 h-4 text-[#725C3A]" />
              </button>

              {hoveredDropdown === "language" && (
                <div
                  className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-[#E5D2B8] py-2 min-w-32 z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 transition-colors bg-transparent border-none cursor-pointer ${currentLanguage.code === lang.code
                        ? "text-[#809671] bg-[#E5E0D8]"
                        : "text-[#725C3A] hover:bg-[#E5E0D8]"
                        }`}
                      style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
                    >
                      <div className="flex items-center">
                        <img
                          src={lang.flag || "/placeholder.svg"}
                          alt={`${lang.name} flag`}
                          className="w-5 h-4 object-cover rounded-sm mr-2"
                        />
                        {lang.name}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#725C3A] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <img src="/images/evc-company-logo.png" alt="EVC Digital Traceability" className="h-10 w-auto" />
              <button className="text-[#725C3A] focus:outline-none" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {[
                  t("header.marketplace"),
                  t("header.forProducers"),
                  t("header.dataLogisticManager"),
                  t("header.platformHelp"),
                  t("header.resources"),
                  t("header.about"),
                  t("header.contact"),
                ].map((item, index) => (
                  <div key={item} className={`pb-4 ${index < 6 ? "border-b border-gray-100" : ""}`}>
                    {dropdownItems[item as keyof typeof dropdownItems] ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(item)}
                          className="flex items-center justify-between w-full text-[#725C3A] py-2"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "400",
                            fontSize: "1.1rem",
                          }}
                        >
                          <span>{item}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${mobileDropdown === item ? "rotate-180" : ""}`}
                          />
                        </button>

                        {mobileDropdown === item && (
                          <div className="mt-2 pl-4 flex flex-col space-y-3">
                            {dropdownItems[item as keyof typeof dropdownItems].map((subItem) => (
                              <button
                                key={subItem}
                                onClick={() => handleNavClick(subItem)}
                                className="text-left text-[#725C3A]/80 py-2"
                                style={{
                                  fontFamily: "Source Sans Pro, sans-serif",
                                  fontWeight: "300",
                                  fontSize: "1rem",
                                }}
                              >
                                {subItem}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="text-left w-full text-[#725C3A] py-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "400",
                          fontSize: "1.1rem",
                        }}
                      >
                        {item}
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Language Switcher */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <p
                  className="text-[#725C3A]/70 mb-3"
                  style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300" }}
                >
                  Select Language
                </p>
                <div className="flex flex-col space-y-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`text-left py-2 ${currentLanguage.code === lang.code ? "text-[#809671] font-medium" : "text-[#725C3A]"
                        }`}
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
                    ><div className="flex items-center">
                        <img
                          src={lang.flag || "/placeholder.svg"}
                          alt={`${lang.name} flag`}
                          className="w-5 h-4 object-cover rounded-sm mr-2"
                        />
                        {lang.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
