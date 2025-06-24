import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'your_project_id',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: true,
});
