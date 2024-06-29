/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['localhost'], //The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead.
        // loader: 'default', // or 'custom' if you want to define a custom loader function 

        // https://stackoverflow.com/questions/77447587/the-images-domains-configuration-is-deprecated-please-use-images-remotepatte
        remotePatterns: [
          {
            protocol: process.env.NEXT_PUBLIC_API_PROTOCOL || 'http',
            hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || 'localhost',
            pathname: '**', //pathname: '**', // Match all paths under this configuration
          },
        ],
      },
};

export default nextConfig;
