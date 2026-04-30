// residentData.js — All content for the Resident page

export const residentData = {
    hero: {
        bannerImage: "/society-heco-section-1.png", // full-width background image
        title: "For Residents",
        subtitle: "Manage society living from the comfort of your mobile.",
        description:
            "UGATE empowers residents with a powerful mobile ecosystem to handle maintenance payments, visitor approvals, facility bookings, and community engagement with a single tap. Experience a smarter way to live in your society.",
        buttons: [
            { label: "Request Demo →", variant: "outline", href: "/contact" },
            { label: "Explore Features ↓", variant: "filled", href: "#features" },
        ],
    },

    features: {
        heading: {
            line1: "Features",
            line2: "For Residents",
            highlightWord: "Residents", // bold/highlighted word on line2
        },
        subtitle: "Manage society living with your resident app.",
        items: [
            {
                id: "notices",
                icon: "bell",
                title: "View Society Notices",
                description: "Manage members, flats & vehicles",
            },
            {
                id: "maintenance",
                icon: "credit-card",
                title: "Pay Maintenance",
                description: "Pay maintenance bills securely within the app",
            },
            {
                id: "complaints",
                icon: "alert-circle",
                title: "Raise Complaints",
                description: "Track visitors & improve security",
            },
        ],
    },

    download: {
        text: "Download our app for seamless society management",
        buttons: [
            {
                id: "google",
                label: "GET IT ON\nGoogle Play",
                icon: "google-play",
                href: "#google-play",
                badgeImage: "/play.png",
            },
            {
                id: "apple",
                label: "Download on the\nApp Store",
                icon: "apple",
                href: "#app-store",
                badgeImage: "/apple.png",
            },
        ],
    },

    experience: {
        bannerImage: "/society-middle-section.png", // full-width background image
        title: "Seamless Living Experience",
        subtitle: "Transform your society living with these easy-to-use features.",
        items: [
            {
                id: "notices",
                icon: "megaphone",
                title: "Society Notices & Announcements",
                description:
                    "Never miss an important update or announcement! Stay informed with all your society notices and annies directly on your phone.",
            },
            {
                id: "payments",
                icon: "wallet",
                title: "Online Maintenance Payments",
                description:
                    "Make living easier by paying your maintenance bills online. Quick, secure, and hassle-free payment directly from the app.",
            },
        ],
    },
};