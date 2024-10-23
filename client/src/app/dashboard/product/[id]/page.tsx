"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Laptop X1",
    currentPrice: 999,
    targetPrice: 899,
    description: "High-performance laptop for professionals",
  },
  {
    id: 2,
    name: "Smartphone Y2",
    currentPrice: 699,
    targetPrice: 649,
    description: "Latest smartphone with advanced camera features",
  },
  {
    id: 3,
    name: "Headphones Z3",
    currentPrice: 199,
    targetPrice: 179,
    description: "Noise-cancelling headphones with superior sound quality",
  },
];

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{product.description}</p>
        <p className="mb-2">Current Price: ${product.currentPrice}</p>
        <p className="mb-4">Target Price: ${product.targetPrice}</p>
        <Button>Update Target Price</Button>
      </CardContent>
    </Card>
  );
}
