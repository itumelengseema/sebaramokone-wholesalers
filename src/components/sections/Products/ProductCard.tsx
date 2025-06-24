'use client';

import { Card, Button } from '@shade-cn/react';

type Product = {
  id: number;
  name: string;
  description: string;
  priceRange: string;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card hoverShadow className="max-w-sm">
      <Card.Image src={product.image} alt={product.name} height={200} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-green-600">
            {product.priceRange}
          </span>
          <Button size="sm" color="primary">
            Buy Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
