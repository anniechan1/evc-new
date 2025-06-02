"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Package,
  ShoppingCart,
  FileText,
  GitBranch,
  Puzzle,
  Globe,
  ArrowRight,
  Play,
  Smartphone,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [])

  const handleStakeholderClick = (stakeholder: string) => {
    switch (stakeholder) {
      case "Cooperatives and unions":
        onNavigate("for-producers")
        setTimeout(() => {
          const element = document.getElementById("cooperatives-section")
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
        break
      case "Youth and startups":
        onNavigate("data-logistic-manager")
        break
      case "Exporters and importers":
        onNavigate("exporters-importers")
        break
      default:
        break
    }
  }

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* First Hero - Original */}
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0">
              <img
                src="/images/farmers-community.jpeg"
                alt="African farming community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto relative z-10 flex items-center h-full px-8">
              <div className="max-w-3xl space-y-8">
                <div className="space-y-6">
                  <h1
                    className="text-4xl text-white mb-8"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Empowering African Farmers with{" "}
                    <span
                      style={{
                        fontFamily: "Dancing Script, cursive",
                        fontWeight: "600",
                        fontSize: "1.1em",
                        color: "#E5D2B8",
                        fontStyle: "italic",
                      }}
                    >
                      Digital Solutions
                    </span>
                  </h1>
                </div>
                <p
                  className="text-xl text-white/90 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  EVC enables end-to-end coffee supply chain management, connecting traditional farming with modern
                  digital innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-8 py-3 shadow-xl"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    onClick={() => {
                      const element = document.getElementById("welcome-section")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    }}
                  >
                    Explore Platform
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-[#725C3A] hover:bg-white hover:text-[#725C3A] rounded-full px-8 py-3 group"
                    style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                  >
                    <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-[#725C3A]">Watch Video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Hero - Simplified Compliance */}
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0">
              <img src="/images/beekeeper.webp" alt="Beekeeper working" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="container mx-auto relative z-10 flex items-center h-full px-8">
              <div className="max-w-3xl space-y-8">
                <div className="space-y-6">
                  <h1
                    className="text-4xl text-white mb-8"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Dancing Script, cursive",
                        fontWeight: "600",
                        fontSize: "1.1em",
                        color: "#E5D2B8",
                        fontStyle: "italic",
                      }}
                    >
                      Simplified Compliance
                    </span>{" "}
                    for Global Markets
                  </h1>
                </div>
                <p
                  className="text-xl text-white/90 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  Navigate complex international regulations with ease. Our platform helps you meet EUDR requirements
                  with tools for geo-mapping, digital farm profiles, and supply chain tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-8 py-3 shadow-xl"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    onClick={() => onNavigate("compliance")}
                  >
                    Learn About EUDR
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Hero - Unlocking Market Borders */}
          <div className="w-full h-full flex-shrink-0 relative">
            <div className="absolute inset-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee%20export-TVu3hfmbh5LTDAK5H5hIHEFsehrLUl.webp"
                alt="Coffee export bags"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="container mx-auto relative z-10 flex items-center h-full px-8">
              <div className="max-w-3xl space-y-8">
                <div className="space-y-6">
                  <h1
                    className="text-4xl text-white mb-8"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Dancing Script, cursive",
                        fontWeight: "600",
                        fontSize: "1.1em",
                        color: "#E5D2B8",
                        fontStyle: "italic",
                      }}
                    >
                      Unlocking Market Borders
                    </span>{" "}
                    Ensuring Global Presence
                  </h1>
                </div>
                <p
                  className="text-xl text-white/90 leading-relaxed max-w-2xl"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  Connect Ethiopian producers with international markets through verified traceability, quality
                  assurance, and sustainable practices that meet global standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-full px-8 py-3 shadow-xl"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    onClick={() => onNavigate("marketplace")}
                  >
                    Explore Marketplace
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-[#E5D2B8] scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome-section" className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "500",
                letterSpacing: "0.01em",
              }}
            >
              Welcome to the{" "}
              <span
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontWeight: "600",
                  fontSize: "1.1em",
                  color: "#809671",
                }}
              >
                Ecopia Value Chain
              </span>{" "}
              (EVC) Platform
            </h2>
          </div>

          <div className="space-y-8">
            <p
              className="text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              The EVC platform is a digital infrastructure developed to address persistent bottlenecks in agricultural
              value chains, with a strong focus on the coffee sector in Ethiopia. These bottlenecks include scattered or
              missing production data, limited financial inclusion, costly and complicated certification processes, and
              weak market connections—especially for smallholder farmers, cooperatives, and rural entrepreneurs.
            </p>

            <p
              className="text-lg text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              To overcome these challenges, EVC provides an integrated software solution that digitizes all key aspects
              of the value chain—from individual farmer registration to harvest tracking, cooperative management,
              logistics, compliance, and market engagement. Our system is built to function offline in rural settings
              and does not require individual farmers to own smartphones. Instead, trained local youth—known as Data
              Logistic Managers (DLMs)—are deployed to collect data and support daily operations using tablets or shared
              devices.
            </p>

            <div className="bg-[#E5E0D8] rounded-2xl p-8">
              <h3
                className="text-2xl text-[#725C3A] mb-6"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500",
                }}
              >
                EVC empowers a wide range of stakeholders:
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Smallholder farmers",
                    description:
                      "gain access to fairer markets, quality inputs, and transparent payment records, improving their income and visibility.",
                    clickable: false,
                  },
                  {
                    title: "Cooperatives and unions",
                    description:
                      "benefit from centralized databases, certification support, and easier reporting to buyers, auditors, and government bodies.",
                    clickable: true,
                  },
                  {
                    title: "Youth and startups",
                    description:
                      "generate income and employment by offering digital services to producers, creating new entrepreneurial pathways.",
                    clickable: true,
                  },
                  {
                    title: "Exporters and importers",
                    description:
                      "receive verified, real-time data on product origin, quality, and compliance—reducing risk and enhancing traceability.",
                    clickable: true,
                  },
                  {
                    title: "Academic institutions and researchers",
                    description:
                      "access real-life value chain data to inform innovation, training, and project-based learning.",
                    clickable: false,
                  },
                  {
                    title: "Financial institutions and development partners",
                    description:
                      "use EVC data to provide credit scoring, insurance, and tailored support to underserved actors.",
                    clickable: false,
                  },
                ].map((stakeholder, index) => (
                  <div
                    key={index}
                    className={`flex space-x-3 ${stakeholder.clickable ? "cursor-pointer hover:bg-white/50 p-3 rounded-lg transition-colors" : ""}`}
                    onClick={() => stakeholder.clickable && handleStakeholderClick(stakeholder.title)}
                  >
                    <div className="w-2 h-2 bg-[#809671] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <span
                        className={`font-medium text-[#725C3A] ${stakeholder.clickable ? "hover:text-[#809671] underline" : ""}`}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {stakeholder.title}
                      </span>
                      <span
                        className="text-[#725C3A]"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                        }}
                      >
                        {" "}
                        {stakeholder.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-lg text-[#725C3A] leading-relaxed text-center"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              With backing from partners like the MasterCard Foundation and key universities, EVC is building an
              inclusive ecosystem where digital tools enable rural actors to thrive and global buyers can source
              responsibly.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholders Showcase Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-[#809671]/10 to-[#B3B792]/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#725C3A] mb-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Empowering Every Stakeholder
            </h2>
            <p
              className="text-lg text-[#725C3A]/80 max-w-2xl mx-auto text-left whitespace-nowrap"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.6",
              }}
            >
              From smallholder farmers to tech-savvy youth, our platform creates opportunities across the entire value
              chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Farmers Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/images/coffee-farmers.webp"
                    alt="Coffee farmers with their harvest"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Smallholder Farmers
                  </h3>
                  <p
                    className="text-sm opacity-90"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    Access to fairer markets and transparent payment records
                  </p>
                </div>
              </div>
            </div>

            {/* Youth Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/images/youth-tech.png"
                    alt="Youth working with technology"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Data Logistic Managers
                  </h3>
                  <p
                    className="text-sm opacity-90"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    Creating employment through digital services
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src="/images/youth-lab.webp"
                    alt="Youth in modern laboratory"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Innovation & Research
                  </h3>
                  <p
                    className="text-sm opacity-90"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    Advancing agricultural technology and practices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section with Real Phone Mockups */}
      <section className="py-20 px-8 bg-[#E5D2B8]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2
                  className="text-4xl text-[#725C3A] leading-tight"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                >
                  One App for All Your Needs
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Order Tracking",
                    description:
                      "Track your orders in real-time with QR codes and detailed shipping information for complete transparency",
                    iconBg: "bg-[#809671]",
                  },
                  {
                    icon: CheckCircle,
                    title: "Order Management",
                    description:
                      "Manage buyer details, shipping destinations, and payment information all in one integrated platform",
                    iconBg: "bg-[#B3B792]",
                  },
                  {
                    icon: Globe,
                    title: "Global Connectivity",
                    description: "Connect with international buyers and manage exports to ports worldwide seamlessly",
                    iconBg: "bg-[#725C3A]",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4 group">
                    <div
                      className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-xl text-[#725C3A] mb-2"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#725C3A]/80 leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.6",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Phone Mockups */}
            <div className="relative flex justify-center items-center space-x-6">
              {/* First Phone - Tracking Order */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-300">
                <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="w-full h-full bg-black rounded-[2rem] p-1">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      <img
                        src="/images/tracking-order-screen.png"
                        alt="Order Tracking Screen"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Second Phone - Order Detail */}
              <div className="relative transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
                <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="w-full h-full bg-black rounded-[2rem] p-1">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      <img
                        src="/images/order-detail-screen.png"
                        alt="Order Detail Screen"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Section - New Background, Minimal Cards */}
      <section className="relative py-40 px-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/tablet-agriculture.jpeg"
            alt="Woman using tablet in agricultural field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2
              className="text-4xl text-white mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Platform Features
            </h2>
          </div>

          {/* Minimal Feature List - No Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 text-white">
              {[
                { icon: Users, title: "Farmer Network", description: "Connect farmers and track contributions" },
                { icon: Package, title: "Smart Inventory", description: "Real-time monitoring and management" },
                { icon: ShoppingCart, title: "Order Management", description: "Streamlined compliance workflows" },
                { icon: FileText, title: "Digital Documents", description: "Secure record organization" },
                { icon: GitBranch, title: "Supply Chain Tracking", description: "End-to-end traceability" },
                { icon: Puzzle, title: "API Integration", description: "Seamless system connectivity" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl mb-2"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-white/80"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
