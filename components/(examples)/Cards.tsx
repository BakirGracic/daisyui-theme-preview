import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import SimpleDashboardImg from "@/public/images/simple-dashboard.png";
import PlaceholderImg from "@/public/images/placeholder.png";

const cards = [
    {
        title: "Simple Dashboard",
        description: "Dashboard with simple layout and minimal design",
        imgSrc: SimpleDashboardImg,
        linkHref: "/simple-dashboard",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
    {
        title: "Placeholder",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
        imgSrc: PlaceholderImg,
        linkHref: "/to-make-this-page",
    },
];

export default function Cards() {
    return (
        <>
            <div className="prose mx-auto text-center topMargin mb-10">
                <h1>
                    Choose example page <br /> and preview themes
                </h1>
            </div>
            <div className="viewportMaxWidth flex justify-center flex-wrap gap-4">
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
                                    className="btn btn-circle btn-primary"
                                    href={card.linkHref}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                >
                                    <ArrowTopRightOnSquareIcon className="size-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
