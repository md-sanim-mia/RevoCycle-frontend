import { Button } from "@/components/ui/button";
import { ArrowDown, Bike, Play } from "lucide-react";

const BicycleBanner = () => {
  return (
    <section className="relative bg-black text-white py-14 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop&crop=center"
          alt="All Bicycles"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Bike className="w-4 h-4 mr-2" />
            Premium Collection
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            All <span className="text-red-500">Bicycles</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Discover our complete collection of premium bicycles designed for
            every adventure, from mountain trails to city streets
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                500+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Bicycle Models
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                50+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Brands
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                25K+
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Happy Riders
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                99%
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                Satisfaction
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() =>
                document
                  .getElementById("products-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Collection
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium bg-transparent backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default BicycleBanner;
