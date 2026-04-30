// BlogTrendingTopics.jsx
import { Hash, Folder } from "lucide-react";

const BlogTrendingTopics = ({ trending = {}, categories = {} }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

            {/* Trending Topics */}
            <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: "0 0 16px 0" }}>
                    {trending.title || "Trending Topics"}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "16px" }}>
                    {(trending.topics || []).map((topic) => (
                        <a
                            key={topic.label}
                            href={topic.href}
                            style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                padding: "10px 12px", borderRadius: "8px",
                                textDecoration: "none", color: "#333",
                                fontSize: "0.9rem", fontWeight: 500,
                                transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#f5f5f5"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                            <Hash size={16} color="#888" />
                            {topic.label}
                        </a>
                    ))}
                </div>
                <a
                    href={trending.viewAllHref}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "6px", padding: "10px 20px", borderRadius: "8px",
                        background: "#111", color: "#fff",
                        fontSize: "0.85rem", fontWeight: 600,
                        textDecoration: "none", width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    View All →
                </a>
            </div>

            {/* Categories */}
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", margin: 0 }}>
                        {categories.title || "Categories"}
                    </h3>
                    <a href={categories.viewAllHref} style={{ fontSize: "0.78rem", color: "#555", textDecoration: "none" }}>
                        View All &gt;
                    </a>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {(categories.items || []).map((cat) => (
                        <a
                            key={cat.label}
                            href={cat.href}
                            style={{
                                display: "flex", alignItems: "center", gap: "10px",
                                padding: "10px 12px", borderRadius: "8px",
                                textDecoration: "none", color: "#333",
                                fontSize: "0.875rem", fontWeight: 500,
                                transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#f5f5f5"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                        >
                            <Folder size={15} color="#888" />
                            {cat.label}
                            <span style={{ marginLeft: "auto", color: "#999", fontSize: "0.8rem" }}>({cat.count})</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogTrendingTopics;