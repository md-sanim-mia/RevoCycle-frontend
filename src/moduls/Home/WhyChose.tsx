import { Shield, Truck, Award, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description:
      "Every bike is tested and certified for safety and performance",
  },
  {
    icon: Truck,
    title: "Free Assembly",
    description:
      "Professional bike assembly and setup included with every purchase",
  },
  {
    icon: Award,
    title: "Expert Service",
    description:
      "Our certified mechanics provide top-notch maintenance and repairs",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get cycling advice and support whenever you need it",
  },
];

export function AboutSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose RevoCycle?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're passionate cyclists committed to providing you with the best
            bikes, expert service, and cycling experience. From
            beginner-friendly models to professional racing bikes, we've got
            your cycling journey covered.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="About BikeHub"
              className="object-cover w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">25K+</div>
              <div className="text-sm text-gray-600">Ours Cycli</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
