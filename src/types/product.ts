export interface Product {
  _id: string;
  _createdAt: string;
  name: string;
  slug: {
    current: string;
  };
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
  category: string;
  description?: string;
  price?: number;
  unit?: string;
  availability: 'in-stock' | 'out-of-stock' | 'seasonal';
  featured?: boolean;
}
