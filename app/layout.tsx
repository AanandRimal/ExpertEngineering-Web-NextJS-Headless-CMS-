import type React from "react"
import ClientLayout from "./client-layout"
import { companyInfo } from "@/lib/theme"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}

export const metadata = {
  title: {
    default: `Home | ${companyInfo.name}`,
    template: `%s | ${companyInfo.name}`
  },
  description: "Comprehensive engineering consulting services including property valuation, structural design, environmental assessments, and feasibility studies.",
  generator: 'v0.dev'
};
