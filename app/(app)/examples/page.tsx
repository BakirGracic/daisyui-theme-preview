import ExampleCards from "@/components/(examples)/cards/ExampleCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Practical Examples",
    alternates: {
        canonical: `${process.env.APP_URL}/examples`,
    },
    openGraph: {
        title: "Practical Examples | DaisyUI Theme Preview",
        url: `${process.env.APP_URL}/examples`,
    },
    twitter: {
        title: "Practical Examples | Preview DaisyUI themes & components",
    },
    appleWebApp: {
        title: "Practical Examples | DaisyUI Theme Preview",
    },
    appLinks: {
        web: {
            url: `${process.env.APP_URL}/examples`,
            should_fallback: true,
        },
    },
};

export default function Page() {
    return (
        <main>
            <ExampleCards />
        </main>
    );
}
