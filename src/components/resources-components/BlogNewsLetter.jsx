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
                background: "#f7f7f7",
                borderRadius: "16px",
                padding: isMobile ? "24px 20px" : "32px 40px",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "stretch" : "center",
                justifyContent: "space-between",
                gap: isMobile ? "16px" : "24px",
                marginTop: "16px",
                marginBottom: "48px",
            }}
        >
            {/* Text */}
            <div>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: "0 0 4px 0" }}>
                    {title}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#666", margin: 0 }}>
                    {subtitle}
                </p>
            </div>

            {/* Input + Button */}
            {submitted ? (
                <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#16a34a", margin: 0 }}>
                    ✓ You're subscribed!
                </p>
            ) : (
                <div style={{
                    display: "flex",
                    gap: "0",
                    flexShrink: 0,
                    width: isMobile ? "100%" : "auto",
                }}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        style={{
                            padding: "11px 16px",
                            borderRadius: "8px 0 0 8px",
                            border: "1.5px solid #e0e0e0",
                            borderRight: "none",
                            fontSize: "0.875rem",
                            outline: "none",
                            width: isMobile ? "100%" : "240px",
                            flex: isMobile ? 1 : "none",
                            background: "#fff",
                            color: "#111",
                            boxSizing: "border-box",
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{
                            padding: "11px 22px",
                            borderRadius: "0 8px 8px 0",
                            border: "none",
                            background: "#111",
                            color: "#fff",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                        }}
                    >
                        {buttonLabel}
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default BlogNewsletter;