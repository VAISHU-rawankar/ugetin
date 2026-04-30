// BlogHero.jsx
import { motion } from "framer-motion";

const BlogHero = ({ data = {} }) => {
    const { title = "UGATE BLOG", subtitle = "Tech & Security Insights", featuredPost = {} } = data;

    return (
        <div style={{ padding: "40px 0 0" }}>
            {/* Blog Title */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: "20px" }}
            >
                <h1 style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 800,
                    color: "#111",
                    letterSpacing: "-0.03em",
                    margin: "0 0 4px 0",
                    lineHeight: 1.1,
                }}>
                    {title}
                </h1>
                <div style={{ width: "48px", height: "3px", background: "#111", borderRadius: "2px", marginBottom: "6px" }} />
                <p style={{ fontSize: "0.95rem", color: "#555", margin: 0 }}>{subtitle}</p>
            </motion.div>

            {/* Featured Post Banner */}
            {featuredPost.image && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "relative",
                        borderRadius: "16px",
                        overflow: "hidden",
                        minHeight: "280px",
                        cursor: "pointer",
                    }}
                >
                    {/* Background image */}
                    <div style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url("${featuredPost.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.55)",
                    }} />

                    {/* Content overlay */}
                    <div style={{
                        position: "relative", zIndex: 1,
                        padding: "40px 32px",
                        maxWidth: "520px",
                    }}>
                        <h2 style={{
                            fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)",
                            fontWeight: 700,
                            color: "#fff",
                            letterSpacing: "-0.02em",
                            margin: "0 0 10px 0",
                            lineHeight: 1.25,
                        }}>
                            {featuredPost.title}
                        </h2>
                        <p style={{
                            fontSize: "0.875rem",
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.6,
                            margin: "0 0 20px 0",
                        }}>
                            {featuredPost.excerpt}
                        </p>
                        <a href={featuredPost.href} style={{
                            display: "inline-block",
                            padding: "9px 22px",
                            borderRadius: "8px",
                            background: "transparent",
                            color: "#fff",
                            border: "1.5px solid #fff",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#111"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
                        >
                            Read More
                        </a>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default BlogHero;