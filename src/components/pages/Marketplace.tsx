"use client"

import { Search, Coffee, Leaf, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useMemo } from "react"

interface MarketplaceProps {
  onNavigate: (page: string) => void
}

export default function Marketplace({ onNavigate }: MarketplaceProps) {
  const [selectedFilters, setSelectedFilters] = useState({
    productType: "all",
    certification: "all",
    region: "all",
    priceRange: "all",
  })

  const [searchQuery, setSearchQuery] = useState("")

  const coffeeLots = [
    {
      id: 5,
      title: "",
      farmer: "Jimma Coffee Producers",
      region: "Jimma",
      quantity: "",
      price: "€",
      certification: ["EUDR Compliant"],
      harvestDate: "2024",
      quality: "Grade 1",
      image: "/placeholder.svg?height=200&width=300",
      type: "coffee",
    },
  ]

  const digitalServices = [
    {
      title: "Farm Mapping & GPS",
      provider: "",
      price: "€",
      unit: "per farm",
      description: "Professional GPS mapping and digital farm profiling with satellite imagery",
      type: "services",
    },
    {
      title: "Certification Support",
      provider: "",
      price: "€",
      unit: "per audit",
      description: "EUDR and organic certification assistance with documentation support",
      type: "services",
    },
  ]

  const inputSupplies = [
    {
      title: "Organic Fertilizer",
      supplier: "",
      price: "€",
      unit: "",
      certification: "Organic Certified",
      availability: "In Stock",
      type: "inputs",
    },
    {
      title: "Coffee Seedlings",
      supplier: "",
      price: "€",
      unit: "seedling",
      certification: "",
      availability: "Pre-order",
      type: "inputs",
    },
  ]

  // Combine all items for filtering with proper typing
  const allItems = useMemo(
    () => [
      ...coffeeLots.map((item) => ({ ...item, category: "coffee" as const })),
      ...digitalServices.map((item) => ({ ...item, category: "services" as const })),
      ...inputSupplies.map((item) => ({ ...item, category: "inputs" as const })),
    ],
    [],
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
    <div className="min-h-screen bg-[#F8F6F3]">
      {/* Hero Section */}
      <section className="relative py-6 px-8 flex items-center justify-center min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/images/coffee-beans.jpeg"
            alt="Coffee beans background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <h1
              className="text-4xl text-[#725C3A] mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              Agricultural Marketplace
            </h1>
          </div>

          {/* Search and Filters - Removed white background */}
          <div className="w-full max-w-4xl">
            <div className="w-full">
              <div className="flex flex-col lg:flex-row gap-3 items-center w-full">
                <div className="flex-1 relative min-w-[400px]">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#725C3A]/60 w-5 h-5" />
                  <input
                    placeholder="Search coffee lots, services, or inputs..."
                    className="pl-12 py-3 rounded-xl border border-[#E5D2B8] focus:border-[#809671] text-base w-full"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <select
                    className="px-3 py-1.5 rounded-lg border border-[#E5D2B8] bg-white text-[#725C3A] min-w-[120px] text-sm"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    value={selectedFilters.productType}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, productType: e.target.value })}
                  >
                    <option value="all">All Products</option>
                    <option value="coffee">Coffee</option>
                    <option value="inputs">Inputs</option>
                    <option value="services">Services</option>
                  </select>
                  <select
                    className="px-3 py-1.5 rounded-lg border border-[#E5D2B8] bg-white text-[#725C3A] min-w-[130px] text-sm"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    value={selectedFilters.certification}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, certification: e.target.value })}
                  >
                    <option value="all">Certifications</option>
                    <option value="organic">Organic</option>
                    <option value="fairtrade">Fair Trade</option>
                    <option value="eudr">EUDR Compliant</option>
                    <option value="ecopia">Ecopia Certified</option>
                  </select>
                  <select
                    className="px-3 py-1.5 rounded-lg border border-[#E5D2B8] bg-white text-[#725C3A] min-w-[110px] text-sm"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    value={selectedFilters.region}
                    onChange={(e) => setSelectedFilters({ ...selectedFilters, region: e.target.value })}
                  >
                    <option value="all">Regions</option>
                    <option value="sidamo">Sidamo</option>
                    <option value="yirgacheffe">Yirgacheffe</option>
                    <option value="harar">Harar</option>
                    <option value="jimma">Jimma</option>
                    <option value="kaffa">Kaffa</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Lots Section */}
      {(selectedFilters.productType === "all" || selectedFilters.productType === "coffee") && (
        <section className="py-20 px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <p
              className="text-lg text-[#725C3A]/80 leading-relaxed max-w-3xl mx-auto text-center mb-12"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              Connect with verified producers, access quality inputs, and discover professional services—all in one
              trusted platform.
            </p>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#809671] rounded-xl flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h2
                  className="text-2xl text-[#725C3A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    letterSpacing: "0.01em",
                  }}
                >
                  Premium Coffee Lots ({filteredCoffee.length})
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-[#809671] text-[#809671] hover:bg-[#809671] hover:text-white text-xs py-0.5 px-2"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
              >
                View All Coffee
              </Button>
            </div>

            {filteredCoffee.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#725C3A]/60">No coffee lots match your current filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {filteredCoffee.map((lot) => (
                  <Card
                    key={lot.id}
                    className="bg-white border border-[#E5D2B8] rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden max-w-sm"
                  >
                    <CardContent className="p-4">
                      <div className="relative">
                        <img
                          src={lot.image || "/placeholder.svg"}
                          alt={lot.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3
                            className="text-base text-[#725C3A] font-medium"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                          >
                            {lot.title}
                          </h3>
                          <div className="text-right">
                            <span
                              className="text-xl text-[#809671] font-bold"
                              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                            >
                              {lot.price}
                            </span>
                            <p
                              className="text-[10px] text-[#725C3A]/60"
                              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                            >
                              per kilogram
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              Producer:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm font-medium"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                            >
                              {lot.farmer}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              Region:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm font-medium"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                            >
                              {lot.region}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              Available:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm font-medium"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                            >
                              {lot.quantity}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              Quality:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm font-medium"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                            >
                              {lot.quality}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {lot.certification.map((cert, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#E5D2B8] text-[#725C3A] text-xs rounded-full flex items-center space-x-1"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              <Shield className="w-3 h-3" />
                              <span>{cert}</span>
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-center">
                          <Button
                            className="bg-[#809671] hover:bg-[#725C3A] text-white rounded-xl py-0.5 px-2 text-xs"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                          >
                            Request Quote
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

      {/* Digital Services Section */}
      {(selectedFilters.productType === "all" || selectedFilters.productType === "services") && (
        <section className="py-20 px-8 bg-[#F8F6F3]">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#B3B792] rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h2
                  className="text-2xl text-[#725C3A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    letterSpacing: "0.01em",
                  }}
                >
                  Professional Services ({filteredServices.length})
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-[#B3B792] text-[#B3B792] hover:bg-[#B3B792] hover:text-white text-xs py-0.5 px-2"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
              >
                View All Services
              </Button>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#725C3A]/60">No services match your current filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {filteredServices.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-[#E5D2B8] rounded-2xl hover:shadow-lg transition-all duration-300 max-w-sm h-full"
                  >
                    <CardContent className="p-4">
                      <div className="relative h-32 mb-4 bg-[#B3B792]/10 rounded-xl flex items-center justify-center">
                        <Leaf className="w-12 h-12 text-[#B3B792]" />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3
                            className="text-base text-[#725C3A] font-medium"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                          >
                            {service.title}
                          </h3>
                          <div className="text-right">
                            <span
                              className="text-xl text-[#B3B792] font-bold"
                              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                            >
                              {service.price}
                            </span>
                            <p
                              className="text-[10px] text-[#725C3A]/60"
                              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                            >
                              {service.unit}
                            </p>
                          </div>
                        </div>

                        <p
                          className="text-[#725C3A]/80 mb-6 leading-relaxed text-sm"
                          style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300", lineHeight: "1.6" }}
                        >
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <span
                            className="text-[#725C3A]/80 text-sm"
                            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                          >
                            Provider:
                          </span>
                          <span
                            className="text-[#725C3A] text-sm font-medium"
                            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                          >
                            {service.provider}
                          </span>
                        </div>

                        <div className="flex justify-center">
                          <Button
                            className="bg-[#B3B792] hover:bg-[#725C3A] text-white rounded-xl py-0.5 px-2 text-xs"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                          >
                            Book Service
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

      {/* Input Sales Section */}
      {(selectedFilters.productType === "all" || selectedFilters.productType === "inputs") && (
        <section className="py-20 px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D2AB80] rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h2
                  className="text-2xl text-[#725C3A]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    letterSpacing: "0.01em",
                  }}
                >
                  Agricultural Inputs ({filteredInputs.length})
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-[#D2AB80] text-[#D2AB80] hover:bg-[#D2AB80] hover:text-white text-xs py-0.5 px-2"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
              >
                View All Inputs
              </Button>
            </div>

            {filteredInputs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-[#725C3A]/60">No inputs match your current filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {filteredInputs.map((input, index) => (
                  <Card
                    key={index}
                    className="bg-white border border-[#E5D2B8] rounded-2xl hover:shadow-lg transition-all duration-300 max-w-sm h-full"
                  >
                    <CardContent className="p-4">
                      <div className="relative h-32 mb-4 bg-[#D2AB80]/10 rounded-xl flex items-center justify-center">
                        <Truck className="w-12 h-12 text-[#D2AB80]" />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-4">
                          <h3
                            className="text-base text-[#725C3A] font-medium"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                          >
                            {input.title}
                          </h3>
                          <span
                            className={`px-2 py-0.5 text-xs rounded-full ${input.availability === "In Stock"
                              ? "bg-green-100 text-green-800"
                              : input.availability === "Pre-order"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                              }`}
                            style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                          >
                            {input.availability}
                          </span>
                        </div>

                        <div className="mb-6">
                          <div className="flex items-baseline space-x-1">
                            <span
                              className="text-xl text-[#D2AB80] font-bold"
                              style={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
                            >
                              {input.price}
                            </span>
                            <span
                              className="text-[10px] text-[#725C3A]/60"
                              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                            >
                              per {input.unit}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              Supplier:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm font-medium"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                            >
                              {input.supplier}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span
                              className="text-[#725C3A]/80 text-sm"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                            >
                              Certification:
                            </span>
                            <span
                              className="text-[#725C3A] text-sm font-medium"
                              style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "500" }}
                            >
                              {input.certification}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button
                            onClick={() => onNavigate("marketplace")}
                            className="bg-[#D2AB80] hover:bg-[#725C3A] text-white rounded-xl py-0.5 px-2 text-xs"
                            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
                          >
                            Add to Cart
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
    </div>
  )
}
