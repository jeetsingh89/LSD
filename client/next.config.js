/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}

module.exports = {nextConfig
  
}
module.exports = {
  images: {
    domains: ["source.unsplash.com"],
  },
};
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "https://lsd-wine.vercel.app/",
        destination: "https://lsd-wine.vercel.app/",
      },
    ];
  };
  return {
    rewrites,
  };
};
