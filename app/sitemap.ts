import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.APP_URL}/sitemap.xml`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${process.env.APP_URL}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${process.env.APP_URL}/components`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${process.env.APP_URL}/examples`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${process.env.APP_URL}/custom`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        // example pages
        {
            url: `${process.env.APP_URL}/simple-dashboard`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
