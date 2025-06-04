"use client"

import { Monitor, Play, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface UsingPlatformProps {
  onNavigate: (page: string) => void
}

export default function UsingPlatform({ onNavigate }: UsingPlatformProps) {
  const platformFeatures = [
    {
      title: "Welcome & Visibility",
      description: "Get started with your digital profile and increase your market visibility",
      videoTitle: "Getting Started with EVC Platform",
    },
    {
      title: "Demonstrating Compliance",
      description: "Meet EUDR requirements and sustainability standards with ease",
      videoTitle: "EUDR Compliance Made Simple",
    },
    {
      title: "ERP System for Organization",
      description: "Streamline your internal operations with integrated management tools",
      videoTitle: "Managing Your Operations",
    },
    {
      title: "Reaching Buyers & Uploading Offers",
      description: "Connect with international buyers and showcase your products",
      videoTitle: "Marketing Your Products",
    },
    {
      title: "Sourcing Inputs",
      description: "Access quality agricultural inputs through our marketplace",
      videoTitle: "Finding Quality Inputs",
    },
  ]

  return (
    <div className="min-h-screen bg-[#E5E0D8]">
      {/* Hero Section - Full Image Coverage */}
      <section className="relative h-[70vh]">
        <img
          src="/images/training.jpeg"
          alt="Online training session with video conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h1
              className="text-4xl leading-tight mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Using the EVC Platform
            </h1>
          </div>
        </div>
      </section>

      {/* Platform Features - List Style */}
      <section className="py-20 px-8 bg-white">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-16">
            <h2
              className="text-4xl text-[#725C3A] mb-10"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Platform Features
            </h2>
            <p
              className="text-xl leading-relaxed max-w-5xl mx-auto text-[#725C3A]/80"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              Learn how to maximize the potential of the EVC platform with our comprehensive guides and
              videos.
            </p>
          </div>

          <div className="space-y-8">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F8F6F3] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3
                      className="text-2xl text-[#725C3A] mb-4"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="leading-relaxed text-[#725C3A]/80 text-lg"
                      style={{
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontWeight: "350",
                        lineHeight: "1.6",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                  <div className="ml-8">
                    <Button
                      className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full group-hover:scale-105 transition-transform px-6 py-3"
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {feature.videoTitle}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-8 bg-[#E5D2B8]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
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

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-[#725C3A] mx-auto mb-4" />
                <h3
                  className="text-xl text-[#725C3A] mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  User Documentation
                </h3>
                <p
                  className="text-[#725C3A]/80 mb-6 text-lg"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "350",
                    lineHeight: "1.6",
                  }}
                >
                  Comprehensive guides and documentation for all platform features
                </p>
                <Button
                  className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  Download Guides
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-2xl">
              <CardContent className="p-8 text-center">
                <Monitor className="w-12 h-12 text-[#725C3A] mx-auto mb-4" />
                <h3
                  className="text-xl text-[#725C3A] mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  Training Sessions
                </h3>
                <p
                  className="text-[#725C3A]/80 mb-6 text-lg"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "350",
                    lineHeight: "1.6",
                  }}
                >
                  Access our training sessions and Q&A resources with platform experts
                </p>
                <Button
                  className="bg-[#725C3A] hover:bg-[#725C3A]/90 text-white rounded-full"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                >
                  View Training Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
