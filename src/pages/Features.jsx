import HeroSection from "../components/sections/HeroSection";
import KeyFeature from "../components/sections/KeyFeature";
import { featuresPageData } from "../data/featureData";
import {
    Home,
    CreditCard,
    UserCheck,
    MessageSquare,
    ClipboardList,
    CalendarCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ManagementWorkflow from "../components/sections/ManagementWorkflow";

const featuresHeroData = {
    tagline: "Smart Society Management",
    subtitle: "Made Simple",
    description: "Manage billing, residents & security – all in one platform.",
    buttons: [
        { id: "get-demo", label: "Get Demo", variant: "outline", icon: null, href: "/contact" },
        { id: "learn-more", label: "Learn More", variant: "primary", icon: null, href: "/contact" },
    ],
    heroImage: "/society-admin-1.png",
    dashboardImage: "/dashboard.png",
};

const keyFeatureData = {
    sectionTitle: "Key Features",
    features: [
        {
            id: "resident",
            icon: Home,
            title: "Resident Management",
            description: "Manage members, flats & vehicles",
        },
        {
            id: "billing",
            icon: CreditCard,
            title: "Billing & Accounting",
            description: "Automate invoices, track payments",
        },
        {
            id: "visitor",
            icon: UserCheck,
            title: "Visitor Management",
            description: "Monitor and register visitors & updates",
        },
        {
            id: "communication",
            icon: MessageSquare,
            title: "Communication Hub",
            description: "Announcements via app, email & SMS",
        },
        {
            id: "complaint",
            icon: ClipboardList,
            title: "Complaint Tracking",
            description: "Track and manage resident complaints",
        },
        {
            id: "facility",
            icon: CalendarCheck,
            title: "Facility Booking",
            description: "Allow residents to book amenities",
        },
    ],
    phoneImage: "/key_feature_hero.jpeg", // wide image with phone on the right
};


export default function Features() {
    const d = featuresPageData;
    return (
        <>
            <HeroSection data={featuresHeroData} />
            <KeyFeature data={keyFeatureData} />
            <ManagementWorkflow />
            <WhyChooseUs />

            {/* CTA */}
            <section className="section cta-section" >
                <div className="container">
                    <div className="cta-content">
                        <h2>{d.cta.title}</h2>
                        <p>{d.cta.subtitle}</p>
                        <div className="cta-buttons">
                            <Link to="/pricing" className="btn btn-primary btn-large">
                                <span>Get Started Free</span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                <span>Schedule Demo</span>
                                <i className="fas fa-calendar"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}