import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const Odometer = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime = null;
        const duration = 1800;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(target * easeProgress));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [target, isInView]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const MagneticValueCard = ({ item, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const springY = useSpring(y, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(springY, [-100, 100], [10, -10]);
    const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
                position: "relative"
            }}
        >
            <div className="roi-card">
                <motion.div 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: useTransform(
                            [mouseX, mouseY],
                            ([mx, my]) => `radial-gradient(circle at ${mx}px ${my}px, rgba(0,0,0,0.05) 0%, transparent 70%)`
                        ),
                        pointerEvents: "none",
                        zIndex: 2
                    }}
                />
                
                {/* Watermark Number */}
                <div style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "10px",
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "8rem",
                    color: "#000000",
                    opacity: 0.05,
                    lineHeight: 1,
                    pointerEvents: "none",
                    zIndex: 1
                }}>
                    {index + 1}
                </div>

                <div style={{ position: "relative", zIndex: 3 }}>
                    <div style={{ fontSize: "2rem", marginBottom: "24px" }}>{item.icon}</div>
                    <h3 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "2rem", 
                        color: "#000000", 
                        marginBottom: "12px",
                        letterSpacing: "1px"
                    }}>
                        {item.title}
                    </h3>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: "0.9rem", 
                        color: "#666666", 
                        marginBottom: "24px",
                        lineHeight: 1.5
                    }}>
                        {item.description}
                    </p>
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "1.4rem", 
                        fontWeight: 700, 
                        color: "#000000" 
                    }}>
                        {item.prefix}<Odometer target={item.targetValue} suffix={item.suffix} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ROI = () => {
    const metrics = [
        {
            title: "REDUCE LOSSES",
            icon: "📉",
            description: "Eliminate unauthorized entry, theft, and billing leakage.",
            prefix: "Save ₹",
            targetValue: 3,
            suffix: " Cr annually"
        },
        {
            title: "SAVE TIME",
            icon: "⏱️",
            description: "Visitor approvals, maintenance payments, complaint logging — all instant.",
            prefix: "To under ",
            targetValue: 60,
            suffix: " seconds"
        },
        {
            title: "REDUCE MANPOWER",
            icon: "👥",
            description: "Replace 3-4 manual roles with one intelligent platform.",
            prefix: "",
            targetValue: 50,
            suffix: "% efficiency gain"
        },
        {
            title: "PROPERTY VALUE",
            icon: "🏠",
            description: "Societies on Urbangate command higher resale and rental premiums.",
            prefix: "",
            targetValue: 5,
            suffix: "% premium"
        },
        {
            title: "BILLING EFFICIENCY",
            icon: "✔️",
            description: "Zero missed payments. Automated due date reminders and escalations.",
            prefix: "",
            targetValue: 100,
            suffix: "% reconciliation"
        },
        {
            title: "SECURITY IMPACT",
            icon: "🛡️",
            description: "Verified entry logs, guard tracking, and audit trails deter crime.",
            prefix: "",
            targetValue: 18,
            suffix: "% reduction"
        }
    ];

    return (
        <section style={{
            padding: "120px 24px",
            background: "#000000",
            position: "relative",
            overflow: "hidden"
        }}>
            <style>{`
                .roi-card {
                    background: #ffffff;
                    border: 1px solid #000000;
                    padding: 48px;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }
                .roi-card:hover {
                    transform: translateY(-8px);
                }
            `}</style>

            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <div style={{ 
                        fontFamily: "'Space Mono', monospace", 
                        fontSize: "11px", 
                        letterSpacing: "3px", 
                        color: "#ffffff", 
                        marginBottom: "16px",
                        textTransform: "uppercase"
                    }}>
                        ROI BREAKDOWN
                    </div>
                    <h2 style={{ 
                        fontFamily: "'Bebas Neue', sans-serif", 
                        fontSize: "clamp(3rem, 7vw, 6rem)", 
                        color: "#ffffff", 
                        lineHeight: 1,
                        marginBottom: "24px"
                    }}>
                        VALUE BEYOND SECURITY
                    </h2>
                    <p style={{ 
                        fontFamily: "'DM Sans', sans-serif", 
                        fontSize: "1.1rem", 
                        color: "#888888", 
                        maxWidth: "600px", 
                        margin: "0 auto" 
                    }}>
                        The real numbers that make the decision for you.
                    </p>
                </div>

                <div style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
                    gap: "24px" 
                }}>
                    {metrics.map((item, idx) => (
                        <MagneticValueCard key={idx} item={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ROI;