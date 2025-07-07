import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "./images/nabil bank.png", alt: "Nabil Bank" },
  { src: "./images/nic asia.jpg", alt: "Placeholder Logo 2" },
  { src: "./images/machapuchre.jpg", alt: "Placeholder Logo 3" },
  { src: "./images/kumaribank.jpg", alt: "Placeholder Logo 4" },
  { src: "./images/nmb-bank.png", alt: "Placeholder Logo 5" },
  { src: "./images/civil.png", alt: "Placeholder Logo 6" },
  { src: "./images/banlga bank.jpg", alt: "Placeholder Logo 7" },
  { src: "./images/global.webp", alt: "Placeholder Logo 8" },
];

const AssociationsSlider = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-background py-8",
        className
      )}
    >
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-12">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={500}
              height={500}
              className="h-100r w-40 object-contain"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
};

export default AssociationsSlider; 