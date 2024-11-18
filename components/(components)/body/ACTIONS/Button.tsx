import ExplanatoryTitle from "@/components/(components)/body/ExplanatoryTitle";

export default function Button() {
    return (
        <>
            <ExplanatoryTitle title="Button" />
            <button className="btn">Button</button>
            <ExplanatoryTitle title="Buttons with brand colors" />
            <button className="btn">Button</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
            <ExplanatoryTitle title="Active Buttons" />
            <button className="btn btn-active">Default</button>
            <button className="btn btn-active btn-neutral">Neutral</button>
            <button className="btn btn-active btn-primary">Primary</button>
            <button className="btn btn-active btn-secondary">Secondary</button>
            <button className="btn btn-active btn-accent">Accent</button>
            <button className="btn btn-active btn-ghost">Ghost</button>
            <button className="btn btn-active btn-link">Link</button>
            <ExplanatoryTitle title="Buttons with state colors" />
            <button className="btn btn-info">Info</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
            <ExplanatoryTitle title="Outline buttons" />
            <button className="btn btn-outline">Default</button>
            <button className="btn btn-outline btn-primary">Primary</button>
            <button className="btn btn-outline btn-secondary">Secondary</button>
            <button className="btn btn-outline btn-accent">Accent</button>
            <ExplanatoryTitle title="Outline buttons with state colors" />
            <button className="btn btn-outline btn-info">Info</button>
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-outline btn-warning">Warning</button>
            <button className="btn btn-outline btn-error">Error</button>
            <ExplanatoryTitle title="Button sizes" />
            <button className="btn btn-lg">Large</button>
            <button className="btn">Normal</button>
            <button className="btn btn-sm">Small</button>
            <button className="btn btn-xs">Tiny</button>
            <ExplanatoryTitle title="Responsive button" />
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
            <ExplanatoryTitle title="Wide button" />
            <button className="btn btn-wide">Wide</button>
            <ExplanatoryTitle title="Glass button" />
            <button className="btn glass">Glass button</button>
            <ExplanatoryTitle title="Buttons with different HTML tags" />
            <a
                role="button"
                className="btn"
            >
                Link
            </a>
            <button
                type="submit"
                className="btn"
            >
                Button
            </button>
            <input
                type="button"
                value="Input"
                className="btn"
            />
            <input
                type="submit"
                value="Submit"
                className="btn"
            />
            <input
                type="radio"
                aria-label="Radio"
                className="btn"
            />
            <input
                type="checkbox"
                aria-label="Checkbox"
                className="btn"
            />
            <input
                type="reset"
                value="Reset"
                className="btn"
            />
            <ExplanatoryTitle title="Disabled buttons" />
            <button
                className="btn"
                disabled
            >
                Disabled using attribute
            </button>
            <button
                className="btn btn-disabled"
                tabIndex={-1}
                role="button"
                aria-disabled="true"
            >
                Disabled using class name
            </button>
            <ExplanatoryTitle title="Square buttons" />
            <button className="btn btn-square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <button className="btn btn-square btn-outline">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <ExplanatoryTitle title="Circle button" />
            <button className="btn btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <button className="btn btn-circle btn-outline">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <ExplanatoryTitle title="Icon at Start" />
            <button className="btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
                Button
            </button>
            <ExplanatoryTitle title="Icon at end" />
            <button className="btn">
                Button
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </button>
            <ExplanatoryTitle title="Button block" />
            <button className="btn btn-block">block</button>
            <ExplanatoryTitle title="Button with loading spinner" />
            <button className="btn btn-square">
                <span className="loading loading-spinner"></span>
            </button>
            <ExplanatoryTitle title="Button with loading spinner and text" />
            <button className="btn">
                <span className="loading loading-spinner"></span>
                loading
            </button>
            <ExplanatoryTitle title="Button without click animation" />
            <button className="btn no-animation">I don't have click animation</button>
        </>
    );
}
