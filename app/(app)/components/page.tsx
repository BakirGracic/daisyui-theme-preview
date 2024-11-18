import TOC from "@/components/(components)/toc/TOC";
import ComponentsList from "@/components/(components)/body/ComponentsList";
import BackToTop from "@/components/(components)/body/BackToTop";

export default function Page() {
    return (
        <main>
            <TOC />
            <div className="viewportMaxWidth">
                <ComponentsList />
            </div>
            <BackToTop />
        </main>
    );
}
