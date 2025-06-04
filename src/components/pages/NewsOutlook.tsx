"use client"

import { Calendar, User, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface NewsOutlookProps {
  onNavigate: (page: string) => void
}

export default function NewsOutlook({ onNavigate }: NewsOutlookProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const newsArticles = [
    {
      title: "Digital Transformation in Ethiopian Coffee: A Field Report",
      excerpt:
        "How Data Logistic Managers are revolutionizing data collection in rural cooperatives across Sidamo region.",
      author: "",
      date: "",
      category: "Field Stories",
      image: "",
      icon: Users,
      bgColor: "bg-white",
    },
    {
      title: "EUDR Compliance: What Ethiopian Exporters Need to Know",
      excerpt: "Breaking down the new EU Deforestation Regulation and its impact on coffee exports from Ethiopia.",
      author: "Dr. ",
      date: "",
      category: "Market Trends",
      image: "",
      icon: Globe,
      bgColor: "bg-white",
    },
  ]

  const categories = ["All", "Field Stories", "Market Trends", "Tech Outlook", "Success Stories", "Developer Stories"]

  const filteredArticles =
    selectedCategory === "All" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section with Inverted Half-Circle Background */}
      <section className="relative overflow-hidden">
        {/* Inverted half-circle background with field image */}
        <div className="relative">
          <div
            className="w-full h-[400px] relative"
            style={{
              clipPath: "ellipse(120% 80% at 50% 100%)",
            }}
          >
            <img src="/images/field.jpg" alt="Agricultural field" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* Content positioned over the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto max-w-4xl text-center px-8">
            <h1
              className="text-3xl text-white mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              News & Outlook
            </h1>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-8 bg-white relative z-20">
        <div className="container mx-auto max-w-6xl">
          <p
            className="text-lg text-[#725C3A]/90 leading-relaxed max-w-5xl mx-auto text-center mb-10"
            style={{
              fontFamily: "Source Sans Pro, sans-serif",
              fontWeight: "300",
              lineHeight: "1.7",
            }}
          >
            Stories from the value chain: field updates, market insights, technology developments, and success stories
            from community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`rounded-full px-6 ${category === selectedCategory
                  ? "bg-[#725C3A] hover:bg-[#5A4A2E] text-white"
                  : "border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0]"
                  }`}
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

        </div>
      </section>

      {/* News Articles */}
      <section className="pt-8 pb-20 px-8 bg-white relative z-20">
        <div className="container mx-auto max-w-6xl">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="text-xl text-[#725C3A]/60"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                }}
              >
                No articles found for this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <Card
                  key={index}
                  className={`${article.bgColor} border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                >
                  <CardContent className="p-0">
                    <div className="w-full h-48 bg-gray-100 rounded-t-3xl"></div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <article.icon className="w-5 h-5 text-[#725C3A]" />
                        <span
                          className="text-sm text-[#725C3A]/80"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "400",
                          }}
                        >
                          {article.category}
                        </span>
                      </div>

                      <h3
                        className="text-xl mb-3 text-[#725C3A] group-hover:text-[#5A4A2E] transition-colors"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "300",
                          letterSpacing: "0.01em",
                          lineHeight: "1.3",
                        }}
                      >
                        {article.title}
                      </h3>

                      <p
                        className="leading-relaxed mb-4 text-[#725C3A]/80"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.6",
                        }}
                      >
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-[#725C3A]/60" />
                          <span
                            className="text-[#725C3A]/80"
                            style={{
                              fontFamily: "Source Sans Pro, sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            {article.author}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-[#725C3A]/60" />
                          <span
                            className="text-[#725C3A]/80"
                            style={{
                              fontFamily: "Source Sans Pro, sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            {article.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
