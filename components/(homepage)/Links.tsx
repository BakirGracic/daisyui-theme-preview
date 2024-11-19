import Link from "next/link";
import DaisyUI from "@/components/_icons/DaisyUI";
import GitHub from "@/components/_icons/GitHub";
import BuyMeACoffee from "@/components/_icons/BuyMeACoffee";

export default function Links() {
    return (
        <div className="flex justify-center items-center flex-row flex-wrap gap-4 px-4 topMargin">
            <Link
                href="https://daisyui.com/"
                target="_blank"
                className="btn btn-primary text-xl"
            >
                <DaisyUI className="size-6 " />
                Visit DaisyUI
            </Link>

            <Link
                href="https://github.com/BakirGracic/daisyui-theme-preview"
                target="_blank"
                className="btn btn-secondary text-xl"
            >
                <GitHub className="size-6" />
                Visit Project&apos;s GitHub
            </Link>

            <Link
                href="https://buymeacoffee.com/bakirgracic"
                target="_blank"
                className="btn btn-accent text-xl"
            >
                <BuyMeACoffee className="size-6" />
                Donate
            </Link>
        </div>
    );
}
