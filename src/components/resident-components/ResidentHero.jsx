// ResidentHero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResidentHero = ({ data = {} }) => {
    const {
        bannerImage = "",
        title = "",
        subtitle = "",
        description = "",
        buttons = [],
    } = data;

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
                minHeight: "400px",
                height: "75vh",
            }}
        >
            {/* Full-width background banner image */}
            {/* {bannerImage && (
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("${bannerImage}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "top 30% center",
                        backgroundRepeat: "no-repeat",
                        zIndex: 0,
                    }}
                />
            )} */}

            {bannerImage && (
                <img
                    src={bannerImage}
                    alt=""
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        // objectPosition: "top center",
                        objectPosition: isMobile ? "70% center" : "top center",
                        zIndex: 0,
                    }}
                />
            )}

            {/* Overlay for readability */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="resident-hero-content"
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "620px",
                    height: "100%",
                    padding: isMobile ? "20px 20px 20px" : "56px 40px 56px",
                }}
            >
                {/* Title */}
                <h1
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(3.5rem, 6vw, 6rem)",
                        fontWeight: 400,
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                        marginBottom: "10px",
                        lineHeight: 1,
                    }}
                >
                    {title}
                </h1>

                {/* Subtitle */}
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1.1rem",
                        color: "#a0a0a0",
                        fontWeight: 400,
                        marginBottom: "14px",
                        lineHeight: 1.5,
                    }}
                >
                    {subtitle}
                </p>

                {/* Description */}
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.95rem",
                        color: "#6b6b6b",
                        lineHeight: 1.65,
                        marginBottom: "28px",
                        maxWidth: "420px",
                    }}
                >
                    {description}
                </p>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {buttons.map((btn, i) => (
                        <Link
                            key={i}
                            to={btn.href}
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                padding: "14px 28px",
                                borderRadius: "4px",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                cursor: "pointer",
                                border: btn.variant === "filled" ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.2)",
                                background: btn.variant === "filled" ? "#ffffff" : "transparent",
                                color: btn.variant === "filled" ? "#000000" : "#ffffff",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = btn.variant === "filled" ? "transparent" : "#ffffff";
                                e.currentTarget.style.color = btn.variant === "filled" ? "#ffffff" : "#000000";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                    btn.variant === "filled" ? "#ffffff" : "transparent";
                                e.currentTarget.style.color =
                                    btn.variant === "filled" ? "#000000" : "#ffffff";
                            }}
                        >
                            {btn.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ResidentHero;