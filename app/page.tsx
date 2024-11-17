import CTACards from "@/components/(page)/cta-cards/CTACards";
import HPIntro from "@/components/(page)/hp-intro/HPIntro";
import Navbar from "@/components/(page)/navbar/Navbar";

export default function Page() {
    return (
        <main>
            <Navbar />
            <HPIntro />
            <CTACards />
        </main>
    );
}
