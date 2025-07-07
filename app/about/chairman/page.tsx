import Link from "next/link"
import { ArrowRight, Phone, Mail, Award, Target, Building } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Message from Chairman | Expert Engineering Solution",
  description:
    "Read the inspiring message from Er. Anil Dhamala, Chairman and Founder of Expert Engineering Solution, about our vision, mission, and commitment to engineering excellence.",
}

export default function ChairmanPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Message from Chairman</h1>
            <p className="text-xl text-gray-600">
              A personal message from our founder about our journey, vision, and commitment to engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Chairman Profile */}
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-8 text-center">
                    {/* Photo Placeholder */}
                    <div
                      className="w-40 h-40 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                      style={{ background: "linear-gradient(135deg, #0da04e, #054069)" }}
                    >
                      <span className="text-5xl font-bold text-white">AD</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Er. Anil Dhamala</h2>
                    <p className="font-semibold text-lg mb-2" style={{ color: "#0da04e" }}>
                      Chairman & Founder
                    </p>
                    <p className="text-gray-600 mb-6">Civil Engineer</p>

                    {/* Contact Information */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3">
                        <Phone className="h-4 w-4 mr-3" style={{ color: "#0da04e" }} />
                        <span className="text-gray-700">98434543</span>
                      </div>
                      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-3">
                        <Mail className="h-4 w-4 mr-3" style={{ color: "#0da04e" }} />
                        <a
                          href="mailto:anildhamala@gmail.com"
                          className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                          anildhamala@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold" style={{ color: "#0da04e" }}>
                          5+
                        </div>
                        <div className="text-sm text-gray-600">Years Leadership</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="text-2xl font-bold" style={{ color: "#0da04e" }}>
                          200+
                        </div>
                        <div className="text-sm text-gray-600">Projects Led</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-8">
                {/* Welcome Message */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="mb-6">
                    <div className="text-6xl opacity-20 font-serif leading-none" style={{ color: "#0da04e" }}>
                      "
                    </div>
                  </div>

                  <div className="space-y-6 text-gray-700">
                    <p className="text-xl leading-relaxed font-medium text-gray-900">
                      Dear Valued Clients and Partners,
                    </p>

                    <p className="text-lg leading-relaxed">
                      Welcome to <strong style={{ color: "#0da04e" }}>Expert Engineering Solution</strong>. As the
                      Chairman and founder of this organization, I am proud to lead a team of dedicated engineers who
                      share a common vision of excellence in engineering consulting.
                    </p>

                    <p className="leading-relaxed">
                      Since our establishment in <strong>2020</strong>, we have been committed to providing innovative
                      and reliable engineering solutions that meet the highest standards of quality and precision. Our
                      journey began with a simple yet powerful belief: that every project, regardless of its size,
                      deserves the utmost attention to detail and professional expertise.
                    </p>
                  </div>
                </div>

                {/* Our Journey */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6" style={{ color: "#0da04e" }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Journey</h3>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Over the past <strong>5 years</strong>, we have had the privilege of working on diverse projects
                      ranging from property valuations to complex environmental assessments. Our success is built on the
                      foundation of trust, technical competence, and unwavering commitment to our clients' objectives.
                    </p>

                    <p className="leading-relaxed">
                      We have completed over <strong>100 projects</strong> across various sectors, establishing strong
                      partnerships with leading financial institutions including NMB Bank, Global IME Bank, Kumari Bank,
                      and Machhapuchhre Bank. Each project has been a learning experience that has strengthened our
                      capabilities and refined our approach.
                    </p>
                  </div>
                </div>

                {/* Vision & Commitment */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6" style={{ color: "#0da04e" }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision & Commitment</h3>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      As we continue to grow and evolve, we remain dedicated to embracing new technologies and
                      sustainable practices while maintaining the core values that have defined our success. Our team of
                      experienced engineers brings together decades of collective expertise to deliver solutions that
                      not only meet current needs but also anticipate future challenges.
                    </p>

                    <p className="leading-relaxed">
                      We are committed to maintaining the highest standards of professional integrity, technical
                      excellence, and client satisfaction. Every project we undertake is approached with the same level
                      of dedication and attention to detail, regardless of its scale or complexity.
                    </p>
                  </div>
                </div>

                {/* Future Outlook */}
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{ background: "linear-gradient(135deg, #0da04e, #054069)" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Looking Forward</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      I invite you to explore our services and discover how Expert Engineering Solution can contribute
                      to the success of your next project. Together, we can build a more sustainable and resilient
                      future through engineering excellence.
                    </p>

                    <p className="leading-relaxed">
                      Thank you for your trust and partnership. We look forward to continuing our journey of excellence
                      and innovation in the years to come.
                    </p>
                  </div>
                </div>

                {/* Signature */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-900 mb-1">Warm regards,</p>
                      <p className="text-2xl font-bold mb-2" style={{ color: "#0da04e" }}>
                        Er. Anil Dhamala
                      </p>
                      <p className="text-gray-600">Chairman & Founder</p>
                      <p className="text-gray-600">Expert Engineering Solution</p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-3 justify-end">
                        {/* Facebook */}
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0da04e, #054069)" }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                            </svg>
                          </div>
                        </a>
                        {/* Instagram */}
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0da04e, #054069)" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7.75 2.75A5 5 0 0 0 2.75 7.75v8.5A5 5 0 0 0 7.75 21.25h8.5a5 5 0 0 0 5-5v-8.5a5 5 0 0 0-5-5h-8.5zM12 8.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5zm4.25-.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
                            </svg>
                          </div>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0da04e, #054069)" }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452z"/>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Achievements */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Achievements</h2>
              <p className="text-gray-600">
                Er. Anil Dhamala's leadership has driven Expert Engineering Solution to remarkable milestones
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                  5+
                </div>
                <p className="text-gray-700 font-medium">Years of Leadership</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                  200+
                </div>
                <p className="text-gray-700 font-medium">Projects Successfully Led</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                  10+
                </div>
                <p className="text-gray-700 font-medium">Team Members Guided</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                  8+
                </div>
                <p className="text-gray-700 font-medium">Banking Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your engineering consulting needs and discover how our experienced leadership
            can guide your project to success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-white font-semibold px-8" style={{ backgroundColor: "#0da04e" }}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about/team">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-white/10 hover:bg-white/5 font-semibold px-8"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
