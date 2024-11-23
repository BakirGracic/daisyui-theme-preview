import Link from "next/link";
import ThemeSwitcher from "@/components/_ui/ThemeSwitcher";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function TopBar() {
    return (
        <div className="h-20 p-3 bg-black flex items-center justify-between fixed top-0 w-full z-[99999]">
            <Link
                href="/examples"
                className="btn bg-white text-black hover:bg-slate-400"
            >
                <ArrowLeftIcon className="size-5" />
                Back
            </Link>
            <p className="font-semibold text-xl text-white hidden sm:block">DaisyUI Theme Preview</p>
            <ThemeSwitcher />
        </div>
    );
}
