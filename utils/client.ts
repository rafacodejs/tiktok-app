import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'or0epmr2',
  dataset: 'production',
  apiVersion: '2023-01-14',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
