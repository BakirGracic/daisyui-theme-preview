import Navbar from "@/components/(homepage)/navbar/Navbar";
import HPIntro from "@/components/(homepage)/hp-intro/HPIntro";
import CTACards from "@/components/(homepage)/cta-cards/CTACards";
import Stats from "@/components/(homepage)/stats/Stats";
import CTAProject from "@/components/(homepage)/cta-project/CTAProject";
import Footer from "@/components/(homepage)/footer/Footer";

export default function Page() {
    return (
        <main>
            <Navbar />
            <HPIntro />
            <CTACards />
            <Stats />
            <CTAProject />
            <Footer />
        </main>
    );
}
