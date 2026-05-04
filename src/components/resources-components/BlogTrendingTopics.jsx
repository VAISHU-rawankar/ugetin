// BlogTrendingTopics.jsx
import { Hash, Folder } from "lucide-react";

const BlogTrendingTopics = ({ trending = {}, categories = {} }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Trending Topics */}
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
                    {trending.title || "Trending Topics"}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "24px" }}>
                    {(trending.topics || []).map((topic) => (
                        <a
                            key={topic.label}
                            href={topic.href}
                            style={{
                                display: "flex", alignItems: "center", gap: "12px",
                                padding: "12px 16px", borderRadius: "10px",
                                textDecoration: "none", color: "#888",
                                fontSize: "0.95rem", fontWeight: 500,
                                transition: "all 0.25s ease",
                                border: "1px solid transparent"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                e.currentTarget.style.color = "#ffffff";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#888";
                                e.currentTarget.style.borderColor = "transparent";
                            }}
                        >
                            <Hash size={16} color="#555" />
                            {topic.label}
                        </a>
                    ))}
                </div>
                <a
                    href={trending.viewAllHref}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "8px", padding: "14px 20px", borderRadius: "8px",
                        background: "#ffffff", color: "#000000",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem", fontWeight: 700,
                        textDecoration: "none", width: "100%",
                        boxSizing: "border-box",
                        transition: "all 0.3s ease",
                        border: "1px solid #ffffff"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ffffff"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#000000"; }}
                >
                    View All Topics
                </a>
            </div>

            {/* Categories */}
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
                        {categories.title || "Categories"}
                    </h3>
                    <a href={categories.viewAllHref} style={{ 
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.8rem", 
                        color: "#555", 
                        textDecoration: "none",
                        fontWeight: 600,
                        letterSpacing: "1px"
                    }}>
                        VIEW ALL
                    </a>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {(categories.items || []).map((cat) => (
                        <a
                            key={cat.label}
                            href={cat.href}
                            style={{
                                display: "flex", alignItems: "center", gap: "12px",
                                padding: "12px 16px", borderRadius: "10px",
                                textDecoration: "none", color: "#888",
                                fontSize: "0.95rem", fontWeight: 500,
                                transition: "all 0.25s ease",
                                border: "1px solid transparent"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                e.currentTarget.style.color = "#ffffff";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#888";
                                e.currentTarget.style.borderColor = "transparent";
                            }}
                        >
                            <Folder size={16} color="#555" />
                            {cat.label}
                            <span style={{ marginLeft: "auto", color: "#444", fontSize: "0.85rem", fontFamily: "'Space Mono', monospace" }}>({cat.count})</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogTrendingTopics;