/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted on GitHub Pages.
  output: "export",

  // Append trailing slashes so URLs like /about/ work cleanly on static hosts.
  trailingSlash: true,

  // GitHub Pages doesn't run the Next.js Image Optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
