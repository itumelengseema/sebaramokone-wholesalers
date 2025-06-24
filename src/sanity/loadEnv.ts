// src/sanity/loadEnv.ts
import { loadEnvConfig } from '@next/env';

export function loadSanityEnv() {
  const projectDir = process.cwd();
  const { combinedEnv } = loadEnvConfig(projectDir);
  
  return {
    projectId: combinedEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: combinedEnv.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: combinedEnv.NEXT_PUBLIC_SANITY_API_VERSION || '2025-06-24'
  };
}