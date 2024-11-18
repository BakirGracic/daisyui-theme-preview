import Navbar from "@/components/(homepage)/navbar/Navbar";
import TOC from "@/components/(components)/toc/TOC";
import ComponentsList from "@/components/(components)/body/ComponentsList";
import Footer from "@/components/(homepage)/footer/Footer";
import BackToTop from "@/components/(components)/body/BackToTop";

export default function Page() {
    return (
        <>
            <main>
                <Navbar />
                <TOC />
                <div className="viewportMaxWidth">
                    <ComponentsList />
                </div>
                <Footer />
            </main>
            <BackToTop />
        </>
    );
}
