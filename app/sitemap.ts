export default function sitemap() {
  return [
    {
      url: "https://seguidores-app.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://seguidores-app.vercel.app/sobre-nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]
}
