"use client"

interface SocialResponsibilityProps {
  onNavigate: (page: string) => void
}

export default function SocialResponsibility({ onNavigate }: SocialResponsibilityProps) {
  return (
    <div className="min-h-screen bg-[#E5E0D8] relative overflow-hidden">
      {/* Main Content Section with Large Visible Images */}
      <section className="py-20 px-8 bg-[#E5E0D8] relative min-h-screen">
        <div className="container mx-auto max-w-6xl">
          {/* Very large, obvious blob-shaped images positioned to not interfere with text */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Students image - smooth organic blob top left */}
            <div
              className="absolute top-10 left-10 w-[450px] h-[350px] opacity-75"
              style={{
                clipPath: "ellipse(80% 70% at 30% 40%)",
              }}
            >
              <img src="/images/students.webp" alt="University students" className="w-full h-full object-cover" />
            </div>

            {/* Lab image - flowing organic shape top right */}
            <div
              className="absolute top-20 right-10 w-[400px] h-[320px] opacity-70"
              style={{
                clipPath: "ellipse(75% 85% at 70% 30%)",
              }}
            >
              <img src="/images/gathering.png" alt="Laboratory work" className="w-full h-full object-cover" />
            </div>

            {/* Class image - large curved blob bottom left */}
            <div
              className="absolute bottom-5 left-5 w-[490px] h-[300px] opacity-65"
              style={{
                clipPath: "ellipse(90% 60% at 40% 70%)",
              }}
            >
              <img src="/images/class.webp" alt="Classroom learning" className="w-full h-full object-cover" />
            </div>

            {/* Youth processing image - smooth oval blob bottom right */}
            <div
              className="absolute bottom-5 right-5 w-[375px] h-[375px] opacity-60"
              style={{
                clipPath: "ellipse(65% 80% at 60% 50%)",
              }}
            >
              <img src="/images/youth-processing.png" alt="Youth processing" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content positioned to avoid image overlap */}
          <div className="relative z-10 max-w-4xl mx-auto pt-20">
            <div
              className="bg-white/99 backdrop-blur-md rounded-3xl p-12 shadow-xl ml-auto mr-auto"
              style={{ marginTop: "200px", marginBottom: "200px" }}
            >
              <h1
                className="text-4xl text-[#725C3A] mb-8 text-center"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "300",
                  letterSpacing: "0.01em",
                }}
              >
                Our Commitment to Social Responsibility
              </h1>

              <div
                className="space-y-8 text-[#725C3A]"
                style={{ fontFamily: "Source Sans Pro, sans-serif", fontWeight: "300", lineHeight: "1.8" }}
              >
                <p className="text-lg">
                  At Ecopia, we believe in a future where innovation and inclusion go hand in hand.
                </p>

                <p className="text-lg">
                  The Ecopia Value Chain Digital Platform was built not only as a tool for traceability and
                  compliance—but as a social mission to empower Ethiopia's next generation of entrepreneurs while
                  serving the nation's farmers.
                </p>

                <p className="text-lg">
                  For far too long, startups developed within Ethiopian universities have lacked a bridge to connect
                  with rural communities and deliver value directly to farmers. Ecopia is changing that.
                </p>

                <p className="text-lg">
                  By owning and managing the Ecopia Value Chain platform, we provide students and young innovators a
                  launching pad for their digital startups, creating new income streams, real-world experience, and job
                  opportunities— without charging farmers.
                </p>

                <p className="text-lg">
                  We are firmly convinced that Ethiopian farmers should never have to pay to be included on a digital
                  platform that exists to improve their access to markets and enhance their livelihoods. Instead, we
                  advocate for a model where cooperatives and unions fairly compensate students—Data Logistic
                  Managers—who support the digital onboarding and traceability work.
                </p>

                <div className="bg-[#E5D2B8] rounded-2xl p-8 my-12">
                  <h3
                    className="text-xl text-[#725C3A] mb-6"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Through partnerships with Ethiopian universities and the Ecopia Value Chain, we are creating a
                    socially responsible ecosystem that:
                  </h3>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#809671] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Empowers youth-led innovation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#809671] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Connects academic efforts to real-world impact
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#809671] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Supports farmers and cooperatives without financial burden
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#809671] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Strengthens Ethiopia's agricultural economy through digital tools
                    </li>
                  </ul>
                </div>

                <p className="text-lg">
                  This is not just a platform. It is a movement for equity, sustainability, and shared prosperity— where
                  technology meets community, and education drives transformation.
                </p>

                <div className="text-center mt-12 pt-8 border-t border-[#D2AB80]">
                  <p
                    className="text-2xl text-[#725C3A] font-medium"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "300",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Ecopia – Empowering Innovation. Strengthening Communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}