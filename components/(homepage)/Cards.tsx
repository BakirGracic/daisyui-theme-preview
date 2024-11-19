import Image from "next/image";
import Link from "next/link";
import HPCardComponents from "@/public/images/hp-card-components.jpg";
import HPCardExamples from "@/public/images/hp-card-examples.jpg";
import HPCardCustom from "@/public/images/hp-card-custom.jpg";

const cards = [
    {
        title: "Components",
        description: "Preview plain components individually",
        imgSrc: HPCardComponents,
        linkText: "Preview Components",
        linkHref: "/components",
    },
    {
        title: "Examples",
        description: "Explore real page examples",
        imgSrc: HPCardExamples,
        linkText: "Explore Examples",
        linkHref: "/examples",
    },
    {
        title: "Custom Themes",
        description: "Create and preview your custom theme",
        imgSrc: HPCardCustom,
        linkText: "Create Custom",
        linkHref: "/custom",
    },
];

export default function Cards() {
    return (
        <div className="flex justify-center flex-wrap gap-4 px-4 topMargin">
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
                    <div className="card-body p-5">
                        <h2 className="card-title text-white">{card.title}</h2>
                        <p className="text-white">{card.description}</p>
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
    );
}
