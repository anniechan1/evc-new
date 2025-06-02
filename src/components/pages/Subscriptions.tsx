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
        "Digital farmer registration",
        "Harvest tracking and management",
        "Certification support",
        "Payment tracking",
      ],
      price: "$",
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
        "Comprehensive training program",
        "Mobile app access",
        "Data collection tools",
        "Performance tracking",
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
        "Verified producer data access",
        "EUDR-compliant documentation",
        "Real-time traceability reports",
        "Certification downloads",
      ],
      price: "$",
      priceUnit: "/month",
      buttonText: "Register",
      buttonStyle: "bg-[#725C3A] hover:bg-[#725C3A]/90",
    },
  ]

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-4xl text-[#725C3A] mb-8 text-left"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
          >
            Subscription Plans for Every Stakeholder
          </h1>
          <p
            className="text-xl text-[#725C3A] leading-relaxed max-w-3xl text-left"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Choose the right plan for your role in the agricultural value chain. From producers to importers, we have
            tailored solutions for everyone.
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {stakeholderPlans.map((plan, index) => (
              <Card
                key={index}
                className={`${plan.bgColor} border-2 ${plan.borderColor} rounded-3xl hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3
                      className={`text-2xl mb-4 ${plan.textColor ? plan.textColor : "text-[#725C3A]"}`}
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {plan.stakeholder}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${plan.textColor ? "text-[#725C3A]/80" : "text-[#725C3A]/80"}`}
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      {plan.feeType}
                    </p>
                    <div className="mb-6">
                      <span
                        className={`text-4xl font-bold ${plan.textColor ? plan.textColor : "text-[#725C3A]"}`}
                        style={{ fontFamily: "Poppins, sans-serif" }}
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
                  <div className={`bg-[#E5E0D8] rounded-2xl p-4 mb-6`}>
                    <p
                      className={`text-center text-[#725C3A]`}
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "400",
                        lineHeight: "1.6",
                      }}
                    >
                      {plan.accessDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#809671]`}></div>
                        <span
                          className={`text-[#725C3A]`}
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
                  <Button
                    onClick={plan.buttonText === "Learn More" ? handleLearnMore : undefined}
                    className={`w-full ${plan.buttonStyle} text-white rounded-full py-3`}
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
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
            className="text-xl text-[#725C3A] mb-8 leading-relaxed"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Join thousands of producers who are already using EVC to streamline their operations, improve transparency,
            and access better markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full px-8 py-4"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#809671] text-[#725C3A] hover:bg-[#809671] hover:text-white rounded-full px-8 py-4"
              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
            >
              {/* Schedule a Demo */}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
