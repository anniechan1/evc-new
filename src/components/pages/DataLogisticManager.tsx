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

      <section className="py-20 px-8 bg-[#E5E0D8]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1
                className="text-4xl text-[#725C3A]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                How Data Logistic Managers Use the Platform
              </h1>
              <p
                className="text-xl text-[#725C3A] leading-relaxed"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.7",
                }}
              >
                Data Logistic Managers (DLMs) are young professionals who bridge the digital gap between smallholder
                producers and technology.
              </p>
            </div>

            {/* Phone Mockups */}
            <div className="relative flex justify-center space-x-8">
              {/* DLM Dashboard Phone */}
              <div className="relative">
                <div className="w-64 h-[520px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-1 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2rem] p-1">
                    <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      <img
                        src="/images/dlm-login.png"
                        alt="DLM Dashboard"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#809671] text-white px-4 py-2 rounded-full text-sm font-medium">
                  DLM Dashboard
                </div>
              </div>

              {/* Farmer Profile Phone */}
              <div className="relative transform rotate-6 scale-90">
                <div className="w-56 h-[460px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-[2rem] p-1 shadow-xl">
                  <div className="w-full h-full bg-black rounded-[1.5rem] p-1">
                    <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden relative">
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10"></div>
                      <img
                        src="/images/farmer-profile.png"
                        alt="Farmer Profiles"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-black rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#B3B792] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Farmer Profiles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DLM Workflow Section - No Icons */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              DLM Workflow
            </h2>
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
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 ${item.textColor ? "bg-white/20" : "bg-[#809671]"}`}
                  >
                    <span
                      className={`font-bold ${item.textColor ? "text-white" : "text-white"}`}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3
                    className={`text-xl mb-4 ${item.textColor ? item.textColor : "text-[#725C3A]"}`}
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${item.textColor ? "text-white/90" : "text-[#725C3A]/80"}`}
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
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

      {/* What DLMs Do Section - Redesigned without covering image */}
      <section className="relative py-20 px-8">
        <div className="absolute inset-0">
          <img
            src="/images/african-farmer-tech.jpeg"
            alt="African farmer using technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
                What DLMs Do
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Register farmers and GPS-locate plots",
                    description:
                      "Create comprehensive farmer profiles with precise geographical coordinates for accurate tracking and mapping.",
                  },
                  {
                    title: "Support cooperatives during audits and inspections",
                    description:
                      "Provide technical assistance and documentation support during certification processes and compliance checks.",
                  },
                  {
                    title: "Input harvest, training, and input usage data",
                    description:
                      "Collect and digitize critical agricultural data using mobile devices and tablets for real-time tracking.",
                  },
                  {
                    title: "Help manage farm records and reports",
                    description:
                      "Organize and maintain digital records, generate reports, and ensure data accuracy for stakeholders.",
                  },
                  {
                    title: "Facilitate digital payments and certification documentation",
                    description:
                      "Support transparent payment processes and maintain certification documents for compliance and traceability.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-[#809671] pl-6">
                    <h3
                      className="text-lg text-[#725C3A] mb-2"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#725C3A]/80 leading-relaxed text-sm"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side - Let the background show through */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Updated with field-documentation background */}
      <section className="relative py-20 px-8">
        <div className="absolute inset-0">
          <img
            src="/images/field-documentation.png"
            alt="Field documentation and training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/70 via-white/50 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image Side - Let the background show through */}
            <div className="hidden lg:block"></div>

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
                Benefits for DLMs
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Paid service contracts and performance bonuses",
                    description:
                      "Earn competitive compensation through service agreements with performance-based incentives and bonuses for exceptional work.",
                  },
                  {
                    title: "Field experience in agritech and digital tools",
                    description:
                      "Gain hands-on experience with cutting-edge agricultural technology and digital platforms used in modern farming.",
                  },
                  {
                    title: "Career pathways in agri-business and entrepreneurship",
                    description:
                      "Build valuable skills and networks that open doors to careers in agricultural business and entrepreneurial opportunities.",
                  },
                  {
                    title: "Mentorship from Ecopia and affiliated universities",
                    description:
                      "Receive guidance and support from industry experts and academic institutions to accelerate your professional development.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="border-l-4 border-[#B3B792] pl-6">
                    <h3
                      className="text-lg text-[#725C3A] mb-2"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-[#725C3A]/80 leading-relaxed text-sm"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "300",
                        lineHeight: "1.6",
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 bg-[#725C3A] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2
            className="text-4xl mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Ready to Join Our DLM Network?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 leading-relaxed"
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

      {/* <Footer onNavigate={onNavigate} /> */}
    </div>
  )
}
