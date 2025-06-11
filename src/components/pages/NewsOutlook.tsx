"use client"

import { Calendar, User, Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

interface NewsOutlookProps {
  onNavigate: (page: string) => void
}

export default function NewsOutlook({ onNavigate }: NewsOutlookProps) {
  const { t, i18n } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Initialize categories and set "All" as default
  const categories = (t("newsOutlook.categories", { returnObjects: true }) as string[]) || []
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "All")

  // Array of 6 images for the slider
  const headerImages = [
    "/images/girl.JPG",
    "/images/field-documentation.png",
    "/images/booth.png",
    "/images/gathering.png",
    "/images/lecture.jpg",
    "/images/lab.webp",
  ]

  // Update selected category when language changes to keep "All" selected
  useEffect(() => {
    const updatedCategories = (t("newsOutlook.categories", { returnObjects: true }) as string[]) || []
    if (updatedCategories.length > 0) {
      setSelectedCategory(updatedCategories[0]) // Always select the first category which is "All"
    }
  }, [t, i18n.language])

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const isMobile = window.innerWidth < 640
      const maxSlides = isMobile ? headerImages.length : headerImages.length - 2
      setCurrentSlide((prev) => (prev + 1) % maxSlides)
    }, 4000)

    return () => clearInterval(timer)
  }, [headerImages.length])

  const nextSlide = () => {
    const isMobile = window.innerWidth < 640
    const maxSlides = isMobile ? headerImages.length : headerImages.length - 2
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    const isMobile = window.innerWidth < 640
    const maxSlides = isMobile ? headerImages.length : headerImages.length - 2
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const newsArticles = [
    {
      title: t("newsOutlook.articles.0.title"),
      excerpt: t("newsOutlook.articles.0.excerpt"),
      author: t("newsOutlook.articles.0.author"),
      date: t("newsOutlook.articles.0.date"),
      category: t("newsOutlook.articles.0.category"),
      image: "/images/coffeefruit.webp",
      icon: Globe,
      bgColor: "bg-white",
      onClick: () => onNavigate("eudr-compliance"),
    }
  ]

  const filteredArticles =
    selectedCategory === categories[0] // Check if it's the first category ("All")
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section with sliding images */}
      <section className="relative h-[50vh] sm:h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Sliding container */}
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              transform:
                window.innerWidth < 640
                  ? `translateX(-${currentSlide * 100}%)`
                  : `translateX(-${currentSlide * 33.333}%)`,
            }}
          >
            {headerImages.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-1/3 h-full px-0 sm:px-1">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 sm:p-2 transition-all duration-300 z-10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-1 sm:p-2 transition-all duration-300 z-10"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {Array.from({
            length: window.innerWidth < 640 ? headerImages.length : headerImages.length - 2,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
            />
          ))}
        </div>

        {/* Overlay with text */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-5">
          <div className="text-center text-white max-w-4xl px-4 sm:px-8">
            <h1
              className="text-2xl sm:text-3xl leading-tight mb-4 sm:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("newsOutlook.title")}
            </h1>
            <p
              className="text-base sm:text-lg text-white leading-relaxed max-w-4xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "400",
                lineHeight: "1.7",
              }}
            >
              {t("newsOutlook.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 px-4 sm:px-8 bg-white relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className={`rounded-full px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm ${category === selectedCategory
                  ? "bg-[#725C3A] hover:bg-[#725C3A]/90 text-white"
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
      <section className="pt-6 sm:pt-8 pb-12 sm:pb-20 px-4 sm:px-8 bg-white relative z-20">
        <div className="container mx-auto max-w-6xl">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 sm:py-20">
              <p
                className="text-lg sm:text-xl text-[#725C3A]/60"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                }}
              >
                {t("newsOutlook.noArticles")}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article, index) => (
                <Card
                  key={index}
                  className={`${article.bgColor} border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                  onClick={article.onClick}
                >
                  <CardContent className="p-0">
                    <div
                      className="w-full h-36 sm:h-48 bg-gray-100 rounded-t-3xl"
                      style={{
                        backgroundImage: `url(${article.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                        <article.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#725C3A]" />
                        <span
                          className="text-xs sm:text-sm text-[#725C3A]/80"
                          style={{
                            fontFamily: "Source Sans Pro, sans-serif",
                            fontWeight: "400",
                          }}
                        >
                          {article.category}
                        </span>
                      </div>

                      <h3
                        className="text-lg sm:text-xl mb-2 sm:mb-3 text-[#725C3A] group-hover:text-[#5A4A2E] transition-colors"
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
                        className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-[#725C3A]/80"
                        style={{
                          fontFamily: "Source Sans Pro, sans-serif",
                          fontWeight: "300",
                          lineHeight: "1.6",
                        }}
                      >
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#725C3A]/60" />
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
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[#725C3A]/60" />
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
