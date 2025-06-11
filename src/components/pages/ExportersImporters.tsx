"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ExportersImportersProps {
  onNavigate: (page: string) => void
}

export default function ExportersImporters({ onNavigate }: ExportersImportersProps) {
  return (
    <div className="min-h-screen bg-[#E5E0D8] relative overflow-hidden">
      {/* Hero Section - Same size as UsingPlatform with cropped image */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <img
          src="/images/coffeebucket.webp"
          alt="Coffee packaging and quality control"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-8">
            <h1
              className="text-2xl md:text-3xl leading-tight mb-4 md:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              For International Buyers and Importers
            </h1>
            <p
              className="text-base md:text-xl text-white/90 max-w-full md:whitespace-nowrap"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
              }}
            >
              Access verified, traceable agricultural products with farm-to-export transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview - Single column layout without image */}
      <section className="py-12 md:py-16 px-4 sm:px-8 bg-white relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8">
            <h2
              className="text-2xl md:text-3xl text-[#725C3A] mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              International buyers and importers benefit through:
            </h2>

            <div className="space-y-4 md:space-y-6 text-left max-w-3xl mx-auto">
              {[
                {
                  title: "Instant access to verified producer data and certifications",
                  description: "Real-time access to farmer profiles, production data, and certification status.",
                },
                {
                  title: "Downloads of EUDR-compliant documentation and audit-ready reports",
                  description: "Complete EUDR compliance documentation, GPS coordinates, and audit-ready reports.",
                },
                {
                  title: "Verified traceability down to the farm level",
                  description: "Track products from individual farms through the entire supply chain with QR codes.",
                },
                {
                  title: "Confidence in ethically sourced, certified products",
                  description:
                    "Products meeting international sustainability standards and ethical sourcing requirements.",
                },
              ].map((benefit, index) => (
                <div key={index} className="border-l-4 border-[#809671] pl-4 md:pl-5">
                  <h3
                    className="text-base md:text-lg text-[#725C3A] mb-1 md:mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-[#725C3A]/80 md:whitespace-nowrap"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Redesigned with smaller content */}
      <section className="relative py-16 md:py-24 px-4 sm:px-8 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <img src="/images/coffee.webp" alt="Partnership handshake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#725C3A]/80 via-[#725C3A]/60 to-[#809671]/40"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 md:w-32 h-24 md:h-32 bg-[#E5D2B8]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 md:w-40 h-32 md:h-40 bg-[#809671]/20 rounded-full blur-xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-8 md:space-y-10">
            {/* Main heading */}
            <div className="space-y-3 md:space-y-4">
              <h2
                className="text-2xl md:text-3xl text-white leading-tight"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                Transform Your Sourcing Strategy
              </h2>
              <div className="w-16 md:w-20 h-1 bg-[#E5D2B8] mx-auto rounded-full"></div>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-lg text-white/95 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              By streamlining data collection and compliance across the entire value chain, EVC gives importers peace of
              mind and helps producers stay competitive in regulated global markets.
            </p>

            {/* Feature highlights - Smaller */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 my-8 md:my-12">
              {[
                {
                  title: "Verified Traceability",
                  description: "Complete farm-to-export tracking with GPS coordinates and digital documentation",
                },
                {
                  title: "EUDR Compliance",
                  description: "Ready-to-download compliance reports and audit documentation",
                },
                {
                  title: "Ethical Sourcing",
                  description: "Certified sustainable and socially responsible supply chains",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center space-y-2 md:space-y-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#E5D2B8] rounded-full"></div>
                  </div>
                  <h3
                    className="text-sm md:text-base text-white font-medium"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-xs md:text-sm text-white/90 leading-relaxed"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-4 md:space-y-6">
              <p
                className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.6",
                }}
              >
                Join the growing network of international buyers who trust EVC for transparent, compliant, and
                sustainable sourcing from Ethiopian producers.
              </p>

              <div className="flex justify-center">
                <Button
                  onClick={() => onNavigate("marketplace")}
                  className="bg-white text-[#725C3A] rounded-full px-4 md:px-6 py-1.5 md:py-2 shadow-xl"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Access Verified Sourcing
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
