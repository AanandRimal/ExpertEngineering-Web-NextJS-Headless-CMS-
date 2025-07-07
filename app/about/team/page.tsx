import Link from "next/link"
import { ArrowRight, Phone, Mail, User, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Our Team | Expert Engineering Solution",
  description:
    "Meet the expert team at Expert Engineering Solution - experienced engineers and professionals dedicated to delivering excellence in engineering consulting.",
}

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Expert Team</h1>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals who bring decades of engineering expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#0da04e", color: "white" }}
            >
              Our Team
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Meet Our Leadership</h2>
            <p className="text-gray-700 text-lg">
              Our experienced team of engineers and professionals brings decades of industry expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                      style={{ backgroundColor: "#0da04e" }}
                    >
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="font-medium" style={{ color: "#0da04e" }}>
                        {member.position}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    {member.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-3" style={{ color: "#0da04e" }} />
                        <span className="text-gray-700">{member.phone}</span>
                      </div>
                    )}
                    {member.email && (
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-3" style={{ color: "#0da04e" }} />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                5+
              </div>
              <p className="text-gray-700 font-medium">Team Members</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                3
              </div>
              <p className="text-gray-700 font-medium">Licensed Engineers</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                15+
              </div>
              <p className="text-gray-700 font-medium">Combined Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2" style={{ color: "#0da04e" }}>
                100%
              </div>
              <p className="text-gray-700 font-medium">Commitment to Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "#0da04e", color: "white" }}
            >
              Team Culture
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What Makes Us Strong</h2>
            <p className="text-gray-700 text-lg">
              Our team is built on collaboration, expertise, and a shared commitment to engineering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Collaborative Approach</h3>
              <p className="text-gray-700">
                We work together as a unified team, combining our diverse expertise to deliver comprehensive solutions.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Individual Excellence</h3>
              <p className="text-gray-700">
                Each team member brings unique skills and experience, contributing to our collective strength.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#0da04e" }}
              >
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Continuous Growth</h3>
              <p className="text-gray-700">
                We are committed to continuous learning and professional development to stay at the forefront of our
                field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Contact us today to discuss your engineering consulting needs and discover how our expert team can bring
            your project to success.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-white font-semibold px-8" style={{ backgroundColor: "#0da04e" }}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about/overview">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white bg-white/10 hover:bg-white/5 font-semibold px-8"
              >
                Learn About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Team data
const teamMembers = [
  {
    name: "Er. Anil Dhamala",
    position: "Chairman, Civil Engineer",
    phone: "+977 9860055040",
    email: "anilldhamala@gmail.com",
    bio: "With over 5+ years of experience in civil engineering, Er. Anil Dhamala leads our team with expertise in structural design and project management. His vision and leadership have been instrumental in establishing Expert Engineering Solution as a trusted name in engineering consulting.",
  },
  {
    name: "Er. Ashok Dhamala",
    position: "Managing Director, IT Engineer",
    phone: "+977 9869192050",
    email: "ashokdhamala35@gmail.com",
    bio: "Er. Ashok Dhamala brings extensive experience in IT and engineering management. His technical expertise and leadership ensure the smooth operation and innovation of our company.",
  },
  {
    name: "Er. Aanand Rimal",
    position: "Computer Science Engineer",
    phone: "+977 9849779958",
    email: "aanandrimalo@gmail.com",
    bio: "Specializing in computer engineering, Er. Anand Rimal is dedicated to integrating technology and engineering solutions for our clients' success.",
  },
  {
    name: "Mr. Arbind Yadav",
    position: "Legal Advisor",
    phone: "+977 9854081020",
    email: "arvindyadav@gmail.com",
    bio: "Mr. Arbind Yadav provides legal guidance and ensures all our projects comply with regulatory standards and best practices.",
  },
  {
    name: "Mr. Kedar Gautam",
    position: "Financial Advisor",
    phone: "+977 9849290946",
    email: "gautam.kedar09@gmail.com",
    bio: "Mr. Kedar Gautam manages our financial planning and strategy, supporting the company's growth and stability.",
  },
]
