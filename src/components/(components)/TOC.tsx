import Link from "next/link";

const sections = [
    {
        title: "Actions",
        href: "#actions",
    },
    {
        title: "Data display",
        href: "#data-display",
    },
    {
        title: "Navigation",
        href: "#navigation",
    },
    {
        title: "Feedback",
        href: "#feedback",
    },
    {
        title: "Data input",
        href: "#data-input",
    },
    {
        title: "Layout",
        href: "#layout",
    },
    {
        title: "Mockup",
        href: "#mockup",
    },
];

export default function TOC() {
    return (
        <div className="mx-auto p-4 topMargin max-w-[900px] ">
            <div className="mb-8 text-center mx-auto font-bold text-3xl">Jump to...</div>
            <div className="grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                {sections.map((section) => (
                    <Link
                        key={section.href}
                        className="py-7 px-4 bg-base-200 text-xl text-nowrap font-medium rounded-lg text-center hover:bg-primary transition-all hover:text-primary-content"
                        href={section.href}
                    >
                        {section.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
