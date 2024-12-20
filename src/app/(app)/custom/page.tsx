import ParameterInfo from "@/components/(custom)/ParameterInfo";
import ParameterTweaker from "@/components/(custom)/ParameterTweaker";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Theme",
    alternates: {
        canonical: `${process.env.APP_URL}/custom`,
    },
    openGraph: {
        title: "Custom Theme | DaisyUI Theme Preview",
        url: `${process.env.APP_URL}/custom`,
    },
    twitter: {
        title: "Custom Theme | Preview DaisyUI themes & components",
    },
    appleWebApp: {
        title: "Custom Theme | DaisyUI Theme Preview",
    },
    appLinks: {
        web: {
            url: `${process.env.APP_URL}/custom`,
            should_fallback: true,
        },
    },
};

export default function Page() {
    return (
        <>
            <ParameterInfo />
            <ParameterTweaker />
        </>
    );
}
