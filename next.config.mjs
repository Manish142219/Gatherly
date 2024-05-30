// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // other configuration options...
    images: {
      domains: ['utfs.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: ''
        }
      ]
    }
    
  }
  
  // Replace `module.exports` with `export default`
  export default nextConfig;
  