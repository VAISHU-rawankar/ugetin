// BlogFilter.jsx
import { useState } from "react";

const BlogFilter = ({ filters = [], onFilter }) => {
    const [active, setActive] = useState("All");

    const handleClick = (filter) => {
        setActive(filter);
        onFilter && onFilter(filter);
    };

    return (
        <div className="blog-categories" style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            padding: "20px 0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            margin: "40px 0",
            flexWrap: "wrap",
        }}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => handleClick(filter)}
                    className="category-btn"
                    style={{
                        padding: "8px 24px",
                        borderRadius: "100px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: active === filter ? "#ffffff" : "transparent",
                        color: active === filter ? "#000000" : "#888",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                        if (active !== filter) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                            e.currentTarget.style.color = "#ffffff";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (active !== filter) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                            e.currentTarget.style.color = "#888";
                        }
                    }}
                >
                    {filter}
                </button>
            ))}
            <button style={{
                marginLeft: "auto",
                padding: "8px 12px",
                background: "transparent",
                border: "none",
                color: "#555",
                fontSize: "1.2rem",
                cursor: "pointer",
            }}>
                •••
            </button>
        </div>
    );
};

export default BlogFilter;