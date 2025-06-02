"use client"
import { Button } from "@/components/ui/button"

interface ExportersImportersProps {
  onNavigate: (page: string) => void
}

export default function ExportersImporters({ onNavigate }: ExportersImportersProps) {
  return (
    <div className="min-h-screen bg-[#E5E0D8] relative overflow-hidden">
      {/* Coffee Images Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Coffee beans image - large blob top right */}
        <div
          className="absolute top-10 right-10 w-[500px] h-[400px] opacity-25"
          style={{
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        >
          <img src="/images/coffeebeans.webp" alt="Coffee beans" className="w-full h-full object-cover" />
        </div>

        {/* Coffee bag image - organic shape bottom left */}
        <div
          className="absolute bottom-20 left-10 w-[450px] h-[350px] opacity-20"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
        >
          <img src="/images/coffeebag.webp" alt="Coffee packaging" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-8 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-4xl text-[#725C3A] mb-8 text-center"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            For
            International Buyers
            and Importers
          </h1>
          <p
            className="text-xl text-[#725C3A] leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Access verified, traceable, and compliant agricultural products with complete transparency from farm to
            export.
          </p>
        </div>
      </section>

      {/* Benefits Overview - New Layout with Large Image */}
      <section className="py-20 px-8 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <h2
                className="text-4xl text-[#725C3A] mb-8"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                International buyers and importers benefit through:
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Instant access to verified producer data and certifications",
                    description:
                      "Get real-time access to comprehensive farmer profiles, production data, and certification status through our digital platform.",
                  },
                  {
                    title: "Downloads of EUDR-compliant documentation and audit-ready reports",
                    description:
                      "Access complete EUDR compliance documentation, GPS coordinates, and audit-ready reports for seamless regulatory compliance.",
                  },
                  {
                    title: "Verified traceability down to the farm level",
                    description:
                      "Track your products from individual farms through the entire supply chain with QR codes and digital documentation.",
                  },
                  {
                    title: "Confidence in ethically sourced, certified products",
                    description:
                      "Source with confidence knowing all products meet international sustainability standards and ethical sourcing requirements.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="border-l-4 border-[#809671] pl-6">
                    <h3
                      className="text-xl text-[#725C3A] mb-3"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-[#725C3A]/80 leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.7",
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffeebag-Z24R2BNQZ6iw93DsYn6jyQGWPzt28w.webp"
                  alt="Coffee packaging and quality control"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#E5D2B8] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#809671] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-[#725C3A] text-white relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-8">
            <h2
              className="text-4xl mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              By streamlining data collection and compliance across the entire value chain,{" "}
              <span
                style={{
                  fontFamily: "Dancing Script, cursive",
                  fontWeight: "600",
                  fontSize: "1.1em",
                  color: "#E5D2B8",
                }}
              >
                EVC gives importers peace of mind
              </span>{" "}
              and helps producers stay competitive in regulated global markets.
            </h2>

            <div className="bg-white/10 rounded-3xl p-10">
              <p
                className="text-xl leading-relaxed mb-8"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                Join the growing network of international buyers who trust EVC for transparent, compliant, and
                sustainable sourcing from Ethiopian producers.
              </p>

              <Button
                size="lg"
                className="bg-[#E5D2B8] hover:bg-[#D2AB80] text-[#725C3A] rounded-full px-8 py-4"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
              >
                {/* Access Verified Sourcing */}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
