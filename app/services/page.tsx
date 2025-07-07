import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calculator, Building, FileText, Mountain, Leaf } from "lucide-react"

import { ThemedButton } from "@/components/ui/themed-button"
import { ThemedBadge } from "@/components/ui/themed-badge"
import { ThemedIconWrapper } from "@/components/ui/themed-icon-wrapper"
import { companyInfo, theme } from "@/lib/theme"

export const metadata = {
  title: `Our Services | ${companyInfo.name}`,
  description:
    "Comprehensive engineering consulting services including property valuation, structural design, environmental assessments, and feasibility studies.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/images/services-hero.png"
          alt="Engineering consulting services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl sm:max-w-2xl">
            Comprehensive engineering consulting solutions tailored to your project requirements.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <ThemedBadge className="mb-3 md:mb-4">What We Offer</ThemedBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
              Professional Engineering Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              From initial assessments to detailed project implementation, we provide comprehensive engineering
              consulting services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                id={service.id}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <ThemedIconWrapper className="mb-4">
                    <service.icon className="h-6 w-6" />
                  </ThemedIconWrapper>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-5 md:mb-6 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <ThemedButton className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </ThemedButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            <ThemedBadge className="mb-3 md:mb-4">Our Process</ThemedBadge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">How We Work</h2>
            <p className="text-base md:text-lg text-gray-700">
              Our systematic approach ensures accurate results and client satisfaction at every stage.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line - hidden on mobile, visible on larger screens */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block"
                style={{ backgroundColor: theme.colors.primary[200] }}
              ></div>

              {/* Process steps - mobile optimized */}
              <div className="space-y-8 md:space-y-12 relative">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 relative w-full">
                      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md relative z-10">
                        <ThemedIconWrapper size="sm" className="mb-3 md:mb-4">
                          <span className="font-bold text-lg md:text-xl">{index + 1}</span>
                        </ThemedIconWrapper>
                        <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-base">{step.description}</p>
                      </div>
                      {/* Circle on the timeline - hidden on mobile */}
                      <div
                        className="absolute top-1/2 left-0 md:left-auto md:right-0 transform translate-y-[-50%] translate-x-[-50%] md:translate-x-[50%] w-6 h-6 rounded-full border-4 border-white z-20 hidden md:block"
                        style={{ backgroundColor: theme.colors.primary.main }}
                      ></div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">{/* This div is just for spacing in the timeline */}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/quality.png"
                alt="Engineering quality"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <ThemedBadge className="mb-3 md:mb-4">Why Choose Us</ThemedBadge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
                The {companyInfo.name} Advantage
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-8">
                When you choose {companyInfo.name}, you're choosing a partner committed to engineering excellence,
                innovation, and your project's success.
              </p>
              <div className="space-y-4 md:space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-2 md:mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">{benefit.title}</h3>
                      <p className="text-gray-700 text-sm sm:text-base">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10">
            Contact us today for a consultation and discover how {companyInfo.name} can provide the engineering
            solutions you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact">
              <ThemedButton size="lg" className="font-medium px-6 md:px-8 w-full sm:w-auto" hoverEffect="lift">
                Get Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </ThemedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const services = [
  {
    id: "property-valuation",
    title: "Property Valuation",
    description:
      "Professional property assessment and valuation services for accurate market analysis and investment decisions.",
    image: "/images/residential-1.png",
    icon: Calculator,
    features: ["Market value assessment", "Investment analysis", "Insurance valuation", "Legal compliance reports"],
  },
  {
    id: "architectural-design",
    title: "Architectural Design",
    description:
      "Innovative architectural design solutions that balance functionality, aesthetics, and sustainability.",
    image: "/images/commercial-1.png",
    icon: Building,
    features: [
      "Conceptual design",
      "3D modeling and visualization",
      "Building code compliance",
      "Sustainable design practices",
    ],
  },
  {
    id: "structural-analysis",
    title: "Structural Analysis & Design",
    description:
      "Advanced structural engineering services ensuring safety, efficiency, and code compliance for all projects.",
    image: "/images/industrial-1.png",
    icon: Building,
    features: ["Load analysis and calculations", "Seismic design", "Foundation design", "Structural health assessment"],
  },
  {
    id: "project-reports",
    title: "Detailed Project Reports (DPR)",
    description: "Comprehensive project documentation and feasibility studies for informed decision-making.",
    image: "/images/project-3.png",
    icon: FileText,
    features: ["Technical specifications", "Cost estimation", "Timeline planning", "Risk assessment"],
  },
  {
    id: "geotechnical",
    title: "Geotechnical Analysis",
    description: "Soil and foundation analysis to ensure stable and safe construction on any terrain.",
    image: "/images/process.png",
    icon: Mountain,
    features: [
      "Soil investigation",
      "Foundation recommendations",
      "Slope stability analysis",
      "Ground improvement solutions",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Assessment",
    description: "Comprehensive environmental impact assessments and initial environmental examinations.",
    image: "/images/residential-2.png",
    icon: Leaf,
    features: [
      "Environmental impact assessment",
      "Initial environmental examination",
      "Compliance monitoring",
      "Mitigation strategies",
    ],
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a thorough consultation to understand your project requirements, objectives, and constraints.",
  },
  {
    title: "Site Assessment",
    description: "Our team conducts detailed site surveys and assessments to gather all necessary data for analysis.",
  },
  {
    title: "Analysis & Design",
    description:
      "We perform comprehensive analysis and develop detailed designs using industry-standard software and methodologies.",
  },
  {
    title: "Report Preparation",
    description: "Detailed reports are prepared with findings, recommendations, and technical specifications.",
  },
  {
    title: "Review & Approval",
    description:
      "We work with you to review all deliverables and ensure they meet your requirements and regulatory standards.",
  },
  {
    title: "Implementation Support",
    description: "Ongoing support during project implementation to ensure successful execution of our recommendations.",
  },
]

const benefits = [
  {
    title: "Expert Team",
    description:
      "Our team of licensed engineers brings decades of combined experience across all engineering disciplines.",
  },
  {
    title: "Advanced Technology",
    description: "We use the latest software and analytical tools to ensure accurate and efficient project delivery.",
  },
  {
    title: "Regulatory Compliance",
    description: "Deep understanding of local and international codes and standards ensures full compliance.",
  },
  {
    title: "Timely Delivery",
    description: "We pride ourselves on meeting deadlines and delivering projects on schedule.",
  },
  {
    title: "Cost-Effective Solutions",
    description: "Optimized designs and efficient processes help minimize project costs without compromising quality.",
  },
]
