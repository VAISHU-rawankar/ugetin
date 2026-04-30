import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
};

const ForManagement = ({ data = {} }) => {
    const {
        sectionTitle = "For Management",
        features = [],
        phoneImage,
    } = data;

    return (
        <section
            style={{
                position: "relative",
                minHeight: "450px",
                overflow: "hidden",
                padding: "60px 0",
            }}
        >
            {/* Background Image - Hidden on small mobile to improve readability */}
            {phoneImage && (
                <div
                    className="management-bg"
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url("${phoneImage}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                        backgroundRepeat: "no-repeat",
                        zIndex: 0,
                        opacity: 0.4, // Lowered opacity so text is clear on mobile
                    }}
                />
            )}

            <div
                className="container"
                style={{
                    position: "relative",
                    zIndex: 1,
                    padding: "0 24px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                        fontWeight: 800,
                        color: "#111",
                        marginBottom: "32px",
                        textAlign: "left",
                    }}
                >
                    {sectionTitle}
                </motion.h2>

                {/* RESPONSIVE GRID GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "16px",
                        maxWidth: "800px", 
                    }}
                >
                    {features.map(({ id, icon: Icon, title, description }) => (
                        <motion.div
                            key={id}
                            variants={cardVariants}
                            style={{
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "20px",
                                padding: "20px",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                border: "1px solid rgba(255,255,255,0.8)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                gap: "16px",
                            }}
                        >
                            <div
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "12px",
                                    background: "#f0f0f0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                {Icon && <Icon size={20} color="#111" />}
                            </div>

                            <div style={{ flex: 1 }}>
                                <h3
                                    style={{
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        margin: "0 0 6px 0",
                                        color: "#111",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.85rem",
                                        color: "#444",
                                        margin: 0,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ForManagement;