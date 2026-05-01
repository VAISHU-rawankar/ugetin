import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { contactPageData as d } from "../data/Contactdata";

// ── Validation helpers ────────────────────────────────────────
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePhone(phone) {
    return /^[\d\s+\-()]+$/.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

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

// ── Notification ─────────────────────────────────────────────
function Notification({ message, type }) {
    if (!message) return null;
    return (
        <div
            style={{
                position: "fixed",
                top: "100px",
                right: "20px",
                background: type === "success" ? "rgba(0,255,136,0.9)" : "rgba(255,68,102,0.9)",
                color: "#0a0e1a",
                padding: "1rem 2rem",
                borderRadius: "8px",
                fontWeight: "600",
                zIndex: 10000,
                animation: "slideInRight 0.3s ease",
            }}
        >
            {message}
        </div>
    );
}

// ── Success Message ───────────────────────────────────────────
function SuccessMessage() {
    return (
        <div
            style={{
                background: "rgba(0,255,136,0.1)",
                border: "1px solid #00ff88",
                borderRadius: "12px",
                padding: "2rem",
                textAlign: "center",
                marginTop: "2rem",
            }}
        >
            <i className="fas fa-check-circle" style={{ fontSize: "3rem", color: "#00ff88", marginBottom: "1rem", display: "block" }}></i>
            <h3 style={{ color: "#00ff88", marginBottom: "0.5rem" }}>Thank You!</h3>
            <p style={{ color: "#b0c4d8" }}>We've received your message and will get back to you within 24 hours.</p>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Contact() {
    const isMobile = useIsMobile();
    useEffect(() => window.scrollTo(0, 0), []);

    // Form state
    const [formData, setFormData] = useState({
        "inquiry-type": "",
        name: "",
        phone: "",
        email: "",
        "society-name": "",
        city: "",
        units: "",
        interest: [],
        message: "",
        "demo-preference": "",
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [notification, setNotification] = useState(null);
    const successTimer = useRef(null);

    const showNotification = (message, type = "success") => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    // Cleanup timer on unmount
    useEffect(() => () => clearTimeout(successTimer.current), []);

    // ── Handlers ──────────────────────────────────────────────
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const handleCheckbox = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            interest: checked
                ? [...prev.interest, value]
                : prev.interest.filter((v) => v !== value),
        }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === "email" && value && !validateEmail(value))
            setErrors((prev) => ({ ...prev, email: "Enter a valid email address" }));
        if (name === "phone" && value && !validatePhone(value))
            setErrors((prev) => ({ ...prev, phone: "Enter a valid phone number (min 10 digits)" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Required fields
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.email.trim()) newErrors.email = "Email address is required";

        if (formData.email && !validateEmail(formData.email))
            newErrors.email = "Enter a valid email address";
        if (formData.phone && !validatePhone(formData.phone))
            newErrors.phone = "Enter a valid phone number (min 10 digits)";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            showNotification("Please fill all required fields.", "error");
            return;
        }

        setSubmitting(true);

        // Build FormData for web3forms
        const data = new FormData();
        data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "");
        data.append("subject", d.form.subject);
        data.append("from_name", d.form.fromName);
        data.append("botcheck", "");

        // Append all text fields
        const textFields = ["inquiry-type", "name", "phone", "email", "society-name", "city", "units", "message", "demo-preference"];
        textFields.forEach((key) => {
            if (formData[key]) data.append(key, formData[key]);
        });

        // Interests as comma-separated string
        if (formData.interest.length > 0)
            data.append("interest", formData.interest.join(", "));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });
            const result = await response.json();

            if (response.ok && result.success) {
                setSuccess(true);
                setFormData({
                    "inquiry-type": "", name: "", phone: "", email: "",
                    "society-name": "", city: "", units: "", interest: [],
                    message: "", "demo-preference": "",
                });
                // Auto-hide success after 5 seconds
                successTimer.current = setTimeout(() => setSuccess(false), 5000);
            } else {
                showNotification(result.message || "Form submission failed.", "error");
            }
        } catch {
            showNotification("Network error. Please try again.", "error");
        } finally {
            setSubmitting(false);
        }
    };

    // ── Input style helper ────────────────────────────────────
    const inputStyle = (fieldName) => ({
        width: "100%",
        padding: "0.75rem 1rem",
        background: "#111",
        border: `1px solid ${errors[fieldName] ? "#ff4466" : "#333"}`,
        borderRadius: "8px",
        color: "#fff",
        fontSize: "0.95rem",
        outline: "none",
        fontFamily: "inherit",
        transition: "all 0.2s ease",
    });

    return (
        <>
            <Notification message={notification?.message} type={notification?.type} />

            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="page-header-content">
                        <span className="page-badge">{d.badge}</span>
                        <h1>
                            {d.title} <span className="gradient-text">{d.titleGradient}</span>
                        </h1>
                        <p>{d.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section">
                <div className="container">
                        {/* Top Section — Title & Intro */}
                        <div style={{ textAlign: "center", marginBottom: "60px", width: "100%" }}>
                            <h2 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Get in Touch</h2>
                            <p style={{ fontSize: "1.1rem", color: "#666666", maxWidth: "700px", margin: "0 auto" }}>
                                Have questions? We're here to help. Reach out to us through any of these channels or fill out the contact form.
                            </p>
                        </div>

                        {/* Middle Section — 3 Points Side by Side */}
                        <div className="contact-methods-grid" style={{ 
                            display: "grid", 
                            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", 
                            gap: "30px", 
                            marginBottom: "60px",
                            width: "100%" 
                        }}>
                            {d.contactMethods.map((method) => (
                                <div className="contact-method-card" key={method.title} style={{
                                    textAlign: "center",
                                    padding: "30px",
                                    background: "#f9fafb",
                                    borderRadius: "16px",
                                    border: "1px solid #e5e7eb"
                                }}>
                                    <div style={{ 
                                        width: "50px", 
                                        height: "50px", 
                                        background: "#000", 
                                        color: "#fff", 
                                        borderRadius: "10px", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        margin: "0 auto 20px",
                                        fontSize: "1.4rem"
                                    }}>
                                        <i className={`fas ${method.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{method.title}</h4>
                                    {method.lines.map((line) => (
                                        <p key={line} style={{ margin: 0, fontSize: "0.95rem" }}>{line}</p>
                                    ))}
                                    <span style={{ fontSize: "0.85rem", color: "#666", display: "block", marginTop: "10px" }}>{method.hours}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Section — Form */}
                        <div className="contact-form-container" style={{ 
                            maxWidth: "900px", 
                            margin: "0 auto", 
                            width: "100%",
                            background: "#000",
                            padding: "40px",
                            borderRadius: "24px",
                            color: "#fff"
                        }}>
                            <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate style={{ color: "#fff" }}>
                                <h3 style={{ color: "#fff" }}>{d.form.title}</h3>
                                <p className="form-subtitle" style={{ color: "#aaa" }}>{d.form.subtitle}</p>

                                {/* I am a */}
                                <div className="form-group">
                                    <label htmlFor="inquiry-type">I am a</label>
                                    <select id="inquiry-type" name="inquiry-type" value={formData["inquiry-type"]} onChange={handleChange} style={inputStyle("inquiry-type")}>
                                        <option value="">Select...</option>
                                        {d.form.inquiryTypes.map((opt) => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Name + Phone row */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name <span style={{ color: "#ff4466" }}>*</span></label>
                                        <input
                                            type="text" id="name" name="name" required
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={inputStyle("name")}
                                        />
                                        {errors.name && <p style={{ color: "#ff4466", fontSize: "0.8rem", marginTop: "0.3rem" }}>{errors.name}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number <span style={{ color: "#ff4466" }}>*</span></label>
                                        <input
                                            type="tel" id="phone" name="phone" required
                                            placeholder="+91 00000 00000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={inputStyle("phone")}
                                        />
                                        {errors.phone && <p style={{ color: "#ff4466", fontSize: "0.8rem", marginTop: "0.3rem" }}>{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="form-group">
                                    <label htmlFor="email">Email Address <span style={{ color: "#ff4466" }}>*</span></label>
                                    <input
                                        type="email" id="email" name="email" required
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={inputStyle("email")}
                                    />
                                    {errors.email && <p style={{ color: "#ff4466", fontSize: "0.8rem", marginTop: "0.3rem" }}>{errors.email}</p>}
                                </div>

                                {/* Society name */}
                                <div className="form-group">
                                    <label htmlFor="society-name">Society/Building Name</label>
                                    <input
                                        type="text" id="society-name" name="society-name"
                                        placeholder="Name of your society"
                                        value={formData["society-name"]}
                                        onChange={handleChange}
                                        style={inputStyle("society-name")}
                                    />
                                </div>

                                {/* City + Units row */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text" id="city" name="city"
                                            placeholder="Your city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            style={inputStyle("city")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="units">Number of Units</label>
                                        <select id="units" name="units" value={formData.units} onChange={handleChange} style={inputStyle("units")}>
                                            <option value="">Select...</option>
                                            {d.form.unitOptions.map((opt) => (
                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Interests checkboxes */}
                                <div className="form-group">
                                    <label>I'm interested in</label>
                                    <div className="checkbox-group">
                                        {d.form.interests.map((item) => (
                                            <label className="checkbox-label" key={item.value}>
                                                <input
                                                    type="checkbox"
                                                    name="interest"
                                                    value={item.value}
                                                    checked={formData.interest.includes(item.value)}
                                                    onChange={handleCheckbox}
                                                />
                                                <span>{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message" name="message" rows={5}
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ ...inputStyle("message"), resize: "vertical" }}
                                    />
                                </div>

                                {/* Demo preference */}
                                <div className="form-group">
                                    <label htmlFor="demo-preference">Preferred Demo Time</label>
                                    <select id="demo-preference" name="demo-preference" value={formData["demo-preference"]} onChange={handleChange} style={inputStyle("demo-preference")}>
                                        <option value="">Select...</option>
                                        {d.form.demoPreferences.map((opt) => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn"
                                    disabled={submitting}
                                    style={{ 
                                        width: "100%", 
                                        justifyContent: "center",
                                        background: "#fff",
                                        color: "#000",
                                        padding: "16px",
                                        borderRadius: "12px",
                                        fontWeight: "700"
                                    }}
                                >
                                    <span>{submitting ? "Sending..." : "Send Message"}</span>
                                    <i className="fas fa-paper-plane"></i>
                                </button>

                                <p className="form-privacy">
                                    <i className="fas fa-lock"></i> {d.form.privacyNote}
                                </p>

                                {/* Success message appears below form */}
                                {success && <SuccessMessage />}
                            </form>
                        </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section alt-bg">
                <div className="container">
                    <div className="quick-links-section">
                        <h2>Quick Links</h2>
                        <p>Explore more about what we offer</p>
                        <div className="quick-links-grid">
                            {d.quickLinks.map((link) => (
                                <Link to={link.href} className="quick-link-card" key={link.title}>
                                    <i className={`fas ${link.icon}`}></i>
                                    <h4>{link.title}</h4>
                                    <p>{link.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>{d.cta.title}</h2>
                        <p>{d.cta.subtitle}</p>
                        <div className="cta-stats">
                            {d.cta.stats.map((s) => (
                                <div className="cta-stat" key={s.label}>
                                    <i className={`fas ${s.icon}`}></i>
                                    <span>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}