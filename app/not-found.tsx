import Link from "next/link";
import Navbar from "@/components/_ui/Navbar";
import Footer from "@/components/_ui/Footer";

export default function NotFound() {
    return (
        <>
            <div className="fixed w-full top-0">
                <Navbar />
            </div>
            <div className="fixed z-[-1] inset-0 h-screen flex items-center justify-center">
                <div className="prose text-center">
                    <h1>404 | Not Found</h1>
                    <p>The page you are looking for doesn&apos;t exist</p>
                    <Link
                        className="btn btn-primary"
                        href="/"
                    >
                        Homepage
                    </Link>
                </div>
            </div>
            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </>
    );
}
