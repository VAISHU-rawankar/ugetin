// // BlogLatestArticles.jsx
// import { motion } from "framer-motion";

// const BlogLatestArticles = ({ data = {} }) => {
//     const { title = "Latest Articles", viewAllHref = "#", articles = [] } = data;

//     return (
//         <div>
//             {/* Header */}
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
//                 <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: 0 }}>{title}</h3>
//                 <a href={viewAllHref} style={{ fontSize: "0.82rem", color: "#555", fontWeight: 500, textDecoration: "none" }}>View All</a>
//             </div>

//             {/* Articles */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
//                 {articles.map((article, i) => (
//                     <motion.div
//                         key={article.id}
//                         initial={{ opacity: 0, y: 12 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: i * 0.08 }}
//                     >
//                         {/* Thumbnail + Meta row */}
//                         <div style={{ display: "flex", gap: "14px", marginBottom: "8px", alignItems: "flex-start" }}>
//                             {/* Thumbnail */}
//                             <div style={{
//                                 width: "80px", height: "64px", borderRadius: "10px",
//                                 background: "#e5e7eb", flexShrink: 0, overflow: "hidden",
//                             }}>
//                                 {article.image && (
//                                     <img src={article.image} alt={article.title}
//                                         style={{ width: "100%", height: "100%", objectFit: "fill" }} />
//                                 )}
//                             </div>

//                             {/* Title + meta */}
//                             <div>
//                                 <a href={article.href} style={{ textDecoration: "none" }}>
//                                     <h4 style={{
//                                         fontSize: "0.92rem", fontWeight: 700, color: "#111",
//                                         margin: "0 0 5px 0", lineHeight: 1.3,
//                                         transition: "color 0.15s",
//                                     }}
//                                         onMouseEnter={(e) => e.currentTarget.style.color = "#444"}
//                                         onMouseLeave={(e) => e.currentTarget.style.color = "#111"}
//                                     >
//                                         {article.title}
//                                     </h4>
//                                 </a>
//                                 <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>
//                                     {article.date} | by {article.author}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Excerpt */}
//                         <p style={{ fontSize: "0.83rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
//                             {article.excerpt}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BlogLatestArticles;


// BlogLatestArticles.jsx
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

const BlogLatestArticles = ({ data = {} }) => {
    const isMobile = useIsMobile();
    const { title = "Latest Articles", viewAllHref = "#", articles = [] } = data;

    return (
        <div>
            {/* Header */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "32px",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px"
            }}>
                <h3 style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem", 
                    fontWeight: 700, 
                    color: "#ffffff", 
                    margin: 0,
                    letterSpacing: "1px",
                    textTransform: "uppercase"
                }}>{title}</h3>
                <a href={viewAllHref} style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem", 
                    color: "#888", 
                    fontWeight: 600, 
                    textDecoration: "none",
                    letterSpacing: "1px"
                }}>VIEW ALL</a>
            </div>

            {/* Articles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                        {/* Thumbnail + Meta row */}
                        <div style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: isMobile ? "16px" : "20px",
                            marginBottom: "12px",
                            alignItems: "flex-start",
                        }}>
                            {/* Thumbnail */}
                            <div style={{
                                width: isMobile ? "100%" : "100px",
                                height: isMobile ? "200px" : "80px",
                                borderRadius: "12px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                flexShrink: 0,
                                overflow: "hidden",
                            }}>
                                {article.image && (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
                                    />
                                )}
                            </div>

                            {/* Title + meta */}
                            <div style={{ width: "100%" }}>
                                <a href={article.href} style={{ textDecoration: "none" }}>
                                    <h4
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: isMobile ? "1.1rem" : "1.05rem",
                                            fontWeight: 700,
                                            color: "#ffffff",
                                            margin: "0 0 8px 0",
                                            lineHeight: 1.3,
                                            transition: "color 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = "#888"}
                                        onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                                    >
                                        {article.title}
                                    </h4>
                                </a>
                                <div style={{ 
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.7rem", 
                                    color: "#555", 
                                    textTransform: "uppercase",
                                    letterSpacing: "1px"
                                }}>
                                    {article.date} | by {article.author}
                                </div>
                            </div>
                        </div>

                        {/* Excerpt */}
                        <p style={{ 
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.9rem", 
                            color: "#888", 
                            lineHeight: 1.6, 
                            margin: 0,
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                        }}>
                            {article.excerpt}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogLatestArticles;