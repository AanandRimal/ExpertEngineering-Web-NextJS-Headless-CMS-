import type React from "react"
import { cn } from "@/lib/utils"
import { themeClasses } from "@/lib/theme"

interface ThemedBadgeProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export function ThemedBadge({ children, variant = "primary", className }: ThemedBadgeProps) {
  const badgeClass = variant === "primary" ? themeClasses.badge.primary : themeClasses.badge.secondary

  return (
    <div className={cn("inline-block px-4 py-2 rounded-full text-sm font-medium", badgeClass, className)}>
      {children}
    </div>
  )
}
