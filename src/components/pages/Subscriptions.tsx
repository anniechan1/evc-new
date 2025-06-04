"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SubscriptionsProps {
  onNavigate: (page: string) => void
}

export default function Subscriptions({ onNavigate }: SubscriptionsProps) {
  const handleLearnMore = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfDol1Ffh9pYTcrk5bz-yAjcZWLwUh34cp16_Dj1rHQVbDCHw/viewform",
      "_blank",
    )
  }

  const stakeholderPlans = [
    {
      stakeholder: "Producers",
      feeType: "ERP system monthly fee",
      accessDescription: "For registration, harvest management, certifications",
      bgColor: "bg-white",
      borderColor: "border-[#E5D2B8]",
      features: [


        "Implement digital solutions (ERP systems, traceability platforms)",
        "Digital farmer registration",
        "Harvest tracking and management",

        "Navigate certification options"
      ],
      price: "",
      priceUnit: "/month",
      buttonText: "Register",
      buttonStyle: "bg-[#725C3A] hover:bg-[#725C3A]/90",
    },
    {
      stakeholder: "Data Logistic Managers",
      feeType: "Training and app access",
      accessDescription: "Comprehensive training program and mobile tools",
      bgColor: "bg-white",
      textColor: "text-[#725C3A]",
      borderColor: "border-[#E5D2B8]",
      features: [
        "Digital platform training for job creation opportunities",
        "EUDR compliance support for cooperatives and farmers",
        "Supply chain traceability and data management skills",
        "International market access facilitation",
        "Certification as Data Logistics Manager",



      ],
      price: "Free",
      priceUnit: "",
      buttonText: "Learn More",
      buttonStyle: "bg-[#725C3A] text-white hover:bg-[#725C3A]/90",
    },
    {
      stakeholder: "Importers/Buyers",
      feeType: "Document access fee",
      accessDescription: "Download verified sourcing + certificates",
      bgColor: "bg-white",
      textColor: "text-[#725C3A]",
      borderColor: "border-[#E5D2B8]",
      features: [



        "Verified, deforestation-free coffee compliant with EU regulations",
        "Build local expertise and jobs for Ethiopian youth",
        "Enhanced supply chain transparency and risk management",
        "Multiple partnership options (sponsoring, hiring DLMs...)"
      ],
      price: "",
      priceUnit: "/month",
      buttonText: "Register",
      buttonStyle: "bg-[#725C3A] hover:bg-[#725C3A]/90",
    },
  ]

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="py-20 px-8 flex items-center justify-center min-h-[400px]">
        <div className="container mx-auto max-w-5xl text-center">
          <h1
            className="text-3xl text-[#725C3A] mb-8"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Subscription Plans for Every Stakeholder
          </h1>

        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16 px-8 bg-white">
        <div className="container mx-auto max-w-[1200px]">
          <p
            className="text-xl text-[#725C3A] leading-relaxed text-center mb-8"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Choose the right plan for your role in the agricultural value chain. From producers to importers, we have
            tailored solutions for everyone.
          </p>
          <div className="grid lg:grid-cols-3 gap-12">
            {stakeholderPlans.map((plan, index) => (
              <Card
                key={index}
                className={`${plan.bgColor} border-2 ${plan.borderColor} rounded-3xl hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3
                      className={`text-2xl mb-3 ${plan.textColor ? plan.textColor : "text-[#725C3A]"}`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {plan.stakeholder}
                    </h3>
                    <p
                      className={`text-lg mb-4 ${plan.textColor ? "text-[#725C3A]/80" : "text-[#725C3A]/80"}`}
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {plan.feeType}
                    </p>
                    <div className="mb-4">
                      <span
                        className={`text-4xl ${plan.textColor ? plan.textColor : "text-[#725C3A]"}`}
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
                      >
                        {plan.price}
                      </span>
                      {plan.priceUnit && (
                        <span
                          className={`text-lg ${plan.textColor ? "text-[#725C3A]/80" : "text-[#725C3A]/80"}`}
                          style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
                        >
                          {plan.priceUnit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Access Description */}
                  <div className={`bg-[#E5E0D8] rounded-2xl p-6 mb-6`}>
                    <p
                      className={`text-center text-[#725C3A] text-lg`}
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "400",
                        lineHeight: "1.5",
                      }}
                    >
                      {plan.accessDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-[#725C3A]/80`}></div>
                        <span
                          className={`text-[#725C3A]/80 text-lg`}
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "300",
                            lineHeight: "1.5",
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="flex justify-center">
                    <Button
                      onClick={plan.buttonText === "Learn More" ? handleLearnMore : undefined}
                      className={`${plan.buttonStyle} text-white rounded-full py-2 px-6`}
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
