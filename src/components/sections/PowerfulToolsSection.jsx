import { motion } from "framer-motion";
import { useState, useEffect } from "react";


// ── Mock Data ──────────────────────────────────────────────────────────────
const sectionData = {
    badge: "Our Mission",
    heading: "Powerful Tools for Every Society",
    description: "Urbangate was born out of reality. We saw societies drowning in WhatsApp messages, Excel sheets, and missed payments. We decided to build a system that works as hard as you do.",
    vision: {
        title: "The Vision",
        description: "To be the global standard for managing societies, from initial visitor entry to final accounting.",
    },
    impact: {
        title: "The Impact",
        description: "Helping over 1,000+ societies reduce management delays by 40% and increase transparency by 25%.",
    },
    uniqueHeading: "Why We're Unique",
    features: [
        { id: 1, label: "Automate Billing" },
        { id: 2, label: "Manage Complaints" },
        { id: 3, label: "Track Visitors" },
        { id: 4, label: "Real-time Accounting" },
    ],
};

// ── Animation Variants ────────────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -28 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

// ── CheckIcon ─────────────────────────────────────────────────────────────
const CheckIcon = () => (
    <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 8.5L6.5 12L13 5"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// ── Main Component ────────────────────────────────────────────────────────
const PowerfulToolsSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                minHeight: "45vh",
                display: "flex",
                alignItems: "center",
                padding: isMobile ? "3rem 0" : "3.5rem 0",
                backgroundColor: "#0d0d0d", // Dark fallback to blend with image
            }}
        >
            {/* Full background image */}
            <img
                src="/powerfulltool.png"
                alt=""
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "right center",
                    userSelect: "none",
                    pointerEvents: "none",
                    zIndex: 0,
                    opacity: 0.85,
                }}
            />

            {/* Overlay content */}
            <div className="container" style={{ width: "100%", zIndex: 1, position: "relative" }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ 
                        maxWidth: "500px", 
                        paddingLeft: isMobile ? "0.5rem" : "2rem",
                        color: "#ffffff"
                    }}
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} style={{ marginBottom: "0.8rem" }}>
                        <span style={{
                            backgroundColor: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(4px)",
                            padding: "4px 12px",
                            borderRadius: "16px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.5px",
                        }}>
                            {sectionData.badge}
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={itemVariants}
                        style={{
                            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1,
                            marginBottom: "1rem",
                        }}
                    >
                        {sectionData.heading}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.5,
                            color: "rgba(255, 255, 255, 0.85)",
                            marginBottom: "1.5rem",
                            maxWidth: "95%",
                        }}
                    >
                        {sectionData.description}
                    </motion.p>

                    {/* Vision and Impact Columns */}
                    <motion.div 
                        variants={itemVariants}
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "1.5rem",
                            marginBottom: "1.5rem",
                            paddingBottom: "1.5rem",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.15)"
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                                {sectionData.vision.title}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.4 }}>
                                {sectionData.vision.description}
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                                {sectionData.impact.title}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.4 }}>
                                {sectionData.impact.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Unique Heading */}
                    <motion.h3 
                        variants={itemVariants}
                        style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}
                    >
                        {sectionData.uniqueHeading}
                    </motion.h3>

                    {/* Feature list */}
                    <div
                        style={{ 
                            display: "grid", 
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", 
                            gap: "16px 24px" 
                        }}
                    >
                        {sectionData.features.map((feat) => (
                            <motion.div
                                key={feat.id}
                                variants={itemVariants}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    cursor: "default",
                                }}
                            >
                                <div
                                    style={{
                                        width: "22px",
                                        height: "22px",
                                        borderRadius: "50%",
                                        border: "1.5px solid rgba(255,255,255,0.6)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <CheckIcon />
                                </div>
                                <span
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {feat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PowerfulToolsSection;