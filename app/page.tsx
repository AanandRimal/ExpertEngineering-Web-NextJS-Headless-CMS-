"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, ChevronRight, Eye, Calculator, Building, Compass, Target } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HoverButton } from "@/components/ui/hover-button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { HoverCard } from "@/components/animations/hover-card"
import { CountUp } from "@/components/animations/count-up"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import AssociationsSlider from "@/components/associations-slider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.png"
            alt="Engineering consulting background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Hero Content */}
        <div className="absolute inset-0 z-30 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-md">
                Engineering <span style={{ color: "#0da04e" }}>Excellence</span> for Every Project
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-10 max-w-xl md:max-w-2xl mx-auto drop-shadow-md">
                Comprehensive engineering consulting services including property valuation, structural design,
                environmental assessments, and feasibility studies.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/services" className="w-full sm:w-auto">
                  <AnimatedButton
                    size="lg"
                    className="text-white font-semibold px-6 sm:px-8 w-full sm:w-auto"
                    style={{ backgroundColor: "#0da04e" }}
                    hoverEffect="lift"
                    iconAnimation={true}
                  >
                    Our Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <HoverButton
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white/20 hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                    hoverEffect="glow"
                    rippleColor="rgba(255, 255, 255, 0.3)"
                  >
                    View Portfolio
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </HoverButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 ">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-3 md:mb-4"
                style={{ backgroundColor: "#0da04e", color: "white" }}
              >
                Our Expertise
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                Comprehensive Engineering Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                From initial feasibility studies to detailed project reports, we provide end-to-end engineering
                consulting services.
              </p>
            </div>
          </FadeIn>

          <StaggerIn
            direction="up"
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            <HoverCard>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow h-full">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#0da04e" }}
                >
                  <Calculator className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                  Property Valuation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Professional property assessment and valuation services for residential, commercial, and industrial
                  properties.
                </p>
              </div>
            </HoverCard>

            <HoverCard>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow h-full">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#0da04e" }}
                >
                  <Building className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                  Structural Design
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Advanced structural analysis and design services ensuring safety, efficiency, and code compliance.
                </p>
              </div>
            </HoverCard>

            <HoverCard>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow h-full">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#0da04e" }}
                >
                  <Compass className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">
                  Environmental Assessment
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Comprehensive environmental impact assessments and initial environmental examinations.
                </p>
              </div>
            </HoverCard>
          </StaggerIn>

          <div className="text-center mt-10 md:mt-12">
            <Link href="/services">
              <HoverButton
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20 hover:text-white font-semibold px-6 sm:px-8 w-full sm:w-auto backdrop-blur-sm"
                hoverEffect="glow"
                rippleColor="rgba(255, 255, 255, 0.3)"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </HoverButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Associations Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                Our Associations
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
                We are proud to partner with industry leaders and trusted organizations.
              </p>
            </div>
          </FadeIn>
          <AssociationsSlider />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "#0da04e" }}
                  >
                    <Target className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To provide innovative and sustainable engineering solutions that exceed client expectations while
                  contributing to the development of resilient infrastructure and communities.
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-5 w-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" style={{ color: "#0da04e" }} />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Delivering accurate and reliable engineering assessments and solutions
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-5 w-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" style={{ color: "#0da04e" }} />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Ensuring compliance with industry standards and regulatory requirements
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" style={{ color: "#0da04e" }} />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Promoting sustainable and environmentally responsible engineering practices
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-md">
                <div className="flex items-center mb-4 md:mb-6 justify-center sm:justify-start">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "#0da04e" }}
                  >
                    <Eye className="h-6 w-6 md:h-7 md:w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 text-sm sm:text-base text-center sm:text-left">
                  To be the leading engineering consulting firm recognized for technical excellence, innovation, and
                  commitment to sustainable development:
                </p>
                <StaggerIn direction="up" staggerDelay={0.1}>
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-5 w-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" style={{ color: "#0da04e" }} />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Setting industry benchmarks for quality and innovation in engineering consulting
                    </p>
                  </div>
                  <div className="flex items-start mb-3">
                    <CheckCircle className="h-5 w-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" style={{ color: "#0da04e" }} />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Building long-term partnerships with clients and stakeholders based on trust and excellence
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 md:mr-3 mt-0.5 flex-shrink-0" style={{ color: "#0da04e" }} />
                    <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base text-left">
                      Contributing to sustainable infrastructure development and environmental stewardship
                    </p>
                  </div>
                </StaggerIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16" style={{ backgroundColor: "#0da04e" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center max-w-5xl mx-auto">
            <FadeIn direction="up" delay={0.1}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={200} suffix="+" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Projects Completed</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={5} suffix="+" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={10} suffix="+" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Expert Engineers</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                  <CountUp end={95} suffix="%" />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Client Satisfaction</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Ready to Start Your Engineering Project?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-6 md:mb-10">
              Contact us today for a consultation. Our team of expert engineers is ready to provide comprehensive
              solutions for your project needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <HoverButton
                  size="lg"
                  className="text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                  style={{ backgroundColor: "#0da04e" }}
                  hoverEffect="ripple"
                >
                  Get Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </HoverButton>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <AnimatedButton
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 hover:text-white font-semibold px-6 md:px-8 w-full sm:w-auto"
                  hoverEffect="pulse"
                  iconAnimation={true}
                >
                  View Our Work
                  <ChevronRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
