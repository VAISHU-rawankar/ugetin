import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
    CheckCircle, 
    ArrowRight, 
    ShieldCheck, 
    RefreshCw, 
    Users, 
    BarChart3,
    Check
} from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="hero-v2">
            <div className="container">
                <motion.div 
                    className="hero-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span className="hero-label" variants={itemVariants}>
                        Smarter Living. Simplified.
                    </motion.span>
                    <motion.h1 className="hero-title" variants={itemVariants}>
                        One Platform.<br />
                        Everything Your<br />
                        Society Needs.
                    </motion.h1>
                    <motion.p className="hero-description" variants={itemVariants}>
                        From visitor management to maintenance billing, UrbanGate helps 
                        housing societies run smarter, safer and stress-free.
                    </motion.p>
                    
                    <motion.div className="hero-actions" variants={itemVariants}>
                        <button className="btn-black" onClick={() => navigate("/contact")}>
                            Get Free Demo <ArrowRight size={18} />
                        </button>
                        <button className="btn-outline" onClick={() => navigate("/features")}>
                            Explore Features <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    <motion.div className="social-proof" variants={itemVariants}>
                        <div className="avatar-group">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <img 
                                    key={i}
                                    src={`/images/avatars.png`} 
                                    alt="User" 
                                    className="avatar-img"
                                    style={{ objectPosition: `-${(i-1)*44}px center` }} 
                                />
                            ))}
                            <div className="avatar-count">1K+</div>
                        </div>
                        <span className="trust-text">
                            Trusted by 1,000+<br />Housing Societies
                        </span>
                    </motion.div>
                </motion.div>

                <div className="hero-right">
                    <div className="hero-visual-wrapper">
                        <div className="hero-blob"></div>
                        <img src="/hero1.png" alt="Society" className="hero-building" />
                        
                    </div>
                </div>
            </div>

            <motion.div 
                className="hero-footer-bar"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <div className="marquee-container">
                    <div className="marquee-track">
                        {[1, 2].map((group) => (
                            <div className="footer-group" key={group}>
                                <div className="footer-item">
                                    <ShieldCheck className="footer-icon" />
                                    <div className="footer-text">
                                        <h4>Secure & Reliable</h4>
                                        <p>Bank-level security</p>
                                    </div>
                                </div>
                                <div className="footer-item">
                                    <RefreshCw className="footer-icon" />
                                    <div className="footer-text">
                                        <h4>Real-time Updates</h4>
                                        <p>Everything in real-time</p>
                                    </div>
                                </div>
                                <div className="footer-item">
                                    <Users className="footer-icon" />
                                    <div className="footer-text">
                                        <h4>Happy Communities</h4>
                                        <p>Better connection & trust</p>
                                    </div>
                                </div>
                                <div className="footer-item">
                                    <BarChart3 className="footer-icon" />
                                    <div className="footer-text">
                                        <h4>Smart Reports</h4>
                                        <p>Data-driven insights</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;