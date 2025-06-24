// src/sanity/client.ts
import { createClient } from 'next-sanity';
import { loadSanityEnv } from '@/sanity/loadEnv';

const { projectId, dataset, apiVersion } = loadSanityEnv();

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});