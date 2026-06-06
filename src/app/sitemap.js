export default async function sitemap() {
  const baseUrl = "https://rk-portfolio.vercel.app"; // Apni live URL yahan dalo

  // Tumhare saare routes ki list
  const routes = ["", "/services", "/resume", "/work", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8, // Home page ko sabse zyada priority (1.0) di hai
  }));

  return [...routes];
}