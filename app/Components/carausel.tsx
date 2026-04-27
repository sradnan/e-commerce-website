"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import log1 from "./image/Frame 1000002405.png";
import log2 from "./image/Frame 1000002405 (1).png";
import log3 from "./image/Frame 1000002405 (2).png";
import log4 from "./image/Frame 1000002405 (3).png";
import log5 from "./image/Frame 1000002405 (4).png";
// ✅ change this image

const logos = [log1, log2, log3, log4, log5, ];

export default function CarouselLogo() {
  const plugin = React.useRef(
    Autoplay({
      delay: 1200,
      stopOnInteraction: false,
      pauseOnMouseEnter: true,
    })
  );

  return (
    <div className="w-full py-10 container mx-auto md:px-28 bg-white">
      <h1 className="text-center text-5xl sm:text-3xl p-6 m-3 font-semibold">Built for Core Industries</h1>
      
      <div className="relative overflow-hidden">

        {/* LEFT SHADOW */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT SHADOW */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="flex gap-6">
            {logos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`logo-${index}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </div>
  );
}