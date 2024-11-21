import TopBar from "@/components/_ui/TopBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Example Page",
    alternates: {
        canonical: `${process.env.APP_URL}/custom`,
    },
    openGraph: {
        title: "Example Page | DaisyUI Theme Preview",
        url: `${process.env.APP_URL}/custom`,
    },
    robots: {
        index: false,
        follow: false,
        nocache: true,
    },
    twitter: {
        title: "Example Page | Preview DaisyUI themes & components",
    },
    appleWebApp: {
        title: "Example Page | DaisyUI Theme Preview",
    },
    appLinks: {
        web: {
            url: `${process.env.APP_URL}/custom`,
            should_fallback: true,
        },
    },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <TopBar />
            <div className="mt-20">{children}</div>
        </>
    );
}
