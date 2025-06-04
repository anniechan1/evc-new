"use client"

import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PartnershipsProps {
  onNavigate: (page: string) => void
}

export default function Partnerships({ onNavigate }: PartnershipsProps) {
  const partnershipTypes = [
    {
      type: "Universities",
      icon: GraduationCap,
      bgColor: "bg-white",
      iconBg: "bg-[#725C3A]",
      description: "Academic institutions collaborating on research, training, and student development programs.",
      partners: ["Jimma University - Agricultural Research Center"],
    },
    // {
    //   type: "Tech Partners",
    //   icon: Cpu,
    //   bgColor: "bg-[#F5F5F0]",
    //   iconBg: "bg-[#725C3A]",
    //   description: "Technology companies providing infrastructure, development tools, and digital solutions.",
    //   partners: [
    //     "Microsoft Azure - Cloud Infrastructure",
    //     "Google for Startups - Development Tools",
    //     "Safaricom - Mobile Connectivity Solutions",
    //     "Local Software Development Companies",
    //   ],
    // },
    // {
    //   type: "NGOs",
    //   icon: Heart,
    //   bgColor: "bg-white",
    //   iconBg: "bg-[#725C3A]",
    //   description: "Non-governmental organizations focused on agricultural development and farmer empowerment.",
    //   partners: [
    //     "MasterCard Foundation - Youth Employment",
    //     "USAID - Agricultural Development Programs",
    //     "World Vision - Community Development",
    //     "Oxfam - Sustainable Agriculture Initiatives",
    //   ],
    // },
    // {
    //   type: "Commercial Buyers",
    //   icon: Building,
    //   bgColor: "bg-[#F5F5F0]",
    //   iconBg: "bg-[#725C3A]",
    //   description: "International buyers and importers committed to sustainable and traceable sourcing.",
    //   partners: [
    //     "European Coffee Importers",
    //     "Specialty Coffee Roasters",
    //     "Fair Trade Organizations",
    //     "Sustainable Supply Chain Companies",
    //   ],
    // },
  ]

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="py-20 px-8 flex items-center justify-center min-h-[400px]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-4xl text-[#725C3A] mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Our Strategic Partnerships
          </h1>

        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <p
            className="text-xl text-[#725C3A] leading-relaxed max-w-3xl mx-auto mb-8"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Building a sustainable agricultural ecosystem through collaborative partnerships across academia,
            technology, development, and commerce.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card
                key={index}
                className={`${partnership.bgColor} border border-gray-200 rounded-3xl hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 ${partnership.iconBg} rounded-2xl flex items-center justify-center`}>
                      <partnership.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-2xl text-[#725C3A]"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {partnership.type}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-lg mb-6 leading-relaxed text-[#725C3A]/80"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    {partnership.description}
                  </p>

                  {/* Partners List */}
                  <div className="space-y-3">
                    {partnership.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#725C3A]"></div>
                        <span
                          className="text-[#725C3A]"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                            lineHeight: "1.5",
                          }}
                        >
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-[#725C3A] text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2
            className="text-4xl mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Interested in Partnering with Us?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Join our growing network of partners committed to transforming African agriculture through digital
            innovation and sustainable practices.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-[#E5D2B8] hover:bg-[#D2AB80] text-[#725C3A] rounded-full px-8 py-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
              onClick={() => onNavigate("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
