"use client"
import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { theme, themeStyles } from "@/lib/theme"

interface ThemedButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  hoverEffect?: "scale" | "lift" | "glow" | "none"
  animated?: boolean
}

export function ThemedButton({
  children,
  className,
  variant = "primary",
  hoverEffect = "scale",
  animated = true,
  style,
  ...props
}: ThemedButtonProps) {
  const prefersReducedMotion = useReducedMotion()

  const getVariantStyle = () => {
    switch (variant) {
      case "primary":
        return themeStyles.button.primary
      case "secondary":
        return themeStyles.button.secondary
      default:
        return {}
    }
  }

  const getHoverAnimation = () => {
    if (prefersReducedMotion || !animated) return {}

    switch (hoverEffect) {
      case "scale":
        return { scale: 1.05 }
      case "lift":
        return { y: -5, boxShadow: theme.shadows.card }
      case "glow":
        return { boxShadow: variant === "primary" ? theme.shadows.primary : theme.shadows.secondary }
      default:
        return {}
    }
  }

  const buttonStyle = { ...getVariantStyle(), ...style }

  if (!animated || prefersReducedMotion) {
    return (
      <Button className={cn("text-white", className)} style={buttonStyle} {...props}>
        {children}
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={getHoverAnimation()}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="inline-block"
    >
      <Button className={cn("text-white", className)} style={buttonStyle} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
