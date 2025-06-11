"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

interface SubscriptionsProps {
  onNavigate: (page: string) => void
}

export default function Subscriptions({ onNavigate }: SubscriptionsProps) {
  const { t } = useTranslation()

  const handleLearnMore = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfDol1Ffh9pYTcrk5bz-yAjcZWLwUh34cp16_Dj1rHQVbDCHw/viewform",
      "_blank",
    )
  }
  const handleButtonClick = (plan: any, index: number) => {
    // Check if this is the producer card (first card) with Register button
    if (index === 0 && plan.buttonText === "Register") {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSeQPRZV4bcFpwxNbqPvhnTJV_dv-wYzPKAY5uQ4UQOECT8RoA/viewform",
        "_blank",
      )
    } else if (plan.buttonText === "Learn More") {
      handleLearnMore()
    }
  }


  return (
    <div className="min-h-screen relative">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img src="/images/wheat.webp" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - Reduced padding */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4 sm:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("subscriptions.title")}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("subscriptions.subtitle")}
            </p>
          </div>
        </section>

        {/* Subscription Plans - Reduced top padding */}
        <section className="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto max-w-[1100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {((t("subscriptions.stakeholderPlans", { returnObjects: true }) as any[]) || []).map(
                (plan: any, index: number) => (
                  <Card
                    key={index}
                    className="bg-white border border-[#E5D2B8] rounded-2xl hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-4 sm:p-5 md:p-6">
                      {/* Header */}
                      <div className="text-center mb-3 sm:mb-4">
                        <h3
                          className="text-lg sm:text-xl md:text-2xl mb-2 text-[#725C3A]"
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "500",
                          }}
                        >
                          {plan.stakeholder}
                        </h3>
                        <p
                          className="text-sm sm:text-base mb-2 sm:mb-3 text-[#725C3A]/80"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "400",
                          }}
                        >
                          {plan.feeType}
                        </p>
                        <div className="mb-2 sm:mb-3">
                          <span
                            className="text-2xl sm:text-3xl text-[#725C3A]"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
                          >
                            {plan.price}
                          </span>
                          {plan.priceUnit && (
                            <span
                              className="text-sm sm:text-base text-[#725C3A]/80"
                              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
                            >
                              {plan.priceUnit}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Access Description */}
                      <div className="bg-[#E5E0D8]/90 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5">
                        <p
                          className="text-center text-[#725C3A] text-xs sm:text-sm"
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
                      <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                        {((plan.features as string[]) || []).map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 bg-[#725C3A]/80"></div>
                            <span
                              className="text-[#725C3A]/80 text-xs sm:text-sm"
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
                          onClick={() => handleButtonClick(plan, index)}
                          className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full py-1.5 px-4 sm:px-5 text-xs sm:text-sm"
                          style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                        >
                          {plan.buttonText}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
