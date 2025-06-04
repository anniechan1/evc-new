"use client"

import { Users, MapPin, CheckCircle, Database } from "lucide-react"

interface ForProducersProps {
  onNavigate: (page: string) => void
}

export default function ForProducers({ onNavigate }: ForProducersProps) {
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="py-20 px-8 flex items-center justify-center min-h-[400px]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-3xl text-[#725C3A] mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            How EVC Supports Different Producers
          </h1>
        </div>
      </section>

      {/* Producer Types Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <p
            className="text-lg text-[#725C3A] leading-relaxed max-w-3xl mx-auto mb-16"
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
          {/* Cooperatives and Unions */}
          <div className="mb-32">
            <div id="cooperatives-section" className="flex items-center justify-start space-x-4 mb-12">
              <div className="w-16 h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                For Cooperatives and Unions
              </h3>
            </div>

            {/* Central Image */}
            <div className="flex justify-center mb-16">
              <div className="w-full max-w-5xl">
                <img
                  src="/images/frame5.png"
                  alt="EVC Platform on mobile and tablet devices"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <p
                className="text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                Cooperatives and unions often struggle with fragmented data, low transparency, and complex compliance
                obligations. EVC allows you to digitize your member registry, track production and deliveries, automate
                farmer payments, and manage certifications like organic, Fair Trade, and EUDR.
              </p>

              <div>
                <h4
                  className="text-xl text-[#725C3A] font-medium mb-8"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Features:
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="text-base text-[#725C3A]"
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

              <div>
                <h5
                  className="text-xl font-medium mb-4 text-[#725C3A]"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Benefits:
                </h5>
                <p
                  className="text-lg text-[#725C3A]"
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
          </div>

          {/* Private Farms */}
          <div className="mb-32">
            <div id="private-farms-section" className="flex items-center justify-start space-x-4 mb-12">
              <div className="w-16 h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                For Private Farms
              </h3>
            </div>

            {/* Content */}
            <div className="space-y-12">
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

              <div>
                <h4
                  className="text-xl text-[#725C3A] font-medium mb-8"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Features:
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="text-base text-[#725C3A]"
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

              <div>
                <h5
                  className="text-xl font-medium mb-4 text-[#725C3A]"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Benefits:
                </h5>
                <p
                  className="text-lg text-[#725C3A]"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.6",
                  }}
                >
                  Improved operational control, accountability, and readiness for international buyers and inspections.
                </p>
              </div>
            </div>
          </div>

          {/* Outgrowers and Contract Schemes */}
          <div className="mb-32">
            <div id="outgrowers-section" className="flex items-center justify-start space-x-4 mb-12">
              <div className="w-16 h-16 bg-[#725C3A] rounded-2xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                }}
              >
                For Outgrowers and Contract Schemes
              </h3>
            </div>

            {/* Central Image */}
            <div className="flex justify-center mb-16">
              <div className="w-full max-w-5xl">
                <img src="/images/frame4.png" alt="Farmer Overview on mobile devices" className="w-full h-auto" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-12">
              <p
                className="text-lg text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                Organizing dispersed smallholder suppliers under outgrower models is complex. EVC simplifies it through
                centralized databases, geo-referenced records, and customizable dashboards.
              </p>

              <div>
                <h4
                  className="text-xl text-[#725C3A] font-medium mb-8"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Features:
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="text-base text-[#725C3A]"
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

              <div>
                <h5
                  className="text-xl font-medium mb-4 text-[#725C3A]"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Benefits:
                </h5>
                <p
                  className="text-lg text-[#725C3A]"
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
          </div>
        </div>
      </section>
    </div>
  )
}
