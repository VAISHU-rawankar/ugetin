// // SecurityHero.jsx
// import { motion } from "framer-motion";

// const SecurityHero = ({ data = {} }) => {
//     const {
//         bannerImage = "",
//         title = "",
//         description = "",
//         buttons = [],
//     } = data;

//     return (
//         <section
//             style={{
//                 position: "relative",
//                 width: "100%",
//                 minHeight: "420px",
//             }}
//         >
//             {/* Full-width background banner */}
//             {bannerImage && (
//                 <div
//                     style={{
//                         position: "absolute",
//                         inset: 0,
//                         backgroundImage: `url("${bannerImage}")`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "top left 30%",
//                         backgroundRepeat: "no-repeat",
//                         zIndex: 0,
//                     }}
//                 />
//             )}

//             {/* Overlay */}
//             <div
//                 style={{
//                     position: "absolute",
//                     inset: 0,
//                     zIndex: 1,
//                 }}
//             />

//             {/* Content — left aligned, max half width */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//                 style={{
//                     position: "relative",
//                     zIndex: 2,
//                     maxWidth: "500px",
//                     padding: "56px 90px 56px",
//                 }}
//             >
//                 {/* Title */}
//                 <h1
//                     style={{
//                         fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
//                         fontWeight: 800,
//                         color: "#111",
//                         letterSpacing: "-0.03em",
//                         marginBottom: "16px",
//                         lineHeight: 1.15,
//                     }}
//                 >
//                     {title}
//                 </h1>

//                 {/* Description */}
//                 <p
//                     style={{
//                         fontSize: "1rem",
//                         color: "#555",
//                         lineHeight: 1.65,
//                         marginBottom: "28px",
//                         maxWidth: "400px",
//                     }}
//                 >
//                     {description}
//                 </p>

//                 {/* Buttons */}
//                 <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//                     {buttons.map((btn, i) => (
//                         <a
//                             key={i}
//                             href={btn.href}
//                             style={{
//                                 padding: "10px 22px",
//                                 borderRadius: "8px",
//                                 fontSize: "0.975rem",
//                                 fontWeight: 600,
//                                 textDecoration: "none",
//                                 cursor: "pointer",
//                                 border: "1.5px solid #111",
//                                 background: btn.variant === "filled" ? "#111" : "transparent",
//                                 color: btn.variant === "filled" ? "#fff" : "#111",
//                                 transition: "all 0.2s ease",
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.currentTarget.style.background = "#111";
//                                 e.currentTarget.style.color = "#fff";
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.currentTarget.style.background =
//                                     btn.variant === "filled" ? "#111" : "transparent";
//                                 e.currentTarget.style.color =
//                                     btn.variant === "filled" ? "#fff" : "#111";
//                             }}
//                         >
//                             {btn.label}
//                         </a>
//                     ))}
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default SecurityHero;


// SecurityHero.jsx
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
        bannerImage = "",
        title = "",
        description = "",
        highlights = [],
        buttons = [],
    } = data;

    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                minHeight: "600px",
                height: "75vh",
                overflow: "hidden",
                background: "#f8f9fa"
            }}
        >
            {/* Clear Image Background */}
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
                        objectPosition: isMobile ? "70% center" : "top right",
                        zIndex: 0,
                        filter: "none"
                    }}
                />
            )}

            {/* Gradient Overlay for Text Readability - Editorial Style */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: isMobile 
                        ? "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.2) 100%)"
                        : "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.98) 25%, rgba(255,255,255,0.7) 45%, rgba(255,255,255,0) 100%)",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={
                    isMobile
                        ? {
                              position: "relative",
                              zIndex: 2,
                              maxWidth: "100%",
                              padding: "60px 24px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              height: "100%"
                          }
                        : {
                              position: "relative",
                              zIndex: 2,
                              maxWidth: "900px",
                              padding: "80px 100px",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center"
                          }
                }
            >
                {/* Badge */}
                <div style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    background: "#000000",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "20px",
                    borderRadius: "2px"
                }}>
                    Security Protocol
                </div>

                {/* Title */}
                <h1
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: isMobile ? "3.5rem" : "clamp(4rem, 7vw, 6.5rem)",
                        fontWeight: 400,
                        color: "#000000",
                        letterSpacing: "-0.01em",
                        marginBottom: "16px",
                        lineHeight: 0.95,
                    }}
                >
                    {title}
                </h1>

                {/* Description */}
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: isMobile ? "1rem" : "1.15rem",
                        color: "#444444",
                        lineHeight: 1.6,
                        marginBottom: "32px",
                        maxWidth: isMobile ? "100%" : "520px",
                    }}
                >
                    {description}
                </p>

                {/* Highlights */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px 24px",
                    marginBottom: "40px",
                    maxWidth: "600px"
                }}>
                    {highlights.map((text, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <div style={{ width: "6px", height: "6px", background: "#000", borderRadius: "50%" }} />
                            <span style={{ 
                                fontFamily: "'DM Sans', sans-serif", 
                                fontSize: "0.9rem", 
                                fontWeight: 600, 
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
                    flexDirection: isMobile ? "column" : "row",
                }}>
                    {buttons.map((btn, i) => (
                        <Link
                            key={i}
                            to={btn.href}
                            style={{
                                padding: isMobile ? "16px 24px" : "16px 36px",
                                borderRadius: "4px",
                                fontSize: "0.95rem",
                                fontWeight: 700,
                                textDecoration: "none",
                                cursor: "pointer",
                                border: "1px solid #000",
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
        </section>
    );
};

export default SecurityHero;