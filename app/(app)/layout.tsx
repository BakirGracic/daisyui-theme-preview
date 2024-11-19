import Navbar from "@/components/(homepage)/navbar/Navbar";
import Footer from "@/components/(homepage)/footer/Footer";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
