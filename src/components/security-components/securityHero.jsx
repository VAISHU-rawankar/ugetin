import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
};

const SecurityHero = ({ data = {} }) => {
    const isMobile = useIsMobile();

    const {
        title = "For Security",
        description = "Empower your security guards with our intuitive guard management app. Manage visitor entries, deliveries, and incidents seamlessly from their mobile device.",
        highlights = ["Real-time Entry Logging", "Instant SOS Protocol", "Digital Guard Patrol", "Zero Manual Errors"],
        buttons = [
            { label: "Get Demo", href: "/contact", variant: "outline" },
            { label: "Learn More", href: "#", variant: "filled" }
        ],
    } = data;

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                height: isMobile ? "auto" : "100vh",
                minHeight: isMobile ? "auto" : "750px",
                overflow: "hidden",
                background: "#ffffff",
                display: "flex",
                alignItems: "center"
            }}
        >
            {/* Background Decorative Text */}
            {!isMobile && (
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "5%",
                    transform: "translateY(-50%)",
                    fontSize: "15vw",
                    fontWeight: 900,
                    color: "rgba(0,0,0,0.03)",
                    lineHeight: 1,
                    zIndex: 0,
                    pointerEvents: "none",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit"
                }}>
                    AURORA
                </div>
            )}

            <div className="container" style={{ 
                maxWidth: "1500px", 
                margin: "0 auto", 
                zIndex: 1, 
                position: "relative",
                padding: isMobile ? "80px 20px" : "0 100px"
            }}>
                <div style={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "60px"
                }}>
                    
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: isMobile ? "1" : "0 1 800px" }}
                    >
                        {/* Badge */}
                        <div style={{
                            display: "inline-block",
                            padding: "8px 20px",
                            background: "#000000",
                            color: "#ffffff",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            marginBottom: "24px",
                        }}>
                            Security Protocol
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: isMobile ? "3.5rem" : "clamp(4.5rem, 8vw, 6.5rem)",
                                fontWeight: 400,
                                color: "#000000",
                                letterSpacing: "-0.01em",
                                marginBottom: "20px",
                                lineHeight: 0.9,
                                textTransform: "uppercase",
                                whiteSpace: "nowrap"
                            }}
                        >
                            FOR SECURITY
                        </h1>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: isMobile ? "1.05rem" : "1.2rem",
                                color: "#444444",
                                lineHeight: 1.6,
                                marginBottom: "40px",
                                maxWidth: "520px",
                            }}
                        >
                            {description}
                        </p>

                        {/* Highlights */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                            gap: "16px 32px",
                            marginBottom: "48px",
                        }}>
                            {highlights.map((text, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <div style={{ width: "6px", height: "6px", background: "#000", borderRadius: "50%" }} />
                                    <span style={{ 
                                        fontFamily: "'DM Sans', sans-serif", 
                                        fontSize: "0.95rem", 
                                        fontWeight: 700, 
                                        color: "#000" 
                                    }}>{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap",
                        }}>
                            {buttons.map((btn, i) => (
                                <Link
                                    key={i}
                                    to={btn.href}
                                    style={{
                                        padding: "16px 48px",
                                        borderRadius: "4px",
                                        fontSize: "0.95rem",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        border: "1.5px solid #000",
                                        background: btn.variant === "filled" ? "#000" : "transparent",
                                        color: btn.variant === "filled" ? "#fff" : "#000",
                                        transition: "all 0.3s ease",
                                        textAlign: "center",
                                        fontFamily: "'DM Sans', sans-serif",
                                        minWidth: isMobile ? "100%" : "180px"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = btn.variant === "filled" ? "transparent" : "#000";
                                        e.currentTarget.style.color = btn.variant === "filled" ? "#000" : "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background =
                                            btn.variant === "filled" ? "#000" : "transparent";
                                        e.currentTarget.style.color =
                                            btn.variant === "filled" ? "#fff" : "#000";
                                    }}
                                >
                                    {btn.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Security Guard Cutout */}
                    {!isMobile && (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            style={{ 
                                flex: "1",
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "relative",
                                height: "100vh",
                                alignItems: "flex-end",
                                overflow: "hidden"
                            }}
                        >
                            {/* Ambient Glow */}
                            <div style={{
                                position: "absolute",
                                width: "150%",
                                height: "100%",
                                background: "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0) 70%)",
                                zIndex: -1,
                                top: "10%"
                            }} />

                            <img 
                                src="/indian_guard_folded.png" 
                                alt="Professional Indian Security Guard"
                                style={{
                                    height: "115%",
                                    width: "auto",
                                    maxHeight: "none",
                                    filter: "drop-shadow(30px 20px 60px rgba(0,0,0,0.1))",
                                    objectFit: "contain",
                                    display: "block",
                                    transform: "translateY(10%)"
                                }}
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecurityHero;