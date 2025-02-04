interface BicycleSpecifications {
  weight: string;
  gears: string;
  frame: string;
}

interface Bicycle {
  id: number;
  name: string;
  price: string;
  specifications: BicycleSpecifications;
  features: string[];
}

const bicycles: Bicycle[] = [
  {
    id: 1,
    name: "Mountain Bike X1",
    price: "$500",
    specifications: {
      weight: "15 kg",
      gears: "21 Speed",
      frame: "Aluminum",
    },
    features: [
      "Shock Absorber",
      "All-Terrain Tires",
      "Disc Brakes",
      "LED Lights",
    ],
  },
  {
    id: 2,
    name: "Road Bike R2",
    price: "$700",
    specifications: {
      weight: "10 kg",
      gears: "18 Speed",
      frame: "Carbon Fiber",
    },
    features: [
      "Lightweight Frame",
      "Aero Design",
      "Drop Handlebars",
      "Water Bottle Holder",
    ],
  },
  {
    id: 3,
    name: "Hybrid Bike H3",
    price: "$600",
    specifications: {
      weight: "12 kg",
      gears: "24 Speed",
      frame: "Steel",
    },
    features: [
      "Adjustable Seat",
      "Upright Handlebars",
      "Rear Carrier",
      "Fenders",
    ],
  },
];

const User = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-12 text-center text-4xl font-bold text-blue-800">
        Bicycle Comparison
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {bicycles.map((bike) => (
          <div key={bike.id} className="rounded-xl bg-white p-6 shadow-lg">
            {/* Bike Header */}
            <div className="mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">{bike.name}</h2>
              <p className="text-lg font-semibold text-green-600">
                {bike.price}
              </p>
            </div>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-700">
                Specifications
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Weight</span>
                  <span className="font-medium">
                    {bike.specifications.weight}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Gears</span>
                  <span className="font-medium">
                    {bike.specifications.gears}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Frame</span>
                  <span className="font-medium">
                    {bike.specifications.frame}
                  </span>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-700">
                Key Features
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                {bike.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
