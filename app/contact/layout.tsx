import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Expert Engineering Solution for inquiries, quotes, or to discuss your construction project needs.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}