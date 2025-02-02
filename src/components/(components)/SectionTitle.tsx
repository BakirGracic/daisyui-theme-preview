import Link from "next/link";
import { HashtagIcon, LinkIcon } from "@heroicons/react/24/solid";

export default function GroupTitle({ id, title, href }: { id: string; title: string; href: string }) {
    return (
        <div className="flex items-center gap-3 my-8">
            {/* id link */}
            <Link href={`#${id}`}>
                <HashtagIcon className="size-6 hover:text-white transition-all" />
            </Link>

            {/* title text */}
            <div className="prose">
                <h2 id={id}>{title}</h2>
            </div>

            {/* section badge indicator */}
            <div className="badge badge-neutral">Section</div>

            {/* outside link to daisyui */}
            <Link
                href={href}
                target="_blank"
            >
                <LinkIcon className="size-6 hover:text-white transition-all" />
            </Link>
        </div>
    );
}
