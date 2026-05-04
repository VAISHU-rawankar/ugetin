// // BlogPopularPosts.jsx — compact sidebar list + large featured post
// const BlogPopularPosts = ({ compact = {}, featured = {} }) => {
//     return (
//         <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

//             {/* Compact list */}
//             <div>
//                 <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: "0 0 16px 0" }}>
//                     {compact.title || "Popular Posts"}
//                 </h3>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//                     {(compact.posts || []).map((post) => (
//                         <a key={post.id} href={post.href} style={{ display: "flex", gap: "12px", textDecoration: "none", alignItems: "flex-start" }}>
//                             {/* Thumbnail */}
//                             <div style={{
//                                 width: "64px", height: "52px", borderRadius: "8px",
//                                 background: "#e5e7eb", flexShrink: 0, overflow: "hidden",
//                             }}>
//                                 {post.image && (
//                                     <img src={post.image} alt={post.title}
//                                         style={{ width: "100%", height: "100%", objectFit: "fill" }} />
//                                 )}
//                             </div>
//                             {/* Text */}
//                             <div>
//                                 <p style={{
//                                     fontSize: "0.85rem", fontWeight: 600, color: "#111",
//                                     margin: "0 0 4px 0", lineHeight: 1.3,
//                                 }}>
//                                     {post.title}
//                                 </p>
//                                 <p style={{ fontSize: "0.72rem", color: "#999", margin: 0 }}>
//                                     {post.date} | by {post.author}
//                                 </p>
//                             </div>
//                         </a>
//                     ))}
//                 </div>
//             </div>

//             {/* Large featured post */}
//             {featured.post && (
//                 <div>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
//                         <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: 0 }}>
//                             {featured.title || "Popular Posts"}
//                         </h3>
//                         <a href={featured.viewAllHref} style={{ fontSize: "0.78rem", color: "#555", textDecoration: "none" }}>
//                             Views All &gt;
//                         </a>
//                     </div>
//                     <a href={featured.post.href} style={{ textDecoration: "none", display: "block" }}>
//                         {/* Large image */}
//                         <div style={{
//                             width: "100%", height: "160px", borderRadius: "12px",
//                             background: "#e5e7eb", overflow: "hidden", marginBottom: "12px",
//                         }}>
//                             {featured.post.image && (
//                                 <img src={featured.post.image} alt={featured.post.title}
//                                     style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                             )}
//                         </div>
//                         <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", margin: "0 0 5px 0", lineHeight: 1.3 }}>
//                             {featured.post.title}
//                         </p>
//                         <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>
//                             {featured.post.date} | by {featured.post.author}
//                         </p>
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BlogPopularPosts;






// BlogPopularPosts.jsx — compact sidebar list + large featured post
import { useState, useEffect } from "react";

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

const BlogPopularPosts = ({ compact = {}, featured = {} }) => {
    const isMobile = useIsMobile();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Compact list */}
            <div>
                <h3 style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem", 
                    fontWeight: 700, 
                    color: "#ffffff", 
                    margin: "0 0 24px 0",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                }}>
                    {compact.title || "Popular Posts"}
                </h3>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
                    gap: isMobile ? "24px" : "20px",
                }}>
                    {(compact.posts || []).map((post) => (
                        <a
                            key={post.id}
                            href={post.href}
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: isMobile ? "12px" : "16px",
                                textDecoration: "none",
                                alignItems: "flex-start",
                            }}
                        >
                            {/* Thumbnail */}
                            <div style={{
                                width: isMobile ? "100%" : "72px",
                                height: isMobile ? "120px" : "56px",
                                borderRadius: "10px",
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                flexShrink: 0,
                                overflow: "hidden",
                            }}>
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
                                    />
                                )}
                            </div>
                            {/* Text */}
                            <div>
                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.95rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                    margin: "0 0 4px 0",
                                    lineHeight: 1.3,
                                    transition: "color 0.2s ease"
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#888"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                                >
                                    {post.title}
                                </p>
                                <div style={{ 
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: "0.7rem", 
                                    color: "#555", 
                                    textTransform: "uppercase",
                                    letterSpacing: "1px"
                                }}>
                                    {post.date}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Large featured post */}
            {featured.post && (
                <div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "20px",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        paddingBottom: "12px"
                    }}>
                        <h3 style={{ 
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.1rem", 
                            fontWeight: 700, 
                            color: "#ffffff", 
                            margin: 0,
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}>
                            {featured.title || "Featured Pick"}
                        </h3>
                        <a href={featured.viewAllHref} style={{ 
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8rem", 
                            color: "#888", 
                            textDecoration: "none",
                            fontWeight: 600,
                            letterSpacing: "1px"
                        }}>
                            VIEW ALL
                        </a>
                    </div>
                    <a href={featured.post.href} style={{ textDecoration: "none", display: "block" }}>
                        {/* Large image */}
                        <div style={{
                            width: "100%",
                            height: isMobile ? "240px" : "180px",
                            borderRadius: "16px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            overflow: "hidden",
                            marginBottom: "16px",
                        }}>
                            {featured.post.image && (
                                <img
                                    src={featured.post.image}
                                    alt={featured.post.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1)" }}
                                />
                            )}
                        </div>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: isMobile ? "1.1rem" : "1.05rem",
                            fontWeight: 700,
                            color: "#ffffff",
                            margin: "0 0 8px 0",
                            lineHeight: 1.3,
                            transition: "color 0.2s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#888"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                        >
                            {featured.post.title}
                        </p>
                        <div style={{ 
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "0.75rem", 
                            color: "#555", 
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}>
                            {featured.post.date} | by {featured.post.author}
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
};

export default BlogPopularPosts;