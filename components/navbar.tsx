"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calculator, ChevronDown, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { MobileMenu } from "@/components/mobile-menu"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDifference = Math.abs(currentScrollY - lastScrollY)

          // Only update if scroll difference is significant (reduces jitter)
          if (scrollDifference > 3) {
            // Always show navbar at the very top
            if (currentScrollY <= 20) {
              setIsVisible(true)
              setScrolled(false)
            } else {
              // Show/hide based on scroll direction with larger threshold
              if (currentScrollY > lastScrollY + 10) {
                // Scrolling down - hide navbar
                setIsVisible(false)
              } else if (currentScrollY < lastScrollY - 10) {
                // Scrolling up - show navbar
                setIsVisible(true)
              }
              setScrolled(currentScrollY > 20)
            }

            setLastScrollY(currentScrollY)
          }

          ticking = false
        })
        ticking = true
      }
    }

    // Debounce scroll events
    const debouncedHandleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      scrollTimeoutRef.current = setTimeout(handleScroll, 10)
    }

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [lastScrollY])

  // Show navbar on route change
  useEffect(() => {
    setIsVisible(true)
    setMobileMenuOpen(false)
    // Reset scroll position tracking on route change
    setLastScrollY(window.scrollY)
  }, [pathname])

  // Toggle mobile menu with useCallback to ensure consistent behavior
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prevState) => !prevState)
  }, [])

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.header
          key="navbar"
          className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/50"
              : "bg-white/90 backdrop-blur-sm"
          }`}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isVisible ? 0 : -100,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: prefersReducedMotion ? "tween" : "spring",
            stiffness: 300,
            damping: 30,
            duration: prefersReducedMotion ? 0.2 : undefined,
          }}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-[1920px]">
            <div className="flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-1.5 sm:gap-2 group">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-white p-1.5 sm:p-2 rounded-lg"
                    style={{ backgroundColor: "#0da04e" }}
                  >
                    <Calculator className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </motion.div>
                  <div className="flex flex-col">
                    <motion.span
                      className="text-lg sm:text-xl md:text-2xl font-bold leading-none"
                      style={{ color: "#054069" }}
                      initial={{ opacity: 1 }}
                      whileHover={{ scale: 1.03, color: "#0da04e" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="inline xs:hidden">EES</span>
                      <span className="hidden xs:inline">Expert Engineering Solution</span>
                    </motion.span>
                    <span className="text-[10px] sm:text-xs text-gray-600 hidden xs:inline">
                      Engineering Excellence
                    </span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center justify-center">
                <ul className="flex items-center space-x-0.5 sm:space-x-1 lg:space-x-2">
                  <NavItem
                    href="/"
                    label="Home"
                    isActive={pathname === "/"}
                    onHover={() => setHoveredItem("home")}
                    onLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === "home"}
                  />

                  <NavItem
                    href="/services"
                    label="Services"
                    isActive={pathname === "/services"}
                    onHover={() => setHoveredItem("services")}
                    onLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === "services"}
                  />

                  <DropdownNavItem
                    label="About"
                    items={[
                      { href: "/about/overview", label: "Overview" },
                      { href: "/about/chairman", label: "Message from Chairman" },
                      { href: "/about/team", label: "Team" },
                    ]}
                    pathname={pathname}
                    onHover={() => setHoveredItem("about")}
                    onLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === "about"}
                  />

                  <NavItem
                    href="/portfolio"
                    label="Portfolio"
                    isActive={pathname === "/portfolio"}
                    onHover={() => setHoveredItem("portfolio")}
                    onLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === "portfolio"}
                  />

                  <NavItem
                    href="/contact"
                    label="Contact"
                    isActive={pathname === "/contact"}
                    onHover={() => setHoveredItem("contact")}
                    onLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === "contact"}
                  />
                </ul>
              </nav>

              {/* Desktop Right Side */}
              <div className="hidden md:flex items-center gap-2 lg:gap-4">
                <Link href="/contact">
                  <AnimatedButton
                    className="text-white font-medium text-sm sm:text-base h-9 sm:h-10 transition-all duration-300 shadow-md hover:shadow-lg border-0"
                    style={{ backgroundColor: "#0da04e" }}
                    hoverEffect="lift"
                    iconAnimation={true}
                  >
                    Get Consultation
                    <ChevronDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </AnimatedButton>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-1.5 sm:gap-2 md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 sm:h-9 sm:w-9 bg-gray-100 border-0 hover:bg-gray-200"
                  onClick={toggleMobileMenu}
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle menu"
                  type="button"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
                </Button>
              </div>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}

// Desktop Nav Item
function NavItem({
  href,
  label,
  isActive,
  onHover,
  onLeave,
  isHovered,
}: {
  href: string
  label: string
  isActive: boolean
  onHover: () => void
  onLeave: () => void
  isHovered: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-colors flex items-center focus:outline-none focus-visible:outline-none focus:ring-0 border-0 ${
          isActive ? "hover:bg-green-50/50" : "text-gray-700 hover:bg-green-50/50"
        }`}
        style={{
          color: isActive ? "#0da04e" : undefined,
         
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <motion.span
          animate={isHovered && !isActive ? { y: -2, color: "#0da04e" } : { y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block"
        >
          {label}
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ backgroundColor: "#0da04e" }}
            layoutId="navbar-underline"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </li>
  )
}

// Desktop Dropdown Nav Item
function DropdownNavItem({
  label,
  items,
  pathname,
  onHover,
  onLeave,
  isHovered,
}: {
  label: string
  items: { href: string; label: string }[]
  pathname: string
  onHover: () => void
  onLeave: () => void
  isHovered: boolean
}) {
  const isActive = items.some((item) => item.href === pathname)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsOpen(!isOpen)
      e.preventDefault()
    } else if (e.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <li
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium transition-colors flex items-center border-0 focus:outline-none focus-visible:outline-none focus:ring-0 ${
          isActive ? "hover:bg-green-50/50" : "text-gray-700 hover:bg-green-50/50"
        }`}
        style={{
          color: isActive ? "#0da04e" : undefined,
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        <motion.span
          animate={isHovered && !isActive ? { y: -2, color: "#0da04e" } : { y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-flex items-center gap-1"
        >
          {label}
          <motion.div animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ backgroundColor: "#0da04e" }}
            layoutId="navbar-underline"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-1 w-48 sm:w-56 rounded-xl bg-white shadow-lg p-1.5 sm:p-2 z-50 border border-gray-100"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`block cursor-pointer text-sm sm:text-base py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg border-0 ${
                    pathname === item.href ? "bg-green-50" : "hover:bg-green-50/50"
                  }`}
                  style={{
                    color: pathname === item.href ? "#0da04e" : undefined,
                  }}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
