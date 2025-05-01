export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  shortDescription: string;
  price: number;
  unit: string;
  imageUrl: string;
  inStock: boolean;
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    finish: string;
    standard: string;
    [key: string]: string;
  };
  features: string[];
  applications: string[];
}