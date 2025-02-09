// components/PackageCarousel.tsx
"use client";

import Image from "next/image";

import {
  CalendarDays,
  Clock,
  PlaneTakeoff,
  Plane,
  BedDouble,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export default function PackageCarousel() {
  const packages = [
    {
      image: "/images/package-7.png",
      price: "Rp29.900.000",
      duration: "9 Hari",
      // Add other package details...
    },
    {
      image: "/images/package-7.png",
      price: "Rp29.900.000",
      duration: "9 Hari",
      // Add other package details...
    },
    {
      image: "/images/package-7.png",
      price: "Rp29.900.000",
      duration: "9 Hari",
      // Add other package details...
    },
    {
      image: "/images/package-7.png",
      price: "Rp29.900.000",
      duration: "9 Hari",
      // Add other package details...
    },
    {
      image: "/images/package-7.png",
      price: "Rp29.900.000",
      duration: "9 Hari",
      // Add other package details...
    },
    // Add more packages...
  ];

  return (
    <section className="relative flex w-full items-center justify-center px-[12px] py-[85px]">
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="font-merriweather-sans mb-10 text-center text-2xl font-bold sm:text-4xl">
          Paket Perjalanan
        </h2>
        <Carousel
          className="w-full max-w-6xl"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ playOnInit: true, delay: 7500 })]}
        >
          <CarouselContent>
            {packages.map((pkg, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="m-2 overflow-hidden rounded-lg bg-white shadow-lg">
                  <Image
                    src={pkg.image}
                    alt="Package"
                    width={360}
                    height={240}
                    className="w-full object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-3xl font-bold text-zinc-800 md:text-2xl lg:text-xl">
                        {pkg.price}
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-lg md:text-base lg:text-sm">
                        QUAD
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-xl md:text-lg lg:text-base">
                      <div className="grid grid-rows-7">
                        <div className="flex items-center justify-start">
                          <CalendarDays className="mr-1 inline-block h-4 w-4" />
                          Jadwal
                        </div>
                        <div className="flex items-center justify-start">
                          <Clock className="mr-1 inline-block h-4 w-4" />
                          Durasi
                        </div>
                        <div className="flex items-center justify-start">
                          <PlaneTakeoff className="mr-1 inline-block h-4 w-4" />
                          Berangkat dari
                        </div>
                        <div className="flex items-center justify-start">
                          <Plane className="mr-1 inline-block h-4 w-4" />
                          Maskapai
                        </div>
                        <div className="flex items-center justify-start">
                          <BedDouble className="mr-1 inline-block h-4 w-4" />
                          Hotel Mekkah
                        </div>
                        <div className="flex items-center justify-start">
                          <BedDouble className="mr-1 inline-block h-4 w-4" />
                          Hotel Madinah
                        </div>
                        <div className="flex items-center justify-start">
                          {pkg.hotel?.TR && (
                            <>
                              <BedDouble className="mr-1 inline-block h-4 w-4" />
                              Hotel Mekkah
                            </>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-rows-7">
                        <div className="flex items-center justify-start"></div>
                        <div className="flex items-center justify-start"></div>
                        <div className="flex items-center justify-start"></div>
                        <div className="flex items-center justify-start"></div>
                        <div className="flex items-center justify-start"></div>
                        <div className="flex items-center justify-start"></div>
                        <div className="flex items-center justify-start"></div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="mt-4 block w-full rounded bg-indigo-700 py-2 text-center text-white transition hover:bg-indigo-900"
                    >
                      Tanya Detail
                    </a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
