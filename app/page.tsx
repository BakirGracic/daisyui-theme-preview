import CTACards from "@/components/(page)/cta-cards/CTACards";
import CTAProject from "@/components/(page)/cta-project/CTAProject";
import HPIntro from "@/components/(page)/hp-intro/HPIntro";
import Navbar from "@/components/(page)/navbar/Navbar";
import Stats from "@/components/(page)/stats/Stats";

export default function Page() {
    return (
        <main>
            <Navbar />
            <HPIntro />
            <CTACards />
            <CTAProject />
            <Stats />
        </main>
    );
}
