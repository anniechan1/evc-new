"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface DataLogisticManagerProps {
  onNavigate: (page: string) => void
}

export default function DataLogisticManager({ onNavigate }: DataLogisticManagerProps) {
  const handleApplyNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdHY6eRAGHRjcb154z2nFstqvey49E_XK525SSK3-acwN8LVw/viewform",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      <section className="py-20 px-8 flex items-center justify-center min-h-[400px]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1
              className="text-3xl text-[#725C3A]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              How Data Logistic Managers Use the Platform
            </h1>
          </div>
        </div>
      </section>

      {/* DLM Workflow Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2
              className="text-2xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              DLM Workflow
            </h2>
            <div className="flex justify-center">
              <p
                className="text-lg text-[#725C3A] leading-relaxed max-w-5xl"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                Data Logistic Managers (DLMs) are young professionals who bridge the digital gap between smallholder
                producers and technology. Typically university graduates or vocational trainees, DLMs undergo basic
                training in agricultural data collection, app usage, compliance protocols, and cooperative structures.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply",
                description: "Apply to become a DLM through the platform.",
                bgColor: "bg-white",
                shadow: "shadow-xl",
              },
              {
                step: "2",
                title: "Training",
                description: "Complete onboarding training modules.",
                bgColor: "bg-[#809671]",
                textColor: "text-white",
                shadow: "shadow-2xl",
              },
              {
                step: "3",
                title: "Agreement",
                description: "Sign a service agreement with Ecopia and/or a cooperative.",
                bgColor: "bg-white",
                shadow: "shadow-xl",
              },
              {
                step: "4",
                title: "Begin Service",
                description: "Begin offering data entry, monitoring, and logistics support to producers.",
                bgColor: "bg-[#B3B792]",
                textColor: "text-white",
                shadow: "shadow-2xl",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`border-0 rounded-2xl ${item.bgColor} ${item.shadow} hover:shadow-2xl transition-all duration-300 ${item.title === "Apply" ? "cursor-pointer" : ""
                  }`}
                onClick={
                  item.title === "Apply"
                    ? () =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSfDol1Ffh9pYTcrk5bz-yAjcZWLwUh34cp16_Dj1rHQVbDCHw/viewform",
                        "_blank",
                      )
                    : undefined
                }
              >
                <CardContent className="p-10 text-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-6 ${item.textColor ? "bg-white/20" : "bg-[#809671]"
                      }`}
                  >
                    <span
                      className={`font-bold text-lg ${item.textColor ? "text-white" : "text-white"}`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3
                    className={`text-xl mb-6 ${item.textColor ? item.textColor : "text-[#725C3A]"}`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-base ${item.textColor ? "text-white/90" : "text-[#725C3A]/80"}`}
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "350",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What DLMs Do Section - Background Image with Text Overlay - Original Colors */}
      <section className="relative py-32 px-0">
        <div className="absolute right-0 top-0 bottom-0 w-1/2">
          <img
            src="/images/african-farmer-tech.jpeg"
            alt="African farmer using technology"
            className="w-full h-full object-cover object-right"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 items-start">
            {/* Content Side - Takes up left half and positioned left */}
            <div className="px-8 space-y-12">
              <h2
                className="text-2xl text-[#725C3A] mb-12"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                What DLMs Do:
              </h2>

              <div className="space-y-8">
                {[
                  "Register farmers and GPS-locate plots",
                  "Support cooperatives during audits and inspections",
                  "Input harvest, training, and input usage data",
                  "Help manage farm records and reports",
                  "Facilitate digital payments and certification documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-1.5 h-1.5 bg-[#725C3A]/80 rounded-full mt-3 flex-shrink-0"></div>
                    <p
                      className="text-lg text-[#725C3A] leading-relaxed"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "375",
                        lineHeight: "1.6",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Text on Right, Image on Left - Show Full Image */}
      <section className="py-0 px-0 bg-[#E5E0D8] relative">
        <div className="absolute left-0 top-0 bottom-0 w-1/2">
          <img
            src="/images/field-documentation.png"
            alt="Field documentation and training"
            className="w-full h-full object-cover object-left"
          />
        </div>

        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 items-stretch min-h-[600px]">
            {/* Empty div for image space */}
            <div className=""></div>

            {/* Content on Right */}
            <div className="flex items-center py-32 px-8">
              <div className="space-y-12">
                <h2
                  className="text-2xl text-[#725C3A] mb-12"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                >
                  Benefits for DLMs:
                </h2>

                <div className="space-y-8">
                  {[
                    "Paid service contracts and performance bonuses",
                    "Field experience in agritech and digital tools",
                    "Career pathways in agri-business and entrepreneurship",
                    "Mentorship from Ecopia and affiliated universities",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-1.5 h-1.5 bg-[#725C3A]/80 rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-lg text-[#725C3A] leading-relaxed"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "375",
                          lineHeight: "1.6",
                        }}
                      >
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-[#725C3A] text-white">
        <div className="container mx-auto text-center max-w-5xl">
          <h2
            className="text-2xl mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Ready to Join Our DLM Network?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 leading-relaxed mx-auto max-w-4xl"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Become part of a growing network of young professionals making a real impact in agricultural development
            while building your career in agritech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleApplyNow}
              size="lg"
              className="bg-[#E5D2B8] hover:bg-[#D2AB80] text-[#725C3A] rounded-full px-8 py-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            >
              Apply Now
            </Button>
            <Button
              onClick={() => {
                alert("Video: How to Start as a DLM - Coming Soon")
              }}
              size="lg"
              variant="outline"
              className="border-[#725C3A] text-[#725C3A] hover:bg-[#E5D2B8] hover:text-[#725C3A] rounded-full px-8 py-4"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
            >
              Watch Video: How to Start as DLM
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
