// // SecurityHero.jsx
// import { motion } from "framer-motion";

// const SecurityHero = ({ data = {} }) => {
//     const {
//         title = "For Security",
//         description = "",
//         buttons = [],
//         features = [],
//         phoneImage = "/security-mobile.png",
//     } = data;

//     return (
//         <section style={{ background: "#fff", overflow: "hidden" }}>

//             {/* TOP HALF: Title + Description + Buttons | Phone */}
//             <div style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #f0f2f8 0%, #e8eaf2 50%, #f5f6fa 100%)",
//                 minHeight: "380px",
//                 overflow: "visible",
//             }}>
//                 {/* Subtle wave decoration */}
//                 <div style={{
//                     position: "absolute", bottom: 0, left: 0, right: 0,
//                     height: "80px",
//                     background: "#fff",
//                     clipPath: "ellipse(55% 100% at 50% 100%)",
//                     zIndex: 0,
//                 }} />

//                 <div style={{
//                     maxWidth: "1100px",
//                     margin: "0 auto",
//                     padding: "64px 40px 0",
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     alignItems: "flex-start",
//                     position: "relative",
//                     zIndex: 1,
//                 }}>
//                     {/* LEFT: Text content */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                         style={{ paddingBottom: "64px" }}
//                     >
//                         <h1 style={{
//                             fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
//                             fontWeight: 800,
//                             color: "#111",
//                             letterSpacing: "-0.03em",
//                             lineHeight: 1.15,
//                             marginBottom: "16px",
//                         }}>
//                             {title}
//                         </h1>

//                         <p style={{
//                             fontSize: "0.9rem",
//                             color: "#555",
//                             lineHeight: 1.7,
//                             marginBottom: "28px",
//                             maxWidth: "380px",
//                         }}>
//                             {description}
//                         </p>

//                         {/* Buttons */}
//                         <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//                             {buttons.map((btn, i) => (
//                                 <a key={i} href={btn.href} style={{
//                                     padding: "10px 22px",
//                                     borderRadius: "8px",
//                                     fontSize: "0.875rem",
//                                     fontWeight: 600,
//                                     textDecoration: "none",
//                                     cursor: "pointer",
//                                     border: "1.5px solid #111",
//                                     background: btn.variant === "filled" ? "#111" : "transparent",
//                                     color: btn.variant === "filled" ? "#fff" : "#111",
//                                     transition: "all 0.2s ease",
//                                 }}
//                                     onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
//                                     onMouseLeave={(e) => {
//                                         e.currentTarget.style.background = btn.variant === "filled" ? "#111" : "transparent";
//                                         e.currentTarget.style.color = btn.variant === "filled" ? "#fff" : "#111";
//                                     }}
//                                 >
//                                     {btn.label}
//                                 </a>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* RIGHT: Phone mockup — extends below into white section */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//                         style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "flex-start",
//                             position: "relative",
//                             zIndex: 10,
//                             marginTop: "-20px",
//                         }}
//                     >
//                         <img
//                             src={phoneImage}
//                             alt="Security Guard App"
//                             style={{
//                                 width: "260px",
//                                 objectFit: "contain",
//                                 filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.15))",
//                                 marginBottom: "-120px", // key: bleeds into the white section below
//                             }}
//                         />
//                     </motion.div>
//                 </div>
//             </div>

//             {/* BOTTOM HALF: Features list | (phone overlap on right) */}
//             <div style={{
//                 maxWidth: "1100px",
//                 margin: "0 auto",
//                 padding: "0 40px 64px",
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//             }}>
//                 {/* LEFT: Features list */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 16 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     style={{ paddingTop: "40px" }}
//                 >
//                     {features.map((feature, i) => {
//                         const Icon = feature.icon;
//                         const isLast = i === features.length - 1;
//                         return (
//                             <motion.div
//                                 key={feature.id}
//                                 initial={{ opacity: 0, x: -16 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.4, delay: i * 0.08 }}
//                                 style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: "16px",
//                                     padding: "16px 0",
//                                     borderBottom: isLast ? "none" : "1px solid #f0f0f0",
//                                 }}
//                             >
//                                 {/* Dark circular icon */}
//                                 <div style={{
//                                     width: "44px", height: "44px",
//                                     borderRadius: "50%",
//                                     background: "#1e2235",
//                                     display: "flex", alignItems: "center", justifyContent: "center",
//                                     flexShrink: 0,
//                                 }}>
//                                     {Icon && <Icon size={20} color="#fff" strokeWidth={1.8} />}
//                                 </div>

//                                 <div>
//                                     <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", margin: "0 0 3px 0" }}>
//                                         {feature.title}
//                                     </p>
//                                     <p style={{ fontSize: "0.82rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </motion.div>

//                 {/* RIGHT: empty space — phone bleeds in from above */}
//                 <div />
//             </div>

//             {/* Responsive */}
//             <style>{`
//                 @media (max-width: 768px) {
//                     .security-grid {
//                         grid-template-columns: 1fr !important;
//                     }
//                     .security-phone img {
//                         width: 200px !important;
//                         margin-bottom: 0 !important;
//                     }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default SecurityHero;


// SecurityHero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        description = "",
        buttons = [],
        features = [],
        phoneImage = "/security-mobile.png",
    } = data;

    return (
        <section style={{ background: "#fff", overflow: "hidden" }}>

            {/* TOP HALF: Title + Description + Buttons | Phone */}
            <div style={{
                position: "relative",
                background: "linear-gradient(160deg, #f0f2f8 0%, #e8eaf2 50%, #f5f6fa 100%)",
                minHeight: isMobile ? "auto" : "380px",
                overflow: "visible",
            }}>
                {/* Wave decoration — desktop only */}
                {!isMobile && (
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        height: "80px",
                        background: "#fff",
                        clipPath: "ellipse(55% 100% at 50% 100%)",
                        zIndex: 0,
                    }} />
                )}

                <div style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: isMobile ? "40px 24px 32px" : "64px 40px 0",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    alignItems: "flex-start",
                    position: "relative",
                    zIndex: 1,
                    gap: isMobile ? "0" : "0",
                }}>
                    {/* LEFT: Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ paddingBottom: isMobile ? "28px" : "64px" }}
                    >
                        <h1 style={{
                            fontSize: isMobile ? "2rem" : "clamp(1.8rem, 3vw, 2.6rem)",
                            fontWeight: 800,
                            color: "#111",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.15,
                            marginBottom: "16px",
                        }}>
                            {title}
                        </h1>

                        <p style={{
                            fontSize: "0.9rem",
                            color: "#555",
                            lineHeight: 1.7,
                            marginBottom: "28px",
                            maxWidth: isMobile ? "100%" : "380px",
                        }}>
                            {description}
                        </p>

                        {/* Buttons */}
                        <div style={{
                            display: "flex",
                            gap: "12px",
                            flexWrap: "wrap",
                            flexDirection: isMobile ? "column" : "row",
                        }}>
                            {buttons.map((btn, i) => (
                                <a key={i} href={btn.href} style={{
                                    padding: isMobile ? "13px 22px" : "10px 22px",
                                    borderRadius: "8px",
                                    fontSize: "0.875rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    border: "1.5px solid #111",
                                    background: btn.variant === "filled" ? "#111" : "transparent",
                                    color: btn.variant === "filled" ? "#fff" : "#111",
                                    transition: "all 0.2s ease",
                                    textAlign: "center",
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "#111"; e.currentTarget.style.color = "#fff"; }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = btn.variant === "filled" ? "#111" : "transparent";
                                        e.currentTarget.style.color = btn.variant === "filled" ? "#fff" : "#111";
                                    }}
                                >
                                    {btn.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT: Phone mockup — desktop only inline, mobile shown below */}
                    {!isMobile && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                position: "relative",
                                zIndex: 10,
                                marginTop: "-20px",
                            }}
                        >
                            <img
                                src={phoneImage}
                                alt="Security Guard App"
                                style={{
                                    width: "260px",
                                    objectFit: "contain",
                                    filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.15))",
                                    marginBottom: "-120px",
                                }}
                            />
                        </motion.div>
                    )}
                </div>

                {/* Mobile: phone image shown below buttons, contained within gradient */}
                {isMobile && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "0 24px 40px",
                        }}
                    >
                        <img
                            src={phoneImage}
                            alt="Security Guard App"
                            style={{
                                width: "200px",
                                objectFit: "contain",
                                filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.12))",
                            }}
                        />
                    </motion.div>
                )}
            </div>

            {/* BOTTOM HALF: Features list */}
            <div style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: isMobile ? "24px 24px 48px" : "0 40px 64px",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            }}>
                {/* Features list */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ paddingTop: isMobile ? "0" : "40px" }}
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        const isLast = i === features.length - 1;
                        return (
                            <motion.div
                                key={feature.id}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    padding: "16px 0",
                                    borderBottom: isLast ? "none" : "1px solid #f0f0f0",
                                }}
                            >
                                <div style={{
                                    width: "44px", height: "44px",
                                    borderRadius: "50%",
                                    background: "#1e2235",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0,
                                }}>
                                    {Icon && <Icon size={20} color="#fff" strokeWidth={1.8} />}
                                </div>

                                <div>
                                    <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", margin: "0 0 3px 0" }}>
                                        {feature.title}
                                    </p>
                                    <p style={{ fontSize: "0.82rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Right column empty on desktop (phone bleeds in from above) */}
                {!isMobile && <div />}
            </div>
        </section>
    );
};

export default SecurityHero;
