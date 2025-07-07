import type React from "react"
import { cn } from "@/lib/utils"
import { themeClasses } from "@/lib/theme"

interface ThemedIconWrapperProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ThemedIconWrapper({ children, variant = "primary", size = "md", className }: ThemedIconWrapperProps) {
  const bgClass = variant === "primary" ? themeClasses.bg.primaryLight : themeClasses.bg.secondaryLight
  const textClass = variant === "primary" ? themeClasses.text.primary : themeClasses.text.secondary

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div
      className={cn("rounded-full flex items-center justify-center", bgClass, textClass, sizeClasses[size], className)}
    >
      {children}
    </div>
  )
}
