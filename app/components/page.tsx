import Footer from "@/components/(homepage)/footer/Footer";
import TOC from "@/components/(components)/toc/TOC";
import ComponentsList from "@/components/(components)/body/ComponentsList";
import Navbar from "@/components/(homepage)/navbar/Navbar";

export default function Page() {
    return (
        <main>
            <Navbar />
            <TOC />
            <ComponentsList />
            <Footer />
        </main>
    );
}
