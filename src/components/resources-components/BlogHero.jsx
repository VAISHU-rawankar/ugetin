// BlogHero.jsx
import { motion } from "framer-motion";

const BlogHero = ({ data = {} }) => {
    const { title = "UGATE BLOG", subtitle = "Tech & Security Insights", featuredPost = {} } = data;

    return (
        <div style={{ padding: "0 0 60px" }}>
            {/* Blog Title */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: "40px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "24px" }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div style={{ width: "32px", height: "2px", background: "#ffffff" }} />
                    <span style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        color: "#888",
                        textTransform: "uppercase"
                    }}>
                        RESOURCES & INSIGHTS
                    </span>
                </div>
                
                <h1 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                    fontWeight: 400,
                    color: "#ffffff",
                    letterSpacing: "1px",
                    margin: "0 0 8px 0",
                    lineHeight: 1,
                    textTransform: "uppercase",
                }}>
                    {title}
                </h1>
                <p style={{ 
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem", 
                    color: "#888", 
                    margin: 0,
                    maxWidth: "600px"
                }}>{subtitle}</p>
            </motion.div>

            {/* Featured Post Banner */}
            {featuredPost.image && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "relative",
                        borderRadius: "24px",
                        overflow: "hidden",
                        minHeight: "400px",
                        cursor: "pointer",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {/* Background image with high contrast B&W feel */}
                    <div style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url("${featuredPost.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(1) brightness(0.4)",
                    }} />

                    {/* Content overlay */}
                    <div style={{
                        position: "relative", zIndex: 1,
                        padding: "60px 48px",
                        maxWidth: "640px",
                    }}>
                        <span style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "10px",
                            letterSpacing: "3px",
                            color: "#ffffff",
                            textTransform: "uppercase",
                            background: "rgba(255,255,255,0.1)",
                            padding: "4px 12px",
                            borderRadius: "4px",
                            marginBottom: "20px",
                            display: "inline-block"
                        }}>
                            Featured Article
                        </span>

                        <h2 style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                            fontWeight: 700,
                            color: "#ffffff",
                            letterSpacing: "-0.02em",
                            margin: "0 0 16px 0",
                            lineHeight: 1.2,
                        }}>
                            {featuredPost.title}
                        </h2>
                        <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.05rem",
                            color: "rgba(255,255,255,0.7)",
                            lineHeight: 1.6,
                            margin: "0 0 32px 0",
                        }}>
                            {featuredPost.excerpt}
                        </p>
                        <a href={featuredPost.href} style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "14px 32px",
                            borderRadius: "4px",
                            background: "#ffffff",
                            color: "#000000",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ffffff"; e.currentTarget.style.border = "1px solid #ffffff"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.color = "#000000"; e.currentTarget.style.border = "1px solid #ffffff"; }}
                        >
                            Read Full Article
                        </a>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default BlogHero;