import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'bojmv7k2',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: true,
});
