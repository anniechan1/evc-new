"use client"

import type React from "react"

import { Send, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import emailjs from "@emailjs/browser"

interface FormData {
  firstName: string
  lastName: string
  email: string
  organization: string
  inquiryType: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

type SubmitStatus = "success" | "error" | null

interface ContactProps {
  onNavigate: (page: string) => void
}

export default function Contact({ onNavigate }: ContactProps) {
  const { t } = useTranslation()
  const [selectedOption, setSelectedOption] = useState(t("contact.inquiryOptions.general"))
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    inquiryType: t("contact.inquiryOptions.general"),
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [showValidation, setShowValidation] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    // Clear error for this field if it was previously marked as an error
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Check each required field
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      isValid = false
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowValidation(true)
    setSubmitStatus(null)

    if (validateForm()) {
      setIsSubmitting(true)

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        organization: formData.organization,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_email: "annie.chan1475@gmail.com",
      }

      try {
        // Send email using EmailJS
        const response = await emailjs.send(
          "service_evc_enquiry", // Replace with your actual Service ID
          "template_evc_enquiry", // Replace with your actual Template ID
          templateParams,
          "69aP3o_cxt7ED4inz", // Replace with your actual Public Key
        )

        console.log("Email sent successfully:", response)
        setSubmitStatus("success")

        // Reset form after submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          inquiryType: t("contact.inquiryOptions.general"),
          message: "",
        })
        setSelectedOption(t("contact.inquiryOptions.general"))

        // Reset validation state
        setShowValidation(false)
      } catch (error) {
        console.error("Email sending failed:", error)
        setSubmitStatus("error")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const inquiryOptions = [
    t("contact.inquiryOptions.general"),
    t("contact.inquiryOptions.partnership"),
    t("contact.inquiryOptions.technical"),
    t("contact.inquiryOptions.dlm"),
    t("contact.inquiryOptions.producer"),
    t("contact.inquiryOptions.buyer"),
  ]

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setFormData((prev) => ({ ...prev, inquiryType: option }))
    setIsDropdownOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Responsive height */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh]">
        <img src="/images/seed.webp" alt="Agricultural field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 sm:px-8">
            <h1
              className="text-2xl sm:text-3xl leading-tight mb-6 md:mb-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.01em",
              }}
            >
              {t("contact.title")}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
              style={{
                fontFamily: "Source Sans Pro, sans-serif",
                fontWeight: "300",
                lineHeight: "1.7",
              }}
            >
              {t("contact.subtitle").split("admin@ecopiavaluechain.com")[0]}
              <a
                href="mailto:admin@ecopiavaluechain.com?subject=Inquiry from Ecopia Value Chain Website"
                className="font-medium text-white hover:text-white/80 transition-colors underline break-all sm:break-normal"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "500",
                }}
              >
                admin@ecopiavaluechain.com
              </a>
              {t("contact.subtitle").split("admin@ecopiavaluechain.com")[1]}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Responsive layout */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white border border-[#725C3A]/20 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6 md:mb-8">
              <h2
                className="text-xl sm:text-2xl text-[#725C3A] mb-3 md:mb-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                {t("contact.formTitle")}
              </h2>
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 text-sm" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-sm" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              )}
              {showValidation && Object.keys(errors).length > 0 && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-yellow-800 text-sm mb-2" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    Please fix the following errors:
                  </p>
                  <ul className="text-yellow-800 text-sm list-disc list-inside">
                    {Object.values(errors).map((error: string, index: number) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p
                className="text-sm sm:text-base text-[#725C3A]/80"
                style={{
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "300",
                  lineHeight: "1.6",
                }}
              >
                {t("contact.formSubtitle")}
              </p>
            </div>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t("contact.firstName")}
                    className={`bg-white border ${errors.firstName && showValidation ? "border-red-500" : "border-[#725C3A]/20"} focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20`}
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && showValidation && (
                    <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t("contact.lastName")}
                    className={`bg-white border ${errors.lastName && showValidation ? "border-red-500" : "border-[#725C3A]/20"} focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20`}
                    style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && showValidation && (
                    <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.email")}
                  className={`bg-white border ${errors.email && showValidation ? "border-red-500" : "border-[#725C3A]/20"} focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20`}
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  disabled={isSubmitting}
                />
                {errors.email && showValidation && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder={t("contact.organization")}
                className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20"
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                disabled={isSubmitting}
              />

              {/* Custom Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-white border border-[#725C3A]/20 focus:border-[#725C3A] rounded-xl py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20 flex items-center justify-between text-left text-gray-500"
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  disabled={isSubmitting}
                >
                  <span
                    className={
                      selectedOption === t("contact.inquiryOptions.general") ? "text-gray-500" : "text-[#725C3A]"
                    }
                  >
                    {selectedOption}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#725C3A]/20 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                    {inquiryOptions.map((option, index) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleOptionSelect(option)}
                        className={`w-full text-left px-3 py-2.5 sm:py-2 text-sm sm:text-base hover:bg-[#F5F5F0] transition-colors ${index === 0 ? "rounded-t-xl" : ""
                          } ${index === inquiryOptions.length - 1 ? "rounded-b-xl" : ""} ${selectedOption === option ? "bg-[#F5F5F0] text-[#725C3A]" : "text-[#725C3A]"
                          }`}
                        style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.message")}
                  rows={4}
                  className={`bg-white border ${errors.message && showValidation ? "border-red-500" : "border-[#725C3A]/20"} focus:border-[#725C3A] rounded-xl resize-none py-2.5 sm:py-2 px-3 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#725C3A]/20`}
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  disabled={isSubmitting}
                />
                {errors.message && showValidation && (
                  <p className="text-red-500 text-xs mt-1" style={{ fontFamily: "Source Sans Pro, sans-serif" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center pt-2 md:pt-4">
                <Button
                  type="submit"
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 py-2 sm:py-2.5 border-[#725C3A] text-[#725C3A] hover:bg-[#F5F5F0] text-sm sm:text-base disabled:opacity-50"
                  style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "400" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : t("contact.sendMessage")}
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 text-[#725C3A]" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
