import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Award, Clock, Target, Eye, Lightbulb, Compass, Calculator } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Overview | Expert Engineering Solution",
  description:
    "Learn about Expert Engineering Solution's history, mission, vision, values, and our commitment to excellence in engineering consulting.",
}

export default function AboutOverviewPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image src="/images/about-team.png" alt="Engineering team" fill className="object-cover" priority />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Expert Engineering Solution</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Engineering excellence through innovation, precision, and unwavering commitment to our clients' success.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#0da04e", color: "white" }}
            >
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Mission & Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Guided by our core principles, we strive to transform the engineering consulting industry and create
              lasting value for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#0da04e" }}
                >
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To provide innovative and sustainable engineering solutions that exceed client expectations while
                contributing to the development of resilient infrastructure and communities. We are committed to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Delivering accurate and reliable engineering assessments and solutions
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Ensuring compliance with industry standards and regulatory requirements
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Promoting sustainable and environmentally responsible engineering practices
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: "#0da04e" }}
                >
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To be the leading engineering consulting firm recognized for technical excellence, innovation, and
                commitment to sustainable development:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Setting industry benchmarks for quality and innovation in engineering consulting
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Building long-term partnerships with clients and stakeholders based on trust and excellence
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                  <p className="text-gray-700 dark:text-gray-300">
                    Contributing to sustainable infrastructure development and environmental stewardship
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-green-50 dark:bg-green-900/30 p-8 rounded-2xl max-w-3xl mx-auto">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#0da04e" }}
              >
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Approach</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                We believe that successful engineering consulting is built on a foundation of technical expertise,
                innovative thinking, and collaborative partnerships. By combining proven methodologies with cutting-edge
                technology, we deliver solutions that stand the test of time.
              </p>
              <Link href="/contact">
                <Button className="text-white font-semibold" style={{ backgroundColor: "#0da04e" }}>
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: "#0da04e", color: "white" }}
              >
                Our Story
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Building a Legacy of Engineering Excellence
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                Founded in 2020, Expert Engineering Solution began as a specialized engineering consulting firm with a
                vision to provide comprehensive, reliable, and innovative engineering solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Over the past 15 years, we've grown into a trusted partner for clients across various sectors,
                completing over 200 projects ranging from property valuations to complex environmental assessments. Our
                success is built on our commitment to technical excellence, regulatory compliance, and client
                satisfaction.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Today, Expert Engineering Solution continues to push the boundaries of engineering consulting, embracing
                new technologies and sustainable practices to deliver exceptional results for our clients across diverse
                industries.
              </p>
              <Link href="/contact">
                <Button className="text-white font-semibold" style={{ backgroundColor: "#0da04e" }}>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/about-story.png" alt="Company history" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#0da04e", color: "white" }}
            >
              Our Values
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">What Drives Us</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our core values guide everything we do, from how we interact with clients to how we approach each
              engineering challenge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We strive for excellence in every aspect of our engineering consulting services, from analysis to
                delivery.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Precision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We conduct our work with meticulous attention to detail and accuracy in all calculations and
                assessments.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace new technologies and methodologies to deliver innovative solutions for complex engineering
                challenges.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We deliver on our promises, meeting deadlines and exceeding expectations consistently across all
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#0da04e", color: "white" }}
            >
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Areas of Specialization</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Our comprehensive expertise spans multiple engineering disciplines and consulting services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "#0da04e" }}
                  >
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{area.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{area.description}</p>
                  <ul className="text-left space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: "#0da04e" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <p className="text-white font-medium">Projects Completed</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <p className="text-white font-medium">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-white font-medium">Expert Engineers</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-white font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your engineering consulting needs and discover how Expert Engineering Solution
            can bring your project to success.
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
                className="text-white border-white bg-white/10  hover:bg-white/5 font-semibold px-8"
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

// Sample data
import { Building } from "lucide-react"

const expertiseAreas = [
  {
    title: "Property & Valuation",
    description: "Comprehensive property assessment and valuation services for various property types and purposes.",
    icon: Calculator,
    services: ["Market value assessment", "Investment analysis", "Insurance valuation", "Rental assessment"],
  },
  {
    title: "Structural Engineering",
    description:
      "Advanced structural analysis and design services ensuring safety and compliance with all relevant codes.",
    icon: Building,
    services: ["Structural analysis", "Foundation design", "Seismic assessment", "Retrofitting solutions"],
  },
  {
    title: "Environmental Services",
    description: "Environmental impact assessments and sustainability consulting for responsible development.",
    icon: Compass,
    services: [
      "Environmental impact assessment",
      "Initial environmental examination",
      "Compliance monitoring",
      "Sustainability consulting",
    ],
  },
]
