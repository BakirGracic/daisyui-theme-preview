import ThemeController from "@/components/(homepage)/navbar/ThemeController";
import Link from "next/link";

export default function TopBar() {
    return (
        <div className="h-20 p-3 bg-black flex items-center justify-between fixed top-o left-0 right-0 z-[99999]">
            <Link
                href="/examples"
                className="btn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
                Back
            </Link>
            <p className="font-semibold text-xl">DaisyUI Theme Preview</p>
            <ThemeController />
        </div>
    );
}
