import TOC from "@/components/(components)/TOC";
import ComponentsList from "@/components/(components)/ComponentsList";
import BackToTop from "@/components/(components)/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plain Components",
    alternates: {
        canonical: `${process.env.APP_URL}/components`,
    },
    openGraph: {
        title: "Plain Components | DaisyUI Theme Preview",
        url: `${process.env.APP_URL}/components`,
    },
    twitter: {
        title: "Plain Components | Preview DaisyUI themes & components",
    },
    appleWebApp: {
        title: "Plain Components | DaisyUI Theme Preview",
    },
    appLinks: {
        web: {
            url: `${process.env.APP_URL}/components`,
            should_fallback: true,
        },
    },
};

export default function Page() {
    return (
        <>
            <TOC />
            <div className="viewportMaxWidth">
                <ComponentsList />
            </div>
            <BackToTop />
        </>
    );
}
