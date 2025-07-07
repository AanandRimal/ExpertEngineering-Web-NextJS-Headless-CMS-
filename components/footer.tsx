import Link from "next/link"
import { Calculator, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#054069" }} className="text-white">
      <div className="container py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6 justify-center sm:justify-start">
              <Calculator className="h-7 w-7" style={{ color: "#0da04e" }} />
              <span className="text-xl font-bold text-white">Expert Engineering Solution</span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Your trusted partner for comprehensive engineering consulting services. Delivering excellence in every
              project since 2020.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/services#property-valuation"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Property Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#architectural-design"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#structural-analysis"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Structural Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services#project-reports"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Detailed Project Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/services#geotechnical"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Geotechnical Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services#environmental"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Environmental Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/about/overview"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/team"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm sm:text-base hover:text-green-400 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                <span className="text-gray-400 text-sm sm:text-base text-left">
                 Anamnagar, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                <span className="text-gray-400 text-sm sm:text-base">(+977)9860055040</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#0da04e" }} />
                <span className="text-gray-400 text-sm sm:text-base">info@expertengineering.com.np</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <Button
                  className="text-white font-medium w-full transition-all duration-300"
                  style={{ backgroundColor: "#0da04e" }}
                >
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-6 text-center text-gray-400 text-sm max-w-6xl mx-auto">
          <p>&copy; {new Date().getFullYear()} Expert Engineering Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
