// import remarkGfm from 'remark-gfm'
// import createMDX from '@next/mdx'
import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// const withMDX = createMDX({
//   // Add markdown plugins here, as desired
//   options: {
//     // remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//   },
// })

export default withContentlayer(nextConfig);
