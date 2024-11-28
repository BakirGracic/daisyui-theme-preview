import ThemeingProvider from "@/components/_contexts/ThemeingProvider";
import Navbar from "@/components/_ui/Navbar";
import Footer from "@/components/_ui/Footer";
import BackToTop from "@/components/_ui/BackToTop";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeingProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
        </ThemeingProvider>
    );
}
