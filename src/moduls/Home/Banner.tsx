import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Find Your Perfect Ride",
    subtitle: "Premium Bicycles for Every Adventure",
    description:
      "Discover our collection of high-quality bikes designed for comfort, performance, and style.",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=822&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "Shop Now",
    ctaSecondary: "Watch Video",
    offer: "Up to 30% Off",
  },
  {
    id: 2,
    title: "Electric. Effortless. Everywhere.",
    subtitle: "The Future of Urban Commuting",
    description:
      "Experience the power and convenience of our premium electric bicycle collection.",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "Explore E-Bikes",
    ctaSecondary: "Learn More",
    offer: "Free Shipping",
  },
  {
    id: 3,
    title: "Built for Adventure",
    subtitle: "Professional Mountain & Road Bikes",
    description:
      "Conquer any terrain with bikes engineered for performance and durability.",
    image:
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "View Collection",
    ctaSecondary: "Find Store",
    offer: "Expert Assembly",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="object-cover object-center w-full h-full"
            />
            {/* Clean overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content Container */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                {/* Offer Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 text-gray-900 backdrop-blur-sm">
                    {slide.offer}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-white/90 font-light">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/50 text-white hover:bg-white/10 px-8 py-3 text-base font-medium backdrop-blur-sm bg-white/5"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      {slide.ctaSecondary}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 lg:bottom-8 right-4 lg:right-8 text-white/80 text-sm font-medium">
        <span className="text-white">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
        <span className="mx-1">/</span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}
