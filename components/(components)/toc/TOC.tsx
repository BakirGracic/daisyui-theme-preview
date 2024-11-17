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
        <div className="mx-auto p-4 my-12 md:my-20 max-w-[900px] ">
            <div className="prose mb-8 text-center mx-auto">
                <h1>Jump to...</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {sections.map((section) => (
                    <Link
                        key={section.href}
                        className="py-8 px-8 bg-base-200 text-xl text-nowrap font-medium rounded-lg text-center hover:bg-primary transition-all hover:text-primary-content"
                        href={section.href}
                    >
                        {section.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
