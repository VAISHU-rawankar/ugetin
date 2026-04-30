// BlogFilter.jsx
import { useState } from "react";

const BlogFilter = ({ filters = [], onFilter }) => {
    const [active, setActive] = useState("All");

    const handleClick = (filter) => {
        setActive(filter);
        onFilter && onFilter(filter);
    };

    return (
        <div style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            padding: "12px 0",
            borderTop: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            margin: "24px 0",
            flexWrap: "wrap",
        }}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => handleClick(filter)}
                    style={{
                        padding: "7px 18px",
                        borderRadius: "8px",
                        border: "none",
                        background: active === filter ? "#111" : "transparent",
                        color: active === filter ? "#fff" : "#555",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                    }}
                >
                    {filter}
                </button>
            ))}
            <button style={{
                marginLeft: "auto",
                padding: "7px 12px",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                color: "#999",
                fontSize: "1rem",
                cursor: "pointer",
            }}>
                •••
            </button>
        </div>
    );
};

export default BlogFilter;