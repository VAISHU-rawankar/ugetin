import HeroSection from "../components/sections/HeroSection";
import ProblemSection from "../components/sections/ProblemSection";
import SolutionSection from "../components/sections/SolutionSection";
import FeaturePreviewSection from "../components/sections/FeaturePreviewSection";
import StatsSection from "../components/sections/StatsSection";
import CTASection from "../components/sections/CTASection";
import FeaturesSection from "../components/sections/FeaturesSection";
import PowerfulToolsSection from "../components/sections/PowerfulToolsSection";
import MobileAppsSection from "../components/sections/MobileAppsSection";
import SocietyPlatform from "../components/sections/SocietyPlatform";

import { heroSlides } from "../data/mockData";

const homeHeroData = {
    slides: heroSlides,
    buttons: [
        { id: "get-demo", label: "Get Demo", variant: "primary", icon: null, href: "/contact" },
        { id: "learn-more", label: "Learn More", variant: "outline", icon: null, href: "/features" },
    ],
};

export default function Home() {
    return (
        <>
            <HeroSection data={homeHeroData} />
            {/* <FeaturesSection /> */}
            <SocietyPlatform />
            <PowerfulToolsSection />
            <MobileAppsSection />
            {/* <ProblemSection /> */}
            {/* <SolutionSection />
            <FeaturePreviewSection />
            <StatsSection />
            <CTASection /> */}
        </>
    );
}