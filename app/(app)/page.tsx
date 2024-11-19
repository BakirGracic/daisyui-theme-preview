import Cards from "@/components/(homepage)/Cards";
import Stats from "@/components/(homepage)/Stats";
import Links from "@/components/(homepage)/Links";

export default function Page() {
    return (
        <>
            <div className="prose topMargin mx-auto text-center px-4">
                <h1>DaisyUI Theme Preview</h1>
                <p>Welcome to the unofficial DaisyUI theme preview page, where you can find out how the awesome DaisyUI components look and feel in preset and custom themes by viewing the basic components and real exmaples!</p>
            </div>
            <Cards />
            <Stats />
            <Links />
        </>
    );
}
