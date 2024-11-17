import Footer from "@/components/(homepage)/footer/Footer";
import TOC from "@/components/(components)/toc/TOC";
import Navbar from "@/components/(homepage)/navbar/Navbar";

export default function Page() {
    return (
        <main>
            <Navbar />
            <TOC />
            <Footer />
        </main>
    );
}
