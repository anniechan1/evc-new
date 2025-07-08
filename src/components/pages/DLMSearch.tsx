"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import {
  Search,
  MapPin,
  GraduationCap,
  Globe,
  User,
  Mail,
  Phone,
  Briefcase,
  Code,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LazyImage } from "@/components/ui/lazy-image"
import type { LucideIcon } from "lucide-react"

interface DLMSearchProps {
  onNavigate?: (page: string) => void
}

interface DLMProfile {
  id: number
  name: string
  region: string
  country: string
  degree: string
  field_of_study: string
  university: string
  university_city: string
  languages: string[]
  email: string
  phone?: string
  photo_url?: string
  has_fieldwork_experience: boolean
  fieldwork_experience_description?: string
  has_technical_experience: boolean
  technical_experience_description?: string
}

interface FilterOptions {
  regions: string[]
  universities: string[]
  universityCities: string[]
  degrees: string[]
  fieldsOfStudy: string[]
  languages: string[]
}

// Icon wrapper component with accessibility
const IconWrapper = ({
  Icon,
  className = "w-4 h-4 text-[#725C3A]/60 flex-shrink-0",
  "aria-hidden": ariaHidden = true,
}: {
  Icon: LucideIcon
  className?: string
  "aria-hidden"?: boolean
}) => <Icon className={className} aria-hidden={ariaHidden} />

// Multi-select component
const MultiSelect = ({
  options,
  selected,
  onChange,
  placeholder,
  label,
}: {
  options: string[]
  selected: string[]
  onChange: (values: string[]) => void
  placeholder: string
  label: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option))
    } else {
      onChange([...selected, option])
    }
    // Auto-close after selection
    setTimeout(() => setIsOpen(false), 100)
  }

  const removeOption = (option: string) => {
    onChange(selected.filter((item) => item !== option))
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".multi-select-container")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative multi-select-container">
      <label className="block text-sm font-medium text-[#725C3A] mb-2">{label}</label>
      <div
        className="min-h-[40px] border border-[#E5D2B8] rounded-md p-2 cursor-pointer focus:border-[#725C3A] bg-white relative pr-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length === 0 ? (
          <span className="text-gray-500 text-sm">{placeholder}</span>
        ) : (
          <div className="flex flex-wrap gap-1">
            {selected.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="text-xs bg-[#E5D2B8] text-[#725C3A] border-[#E5D2B8] flex items-center gap-1"
              >
                {item}
                <X
                  className="w-3 h-3 cursor-pointer hover:text-red-600"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeOption(item)
                  }}
                />
              </Badge>
            ))}
          </div>
        )}
        <ChevronDown
          className={`w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 transition-transform pointer-events-none ${isOpen ? "rotate-180" : ""
            }`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-[#E5D2B8] rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`p-2 cursor-pointer hover:bg-gray-100 text-sm ${selected.includes(option) ? "bg-[#F5F5F0] text-[#725C3A] font-medium" : ""
                }`}
              onClick={() => toggleOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Collapsible text component for long descriptions
const CollapsibleText = ({ text, title, maxLength = 120 }: { text: string; title: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLong = text.length > maxLength
  const textId = `text-${Math.random().toString(36).substr(2, 9)}`

  // Don't show expand/collapse if text is not long enough
  if (!isLong) {
    return (
      <p
        className="text-sm text-[#725C3A]/80"
        style={{ fontFamily: "Source Sans Pro, sans-serif" }}
        aria-label={`${title}: ${text}`}
      >
        {text}
      </p>
    )
  }

  const displayText = isExpanded ? text : text.slice(0, maxLength) + "..."

  return (
    <div>
      <p
        id={textId}
        className="text-sm text-[#725C3A]/80"
        style={{ fontFamily: "Source Sans Pro, sans-serif" }}
        aria-label={`${title}: ${text}`}
      >
        {displayText}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-1 text-xs text-[#725C3A] hover:text-[#809671] flex items-center gap-1 transition-colors"
        aria-expanded={isExpanded}
        aria-controls={textId}
        aria-label={isExpanded ? `Show less of ${title.toLowerCase()}` : `Show more of ${title.toLowerCase()}`}
      >
        {isExpanded ? (
          <>
            <ChevronUp className="w-3 h-3" aria-hidden="true" />
            Show less
          </>
        ) : (
          <>
            <ChevronDown className="w-3 h-3" aria-hidden="true" />
            Show more
          </>
        )}
      </button>
    </div>
  )
}

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Cache keys
const CACHE_KEY = "dlm_all_data"
const CACHE_DURATION = 1000 * 60 * 10 // 10 minutes

export default function DLMSearch({ onNavigate }: DLMSearchProps) {
  // State management
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedFieldsOfStudy, setSelectedFieldsOfStudy] = useState<string[]>([])
  const [experienceFilter, setExperienceFilter] = useState("all")
  const [allProfiles, setAllProfiles] = useState<DLMProfile[]>([])
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    regions: [],
    universities: [],
    universityCities: [],
    degrees: [],
    fieldsOfStudy: [],
    languages: [],
  })
  const [showCount, setShowCount] = useState(12)

  // Loading states
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 150)

  // Load cached data
  const loadCachedData = useCallback(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { data, filters, timestamp } = JSON.parse(cached)
        const now = Date.now()

        if (now - timestamp < CACHE_DURATION) {
          setAllProfiles(data)
          setFilterOptions(filters)
          setLoading(false)
          return true
        }
      }
    } catch (error) {
      console.error("Error loading cached data:", error)
    }
    return false
  }, [])

  // Cache data
  const cacheData = useCallback((profiles: DLMProfile[], filters: FilterOptions) => {
    try {
      const cacheData = {
        data: profiles,
        filters,
        timestamp: Date.now(),
      }
      localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
    } catch (error) {
      console.error("Error caching data:", error)
    }
  }, [])

  // Fetch all data
  const fetchAllData = useCallback(async () => {
    if (loadCachedData()) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/dlm-search")
      const data = await response.json()

      if (data.success) {
        setAllProfiles(data.data)
        setFilterOptions(data.filters)
        cacheData(data.data, data.filters)
        setError(null)
      } else {
        setError(data.error || "Failed to fetch DLM profiles")
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      setError("Failed to fetch DLM profiles")
    } finally {
      setLoading(false)
    }
  }, [loadCachedData, cacheData])

  // Client-side filtering
  const filteredProfiles = useMemo(() => {
    let filtered = [...allProfiles]

    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase()
      filtered = filtered.filter(
        (profile) =>
          profile.name.toLowerCase().includes(searchLower) ||
          profile.region.toLowerCase().includes(searchLower) ||
          profile.country.toLowerCase().includes(searchLower) ||
          profile.degree.toLowerCase().includes(searchLower) ||
          profile.field_of_study.toLowerCase().includes(searchLower) ||
          profile.university.toLowerCase().includes(searchLower) ||
          profile.university_city.toLowerCase().includes(searchLower) ||
          profile.languages.some((lang) => lang.toLowerCase().includes(searchLower)) ||
          profile.fieldwork_experience_description?.toLowerCase().includes(searchLower) ||
          profile.technical_experience_description?.toLowerCase().includes(searchLower),
      )
    }

    if (selectedRegions.length > 0) {
      filtered = filtered.filter((profile) => selectedRegions.includes(profile.region))
    }

    if (selectedUniversities.length > 0) {
      filtered = filtered.filter((profile) => selectedUniversities.includes(profile.university))
    }

    if (selectedLanguages.length > 0) {
      filtered = filtered.filter((profile) => profile.languages.some((lang) => selectedLanguages.includes(lang)))
    }

    if (selectedFieldsOfStudy.length > 0) {
      filtered = filtered.filter((profile) => selectedFieldsOfStudy.includes(profile.field_of_study))
    }

    if (experienceFilter !== "all") {
      if (experienceFilter === "fieldwork") {
        filtered = filtered.filter((profile) => profile.has_fieldwork_experience)
      } else if (experienceFilter === "technical") {
        filtered = filtered.filter((profile) => profile.has_technical_experience)
      } else if (experienceFilter === "both") {
        filtered = filtered.filter((profile) => profile.has_fieldwork_experience && profile.has_technical_experience)
      }
    }

    return filtered
  }, [
    allProfiles,
    debouncedSearchTerm,
    selectedRegions,
    selectedUniversities,
    selectedLanguages,
    selectedFieldsOfStudy,
    experienceFilter,
  ])

  // Paginated profiles
  const displayedProfiles = useMemo(() => {
    return filteredProfiles.slice(0, showCount)
  }, [filteredProfiles, showCount])

  // Clear filters
  const clearFilters = useCallback(() => {
    setSearchTerm("")
    setSelectedRegions([])
    setSelectedUniversities([])
    setSelectedLanguages([])
    setSelectedFieldsOfStudy([])
    setExperienceFilter("all")
    setShowCount(12)
  }, [])

  // Show more profiles
  const showMore = useCallback(() => {
    setShowCount((prev) => prev + 12)
  }, [])

  // Profile cards
  const profileCards = useMemo(() => {
    return displayedProfiles.map((profile) => (
      <Card
        key={profile.id}
        className="hover:shadow-lg transition-shadow duration-300"
        role="article"
        aria-labelledby={`profile-name-${profile.id}`}
      >
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Header: Photo and Name */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <LazyImage
                  src={profile.photo_url || "/placeholder.svg?height=64&width=64"}
                  alt={`${profile.name}'s profile photo`}
                  className="w-16 h-16 rounded-full border-2 border-[#E5D2B8] object-cover"
                  fallbackSrc="/placeholder.svg?height=64&width=64"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  id={`profile-name-${profile.id}`}
                  className="text-lg font-medium text-[#725C3A] truncate"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {profile.name}
                </h3>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <IconWrapper Icon={MapPin} />
              <span
                className="text-sm text-[#725C3A]/80"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                aria-label={`Location: ${profile.region}, ${profile.country}`}
              >
                {profile.region}, {profile.country}
              </span>
            </div>

            {/* Education Background */}
            <div className="flex items-start space-x-3">
              <IconWrapper Icon={GraduationCap} className="w-4 h-4 text-[#725C3A]/60 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div
                  className="text-sm text-[#725C3A]/80 font-medium"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  {profile.degree} in {profile.field_of_study}
                </div>
                <div className="text-sm text-[#725C3A]/60" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                  {profile.university}, {profile.university_city}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-start space-x-3">
              <IconWrapper Icon={Globe} className="w-4 h-4 text-[#725C3A]/60 mt-0.5 flex-shrink-0" />
              <div
                className="flex flex-wrap gap-1"
                role="list"
                aria-label={`Languages spoken: ${profile.languages.join(", ")}`}
              >
                {profile.languages.map((language, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs bg-[#E5D2B8] text-[#725C3A] border-[#E5D2B8]"
                    role="listitem"
                  >
                    {language}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Experience Sections */}
            {profile.has_fieldwork_experience && profile.fieldwork_experience_description && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <IconWrapper Icon={Briefcase} />
                  <h4
                    className="text-sm font-medium text-[#725C3A]"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    Fieldwork Experience
                  </h4>
                </div>
                <div className="ml-6">
                  <CollapsibleText text={profile.fieldwork_experience_description} title="Fieldwork Experience" />
                </div>
              </div>
            )}

            {profile.has_technical_experience && profile.technical_experience_description && (
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <IconWrapper Icon={Code} />
                  <h4
                    className="text-sm font-medium text-[#725C3A]"
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  >
                    Technical Experience
                  </h4>
                </div>
                <div className="ml-6">
                  <CollapsibleText text={profile.technical_experience_description} title="Technical Experience" />
                </div>
              </div>
            )}

            {/* Experience Status for those without descriptions */}
            {(!profile.has_fieldwork_experience || !profile.fieldwork_experience_description) &&
              (!profile.has_technical_experience || !profile.technical_experience_description) && (
                <div className="text-sm text-[#725C3A]/60 italic">
                  {!profile.has_fieldwork_experience && !profile.has_technical_experience
                    ? "Currently building experience through studies"
                    : "Experience details not provided"}
                </div>
              )}

            {/* Contact Information */}
            <div className="pt-4 border-t border-gray-100">
              <div className="space-y-2">
                <h4
                  className="text-sm font-medium text-[#725C3A]"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                >
                  Contact
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#725C3A]/60" aria-hidden="true" />
                    <span className="text-sm text-[#725C3A]/80" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                      {profile.email}
                    </span>
                  </div>
                  {profile.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#725C3A]/60" aria-hidden="true" />
                      <span className="text-sm text-[#725C3A]/80" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                        {profile.phone}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    ))
  }, [displayedProfiles])

  // Reset show count when filters change
  useEffect(() => {
    setShowCount(12)
  }, [
    debouncedSearchTerm,
    selectedRegions,
    selectedUniversities,
    selectedLanguages,
    selectedFieldsOfStudy,
    experienceFilter,
  ])

  // Initial data fetch
  useEffect(() => {
    fetchAllData()
  }, [fetchAllData])

  // Loading skeleton
  if (loading) {
    return (
      <div className="space-y-6" role="status" aria-label="Loading DLM profiles">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded" aria-hidden="true"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-20 bg-gray-200 rounded" aria-hidden="true"></div>
            <div className="h-20 bg-gray-200 rounded" aria-hidden="true"></div>
            <div className="h-20 bg-gray-200 rounded" aria-hidden="true"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-200 rounded-lg" aria-hidden="true"></div>
            ))}
          </div>
        </div>
        <span className="sr-only">Loading profiles, please wait...</span>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Search and Filters Section */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg" aria-labelledby="search-heading">


        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert" aria-live="polite">
            <p className="text-red-800 text-sm" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
              {error}
            </p>
          </div>
        )}

        {/* Search Input */}
        <div className="mb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              aria-hidden="true"
            />
            <Input
              type="text"
              placeholder="Search by name, location, university, field of study, or experience..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-[#E5D2B8] focus:border-[#725C3A]"
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              aria-label="Search DLM profiles"
            />
          </div>
          {debouncedSearchTerm && (
            <p className="text-sm text-[#725C3A]/60 mt-2" aria-live="polite" role="status">
              Searching for: "{debouncedSearchTerm}"
            </p>
          )}
        </div>

        {/* Filter Controls */}
        <fieldset className="space-y-4 mb-6">
          <legend className="sr-only">Filter DLM profiles</legend>

          {/* Multi-select filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MultiSelect
              options={filterOptions.regions}
              selected={selectedRegions}
              onChange={setSelectedRegions}
              placeholder="All Regions"
              label="Region"
            />

            <MultiSelect
              options={filterOptions.universities}
              selected={selectedUniversities}
              onChange={setSelectedUniversities}
              placeholder="All Universities"
              label="University"
            />

            <MultiSelect
              options={filterOptions.fieldsOfStudy}
              selected={selectedFieldsOfStudy}
              onChange={setSelectedFieldsOfStudy}
              placeholder="All Fields of Study"
              label="Field of Study"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MultiSelect
              options={filterOptions.languages}
              selected={selectedLanguages}
              onChange={setSelectedLanguages}
              placeholder="All Languages"
              label="Languages"
            />

            {/* Experience Filter */}
            <div>
              <label htmlFor="experience-select" className="block text-sm font-medium text-[#725C3A] mb-2">
                Experience Level
              </label>
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger
                  id="experience-select"
                  className="border-[#E5D2B8] focus:border-[#725C3A]"
                  aria-label="Filter by experience level"
                >
                  <SelectValue placeholder="All Experience Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience Levels</SelectItem>
                  <SelectItem value="fieldwork">Has Fieldwork Experience</SelectItem>
                  <SelectItem value="technical">Has Technical Experience</SelectItem>
                  <SelectItem value="both">Has Both Experiences</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] bg-transparent px-8"
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              aria-label="Clear all filters and reset search"
            >
              Clear All Filters
            </Button>
          </div>
        </fieldset>

        {/* Results Count */}
        <div className="text-sm text-[#725C3A]/80 mb-4" role="status" aria-live="polite">
          Found {filteredProfiles.length} Data Logistic Manager{filteredProfiles.length !== 1 ? "s" : ""}
          {displayedProfiles.length < filteredProfiles.length && (
            <span className="ml-2">
              (Showing {displayedProfiles.length} of {filteredProfiles.length})
            </span>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section aria-labelledby="results-heading">
        <h2 id="results-heading" className="sr-only">
          Search Results
        </h2>

        {filteredProfiles.length === 0 ? (
          <div className="text-center py-12" role="status">
            <User className="w-16 h-16 text-[#725C3A]/40 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-xl text-[#725C3A] mb-2">No profiles found</h3>
            <p className="text-[#725C3A]/60 mb-4">
              {debouncedSearchTerm
                ? `No results for "${debouncedSearchTerm}". Try adjusting your search.`
                : "Try adjusting your search filters"}
            </p>
          </div>
        ) : (
          <>
            {/* Profile Cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              role="list"
              aria-label="DLM profile results"
            >
              {profileCards}
            </div>

            {/* Show More Button */}
            {displayedProfiles.length < filteredProfiles.length && (
              <div className="flex justify-center py-8">
                <Button
                  onClick={showMore}
                  variant="outline"
                  className="border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] bg-transparent px-8"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  aria-label={`Show more profiles. ${filteredProfiles.length - displayedProfiles.length} profiles remaining`}
                >
                  Show More Profiles ({filteredProfiles.length - displayedProfiles.length} remaining)
                </Button>
              </div>
            )}

            {/* End of results indicator */}
            {displayedProfiles.length === filteredProfiles.length && filteredProfiles.length > 12 && (
              <div className="text-center py-8" role="status">
                <p className="text-[#725C3A]/60" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                  You've seen all {filteredProfiles.length} profiles
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}
