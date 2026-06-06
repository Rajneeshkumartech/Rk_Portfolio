export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/", "/node_modules/"], // Faltu folders ko block kiya
    },
    sitemap: "https://rk-portfolio.vercel.app/sitemap.xml", // Apne sitemap ka path
  };
}