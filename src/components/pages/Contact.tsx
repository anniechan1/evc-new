"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ContactProps {
  onNavigate: (page: string) => void
}

export default function Contact({ onNavigate }: ContactProps) {
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
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <p
            className="text-xl text-[#725C3A] leading-relaxed max-w-3xl mx-auto text-center mb-8"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Ready to transform your agricultural operations? Contact us directly via email at{" "}
            <a
              href="mailto:admin@ecopiavaluechain.com"
              className="font-medium text-[#809671] hover:text-[#725C3A] transition-colors underline"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "500",
              }}
            >
              admin@ecopiavaluechain.com
            </a>{" "}
            or use our contact form below.
          </p>
          <div className="bg-[#E5E0D8] rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2
                className="text-3xl text-[#725C3A] mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                Contact Form
              </h2>
              <p
                className="text-[#725C3A]/80"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  placeholder="First Name"
                  className="bg-white border-[#D2AB80] focus:border-[#809671] rounded-xl py-4 px-4 w-full"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                />
                <input
                  placeholder="Last Name"
                  className="bg-white border-[#D2AB80] focus:border-[#809671] rounded-xl py-4 px-4 w-full"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                />
              </div>

              <input
                type="email"
                placeholder="your.email@example.com"
                className="bg-white border-[#D2AB80] focus:border-[#809671] rounded-xl py-4 px-4 w-full"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              />

              <input
                placeholder="Organization (optional)"
                className="bg-white border-[#D2AB80] focus:border-[#809671] rounded-xl py-4 px-4 w-full"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              />

              <select
                className="w-full p-4 bg-white border border-[#D2AB80] focus:border-[#809671] rounded-xl"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              >
                <option>General Inquiry</option>
                <option>Partnership Opportunity</option>
                <option>Technical Support</option>
                <option>DLM Application</option>
                <option>Producer Registration</option>
                <option>Buyer/Importer Interest</option>
              </select>

              <textarea
                placeholder="Tell us about your needs, questions, or how we can help you..."
                rows={5}
                className="bg-white border-[#D2AB80] focus:border-[#809671] rounded-xl resize-none p-4 w-full"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-[#725C3A] hover:bg-[#809671] text-white rounded-xl py-4 group px-8"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 px-8 bg-[#E5D2B8]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2
              className="text-4xl text-[#725C3A] mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Additional Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Producers",
                description: "Ready to digitize your operations?",
                buttonText: "Get Started",
                buttonAction: () =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeQPRZV4bcFpwxNbqPvhnTJV_dv-wYzPKAY5uQ4UQOECT8RoA/viewform",
                    "_blank",
                  ),
              },
              {
                title: "For DLMs",
                description: "Interested in becoming a Data Logistic Manager?",
                buttonText: "Apply Now",
                buttonAction: () =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdHY6eRAGHRjcb154z2nFstqvey49E_XK525SSK3-acwN8LVw/viewform",
                    "_blank",
                  ),
              },
              {
                title: "For Buyers",
                description: "Looking for traceable, compliant products?",
                buttonText: "Learn More",
                buttonAction: () => onNavigate("exporters-importers"),
              },
            ].map((item, index) => (
              <Card key={index} className="bg-white border-0 rounded-2xl text-center">
                <CardContent className="p-6">
                  <h3
                    className="text-xl text-[#725C3A] mb-3"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#725C3A]/80 mb-6"
                    style={{
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontWeight: "300",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.description}
                  </p>
                  <Button
                    onClick={item.buttonAction}
                    className="bg-[#809671] hover:bg-[#725C3A] text-white rounded-full px-6"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                  >
                    {item.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
