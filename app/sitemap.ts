export default function sitemap() {
  return [
    {
      url: "https://crecimientoinsta.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: "https://crecimientoinsta.com/sobre-nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]
}
