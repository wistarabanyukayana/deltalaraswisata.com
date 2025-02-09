"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export default function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();

  const slides = [
    {
      image: "/images/dashboard-slider-1.jpg",
    },
    {
      image: "/images/dashboard-slider-2.jpg",
    },
    {
      image: "/images/dashboard-slider-3.jpg",
    },
    {
      image: "/images/dashboard-slider-4.jpg",
    },
    {
      image: "/images/dashboard-slider-5.jpg",
    },
    // Add more slides as needed
  ];

  return (
    <section className="relative h-[70vh] w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[Autoplay({ playOnInit: true, delay: 5000 })]}
      >
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center text-zinc-50">
          <h1 className="font-merriweather-sans mb-4 text-4xl font-bold md:text-6xl">
            Delta Laras Wisata
          </h1>
          <p className="text-xl font-light text-zinc-200 md:text-2xl">
            Menghadirkan layanan yang handal dan terpecaya
          </p>
        </div>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem className="pl-0" key={index}>
              <div
                className="flex h-[70vh] w-full items-center justify-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                }}
              ></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <button
          className="absolute top-0 left-0 z-70 h-full w-25 bg-transparent"
          onClick={() => api?.scrollPrev() && api.scrollPrev()}
        ></button>
        <button
          className="absolute top-0 right-0 z-70 h-full w-25 bg-transparent"
          onClick={() => api?.scrollNext() && api.scrollNext()}
        ></button>
      </Carousel>
    </section>
  );
}
