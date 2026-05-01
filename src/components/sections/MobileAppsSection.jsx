import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TestimonialsSection from "./TestimonialsSection";

// ── Mock Data ──────────────────────────────────────────────────────────────
const sectionData = {
    heading: "Resident & Security Guard Mobile Apps",
    ctaHeading: "Digitize Your Housing Society Today",
    ctaButton: "Request a Free Demo",
};

const features = [
    {
        id: 1,
        col: "left",
        icon: "approve",
        label: "Approve visitors",
    },
    {
        id: 2,
        col: "left",
        icon: "complaint",
        label: "Raise complaints",
    },
    {
        id: 3,
        col: "left",
        icon: "bill",
        label: "Pay maintenance bills",
    },
    {
        id: 4,
        col: "right",
        icon: "gate",
        label: "Gate pass management",
    },
    {
        id: 5,
        col: "right",
        icon: "visitor",
        label: "Visitor logs & intercom alert",
    },
    {
        id: 6,
        col: "right",
        icon: "qr",
        label: "Scan QR codes",
    },
];

const phoneScreens = [
    {
        id: "resident",
        label: "‹ UGATE.",
        rows: [
            { text: "Visitor con-Vittas", badge: "5.1k" },
            { text: "Maintains Billing", badge: "+ Maintai..." },
            { text: "Trusted Doctor Formatted Archives", badge: "" },
        ],
    },
    {
        id: "security",
        label: "UGATE",
        rows: [
            { text: "Receiver Redirecting", badge: "Sedinse" },
            { text: "30 Dirs libary", badge: "" },
            { text: "C.centeenuany", badge: "0.2k" },
            { text: "Receive Demo", badge: "" },
        ],
    },
];

// ── Icon Map ──────────────────────────────────────────────────────────────
const icons = {
    approve: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="14" height="14" rx="3" stroke="#222" strokeWidth="1.5" />
            <path d="M5.5 9L7.5 11L12.5 6.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    complaint: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7" stroke="#222" strokeWidth="1.5" />
            <path d="M5.5 9L7.5 11L12.5 6.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    bill: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7" stroke="#222" strokeWidth="1.5" />
            <path d="M5.5 9L7.5 11L12.5 6.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    gate: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="4" width="14" height="10" rx="2" stroke="#000000" strokeWidth="1.5" />
            <path d="M6 4V3M12 4V3M2 8h14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    visitor: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1.5" y="1.5" width="6" height="6" rx="1" stroke="#000000" strokeWidth="1.5" />
            <rect x="10.5" y="1.5" width="6" height="6" rx="1" stroke="#000000" strokeWidth="1.5" />
            <rect x="1.5" y="10.5" width="6" height="6" rx="1" stroke="#000000" strokeWidth="1.5" />
            <path d="M10.5 13.5h6M13.5 10.5v6" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    qr: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1.5" y="1.5" width="6" height="6" rx="1" stroke="#000000" strokeWidth="1.5" />
            <rect x="10.5" y="1.5" width="6" height="6" rx="1" stroke="#000000" strokeWidth="1.5" />
            <rect x="1.5" y="10.5" width="6" height="6" rx="1" stroke="#000000" strokeWidth="1.5" />
            <rect x="3" y="3" width="3" height="3" rx="0.5" fill="#000000" />
            <rect x="12" y="3" width="3" height="3" rx="0.5" fill="#000000" />
            <rect x="3" y="12" width="3" height="3" rx="0.5" fill="#000000" />
            <path d="M12 12h3v3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

// ── Animation Variants ────────────────────────────────────────────────────
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const phoneVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.12 },
    }),
};

// ── Phone Mockup ──────────────────────────────────────────────────────────
const PhoneMockup = ({ screen, index }) => (
    <motion.div
        custom={index}
        variants={phoneVariants}
        animate={{ y: [0, index % 2 === 0 ? -6 : -4, 0] }}
        transition={{
            y: { duration: 3.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{
            width: "145px",
            background: "#fff",
            borderRadius: "20px",
            border: "2px solid #ddd",
            overflow: "hidden",
            flexShrink: 0,
        }}
    >
        {/* Notch */}
        <div style={{ background: "#111", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
            <div style={{ width: 30, height: 4, background: "#333", borderRadius: 2 }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#444" }} />
        </div>
        {/* Header */}
        <div style={{ background: "#f8f8f8", padding: "8px 10px 6px", borderBottom: "1px solid #eee" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#111" }}>{screen.label}</div>
        </div>
        {/* Rows */}
        <div style={{ padding: "6px 8px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {screen.rows.map((row, i) => (
                <div key={i} style={{ background: "#f4f4f4", borderRadius: "6px", padding: "5px 7px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "7.5px", color: "#333", fontWeight: 500, flex: 1, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        {row.text}
                    </div>
                    {row.badge && (
                        <div style={{ fontSize: "6.5px", background: "#e0e0e0", borderRadius: "4px", padding: "1px 4px", color: "#555", marginLeft: "4px", flexShrink: 0 }}>
                            {row.badge}
                        </div>
                    )}
                </div>
            ))}
        </div>
        {/* Bottom nav */}
        <div style={{ display: "flex", justifyContent: "space-around", padding: "6px 8px 10px", borderTop: "1px solid #eee", marginTop: "4px" }}>
            {["⊞", "⊙", "☰"].map((icon, i) => (
                <div key={i} style={{ fontSize: "12px", color: "#888" }}>{icon}</div>
            ))}
        </div>
    </motion.div>
);

// ── Rotating Text ─────────────────────────────────────────────────────────
const RotatingText = () => {
    const words = ["society", "security", "visitor", "facility"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <span style={{ 
            color: "#3498db", 
            display: "inline-block", 
            minWidth: "120px", 
            textAlign: "center",
            fontSize: "1.5em",
            fontWeight: 900,
            padding: "0 6px"
        }}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "inline-block" }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

// ── Main Component ────────────────────────────────────────────────────────
const MobileAppsSection = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const leftFeatures = features.filter((f) => f.col === "left");
    const rightFeatures = features.filter((f) => f.col === "right");

    return (
        <div>
            {/* ── Top Band: Features + Phones ─────────────────────────────────── */}
            <section style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                padding: "40px 0",
                marginTop: "20px", 
                borderBottom: "1px solid #ebebeb"
            }}>
                {/* Full background image */}
                <img
                    src="/Resident-Security.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: isMobile ? "contain" : "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: "scaleX(-1)", 
                        userSelect: "none",
                        pointerEvents: "none",
                        zIndex: 0,
                        opacity: isMobile ? 0.3 : 1
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "32px", flexWrap: "wrap", minHeight: "350px" }}>

                        {/* Text Content - Right Side */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            style={{ 
                                flex: "1 1 500px", 
                                maxWidth: isMobile ? "100%" : "700px", 
                                textAlign: isMobile ? "center" : "left", 
                                marginLeft: isMobile ? "0" : "42%",
                                padding: isMobile ? "0 20px" : "0"
                            }}
                        >
                            <motion.h2
                                variants={fadeUp}
                                style={{
                                    fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)",
                                    fontWeight: 800,
                                    color: "#000",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.2,
                                    marginBottom: "1rem",
                                }}
                            >
                                {sectionData.heading}
                            </motion.h2>

                            <motion.p
                                variants={fadeUp}
                                style={{
                                    fontSize: "1.05rem",
                                    color: "#444",
                                    lineHeight: 1.6,
                                    marginBottom: "2rem",
                                    maxWidth: "500px",
                                }}
                            >
                                We are a modern platform focused on <RotatingText /> management.
                                <br />
                                Innovation is the one word we love and we put it into our work everyday.
                            </motion.p>

                            {/* 2-column feature grid */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px 32px" }}>
                                {/* Left col */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {leftFeatures.map((feat) => (
                                        <motion.div
                                            key={feat.id}
                                            variants={fadeLeft}
                                            whileHover={{ x: 4, transition: { duration: 0.18 } }}
                                            style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "default", justifyContent: isMobile ? "center" : "flex-start" }}
                                        >
                                            <span style={{ flexShrink: 0 }}>{icons[feat.icon]}</span>
                                            <span style={{ fontSize: "1rem", fontWeight: 500, color: "#000" }}>{feat.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* Right col */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    {rightFeatures.map((feat) => (
                                        <motion.div
                                            key={feat.id}
                                            variants={fadeLeft}
                                            whileHover={{ x: 4, transition: { duration: 0.18 } }}
                                            style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "default", justifyContent: isMobile ? "center" : "flex-start" }}
                                        >
                                            <span style={{ flexShrink: 0 }}>{icons[feat.icon]}</span>
                                            <span style={{ fontSize: "1rem", fontWeight: 500, color: "#000" }}>{feat.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <TestimonialsSection />

            {/* ── Bottom CTA Band ──────────────────────────────────────────────── */}
            <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    background: "#f5f5f5",
                    padding: "40px 0",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h2
                        style={{
                            fontSize: "clamp(1.4rem, 3vw, 2rem)",
                            fontWeight: 800,
                            color: "#111111",
                            letterSpacing: "-0.03em",
                            marginBottom: "1.5rem",
                        }}
                    >
                        {sectionData.ctaHeading}
                    </h2>
                    <motion.div
                        whileHover={{ scale: 1.04, background: "#111" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            style={{
                                display: "inline-block",
                                background: "transparent",
                                color: "#111",
                                border: "2px solid #111",
                                borderRadius: "8px",
                                padding: "13px 32px",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                letterSpacing: "-0.01em",
                                cursor: "pointer",
                                textDecoration: "none",
                                fontFamily: "inherit",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.background = "#111";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#111";
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            {sectionData.ctaButton}
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default MobileAppsSection;