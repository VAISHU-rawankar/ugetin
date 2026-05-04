import ManagementHero from "../components/sections/ManagementHero";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ManagementWorkflow from "../components/sections/ManagementWorkflow";
import ForManagement from "../components/sections/ForManagement";
import WhyUGate from "../components/common/WhyUGate";

export default function Features() {
    return (
        <>
            <ManagementHero />
            <ForManagement />
            <ManagementWorkflow />
            <WhyChooseUs />
            <WhyUGate />
        </>
    );
}