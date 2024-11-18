import HPIntro from "@/components/(homepage)/hp-intro/HPIntro";
import CTACards from "@/components/(homepage)/cta-cards/CTACards";
import Stats from "@/components/(homepage)/stats/Stats";
import CTAProject from "@/components/(homepage)/cta-project/CTAProject";

export default function Page() {
    return (
        <main>
            <HPIntro />
            <CTACards />
            <Stats />
            <CTAProject />
        </main>
    );
}
