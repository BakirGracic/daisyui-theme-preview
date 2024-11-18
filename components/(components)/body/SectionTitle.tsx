import Link from "next/link";

export default function GroupTitle({ id, title, href }: { id: string; title: string; href: string }) {
    return (
        <div className="flex items-center gap-3 mb-4 mt-7">
            {/* id link */}
            <Link href={`#${id}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:stroke-white transition-all"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
                    />
                </svg>
            </Link>
            {/* title text */}
            <div className="prose">
                <h2 id={id}>{title}</h2>
            </div>
            {/* group badge indicator */}
            <div className="badge badge-neutral">Section</div>
            {/* daisyui outside link */}
            <Link
                href={href}
                target="_blank"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 hover:stroke-white transition-all"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                </svg>
            </Link>
        </div>
    );
}
