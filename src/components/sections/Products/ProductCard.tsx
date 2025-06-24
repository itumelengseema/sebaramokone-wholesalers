'use client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Product = {
  image: string;
  name: string;
  description?: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t"
        width={400}
        height={400}
      />
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description ?? 'No description available.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-green-600 font-semibold">
          R{(product.price - 20).toFixed(2)} - R{(product.price + 30).toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Order Now</Button>
      </CardFooter>
    </Card>
  );
}
