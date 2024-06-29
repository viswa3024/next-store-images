/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['localhost'], //The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
        // loader: 'default', // or 'custom' if you want to define a custom loader function 

        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
