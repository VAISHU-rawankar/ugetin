// Resident.jsx — Main page composer
import ResidentHero from "../components/resident-components/ResidentHero";
import ResidentFeature from "../components/resident-components/ResidentFeature";
import Download from "../components/resident-components/Download";
import Experience from "../components/resident-components/Experience";
import Marquee from "../components/resident-components/Marquee";
import { featuresPageData } from "../data/featureData";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const Resident = ({ data = {} }) => {
    const {
        hero = {},
        features = {},
        download = {},
        experience = {},
    } = data;

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const revealVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <div style={{
            fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
            background: "#000000",
            color: "#ffffff",
            marginTop: "70px",
            minHeight: "100vh",
        }}>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "#ffffff",
                    transformOrigin: "0%",
                    zIndex: 9999
                }}
            />

            {/* Hero Section */}
            <ResidentHero data={hero} />

            {/* Marquee Trust Bar */}
            <Marquee />

            {/* Features Section */}
            <motion.div
                id="features"
                initial={{ opacity: 0, y: 50 }}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <ResidentFeature data={features} />
            </motion.div>

            {/* Download Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <Download data={download} />
            </motion.div>

            {/* Experience Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <Experience data={experience} />
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={revealVariants}
            >
                <section style={{
                    padding: "100px 24px",
                    background: "#ffffff",
                    textAlign: "center",
                    borderTop: "1px solid #eeeeee",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                        <motion.h2 
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                color: "#000000",
                                lineHeight: 1,
                                marginBottom: "20px",
                                letterSpacing: "1px"
                            }}
                        >
                            READY TO <span style={{ color: "#ffffff", WebkitTextStroke: "1px #000000" }}>UPGRADE</span> YOUR SECURITY?
                        </motion.h2>
                        <motion.p 
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1.1rem",
                                color: "#666666",
                                marginBottom: "40px",
                                maxWidth: "600px",
                                margin: "0 auto 40px"
                            }}
                        >
                            {featuresPageData.cta.subtitle}
                        </motion.p>
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        }}>
                            <Link to="/pricing" style={{
                                padding: "16px 32px",
                                background: "#000000",
                                color: "#ffffff",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: "1rem",
                                transition: "all 0.3s ease",
                                border: "1px solid #000000"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#000000";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#000000";
                                e.currentTarget.style.color = "#ffffff";
                            }}
                            >
                                Get Started Free →
                            </Link>
                            <Link to="/contact" style={{
                                padding: "16px 32px",
                                background: "transparent",
                                color: "#000000",
                                textDecoration: "none",
                                borderRadius: "4px",
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 700,
                                fontSize: "1rem",
                                transition: "all 0.3s ease",
                                border: "1px solid #000000"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#000000";
                                e.currentTarget.style.color = "#ffffff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#000000";
                            }}
                            >
                                Schedule Demo 📅
                            </Link>
                        </div>
                    </div>

                    {/* Animated border line effect placeholder */}
                    <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)"
                    }} />
                </section>
            </motion.div>
        </div>
    );
};

export default Resident;
