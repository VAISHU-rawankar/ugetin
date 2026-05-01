import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesGrid from '../components/sections/FeaturesGrid';
import PowerfulToolsSection from '../components/sections/PowerfulToolsSection';
import MobileAppsSection from '../components/sections/MobileAppsSection';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <FeaturesGrid />
            <PowerfulToolsSection />
            <MobileAppsSection />
        </main>
    );
};

export default Home;