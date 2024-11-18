import Image from "next/image";
import Link from "next/link";
import SimpleDashboardImg from "@/public/images/simple-dashboard.png";
import PlaceholderImg from "@/public/images/placeholder.png";

const cards = [
    {
        title: "Simple Dashboard",
        description: "Dashboard with simple layout and minimal design",
        imgSrc: SimpleDashboardImg,
        linkText: "Visit",
        linkHref: "/simple-dashboard",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkText: "Visit",
        linkHref: "/to-make-this-page",
    },
];

export default function ExampleCards() {
    return (
        <>
            <div className="prose mx-auto text-center mt-12 md:mt-20 mb-6">
                <h1>Choose example page to preview themes</h1>
            </div>
            <div className="viewportMaxWidth flex justify-center flex-wrap gap-4 p-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 image-full w-96 shadow-md"
                    >
                        <figure>
                            <Image
                                src={card.imgSrc}
                                alt={card.title}
                                priority
                            />
                        </figure>
                        <div className="card-body !text-white !p-6">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.description}</p>
                            <div className="card-actions justify-end">
                                <Link
                                    className="btn btn-primary"
                                    href={card.linkHref}
                                >
                                    {card.linkText}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
