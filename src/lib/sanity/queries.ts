import { client } from './client';
import { Product } from '@/types/product';

export async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    slug,
    image,
    category,
    description,
    price,
    unit,
    availability,
    featured
  }`;

  return client.fetch(query);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const query = `*[_type == "product" && featured == true] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    slug,
    image,
    category,
    description,
    price,
    unit,
    availability,
    featured
  }`;

  return client.fetch(query);
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const query = `*[_type == "product" && category == $category] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    slug,
    image,
    category,
    description,
    price,
    unit,
    availability,
    featured
  }`;

  return client.fetch(query, { category });
}
