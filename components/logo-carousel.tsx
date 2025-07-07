"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const associations = [
  {
    name: "IEEE",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "ASCE",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "NSPE",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "ACEC",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "NAFE",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "ASCE Foundation",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Engineering Council",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    name: "Professional Engineers",
    logo: "/placeholder.svg?height=60&width=120",
  },
]

export function LogoCarousel() {
  // Duplicate the array to create seamless loop
  const duplicatedLogos = [...associations, ...associations]

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-8 md:gap-12"
        animate={{
          x: [0, -50 * associations.length + "%"],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((association, index) => (
          <div
            key={`${association.name}-${index}`}
            className="flex-shrink-0 flex items-center justify-center w-32 md:w-40 h-16 md:h-20"
          >
            <Image
              src={association.logo || "/placeholder.svg"}
              alt={`${association.name} logo`}
              width={120}
              height={60}
              className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
