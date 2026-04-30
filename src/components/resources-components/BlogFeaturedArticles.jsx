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
        <div style={{ padding: "40px 0" }}>
            <style>{`
                .featured-articles-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                @media (max-width: 768px) {
                    .featured-articles-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111", margin: "0 0 20px 0" }}>
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
                            background: "#fff",
                            borderRadius: "14px",
                            border: "1px solid #ebebeb",
                            overflow: "hidden",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        }}
                    >
                        {/* Image */}
                        <div style={{ width: "100%", height: "160px", background: "#e5e7eb", overflow: "hidden" }}>
                            {article.image && (
                                <img src={article.image} alt={article.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ padding: "16px" }}>
                            <h4 style={{
                                fontSize: "0.95rem", fontWeight: 700, color: "#111",
                                margin: "0 0 6px 0", lineHeight: 1.3,
                            }}>
                                {article.title}
                            </h4>
                            <p style={{ fontSize: "0.75rem", color: "#999", margin: "0 0 14px 0" }}>
                                {article.date} | by {article.author}
                            </p>
                            <a
                                href={article.href}
                                style={{
                                    display: "inline-block",
                                    padding: "7px 16px",
                                    borderRadius: "7px",
                                    background: "#111",
                                    color: "#fff",
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "#333"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "#111"; }}
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