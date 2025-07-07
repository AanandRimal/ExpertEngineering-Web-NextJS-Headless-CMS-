import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Building, FileText, Calculator, Award, Users, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Our Portfolio | Expert Engineering Solution",
  description:
    "Explore our portfolio of engineering consulting projects including design & construction, DPRs, and valuation services.",
}

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          src="/images/services-hero.png"
          alt="Our portfolio and work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6">Our Portfolio</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
            Showcasing Excellence in Engineering Consulting
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Building className="w-5 h-5 mr-2" />
              <span className="font-medium">200+ Projects</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-medium">5+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5 mr-2" />
              <span className="font-medium">Trusted by Banks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Construction Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold mb-6 shadow-lg">
                <Building className="w-6 h-6 mr-3" />
                Design & Construction Excellence
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">Building the Future</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                With over five years of dedicated experience, our team delivers innovative engineering solutions that
                transform visions into reality across residential and commercial sectors.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Architectural Design</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Specialized residential and commercial building design within Kathmandu Valley, combining
                    functionality with aesthetic excellence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Residential
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Commercial
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                      Kathmandu Valley
                    </Badge>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Construction Projects</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Active residential construction projects since 2020, ensuring quality delivery and client
                    satisfaction at every stage.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-green-50 text-green-700">
                      Since 2020
                    </Badge>
                    <Badge variant="secondary" className="bg-green-50 text-green-700">
                      Quality Assured
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/residential-1.png"
                    alt="Residential construction project"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Modern Residential Design</h4>
                    <p className="text-white/90">Kathmandu Valley Project</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Design Projects</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                    <div className="text-gray-600">Constructions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Master Planning & Urban Development</h4>
                <p className="text-gray-600 mb-4">
                  Comprehensive land plotting and urban development solutions that shape sustainable communities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Land Plotting Services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Urban Development Planning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Infrastructure Integration
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Project Supervision</h4>
                <p className="text-gray-600 mb-4">
                  Professional supervision ensuring quality standards and timely completion of projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality Control
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Timeline Management
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Safety Compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DPR Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-100 relative">
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/20 rounded-full -translate-y-40 -translate-x-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full translate-y-48 translate-x-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full text-lg font-semibold mb-6 shadow-lg">
                <FileText className="w-6 h-6 mr-3" />
                Detailed Project Reports (DPRs)
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Infrastructure Development
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive DPRs for key infrastructure projects across Nepal, ensuring detailed planning and
                successful implementation of community development initiatives.
              </p>
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-2xl font-bold text-xl shadow-lg">
                "Quality is our priority — excellence is our promise!"
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {dprProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="outline"
                        className={`${getCategoryColor(project.category)} border-0 font-semibold`}
                      >
                        {project.category}
                      </Badge>
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 font-medium">📍 {project.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      DPR Completed
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl inline-block">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">9+</div>
                    <div className="text-gray-600">DPR Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600">Municipalities</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Valuation Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-100 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full -translate-y-36 translate-x-36"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full translate-y-40 -translate-x-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold mb-6 shadow-lg">
                <Calculator className="w-6 h-6 mr-3" />
                Professional Valuation Services
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Trusted Financial Partnerships
              </h2>
              <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Valuation determines the current or projected worth of an asset or company. A Property Valuation
                  Report certifies property value, proving financial ties and serving as loan collateral.
                </p>
                <p className="font-semibold text-xl text-indigo-700">
                  Expert Engineering Solution Private Limited conducts land, building, and fixed asset valuations for
                  individuals and financial institutions.
                </p>
                <p>
                  Our company has been working in this field for over five years, building trust with leading financial
                  institutions across Nepal.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Current Clients */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Current Partners</h3>
                  <p className="text-green-100">Active banking relationships</p>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {currentClients.map((client, index) => (
                      <div key={index} className="group">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100">
                          <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md p-2">
                            <Image
                              src={client.logo}
                              alt={`${client.name} logo`}
                              width={100}
                              height={100}
                              className="object-contain h-full w-full"
                            />
                          </div>
                          <h4 className="font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                            {client.name}
                          </h4>
                          <div className="w-full h-1 bg-green-200 rounded-full mt-3">
                            <div className="h-full bg-green-500 rounded-full w-full"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Previous Clients */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white text-center">
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Previous Partners</h3>
                  <p className="text-blue-100">Established banking relationships</p>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {previousClients.map((client, index) => (
                      <div key={index} className="group">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                          <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md p-2">
                            <Image
                              src={client.logo}
                              alt={`${client.name} logo`}
                              width={100}
                              height={100}
                              className="object-contain h-full w-full"
                            />
                          </div>
                          <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {client.name}
                          </h4>
                          <div className="w-full h-1 bg-blue-200 rounded-full mt-3">
                            <div className="h-full bg-blue-500 rounded-full w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl inline-block">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600 mb-2">8+</div>
                    <div className="text-gray-600">Banking Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Valuations Done</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-1.png')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Let us bring our expertise and proven track record to your next engineering project. Contact us today to
            discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-black font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about/team">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-white hover:bg-grey-100 hover:text-gray-900 font-semibold px-8 py-4 text-lg rounded-xl w-full sm:w-auto"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function for category colors
function getCategoryColor(category: string) {
  const colors = {
    "Community Infrastructure": "bg-blue-100 text-blue-700",
    "Public Park": "bg-green-100 text-green-700",
    "Water Infrastructure": "bg-cyan-100 text-cyan-700",
    "Sports Infrastructure": "bg-gray-200 text-gray-700",
    "Agricultural Development": "bg-emerald-100 text-emerald-700",
    "Heritage Infrastructure": "bg-purple-100 text-purple-700",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700"
}

// Data arrays
const dprProjects = [
  {
    title: "Multipurpose Hall with Park",
    location: "Budanilkantha Municipality",
    category: "Community Infrastructure",
  },
  {
    title: "Jestha Nagarik Park",
    location: "KMC-4",
    category: "Public Park",
  },
  {
    title: "Irrigation Projects",
    location: "Janakpur",
    category: "Water Infrastructure",
  },
  {
    title: "Water Supply Projects",
    location: "Tikapur & Terathum",
    category: "Water Infrastructure",
  },
  {
    title: "Sinamangal Park",
    location: "KMC-7",
    category: "Public Park",
  },
  {
    title: "Basketball Court",
    location: "Budanilkantha Municipality",
    category: "Sports Infrastructure",
  },
  {
    title: "Football Ground",
    location: "Budanilkantha Municipality",
    category: "Sports Infrastructure",
  },
  {
    title: "Mid-Hill Agro Masterplan",
    location: "Gorkha",
    category: "Agricultural Development",
  },
  {
    title: "DPR of Temples, Ponds, and Dhunge Dhara",
    location: "KMC",
    category: "Heritage Infrastructure",
  },
]

const currentClients = [
  { name: "NMB Bank", logo: "/images/nmb-bank.png" },
  { name: "Global IME Bank", logo: "/images/global.webp" },
  { name: "Kumari Bank", logo: "/images/kumaribank.jpg" },
  { name: "Machhapuchhre Bank", logo: "/images/machapuchre.jpg" },
]

const previousClients = [
  { name: "NIC Asia Bank", logo: "/images/nic asia.jpg" },
  { name: "Civil Bank", logo: "/images/civil.png" },
  { name: "Nepal Bangladesh Bank", logo: "/images/banlga bank.jpg" },
  { name: "Nabil Bank", logo: "/images/nabil bank.png" },
]
