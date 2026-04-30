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
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

            {/* Compact list */}
            <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: "0 0 16px 0" }}>
                    {compact.title || "Popular Posts"}
                </h3>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr",
                    gap: isMobile ? "16px" : "14px",
                }}>
                    {(compact.posts || []).map((post) => (
                        <a
                            key={post.id}
                            href={post.href}
                            style={{
                                display: "flex",
                                flexDirection: isMobile ? "column" : "row",
                                gap: isMobile ? "8px" : "12px",
                                textDecoration: "none",
                                alignItems: "flex-start",
                            }}
                        >
                            {/* Thumbnail */}
                            <div style={{
                                width: isMobile ? "100%" : "64px",
                                height: isMobile ? "100px" : "52px",
                                borderRadius: "8px",
                                background: "#e5e7eb",
                                flexShrink: 0,
                                overflow: "hidden",
                            }}>
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: "100%", height: "100%", objectFit: "full" }}
                                    />
                                )}
                            </div>
                            {/* Text */}
                            <div>
                                <p style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    color: "#111",
                                    margin: "0 0 4px 0",
                                    lineHeight: 1.3,
                                }}>
                                    {post.title}
                                </p>
                                <p style={{ fontSize: "0.72rem", color: "#999", margin: 0 }}>
                                    {post.date} | by {post.author}
                                </p>
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
                        marginBottom: "12px",
                    }}>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: 0 }}>
                            {featured.title || "Popular Posts"}
                        </h3>
                        <a href={featured.viewAllHref} style={{ fontSize: "0.78rem", color: "#555", textDecoration: "none" }}>
                            Views All &gt;
                        </a>
                    </div>
                    <a href={featured.post.href} style={{ textDecoration: "none", display: "block" }}>
                        {/* Large image */}
                        <div style={{
                            width: "100%",
                            height: isMobile ? "200px" : "160px",
                            borderRadius: "12px",
                            background: "#e5e7eb",
                            overflow: "hidden",
                            marginBottom: "12px",
                        }}>
                            {featured.post.image && (
                                <img
                                    src={featured.post.image}
                                    alt={featured.post.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            )}
                        </div>
                        <p style={{
                            fontSize: isMobile ? "1rem" : "0.95rem",
                            fontWeight: 700,
                            color: "#111",
                            margin: "0 0 5px 0",
                            lineHeight: 1.3,
                        }}>
                            {featured.post.title}
                        </p>
                        <p style={{ fontSize: "0.75rem", color: "#999", margin: 0 }}>
                            {featured.post.date} | by {featured.post.author}
                        </p>
                    </a>
                </div>
            )}
        </div>
    );
};

export default BlogPopularPosts;