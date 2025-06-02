"use client"

import { Users, MapPin, CheckCircle, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ForProducersProps {
  onNavigate: (page: string) => void
}

export default function ForProducers({ onNavigate }: ForProducersProps) {
  const handleStartJourney = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeQPRZV4bcFpwxNbqPvhnTJV_dv-wYzPKAY5uQ4UQOECT8RoA/viewform",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-4xl text-[#725C3A] mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            How the Ecopia Value Chain Platform Supports Different Producers
          </h1>
          <p
            className="text-xl text-[#725C3A] leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            EVC is designed to accommodate the operational realities of various agricultural producers in Ethiopia and
            across Sub-Saharan Africa. Whether you're a cooperative manager coordinating thousands of smallholders, a
            private farm exporting specialty coffee, or an organization working with contract growers—EVC helps you
            streamline your work and meet global standards.
          </p>
        </div>
      </section>

      {/* Producer Types Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto">
          <div className="space-y-16">
            {/* Cooperatives and Unions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    id="cooperatives-section"
                    data-section="cooperatives"
                    className="text-3xl text-[#725C3A]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    For Cooperatives and Unions
                  </h3>
                </div>

                <p
                  className="text-lg text-[#725C3A] leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  Cooperatives and unions often struggle with fragmented data, low transparency, and complex compliance
                  obligations. EVC allows you to digitize your member registry, track production and deliveries,
                  automate farmer payments, and manage certifications like organic, Fair Trade, and EUDR.
                </p>

                <div className="bg-[#F5F5F0] rounded-2xl p-6 border border-gray-200">
                  <h4
                    className="text-lg text-[#725C3A] font-medium mb-4"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    Features include:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Digital registration of members with geo-coordinates",
                      "Real-time harvest collection data and logistics",
                      "Payment tracking and transparent distribution records",
                      "Monitoring of training and input distribution",
                      "Certification documentation and dashboards for audits",
                      "Cooperative performance and productivity analytics",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#725C3A] mt-0.5 flex-shrink-0" />
                        <span
                          className="text-[#725C3A]"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#725C3A] rounded-2xl p-6 text-white">
                  <h5 className="font-medium mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}>
                    Your benefits:
                  </h5>
                  <p
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    Time-saving administration, better decision-making, easier access to certification, trust with
                    members, and market visibility.
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center">
                <iframe
                  src="https://embed.figma.com/proto/Zy5KSm1lP82Q1HwRPcoU9d/Untitled?embed-host=share&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&hide-ui=1"
                  className="w-[450px] h-[900px] border-none"
                  allowFullScreen
                  title="Interactive EVC Platform Demo"
                />

                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                  <p
                    className="text-[#725C3A] text-base font-medium"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Interactive EVC Platform Demo
                  </p>
                  <p
                    className="text-[#725C3A]/70 text-sm"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    Click and explore the app interface
                  </p>
                </div>
              </div>
            </div>

            {/* Private Farms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="absolute inset-4 bg-[#725C3A] rounded-3xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Private farm"
                  className="relative rounded-3xl shadow-xl w-full h-auto"
                />
              </div>

              <div className="space-y-8 lg:order-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    id="private-farms-section"
                    data-section="private-farms"
                    className="text-3xl text-[#725C3A]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    For Private Farms
                  </h3>
                </div>

                <p
                  className="text-lg text-[#725C3A] leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  Private and commercial farms face increasing demand for data transparency and sustainability
                  credentials. EVC enables you to map your plots, record farm activities, monitor labor usage, and track
                  production costs.
                </p>

                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4
                    className="text-lg text-[#725C3A] font-medium mb-4"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    Features include:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Digital farm mapping using GPS and satellite data",
                      "Input and harvest tracking with expense monitoring",
                      "Yield comparisons and performance visualization",
                      "Sustainability and compliance documentation",
                      "Interfaces with warehouse and export tools",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#725C3A] mt-0.5 flex-shrink-0" />
                        <span
                          className="text-[#725C3A]"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#725C3A] rounded-2xl p-6 text-white">
                  <h5 className="font-medium mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}>
                    Your benefits:
                  </h5>
                  <p
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    Improved operational control, accountability, and readiness for international buyers and
                    inspections.
                  </p>
                </div>
              </div>
            </div>

            {/* Outgrowers and Contract Schemes */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    id="outgrowers-section"
                    data-section="outgrowers"
                    className="text-3xl text-[#725C3A]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                    }}
                  >
                    For Outgrowers and Contract Schemes
                  </h3>
                </div>

                <p
                  className="text-lg text-[#725C3A] leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.7",
                  }}
                >
                  Organizing dispersed smallholder suppliers under outgrower models is complex. EVC simplifies it
                  through centralized databases, geo-referenced records, and customizable dashboards.
                </p>

                <div className="bg-[#F5F5F0] rounded-2xl p-6 border border-gray-200">
                  <h4
                    className="text-lg text-[#725C3A] font-medium mb-4"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    Features include:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Registration and profiling of contracted farmers",
                      "Monitoring field activities and input use",
                      "Quality control and delivery documentation",
                      "Communication channels with farmers",
                      "Mobile compliance checks by DLMs",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#725C3A] mt-0.5 flex-shrink-0" />
                        <span
                          className="text-[#725C3A]"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#725C3A] rounded-2xl p-6 text-white">
                  <h5 className="font-medium mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}>
                    Your benefits:
                  </h5>
                  <p
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    Stronger traceability, lower non-compliance risk, better oversight, and buyer confidence.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-4 bg-[#725C3A] rounded-3xl"></div>
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Contract farmers"
                  className="relative rounded-3xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-[#E5D2B8]">
        <div className="container mx-auto text-center max-w-3xl">
          <h2
            className="text-4xl text-[#725C3A] mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Ready to Transform Your Operations?
          </h2>
          <p
            className="text-xl text-[#725C3A] mb-8 leading-relaxed text-left"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Join producers who are using EVC to streamline their operations, improve transparency, and access better
            markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleStartJourney}
              size="lg"
              className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full px-8 py-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#725C3A] text-[#725C3A] hover:bg-[#725C3A] hover:text-white rounded-full px-8 py-4"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
            >
              Placeholder
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
