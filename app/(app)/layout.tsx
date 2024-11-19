import Navbar from "@/components/_ui/Navbar";
import Footer from "@/components/_ui/Footer";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
