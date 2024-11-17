import Image from "next/image";
import Link from "next/link";
import HPCardComponents from "@/public/images/hp-card-components.jpg";
import HPCardExamples from "@/public/images/hp-card-examples.jpg";
import HPCardCustom from "@/public/images/hp-card-custom.jpg";

const cards = [
    {
        title: "Components",
        description: "Preview plain individual components in different themes",
        imgSrc: HPCardComponents,
        linkText: "View Components",
        linkHref: "/components",
    },
    {
        title: "Examples",
        description: "Explore real page examples in different themes with various components",
        imgSrc: HPCardExamples,
        linkText: "View Examples",
        linkHref: "/examples",
    },
    {
        title: "Custom Themes",
        description: "Create your custom themes and preview them with componentes and examples",
        imgSrc: HPCardCustom,
        linkText: "Craft Custom",
        linkHref: "/custom",
    },
];

export default function CTACards() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="card bg-base-100 image-full w-96 shadow-"
                >
                    <figure>
                        <Image
                            src={card.imgSrc}
                            alt={card.title}
                        />
                    </figure>
                    <div className="card-body !text-white !p-6">
                        <h2 className="card-title">{card.title}</h2>
                        <p>{card.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">
                                <Link href={card.linkHref}>{card.linkText}</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
