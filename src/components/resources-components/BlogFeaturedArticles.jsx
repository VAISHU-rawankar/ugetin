// // BlogFeaturedArticles.jsx
// import { motion } from "framer-motion";

// const BlogFeaturedArticles = ({ data = {} }) => {
//     const { title = "Featured Articles", articles = [] } = data;

//     return (
//         <div style={{ padding: "40px 0" }}>
//             <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111", margin: "0 0 20px 0" }}>
//                 {title}
//             </h3>

//             <div style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(3, 1fr)",
//                 gap: "20px",
//             }}>
//                 {articles.map((article, i) => (
//                     <motion.div
//                         key={article.id}
//                         initial={{ opacity: 0, y: 16 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.4, delay: i * 0.1 }}
//                         style={{
//                             background: "#fff",
//                             borderRadius: "14px",
//                             border: "1px solid #ebebeb",
//                             overflow: "hidden",
//                             boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                         }}
//                     >
//                         {/* Image */}
//                         <div style={{ width: "100%", height: "160px", background: "#e5e7eb", overflow: "hidden" }}>
//                             {article.image && (
//                                 <img src={article.image} alt={article.title}
//                                     style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                             )}
//                         </div>

//                         {/* Content */}
//                         <div style={{ padding: "16px" }}>
//                             <h4 style={{
//                                 fontSize: "0.95rem", fontWeight: 700, color: "#111",
//                                 margin: "0 0 6px 0", lineHeight: 1.3,
//                             }}>
//                                 {article.title}
//                             </h4>
//                             <p style={{ fontSize: "0.75rem", color: "#999", margin: "0 0 14px 0" }}>
//                                 {article.date} | by {article.author}
//                             </p>
//                             <a
//                                 href={article.href}
//                                 style={{
//                                     display: "inline-block",
//                                     padding: "7px 16px",
//                                     borderRadius: "7px",
//                                     background: "#111",
//                                     color: "#fff",
//                                     fontSize: "0.8rem",
//                                     fontWeight: 600,
//                                     textDecoration: "none",
//                                     transition: "all 0.2s ease",
//                                 }}
//                                 onMouseEnter={(e) => { e.currentTarget.style.background = "#333"; }}
//                                 onMouseLeave={(e) => { e.currentTarget.style.background = "#111"; }}
//                             >
//                                 Read Article
//                             </a>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             <style>{`
//                 @media (max-width: 768px) {
//                     .featured-articles-grid {
//                         grid-template-columns: 1fr !important;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default BlogFeaturedArticles;








// BlogFeaturedArticles.jsx
import { motion } from "framer-motion";

const BlogFeaturedArticles = ({ data = {} }) => {
    const { title = "Featured Articles", articles = [] } = data;

    return (
        <div style={{ padding: "80px 0" }}>
            <style>{`
                .featured-articles-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }
                @media (max-width: 1000px) {
                    .featured-articles-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 650px) {
                    .featured-articles-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <h3 style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.2rem", 
                fontWeight: 700, 
                color: "#ffffff", 
                margin: "0 0 40px 0",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textAlign: "center"
            }}>
                {title}
            </h3>

            <div className="featured-articles-grid">
                {articles.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        style={{
                            background: "#0a0a0a",
                            borderRadius: "20px",
                            border: "1px solid rgba(255,255,255,0.06)",
                            overflow: "hidden",
                            transition: "transform 0.3s ease, border-color 0.3s ease",
                            cursor: "pointer"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-8px)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                        }}
                    >
                        {/* Image */}
                        <div style={{ width: "100%", height: "200px", background: "rgba(255,255,255,0.04)", overflow: "hidden" }}>
                            {article.image && (
                                <img src={article.image} alt={article.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.1)" }} />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ padding: "24px" }}>
                            <h4 style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1.1rem", 
                                fontWeight: 700, 
                                color: "#ffffff",
                                margin: "0 0 10px 0", 
                                lineHeight: 1.3,
                            }}>
                                {article.title}
                            </h4>
                            <div style={{ 
                                fontFamily: "'Space Mono', monospace",
                                fontSize: "0.75rem", 
                                color: "#555", 
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginBottom: "20px"
                            }}>
                                {article.date} | by {article.author}
                            </div>
                            <a
                                href={article.href}
                                style={{
                                    display: "inline-block",
                                    padding: "10px 24px",
                                    borderRadius: "4px",
                                    background: "transparent",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    color: "#ffffff",
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => { 
                                    e.currentTarget.style.background = "#ffffff"; 
                                    e.currentTarget.style.color = "#000000";
                                    e.currentTarget.style.borderColor = "#ffffff";
                                }}
                                onMouseLeave={(e) => { 
                                    e.currentTarget.style.background = "transparent"; 
                                    e.currentTarget.style.color = "#ffffff";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                }}
                            >
                                Read Article
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogFeaturedArticles;