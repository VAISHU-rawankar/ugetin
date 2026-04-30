import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ data = {} }) => {
    const navigate = useNavigate();
    const { slides = [], buttons = [] } = data;
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3500); // Further increased speed: 3.5 seconds per slide
        return () => clearInterval(timer);
    }, [slides.length]);

    if (!slides.length) return null;

    return (
        <section className="hero-section" style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "#000" }}>
            {/* Background Slider */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0
                    }}
                >
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentSlide].image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            height: "100%",
                            filter: "brightness(0.7)" // Slightly lighter to help black text visibility
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Lighter Center Overlay for Legibility */}
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.4) 100%)",
                zIndex: 1
            }} />

            {/* Content */}
            <div className="container" style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ 
                            textAlign: "center", 
                            maxWidth: "1100px", 
                            padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? "20px" : "40px",
                            borderRadius: "24px",
                        }}
                    >
                        <motion.h1 
                            style={{ 
                                fontSize: "clamp(2rem, 8vw, 3.5rem)", 
                                fontWeight: 900, 
                                lineHeight: 1.1, 
                                marginBottom: "1.5rem",
                                color: "#ffffff",
                                textTransform: "uppercase",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            {/* Split color logic: first half white, second half black without shadow */}
                            {slides[currentSlide].heading.split(" ").map((word, i, arr) => {
                                const isSecondHalf = i >= arr.length / 2;
                                return (
                                    <span 
                                        key={i} 
                                        style={{ 
                                            color: isSecondHalf ? "#000000" : "#ffffff",
                                            display: "inline-block",
                                            marginRight: "0.25em"
                                        }}
                                    >
                                        {word}
                                    </span>
                                );
                            })}
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ 
                                fontSize: "clamp(1rem, 4vw, 1.4rem)", 
                                color: "#ffffff", 
                                marginBottom: typeof window !== 'undefined' && window.innerWidth <= 768 ? "2.5rem" : "3.5rem",
                                lineHeight: 1.6,
                                maxWidth: "850px",
                                marginInline: "auto",
                                fontWeight: 500,
                                textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                            }}
                        >
                            {slides[currentSlide].subtext}
                        </motion.p>

                        <div style={{ 
                            display: "flex", 
                            gap: typeof window !== 'undefined' && window.innerWidth <= 768 ? "12px" : "24px", 
                            justifyContent: "center", 
                            flexWrap: "wrap",
                            flexDirection: typeof window !== 'undefined' && window.innerWidth <= 480 ? "column" : "row"
                        }}>
                            {buttons.map((btn) => (
                                <motion.button
                                    key={btn.id}
                                    onClick={() => btn.href && navigate(btn.href)}
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: typeof window !== 'undefined' && window.innerWidth <= 768 ? "15px 30px" : "20px 50px",
                                        borderRadius: "4px",
                                        fontSize: "0.9rem",
                                        fontWeight: 800,
                                        cursor: "pointer",
                                        border: btn.variant === "primary" ? "none" : "2px solid #ffffff",
                                        background: btn.variant === "primary" ? "#ffffff" : "transparent",
                                        color: btn.variant === "primary" ? "#000000" : "#ffffff",
                                        transition: "all 0.3s ease",
                                        textTransform: "uppercase",
                                        letterSpacing: "2px",
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                        width: typeof window !== 'undefined' && window.innerWidth <= 480 ? "100%" : "auto"
                                    }}
                                >
                                    {btn.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress indicators removed as per user request */}
        </section>
    );
};

export default HeroSection;