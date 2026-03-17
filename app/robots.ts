export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/checkout", "/payment/"],
      },
    ],
    sitemap: "https://crecimientoinsta.com/sitemap.xml",
  }
}
