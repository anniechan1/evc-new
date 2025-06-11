"use client"

import { Search, Coffee, Leaf, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useMemo } from "react"
import { useTranslation } from "react-i18next"

interface MarketplaceProps {
  onNavigate: (page: string) => void
}

export default function Marketplace({ onNavigate }: MarketplaceProps) {
  const { t } = useTranslation()

  const [selectedFilters, setSelectedFilters] = useState({
    productType: "all",
    certification: "all",
    region: "all",
    priceRange: "all",
  })

  const [searchQuery, setSearchQuery] = useState("")

  // Empty arrays for now - cards removed
  const coffeeLots: any[] = []

  // Create services with translations - moved inside component to access t()
  const digitalServices = useMemo(
    () => [
      {
        title: t("marketplace.services.farmMapping.title"),
        provider: t(""),
        price: "€",
        unit: t("marketplace.services.farmMapping.unit"),
        description: t("marketplace.services.farmMapping.description"),
        type: "services",
        image: "/images/geo.webp",
      },
      {
        title: t("marketplace.services.certificationSupport.title"),
        provider: t("marketplace.services.certificationSupport.provider"),
        price: "€",
        unit: t("marketplace.services.certificationSupport.unit"),
        description: t("marketplace.services.certificationSupport.description"),
        type: "services",
        image: "/images/audit.webp",
      },
    ],
    [t],
  )

  const inputSupplies: any[] = []

  // Combine all items for filtering with proper typing
  const allItems = useMemo(
    () => [
      ...coffeeLots.map((item) => ({ ...item, category: "coffee" as const })),
      ...digitalServices.map((item) => ({ ...item, category: "services" as const })),
      ...inputSupplies.map((item) => ({ ...item, category: "inputs" as const })),
    ],
    [digitalServices],
  )

  // Filter logic
  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      // Search query filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase()
        const searchableFields = [
          item.title,
          "farmer" in item ? item.farmer : "",
          "provider" in item ? item.provider : "",
          "supplier" in item ? item.supplier : "",
          "region" in item ? item.region : "",
        ].filter(Boolean)

        const matchesSearch = searchableFields.some((field) => field.toLowerCase().includes(searchLower))

        if (!matchesSearch) return false
      }

      // Product type filter
      if (selectedFilters.productType !== "all") {
        if (selectedFilters.productType !== item.type && selectedFilters.productType !== item.category) {
          return false
        }
      }

      // Certification filter
      if (selectedFilters.certification !== "all") {
        if ("certification" in item && Array.isArray(item.certification)) {
          const hasCertification = item.certification.some((cert: string) =>
            cert.toLowerCase().includes(selectedFilters.certification.toLowerCase()),
          )
          if (!hasCertification) return false
        } else {
          return false
        }
      }

      // Region filter
      if (selectedFilters.region !== "all") {
        if ("region" in item && item.region && item.region.toLowerCase() !== selectedFilters.region.toLowerCase()) {
          return false
        } else if (!("region" in item)) {
          return false
        }
      }

      return true
    })
  }, [searchQuery, selectedFilters, allItems])

  // Separate filtered items by category
  const filteredCoffee = filteredItems.filter((item) => item.category === "coffee")
  const filteredServices = filteredItems.filter((item) => item.category === "services")
  const filteredInputs = filteredItems.filter((item) => item.category === "inputs")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh]">
        <img src="/images/coffee-beans.webp" alt="Coffee beans background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4 sm:mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
              suppressHydrationWarning={true}
            >
              {t("marketplace.title")}
            </h1>
            <p
              className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
              suppressHydrationWarning={true}
            >
              {t("marketplace.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section - Original Design */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white relative z-20">
        <div className="container mx-auto max-w-6xl">
          {/* Search and Filters */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
              <div className="flex-1 relative min-w-0 lg:min-w-[400px]">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#725C3A]/60 w-5 h-5" />
                <input
                  placeholder={t("marketplace.searchPlaceholder")}
                  className="pl-12 py-3 rounded-xl border border-[#E5D2B8] focus:border-[#725C3A] focus:outline-none text-base w-full bg-white"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  suppressHydrationWarning={true}
                />
              </div>
              <div className="flex gap-3 flex-wrap">
                <select
                  className="px-4 py-3 rounded-lg border border-[#E5D2B8] bg-white text-[#725C3A] min-w-[120px] text-sm focus:outline-none focus:border-[#725C3A]"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  value={selectedFilters.productType}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, productType: e.target.value })}
                >
                  <option value="all">{t("marketplace.filters.allProducts")}</option>
                  <option value="coffee">{t("marketplace.filters.coffee")}</option>
                  <option value="inputs">{t("marketplace.filters.inputs")}</option>
                  <option value="services">{t("marketplace.filters.services")}</option>
                </select>
                <select
                  className="px-4 py-3 rounded-lg border border-[#E5D2B8] bg-white text-[#725C3A] min-w-[130px] text-sm focus:outline-none focus:border-[#725C3A]"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  value={selectedFilters.certification}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, certification: e.target.value })}
                >
                  <option value="all">{t("marketplace.filters.certifications")}</option>
                  <option value="organic">{t("marketplace.filters.organic")}</option>
                  <option value="fairtrade">{t("marketplace.filters.fairtrade")}</option>
                  <option value="eudr">{t("marketplace.filters.eudr")}</option>
                  <option value="ecopia">{t("marketplace.filters.ecopia")}</option>
                </select>
                <select
                  className="px-4 py-3 rounded-lg border border-[#E5D2B8] bg-white text-[#725C3A] min-w-[110px] text-sm focus:outline-none focus:border-[#725C3A]"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  value={selectedFilters.region}
                  onChange={(e) => setSelectedFilters({ ...selectedFilters, region: e.target.value })}
                >
                  <option value="all">{t("marketplace.filters.regions")}</option>
                  <option value="sidamo">{t("marketplace.filters.sidamo")}</option>
                  <option value="yirgacheffe">{t("marketplace.filters.yirgacheffe")}</option>
                  <option value="harar">{t("marketplace.filters.harar")}</option>
                  <option value="jimma">{t("marketplace.filters.jimma")}</option>
                  <option value="kaffa">{t("marketplace.filters.kaffa")}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Lots Section - Coming Soon */}
      {(selectedFilters.productType === "all" || selectedFilters.productType === "coffee") && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#725C3A] rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h2
                  className="text-xl sm:text-2xl text-[#725C3A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.sections.coffeeLots")} ({filteredCoffee.length})
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] rounded-full px-6"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                suppressHydrationWarning={true}
              >
                {t("marketplace.buttons.viewAll")}
              </Button>
            </div>

            {/* Coming Soon Message */}
            <div className="text-center py-16 sm:py-20">
              <div className="max-w-md mx-auto">
                <h3
                  className="text-xl sm:text-2xl text-[#725C3A] mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.comingSoon.title")}
                </h3>
                <p
                  className="text-[#725C3A]/70 leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.comingSoon.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Digital Services Section - Original Card Design with Translations */}
      {(selectedFilters.productType === "all" || selectedFilters.productType === "services") && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#725C3A]/10">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#725C3A] rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h2
                  className="text-xl sm:text-2xl text-[#725C3A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.sections.professionalServices")} ({filteredServices.length})
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] rounded-full px-6"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                suppressHydrationWarning={true}
              >
                {t("marketplace.buttons.viewAll")}
              </Button>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg sm:text-xl text-[#725C3A]/60" suppressHydrationWarning={true}>
                  {t("marketplace.noResults.services")}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover bg-gray-100"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3
                            className="text-lg text-[#725C3A] group-hover:text-[#5A4A2E] transition-colors"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              fontWeight: "300",
                              letterSpacing: "0.01em",
                              lineHeight: "1.3",
                            }}
                            suppressHydrationWarning={true}
                          >
                            {service.title}
                          </h3>
                          <div className="text-right">
                            <span
                              className="text-xl text-[#725C3A] font-medium"
                              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                            >
                              {service.price}
                            </span>
                            <p
                              className="text-xs text-[#725C3A]/60"
                              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                              suppressHydrationWarning={true}
                            >
                              {service.unit}
                            </p>
                          </div>
                        </div>

                        <p
                          className="text-[#725C3A]/80 mb-4 leading-relaxed text-sm"
                          style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300", lineHeight: "1.6" }}
                          suppressHydrationWarning={true}
                        >
                          {service.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                              suppressHydrationWarning={true}
                            >
                              {t("marketplace.labels.provider")}:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                              suppressHydrationWarning={true}
                            >
                              {service.provider}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                              suppressHydrationWarning={true}
                            >
                              {t("marketplace.labels.delivery")}:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                              suppressHydrationWarning={true}
                            >
                              {/* {t("marketplace.labels.deliveryTime")} */}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          <span
                            className="px-3 py-1 bg-[#E5D2B8] text-[#725C3A] text-xs rounded-full flex items-center space-x-1"
                            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            suppressHydrationWarning={true}
                          >
                            <Shield className="w-3 h-3" />
                            <span>{t("marketplace.labels.verifiedProvider")}</span>
                          </span>
                        </div>

                        <div className="flex justify-center">
                          <Button
                            variant="outline"
                            className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] rounded-full px-6"
                            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            suppressHydrationWarning={true}
                          >
                            {t("marketplace.buttons.bookService")}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Agricultural Inputs Section - Coming Soon */}
      {(selectedFilters.productType === "all" || selectedFilters.productType === "inputs") && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#725C3A]/10">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#725C3A] rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h2
                  className="text-xl sm:text-2xl text-[#725C3A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                    letterSpacing: "0.01em",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.sections.agriculturalInputs")} ({filteredInputs.length})
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] rounded-full px-6"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                suppressHydrationWarning={true}
              >
                {t("marketplace.buttons.viewAll")}
              </Button>
            </div>

            {/* Coming Soon Message */}
            <div className="text-center py-16 sm:py-20">
              <div className="max-w-md mx-auto">
                <h3
                  className="text-xl sm:text-2xl text-[#725C3A] mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "300",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.comingSoon.title")}
                </h3>
                <p
                  className="text-[#725C3A]/70 leading-relaxed"
                  style={{
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontWeight: "300",
                  }}
                  suppressHydrationWarning={true}
                >
                  {t("marketplace.comingSoon.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
