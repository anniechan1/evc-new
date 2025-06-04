"use client"

import { CheckCircle } from "lucide-react"

interface ComplianceProps {
  onNavigate: (page: string) => void
}

export default function Compliance({ onNavigate }: ComplianceProps) {
  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section with Geo-Data Circle */}
      <section className="py-16 px-8 relative flex items-center min-h-[400px]">
        <div className="container mx-auto max-w-4xl relative z-20 flex items-center justify-start min-h-[300px]">
          <div className="relative">
            <h1
              className="text-4xl text-[#725C3A] inline-block"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Building Trust Through Verified Standards
            </h1>
            {/* Geo-Data Circle Image - Positioned right after text ends */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-80 w-96 h-96 rounded-full overflow-hidden opacity-70">
              <img src="/images/booth.png" alt="GPS mapping and geo-data" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <p
              className="text-xl text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              The Ecopia Value Chain (EVC) platform is not only a digital tool for managing agricultural operations—it's
              also designed to help producers, cooperatives, and buyers meet increasingly strict international
              compliance standards. We help users navigate both public regulations, like the EU Deforestation Regulation
              (EUDR), and private sustainability standards, including our own{" "}
              <a
                href="https://ecocertification.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#809671] font-semibold hover:text-[#725C3A] underline decoration-2 underline-offset-2 transition-colors"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                Ecopia Certification
              </a>{" "}
              program.
            </p>

            <p
              className="text-xl text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              Compliance is no longer optional—it is essential for reaching international markets, securing premium
              prices, and building lasting relationships with buyers. EVC simplifies this process with embedded tools
              that support data collection, traceability, documentation, and third-party verification.
            </p>
          </div>
        </div>
      </section>

      {/* EUDR Section */}
      <section id="eudr-section" className="py-20 px-8 bg-[#E5D2B8]">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <h2
              className="text-3xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
              }}
            >
              What is EUDR (EU Deforestation Regulation)?
            </h2>

            <p
              className="text-xl text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              The{" "}
              <a
                href="https://green-forum.ec.europa.eu/deforestation-regulation-implementation_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#809671] font-semibold hover:text-[#725C3A] underline decoration-2 underline-offset-2 transition-colors"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                }}
              >
                EUDR
              </a>{" "}
              is a regulation from the European Union aimed at stopping deforestation and forest degradation caused by
              the production and consumption of certain agricultural commodities— including coffee and cocoa. As of
              2025, any company importing these goods into the EU must prove that their products:
            </p>

            <div className="space-y-4">
              {["Are deforestation-free", "Were legally produced", "Are traceable to their exact origin"].map(
                (item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#809671] flex-shrink-0" />
                    <span
                      className="text-lg text-[#725C3A]"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>

            <p
              className="text-xl text-[#725C3A] leading-relaxed"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              This means that coffee farmers, cooperatives, and exporters in Ethiopia must show clear geolocation data
              (GPS mapping), harvest records, and proof of legal land use.
            </p>
          </div>
        </div>
      </section>

      {/* How EVC Helps with EUDR - Coffee Farmer Background */}
      <section className="relative py-20 px-8">
        <div className="absolute inset-0">
          <img src="/images/farmers-community.jpeg" alt="Coffee farmer" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <h2
            className="text-4xl text-white mb-12 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            How EVC Helps You Meet EUDR Requirements
          </h2>

          <div className="space-y-8 text-white">
            {[
              "Geo-mapping tools for farms and plots",
              "Digital farm profiles that include land ownership and production history",
              "Harvest logs linked to individual farmers",
              "Supply chain tracking from field to export",
              "Documentation upload and sharing features",
            ].map((item, index) => (
              <div key={index} className="text-xl leading-relaxed">
                <span className="font-medium">•</span>
                <span
                  className="ml-3"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white text-center">
            <div className="flex justify-center w-full"></div>
            <p
              className="text-xl whitespace-nowrap max-w-none"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
              }}
            >
              We enable producers to build transparent supply chains that meet EU buyer expectations—while creating
              real value for local actors.
            </p>

          </div>
        </div>
      </section>

      {/* Ecopia Certification Section - Beekeeper Background */}
      <section className="relative py-20 px-8">
        <div className="absolute inset-0">
          <img src="/images/beekeeper.webp" alt="Beekeeper" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <h2
                className="text-4xl text-white mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                <a
                  href="https://ecocertification.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5D2B8] hover:text-white transition-colors underline decoration-2 underline-offset-4"
                  style={{
                    fontFamily: "Dancing Script, cursive",
                    fontWeight: "600",
                    fontSize: "1.1em",
                  }}
                >
                  Ecopia Certification
                </a>{" "}
                – Traceable. Inclusive. Sustainable.
              </h2>
            </div>
            <p
              className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              While many international standards exist, they are often expensive and inaccessible to smallholder farmers
              and emerging cooperatives. That's why Ecopia has created the Ecopia Certification —a practical, locally
              grounded system aligned with key international sustainability goals, but adapted to the Ethiopian context.
            </p>
          </div>

          <h3
            className="text-2xl text-white mb-8 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
            }}
          >
            What Does Ecopia Certification Cover?
          </h3>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {[
              {
                title: "Traceability and data accuracy",
                description:
                  "Ensuring that products are trackable from farm to final buyer using real-time data collection and mapping tools.",
              },
              {
                title: "Social inclusion",
                description:
                  "Promoting fair compensation for farmers and youth (Data Logistic Managers), gender inclusion, and access to digital tools.",
              },
              {
                title: "Environmental sustainability",
                description:
                  "Encouraging climate-smart agriculture, avoiding deforestation, and supporting agroecological practices.",
              },
              {
                title: "Ethical labor practices",
                description:
                  "Ensuring that no forced or child labor is involved and that safe working conditions are met.",
              },
              {
                title: "Financial transparency",
                description:
                  "Strengthening digital payment records, equitable bonus distribution, and income tracking for producers.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-3 bg-white/10 backdrop-blur-sm rounded-2xl p-10">
                <h4
                  className="text-xl text-white font-medium"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-lg text-white/90 leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 text-white">
            <h3
              className="text-2xl mb-8 text-center"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
              }}
            >
              How Do You Get Certified?
            </h3>

            <div className="space-y-6">
              {[
                "Sign up on the EVC platform",
                "Participate in basic digital onboarding and training",
                "Ensure that your data is consistently and accurately maintained",
                "Pass a digital review process, supported by our certification team",
                "Display your certification status on your digital profile",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-xl text-white font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <p
                    className="text-xl text-white/90 leading-relaxed"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "400",
                      lineHeight: "1.6",
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p
                className="text-lg text-white/90 leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "400",
                  lineHeight: "1.7",
                }}
              >
                <a
                  href="https://ecocertification.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#E5D2B8] hover:text-white transition-colors underline decoration-2 underline-offset-2"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Ecopia Certification
                </a>{" "}
                is designed to be low-cost, inclusive, and attainable for producers of all sizes—while delivering the
                credibility and transparency that buyers demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters - Redesigned with Enhanced Background */}
      <section className="relative py-32 px-8">
        <div className="absolute inset-0">
          <img src="/images/handshake.webp" alt="Partnership handshake" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#725C3A]/60 via-[#725C3A]/40 to-[#809671]/30"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2
            className="text-5xl text-white mb-16 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Why

            Compliance

            Matters
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Market Access",
                description: "International buyers require verified traceability and sustainability data",
                number: "01",
              },
              {
                title: "Premium Prices",
                description: "Certified and traceable products command higher market prices",
                number: "02",
              },
              {
                title: "Investor Confidence",
                description: "Transparent data attracts financial institutions and development partners",
                number: "03",
              },
              {
                title: "Operational Benefits",
                description: "Digital tools improve planning, oversight, and coordination",
                number: "04",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <span
                    className="text-2xl text-white font-bold"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                  >
                    {benefit.number}
                  </span>
                </div>
                <h3
                  className="text-xl text-white mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-xl text-white/90 leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "400",
                    lineHeight: "1.6",
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-6xl mx-auto">
              <div className="flex justify-center">
                <p
                  className="text-3xl text-white leading-relaxed"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    lineHeight: "1.6",
                    whiteSpace: "nowrap",
                  }}
                >
                  With EVC, compliance is not a burden—it becomes a{" "}
                  <span
                    style={{
                      fontFamily: "Dancing Script, cursive",
                      fontWeight: "600",
                      fontSize: "1.1em",
                      color: "#E5D2B8",
                    }}
                  >
                    strategic advantage
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
