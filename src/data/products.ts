import { Product } from "./types";

export const products: Product[] = [
  {
    id: "steel-rod-8mm",
    name: "TMT Steel Rod 8mm",
    category: "Steel Rods",
    shortDescription:
      "High-tensile thermo-mechanically treated steel rod for concrete reinforcement.",
    description:
      "Our premium 8mm TMT Steel Rods are manufactured using the latest thermo-mechanical treatment technology that ensures optimal strength and ductility. These rods feature a harder outer layer with a softer core, providing excellent seismic resistance and bendability. Ideal for all types of RCC (Reinforced Cement Concrete) structures.",
    price: 950,
    unit: "per quintal",
    imageUrl:
      "https://images.pexels.com/photos/220237/pexels-photo-220237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Fe-500 Grade Steel",
      dimensions: "8mm diameter, 12m length",
      weight: "0.395 kg per meter",
      finish: "Hot rolled with ribbed surface",
      standard: "IS:1786",
      tensileStrength: "500 N/mm²",
      yieldStrength: "415 N/mm²",
      elongation: "14.5%",
    },
    features: [
      "High tensile strength",
      "Superior bendability",
      "Excellent weldability",
      "Corrosion resistant",
      "Uniform rib pattern for better concrete bonding",
    ],
    applications: [
      "Residential buildings",
      "Commercial structures",
      "Bridges and flyovers",
      "Dams and power plants",
      "Underground structures",
    ],
  },
  {
    id: "gi-sheet-1mm",
    name: "Galvanized Iron Sheet 1mm",
    category: "Metal Sheets",
    shortDescription:
      "Corrosion-resistant galvanized iron sheet for roofing and industrial applications.",
    description:
      "Our 1mm Galvanized Iron Sheets are coated with a protective layer of zinc that provides excellent resistance against corrosion and oxidation. These sheets are known for their durability, formability, and weather resistance, making them ideal for various construction and industrial applications.",
    price: 2200,
    unit: "per sheet",
    imageUrl:
      "https://images.pexels.com/photos/1427292/pexels-photo-1427292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Mild Steel with Zinc Coating",
      dimensions: "1220 x 2440 mm (4 x 8 ft)",
      weight: "9.42 kg/m²",
      finish: "Regular spangle zinc coating",
      standard: "IS:277",
      coatingThickness: "120 gsm (both sides)",
      bendingRadius: "2T",
    },
    features: [
      "Superior corrosion resistance",
      "Excellent formability",
      "Consistent zinc coating",
      "Uniform thickness",
      "Smooth surface finish",
    ],
    applications: [
      "Roofing and cladding",
      "Ducting and ventilation",
      "Automotive components",
      "Electrical appliances",
      "General fabrication",
    ],
  },
  {
    id: "ms-angle-50x50x6",
    name: "MS Angle 50x50x6mm",
    category: "Iron Bars",
    shortDescription:
      "Structural mild steel angle for framework and support applications.",
    description:
      "Our 50x50x6mm Mild Steel Angles are L-shaped structural steel products that offer excellent strength and versatility. These angles are hot-rolled and feature equal legs, making them perfect for framing, bracing, and support applications. Their high strength-to-weight ratio ensures reliable performance in various construction and engineering projects.",
    price: 780,
    unit: "per meter",
    imageUrl:
      "https://images.pexels.com/photos/46285/drilling-head-drill-bit-drill-metal-46285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Mild Steel (IS:2062)",
      dimensions: "50 x 50 x 6 mm (leg x leg x thickness)",
      weight: "4.5 kg per meter",
      finish: "Black/Mill finish",
      standard: "IS:808",
      length: "Available in 6m, 9m, and 12m lengths",
      tolerances: "As per IS specifications",
    },
    features: [
      "High strength-to-weight ratio",
      "Excellent weldability",
      "Good machinability",
      "Uniform dimensions",
      "Suitable for hot-dip galvanizing",
    ],
    applications: [
      "Structural frameworks",
      "Support and bracing",
      "Equipment mounting",
      "Tower construction",
      "General fabrication",
    ],
  },
  {
    id: "i-beam-150x75",
    name: "Steel I-Beam ISMB 150",
    category: "Structural Beams",
    shortDescription:
      "Structural steel I-beam for heavy load-bearing applications in construction.",
    description:
      "Our ISMB 150 Steel I-Beams are high-strength structural components with an I-shaped cross-section that provides exceptional load-bearing capacity. These beams feature parallel flanges connected by a central web, offering superior resistance to bending and deflection. Ideal for major structural applications in buildings, bridges, and industrial structures.",
    price: 3600,
    unit: "per meter",
    imageUrl:
      "https://images.pexels.com/photos/162601/nuts-screw-metal-thread-162601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Structural Steel (IS:2062 Grade E250)",
      dimensions: "150 x 75 mm (height x flange width)",
      weight: "14.9 kg per meter",
      finish: "Mill finish",
      standard: "IS:808",
      webThickness: "4.8 mm",
      flangeThickness: "7.6 mm",
      momentOfInertia: "735 cm⁴ (about x-axis)",
    },
    features: [
      "High load-bearing capacity",
      "Excellent resistance to bending",
      "Uniform dimensions",
      "Superior structural stability",
      "Good weldability",
    ],
    applications: [
      "Building frames",
      "Bridge construction",
      "Industrial structures",
      "Heavy machinery supports",
      "Overhead crane girders",
    ],
  },
  {
    id: "corrugated-sheet-0.6mm",
    name: "Corrugated Roofing Sheet 0.6mm",
    category: "Metal Sheets",
    shortDescription:
      "Durable corrugated metal sheet for industrial and residential roofing.",
    description:
      "Our 0.6mm Corrugated Roofing Sheets provide excellent strength and weather resistance for all roofing applications. The corrugated profile enhances structural integrity while maintaining lightweight properties. These sheets are available in galvanized or color-coated finishes, offering superior protection against corrosion along with aesthetic appeal.",
    price: 520,
    unit: "per sq. meter",
    imageUrl:
      "https://images.pexels.com/photos/51320/drill-milling-milling-machine-drilling-51320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Galvanized Steel",
      dimensions: "Width: 1050mm, Length: Customizable",
      weight: "5.1 kg/m²",
      finish: "Galvanized or Color Coated",
      standard: "IS:513, IS:277",
      corrugationDepth: "18mm",
      coatingThickness: "120 gsm (zinc) or 25 microns (paint)",
    },
    features: [
      "Weather-resistant",
      "Lightweight yet strong",
      "Easy installation",
      "Long service life",
      "Available in various colors",
    ],
    applications: [
      "Industrial roofing",
      "Residential roofing",
      "Warehouses",
      "Sheds and garages",
      "Temporary structures",
    ],
  },
  {
    id: "tmt-bar-12mm",
    name: "Premium TMT Bar 12mm",
    category: "Steel Rods",
    shortDescription:
      "High-grade thermo-mechanically treated reinforcement bar for construction.",
    description:
      "Our 12mm Premium TMT Bars are engineered for superior strength and ductility, making them the ideal choice for reinforced concrete structures. The manufacturing process includes rapid quenching and self-tempering, resulting in a perfect combination of a strong outer layer and a ductile core. These bars comply with the highest industry standards and offer excellent earthquake resistance.",
    price: 1050,
    unit: "per quintal",
    imageUrl:
      "https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Fe-550 Grade Steel",
      dimensions: "12mm diameter, 12m length",
      weight: "0.888 kg per meter",
      finish: "Hot rolled with ribbed surface",
      standard: "IS:1786",
      tensileStrength: "550 N/mm²",
      yieldStrength: "500 N/mm²",
      elongation: "14.5%",
    },
    features: [
      "Ultra-high tensile strength",
      "Superior earthquake resistance",
      "Excellent ductility",
      "Optimum bendability",
      "Enhanced bonding with concrete",
    ],
    applications: [
      "High-rise buildings",
      "Infrastructure projects",
      "Commercial complexes",
      "Industrial structures",
      "Seismic-resistant construction",
    ],
  },
  {
    id: "channel-100x50x5",
    name: "MS Channel 100x50x5mm",
    category: "Structural Beams",
    shortDescription:
      "Mild steel C-channel for structural support and framing applications.",
    description:
      "Our 100x50x5mm Mild Steel Channels are versatile C-shaped structural members ideal for numerous construction and fabrication applications. These channels feature excellent strength-to-weight ratio and are widely used in structural frameworks. The standardized dimensions ensure compatibility with other structural components, while the mild steel composition provides good weldability and machinability.",
    price: 860,
    unit: "per meter",
    imageUrl:
      "https://images.pexels.com/photos/404153/pexels-photo-404153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Mild Steel (IS:2062)",
      dimensions: "100 x 50 x 5 mm (height x flange x thickness)",
      weight: "7.9 kg per meter",
      finish: "Black/Mill finish",
      standard: "IS:808",
      length: "Standard 6m and 12m lengths",
      tolerances: "As per IS specifications",
    },
    features: [
      "Optimum strength-to-weight ratio",
      "Excellent load-bearing capacity",
      "Uniform cross-section",
      "Good weldability",
      "Versatile application",
    ],
    applications: [
      "Structural frameworks",
      "Support systems",
      "Machine bases",
      "Vehicle chassis",
      "General fabrication",
    ],
  },
  {
    id: "aluminum-sheet-3mm",
    name: "Aluminum Sheet 3mm",
    category: "Metal Sheets",
    shortDescription:
      "Lightweight, corrosion-resistant aluminum sheet for industrial applications.",
    description:
      "Our 3mm Aluminum Sheets combine lightweight properties with excellent corrosion resistance and formability. These sheets are suitable for various applications requiring a good strength-to-weight ratio. Available in different alloy grades and tempers, our aluminum sheets can be customized to meet specific requirements for hardness, formability, and mechanical properties.",
    price: 3200,
    unit: "per sheet",
    imageUrl:
      "https://images.pexels.com/photos/46793/taps-thread-drill-milling-46793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    inStock: true,
    specifications: {
      material: "Aluminum Alloy 5052",
      dimensions: "1220 x 2440 mm (4 x 8 ft)",
      weight: "8.1 kg/m²",
      finish: "Mill finish",
      standard: "IS:737",
      temper: "H32 (quarter hard)",
      tensileStrength: "230 MPa",
    },
    features: [
      "Excellent corrosion resistance",
      "Lightweight yet strong",
      "Good formability",
      "Thermal conductivity",
      "Non-magnetic properties",
    ],
    applications: [
      "Transportation",
      "Electrical enclosures",
      "Food equipment",
      "Chemical containers",
      "Architectural applications",
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = new Set(products.map((product) => product.category));
  return Array.from(categories);
};
