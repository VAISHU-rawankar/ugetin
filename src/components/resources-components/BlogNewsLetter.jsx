// // BlogNewsletter.jsx
// import { useState } from "react";
// import { motion } from "framer-motion";

// const BlogNewsletter = ({ data = {} }) => {
//     const {
//         title = "Subscribe to our Newsletter",
//         subtitle = "Get the latest updates delivered to your inbox.",
//         placeholder = "Enter your email...",
//         buttonLabel = "Subscribe",
//     } = data;

//     const [email, setEmail] = useState("");
//     const [submitted, setSubmitted] = useState(false);

//     const handleSubmit = () => {
//         if (email) setSubmitted(true);
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.45 }}
//             style={{
//                 background: "#f7f7f7",
//                 borderRadius: "16px",
//                 padding: "32px 40px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: "24px",
//                 flexWrap: "wrap",
//                 marginTop: "16px",
//                 marginBottom: "48px",
//             }}
//         >
//             {/* Text */}
//             <div>
//                 <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: "0 0 4px 0" }}>
//                     {title}
//                 </p>
//                 <p style={{ fontSize: "0.85rem", color: "#666", margin: 0 }}>
//                     {subtitle}
//                 </p>
//             </div>

//             {/* Input + Button */}
//             {submitted ? (
//                 <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#16a34a" }}>
//                     ✓ You're subscribed!
//                 </p>
//             ) : (
//                 <div style={{ display: "flex", gap: "0", flexShrink: 0 }}>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder={placeholder}
//                         style={{
//                             padding: "11px 16px",
//                             borderRadius: "8px 0 0 8px",
//                             border: "1.5px solid #e0e0e0",
//                             borderRight: "none",
//                             fontSize: "0.875rem",
//                             outline: "none",
//                             width: "240px",
//                             background: "#fff",
//                             color: "#111",
//                         }}
//                     />
//                     <button
//                         onClick={handleSubmit}
//                         style={{
//                             padding: "11px 22px",
//                             borderRadius: "0 8px 8px 0",
//                             border: "none",
//                             background: "#111",
//                             color: "#fff",
//                             fontSize: "0.875rem",
//                             fontWeight: 600,
//                             cursor: "pointer",
//                             whiteSpace: "nowrap",
//                         }}
//                     >
//                         {buttonLabel}
//                     </button>
//                 </div>
//             )}
//         </motion.div>
//     );
// };

// export default BlogNewsletter;

// BlogNewsletter.jsx
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

const BlogNewsletter = ({ data = {} }) => {
    const isMobile = useIsMobile();

    const {
        title = "Subscribe to our Newsletter",
        subtitle = "Get the latest updates delivered to your inbox.",
        placeholder = "Enter your email...",
        buttonLabel = "Subscribe",
    } = data;

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (email) setSubmitted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: isMobile ? "40px 24px" : "60px 80px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "stretch" : "center",
                justifyContent: "space-between",
                gap: isMobile ? "32px" : "48px",
                marginTop: "80px",
                marginBottom: "80px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
        >
            {/* Text */}
            <div style={{ maxWidth: "500px" }}>
                <p style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.5rem", 
                    fontWeight: 700, 
                    color: "#000000", 
                    margin: "0 0 12px 0",
                    lineHeight: 1.2
                }}>
                    {title}
                </p>
                <p style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem", 
                    color: "#666", 
                    margin: 0,
                    lineHeight: 1.5
                }}>
                    {subtitle}
                </p>
            </div>

            {/* Input + Button */}
            {submitted ? (
                <div style={{
                    background: "#000000",
                    padding: "16px 32px",
                    borderRadius: "100px",
                }}>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem", 
                        fontWeight: 700, 
                        color: "#ffffff", 
                        margin: 0 
                    }}>
                        ✓ YOU'RE ON THE LIST
                    </p>
                </div>
            ) : (
                <div style={{
                    display: "flex",
                    gap: "0",
                    flexShrink: 0,
                    width: isMobile ? "100%" : "400px",
                    position: "relative"
                }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        style={{
                            padding: "18px 24px",
                            borderRadius: "100px",
                            border: "1px solid #e5e5e5",
                            fontSize: "1rem",
                            outline: "none",
                            width: "100%",
                            background: "#f9f9f9",
                            color: "#000000",
                            boxSizing: "border-box",
                            fontFamily: "'DM Sans', sans-serif",
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{
                            position: "absolute",
                            right: "6px",
                            top: "6px",
                            bottom: "6px",
                            padding: "0 32px",
                            borderRadius: "100px",
                            border: "none",
                            background: "#000000",
                            color: "#ffffff",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            transition: "all 0.3s ease",
                            fontFamily: "'DM Sans', sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                    >
                        {buttonLabel}
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default BlogNewsletter;