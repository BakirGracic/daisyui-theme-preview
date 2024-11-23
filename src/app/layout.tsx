import "@/css/tailwind-base.css";
import "@/css/global.css";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const InterFont = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: {
        default: "DaisyUI Theme Preview",
        template: "%s | DaisyUI Theme Preview",
    },
    description: "Discover and preview all preset and custom DaisyUI themes in one place with real examples & plain components. Explore a variety of stylish, responsive, and customizable themes perfect for any Tailwind CSS project. Find inspiration, test features, and easily select the theme that best fits your web design needs!",
    generator: "Next.js 15",
    applicationName: "DaisyUI Theme Preview",
    referrer: "origin",
    keywords: "daisyui themes, tailwind css themes, daisyui preview, custom daisyui themes, responsive web design, next.js themes, tailwind components, daisyui customization, theme showcase, frontend design inspiration, web development, ui library, css themes",
    authors: [{ name: "BakirGracic", url: "https://bakir.dev/" }],
    creator: "BakirGracic",
    publisher: "BakirGracic",
    metadataBase: new URL(process.env.APP_URL || ""),
    alternates: {
        canonical: `${process.env.APP_URL}/`,
        languages: {
            "en-US": `${process.env.APP_URL}/`,
        },
    },
    openGraph: {
        title: "DaisyUI Theme Preview",
        description: "Discover and preview all preset and custom DaisyUI themes in one place with real examples & plain components. Explore a variety of stylish, responsive, and customizable themes perfect for any Tailwind CSS project. Find inspiration, test features, and easily select the theme that best fits your web design needs!",
        url: process.env.APP_URL,
        siteName: "DaisyUI Theme Preview",
        images: [
            {
                url: `${process.env.APP_URL}/og.png`,
                alt: "DaisyUI Theme Preview OpenGraph Image",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
    icons: {
        icon: [
            { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${process.env.APP_URL}/site.webmanifest`,
    twitter: {
        card: "app",
        title: "DaisyUI Theme Preview",
        description: "Discover and preview all preset and custom DaisyUI themes in one place with real examples & plain components. Explore a variety of stylish, responsive, and customizable themes perfect for any Tailwind CSS project. Find inspiration, test features, and easily select the theme that best fits your web design needs!",
        siteId: "1704851009380704256",
        creator: "@gracic_bakir",
        creatorId: "1704851009380704256",
        images: {
            url: `${process.env.APP_URL || ""}/og.png`,
            alt: "DaisyUI Theme Preview OpenGraph Image",
        },
        app: {
            name: "twitter_app",
            id: {
                iphone: "twitter_app://iphone",
                ipad: "twitter_app://ipad",
                googleplay: "twitter_app://googleplay",
            },
            url: {
                iphone: "https://iphone_url",
                ipad: "https://ipad_url",
            },
        },
    },
    appleWebApp: {
        title: "DaisyUI Theme Preview",
    },
    appLinks: {
        web: {
            url: process.env.APP_URL || "",
            should_fallback: true,
        },
    },
    category: "technology, website, daisyui, github, themes, components, preview",
};

export const viewport: Viewport = {
    themeColor: "#1D232A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-US">
            <body className={`antialiased ${InterFont.className}`}>
                {children}
                <Toaster
                    theme="system"
                    position="bottom-center"
                    toastOptions={{
                        duration: 3000,
                        className: `${InterFont.className} text-lg bg-primary rounded-lg shadow-lg border-none text-primary-content`,
                    }}
                />
                <style id="custom-theme-style-tag"></style>
            </body>
        </html>
    );
}
