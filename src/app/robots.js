// app/robots.js
export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cms-grupparbete.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin", "/preview", "/draft"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
