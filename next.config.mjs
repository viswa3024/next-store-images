/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        loader: 'default', // or 'custom' if you want to define a custom loader function
      },
};

export default nextConfig;
