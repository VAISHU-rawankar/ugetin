// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BookOpen, Zap, Shield, CreditCard, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";

// const faqData = [
//     {
//         category: "Getting Started",
//         icon: BookOpen,
//         items: [
//             {
//                 q: "What is Urbangate?",
//                 a: "Urbangate is a smart society management and security platform for modern residential buildings. It helps manage billing, residents, visitors, complaints, and security — all from one platform.",
//             },
//             {
//                 q: "Who is Urbangate for?",
//                 a: "Urbangate is designed for housing societies, gated communities, and residential buildings. It serves residents, security guards, and society management committees.",
//             },
//             {
//                 q: "Is Urbangate available on mobile?",
//                 a: "Yes. Urbangate has dedicated mobile apps for both residents and security guards. Residents can approve visitors, pay bills, and raise complaints. Guards can manage visitor entries, deliveries, and SOS alerts.",
//             },
//             {
//                 q: "How do I get started with Urbangate?",
//                 a: "Getting started is simple: Add your Society Details → Onboard Members → Start Managing. You can request a free demo from our website and our team will guide you through the setup.",
//             },
//             {
//                 q: "How long does setup take?",
//                 a: "Basic setup can be done in minutes. For security features, the process is: Set Up Society Details → Onboard Guards → Enhance Security.",
//             },
//         ],
//     },
//     {
//         category: "Features",
//         icon: Zap,
//         items: [
//             {
//                 q: "What features does Urbangate offer?",
//                 a: "Urbangate includes Resident Management, Visitor Management, Maintenance Billing, Notices & Communication, Complaint Tracking, Facility Booking, Accounting & Reports, and a Mobile App for residents and guards.",
//             },
//             {
//                 q: "How does visitor management work?",
//                 a: "Security guards log visitor details using the guard app. Residents receive a real-time notification and can approve or deny entry with a single tap. All entries are recorded with timestamps.",
//             },
//             {
//                 q: "Can residents pay maintenance bills online?",
//                 a: "Yes. Urbangate integrates a payment gateway so residents can pay maintenance fees, utility bills, and society dues directly from their mobile app.",
//             },
//             {
//                 q: "Does Urbangate support delivery management?",
//                 a: "Yes. Guards can log delivery agents at the gate. Residents are notified in real-time and can approve deliveries in advance or at the time of arrival. Full delivery records are maintained.",
//             },
//             {
//                 q: "What is the SOS Alert feature?",
//                 a: "Security guards can instantly send panic alerts to management in case of an emergency. This helps ensure rapid response to security incidents.",
//             },
//         ],
//     },
//     {
//         category: "Security",
//         icon: Shield,
//         items: [
//             {
//                 q: "Is my society's data safe with Urbangate?",
//                 a: "Yes. Urbangate uses top-notch security practices to keep your data safe. The platform is cloud-based with encrypted data storage and secure access controls.",
//             },
//             {
//                 q: "Does Urbangate take responsibility for security decisions?",
//                 a: "No. Urbangate is a technology platform and does not take security decisions or manage existing security services. Visitor approvals are the sole responsibility of flat owners.",
//             },
//             {
//                 q: "Are visitor records permanently stored?",
//                 a: "Yes. All visitor entries, approvals, photos, and timestamps are permanently stored and fully searchable, giving you a complete audit trail.",
//             },
//         ],
//     },
//     {
//         category: "Billing",
//         icon: CreditCard,
//         items: [
//             {
//                 q: "How is maintenance billing handled?",
//                 a: "Urbangate provides an automated billing system. Society admins can configure billing cycles, amounts, and dues. Residents receive notifications and can pay directly from the app.",
//             },
//             {
//                 q: "What payment methods are supported?",
//                 a: "Urbangate supports all major payment methods through its integrated payment gateway — UPI, net banking, debit/credit cards, and wallets.",
//             },
//             {
//                 q: "Can I download payment receipts?",
//                 a: "Yes. Residents can download digital receipts for every payment made through the app. Admins also have access to full accounting reports.",
//             },
//         ],
//     },
//     {
//         category: "Account",
//         icon: MessageCircle,
//         items: [
//             {
//                 q: "How can I contact Urbangate for support?",
//                 a: "You can reach us at hello@ugate.in or visit our office at Shop No. 236, Second Floor, Roongta Fururex, Opp. Hotel The One, Near R.D Circle, City Center Mall Road, Govind Nagar, Nashik-422008.",
//             },
//             {
//                 q: "What are the support hours?",
//                 a: "Our support team is available Monday to Saturday, 9 AM to 7 PM IST. For urgent security issues, we provide 24/7 emergency assistance.",
//             },
//             {
//                 q: "How do I reset my password?",
//                 a: "You can reset your password directly from the login screen by clicking 'Forgot Password'. An OTP will be sent to your registered mobile number or email.",
//             },
//         ],
//     },
// ];

// const FAQItem = ({ q, a, index }) => {
//     const [open, setOpen] = useState(false);

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.05, duration: 0.3 }}
//             style={{
//                 borderBottom: "1px solid #ebebeb",
//             }}
//         >
//             <button
//                 onClick={() => setOpen((p) => !p)}
//                 style={{
//                     width: "100%",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                     padding: "22px 0",
//                     background: "none",
//                     border: "none",
//                     cursor: "pointer",
//                     textAlign: "left",
//                     gap: "16px",
//                 }}
//             >
//                 <span
//                     style={{
//                         fontSize: "0.975rem",
//                         fontWeight: 600,
//                         color: open ? "#000" : "#1a1a1a",
//                         lineHeight: 1.45,
//                         transition: "color 0.2s",
//                     }}
//                 >
//                     {q}
//                 </span>
//                 <ChevronRight
//                     size={16}
//                     color={open ? "#000" : "#aaa"}
//                     style={{
//                         flexShrink: 0,
//                         marginTop: "3px",
//                         transition: "transform 0.22s ease, color 0.2s",
//                         transform: open ? "rotate(90deg)" : "rotate(0deg)",
//                     }}
//                 />
//             </button>

//             <AnimatePresence initial={false}>
//                 {open && (
//                     <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//                         style={{ overflow: "hidden" }}
//                     >
//                         <p
//                             style={{
//                                 fontSize: "0.9rem",
//                                 color: "#555",
//                                 lineHeight: 1.75,
//                                 paddingBottom: "22px",
//                                 margin: 0,
//                                 paddingRight: "24px",
//                             }}
//                         >
//                             {a}
//                         </p>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.div>
//     );
// };

// const FAQ = () => {
//     const [activeCategory, setActiveCategory] = useState("Getting Started");
//     const current = faqData.find((c) => c.category === activeCategory);

//     return (
//         <div
//             style={{
//                 fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
//                 background: "#fff",
//                 minHeight: "100vh",
//                 marginTop: "80px",
//             }}
//         >
//             {/* Page Header */}
//             <div
//                 style={{
//                     borderBottom: "1px solid #ebebeb",
//                     padding: "48px 48px 32px",
//                 }}
//             >
//                 <h1
//                     style={{
//                         fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
//                         fontWeight: 800,
//                         color: "#111",
//                         letterSpacing: "-0.025em",
//                         margin: "0 0 6px 0",
//                         lineHeight: 1.2,
//                     }}
//                 >
//                     FAQ's – Frequently Asked Questions
//                 </h1>
//                 <p style={{ fontSize: "0.85rem", color: "#999", margin: 0 }}>
//                     Last updated: March 24, 2025
//                 </p>
//             </div>

//             {/* Body */}
//             <div
//                 style={{
//                     display: "flex",
//                     maxWidth: "1100px",
//                     margin: "0 auto",
//                     padding: "0 0 80px",
//                     minHeight: "calc(100vh - 200px)",
//                 }}
//             >
//                 {/* Sidebar */}
//                 <aside
//                     style={{
//                         width: "240px",
//                         flexShrink: 0,
//                         padding: "40px 24px 40px 48px",
//                         borderRight: "1px solid #ebebeb",
//                     }}
//                 >
//                     <p
//                         style={{
//                             fontSize: "0.72rem",
//                             fontWeight: 700,
//                             letterSpacing: "0.08em",
//                             textTransform: "uppercase",
//                             color: "#aaa",
//                             margin: "0 0 14px 0",
//                         }}
//                     >
//                         Browse Help Topics
//                     </p>

//                     <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
//                         {faqData.map((cat) => {
//                             const Icon = cat.icon;
//                             const isActive = activeCategory === cat.category;
//                             return (
//                                 <button
//                                     key={cat.category}
//                                     onClick={() => setActiveCategory(cat.category)}
//                                     style={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         gap: "10px",
//                                         padding: "10px 12px",
//                                         borderRadius: "8px",
//                                         border: "none",
//                                         background: isActive ? "#eff6ff" : "transparent",
//                                         color: isActive ? "#000" : "#555",
//                                         fontSize: "0.9rem",
//                                         fontWeight: isActive ? 700 : 500,
//                                         cursor: "pointer",
//                                         textAlign: "left",
//                                         width: "100%",
//                                         transition: "all 0.15s ease",
//                                     }}
//                                     onMouseEnter={(e) => {
//                                         if (!isActive) e.currentTarget.style.background = "#f5f5f5";
//                                     }}
//                                     onMouseLeave={(e) => {
//                                         if (!isActive) e.currentTarget.style.background = "transparent";
//                                     }}
//                                 >
//                                     <Icon size={15} style={{ flexShrink: 0 }} />
//                                     {cat.category}
//                                 </button>
//                             );
//                         })}
//                     </nav>

//                     {/* Contact card in sidebar */}
//                     <div
//                         style={{
//                             marginTop: "40px",
//                             padding: "18px",
//                             background: "#f7f7f7",
//                             borderRadius: "12px",
//                         }}
//                     >
//                         <p
//                             style={{
//                                 fontSize: "0.875rem",
//                                 fontWeight: 700,
//                                 color: "#111",
//                                 margin: "0 0 6px 0",
//                             }}
//                         >
//                             Contact Us
//                         </p>
//                         <p
//                             style={{
//                                 fontSize: "0.8rem",
//                                 color: "#777",
//                                 margin: "0 0 14px 0",
//                                 lineHeight: 1.5,
//                             }}
//                         >
//                             Can't find an answer? Our support team is here to help.
//                         </p>
//                         <a
//                             href="/contact"
//                             style={{
//                                 display: "inline-block",
//                                 padding: "9px 18px",
//                                 borderRadius: "7px",
//                                 background: "#111",
//                                 color: "#fff",
//                                 fontSize: "0.8rem",
//                                 fontWeight: 600,
//                                 textDecoration: "none",
//                                 transition: "background 0.2s",
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
//                             onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
//                         >
//                             Get In Touch
//                         </a>
//                     </div>
//                 </aside>

//                 {/* Main Content */}
//                 <main style={{ flex: 1, padding: "40px 48px" }}>
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeCategory}
//                             initial={{ opacity: 0, x: 10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             exit={{ opacity: 0, x: -10 }}
//                             transition={{ duration: 0.2 }}
//                         >
//                             <h2
//                                 style={{
//                                     fontSize: "1.5rem",
//                                     fontWeight: 800,
//                                     color: "#111",
//                                     letterSpacing: "-0.02em",
//                                     margin: "0 0 6px 0",
//                                 }}
//                             >
//                                 {current?.category}
//                             </h2>
//                             <p style={{ fontSize: "0.85rem", color: "#aaa", margin: "0 0 28px 0" }}>
//                                 {current?.items.length} articles in this section
//                             </p>

//                             <div
//                                 style={{
//                                     borderTop: "1px solid #ebebeb",
//                                 }}
//                             >
//                                 {current?.items.map((item, i) => (
//                                     <FAQItem key={i} q={item.q} a={item.a} index={i} />
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </AnimatePresence>

//                     {/* Bottom CTA */}
//                     <div
//                         style={{
//                             marginTop: "48px",
//                             padding: "28px 32px",
//                             background: "#f7f7f7",
//                             borderRadius: "14px",
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "space-between",
//                             flexWrap: "wrap",
//                             gap: "16px",
//                         }}
//                     >
//                         <div>
//                             <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: "0 0 4px 0" }}>
//                                 Still Have Questions?
//                             </p>
//                             <p style={{ fontSize: "0.85rem", color: "#777", margin: 0 }}>
//                                 If you can't find the answers you are looking for, feel free to contact our support team.
//                             </p>
//                         </div>
//                         <a
//                             href="/contact"
//                             style={{
//                                 display: "inline-flex",
//                                 alignItems: "center",
//                                 gap: "8px",
//                                 padding: "11px 24px",
//                                 borderRadius: "8px",
//                                 background: "#111",
//                                 color: "#fff",
//                                 fontSize: "0.875rem",
//                                 fontWeight: 600,
//                                 textDecoration: "none",
//                                 flexShrink: 0,
//                                 transition: "background 0.2s",
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
//                             onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
//                         >
//                             Contact Us
//                         </a>
//                     </div>

//                     {/* Contact Info */}
//                     <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                         <a
//                             href="mailto:hello@ugate.in"
//                             style={{
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "7px",
//                                 fontSize: "0.85rem",
//                                 color: "#000000",
//                                 textDecoration: "none",
//                             }}
//                         >
//                             <Mail size={14} />
//                             hello@ugate.in
//                         </a>
//                         <span
//                             style={{
//                                 display: "flex",
//                                 alignItems: "flex-start",
//                                 gap: "7px",
//                                 fontSize: "0.85rem",
//                                 color: "#777",
//                             }}
//                         >
//                             <MapPin size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
//                             Shop No. 236, Roongta Fururex, Govind Nagar, Nashik-422008
//                         </span>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default FAQ;



import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Zap, Shield, CreditCard, Mail, MapPin, ChevronRight, MessageCircle } from "lucide-react";

const faqData = [
    {
        category: "Getting Started",
        icon: BookOpen,
        items: [
            { q: "What is Urbangate?", a: "Urbangate is a smart society management and security platform for modern residential buildings. It helps manage billing, residents, visitors, complaints, and security — all from one platform." },
            { q: "Who is Urbangate for?", a: "Urbangate is designed for housing societies, gated communities, and residential buildings. It serves residents, security guards, and society management committees." },
            { q: "Is Urbangate available on mobile?", a: "Yes. Urbangate has dedicated mobile apps for both residents and security guards. Residents can approve visitors, pay bills, and raise complaints. Guards can manage visitor entries, deliveries, and SOS alerts." },
            { q: "How do I get started with Urbangate?", a: "Getting started is simple: Add your Society Details → Onboard Members → Start Managing. You can request a free demo from our website and our team will guide you through the setup." },
            { q: "How long does setup take?", a: "Basic setup can be done in minutes. For security features, the process is: Set Up Society Details → Onboard Guards → Enhance Security." },
        ],
    },
    {
        category: "Features",
        icon: Zap,
        items: [
            { q: "What features does Urbangate offer?", a: "Urbangate includes Resident Management, Visitor Management, Maintenance Billing, Notices & Communication, Complaint Tracking, Facility Booking, Accounting & Reports, and a Mobile App for residents and guards." },
            { q: "How does visitor management work?", a: "Security guards log visitor details using the guard app. Residents receive a real-time notification and can approve or deny entry with a single tap. All entries are recorded with timestamps." },
            { q: "Can residents pay maintenance bills online?", a: "Yes. Urbangate integrates a payment gateway so residents can pay maintenance fees, utility bills, and society dues directly from their mobile app." },
            { q: "Does Urbangate support delivery management?", a: "Yes. Guards can log delivery agents at the gate. Residents are notified in real-time and can approve deliveries in advance or at the time of arrival. Full delivery records are maintained." },
            { q: "What is the SOS Alert feature?", a: "Security guards can instantly send panic alerts to management in case of an emergency. This helps ensure rapid response to security incidents." },
        ],
    },
    {
        category: "Security",
        icon: Shield,
        items: [
            { q: "Is my society's data safe with Urbangate?", a: "Yes. Urbangate uses top-notch security practices to keep your data safe. The platform is cloud-based with encrypted data storage and secure access controls." },
            { q: "Does Urbangate take responsibility for security decisions?", a: "No. Urbangate is a technology platform and does not take security decisions or manage existing security services. Visitor approvals are the sole responsibility of flat owners." },
            { q: "Are visitor records permanently stored?", a: "Yes. All visitor entries, approvals, photos, and timestamps are permanently stored and fully searchable, giving you a complete audit trail." },
        ],
    },
    {
        category: "Billing",
        icon: CreditCard,
        items: [
            { q: "How is maintenance billing handled?", a: "Urbangate provides an automated billing system. Society admins can configure billing cycles, amounts, and dues. Residents receive notifications and can pay directly from the app." },
            { q: "What payment methods are supported?", a: "Urbangate supports all major payment methods through its integrated payment gateway — UPI, net banking, debit/credit cards, and wallets." },
            { q: "Can I download payment receipts?", a: "Yes. Residents can download digital receipts for every payment made through the app. Admins also have access to full accounting reports." },
        ],
    },
    {
        category: "Account",
        icon: MessageCircle,
        items: [
            { q: "How can I contact Urbangate for support?", a: "You can reach us at hello@ugate.in or visit our office at Shop No. 236, Second Floor, Roongta Fururex, Opp. Hotel The One, Near R.D Circle, City Center Mall Road, Govind Nagar, Nashik-422008." },
            { q: "What are the support hours?", a: "Our support team is available Monday to Saturday, 9 AM to 7 PM IST. For urgent security issues, we provide 24/7 emergency assistance." },
            { q: "How do I reset my password?", a: "You can reset your password directly from the login screen by clicking 'Forgot Password'. An OTP will be sent to your registered mobile number or email." },
        ],
    },
];

// ── Responsive hook ───────────────────────────────────────────────────────────
const useIsMobile = (breakpoint = 640) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    );
    useEffect(() => {
        const handler = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, [breakpoint]);
    return isMobile;
};

// ── FAQ Item ──────────────────────────────────────────────────────────────────
const FAQItem = ({ q, a, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            style={{ borderBottom: "1px solid #ebebeb" }}
        >
            <button
                onClick={() => setOpen((p) => !p)}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                }}
            >
                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: open ? "#000" : "#1a1a1a", lineHeight: 1.45, transition: "color 0.2s" }}>
                    {q}
                </span>
                <ChevronRight
                    size={16}
                    color={open ? "#000" : "#aaa"}
                    style={{ flexShrink: 0, marginTop: "3px", transition: "transform 0.22s ease, color 0.2s", transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
                />
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.75, paddingBottom: "20px", margin: 0, paddingRight: "16px" }}>
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// ── Main FAQ Component ────────────────────────────────────────────────────────
const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("Getting Started");
    const isMobile = useIsMobile(640);
    const current = faqData.find((c) => c.category === activeCategory);

    return (
        <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif", background: "#fff", minHeight: "100vh", marginTop: "70px" }}>

            {/* Page Header */}
            <div style={{ borderBottom: "1px solid #ebebeb", textAlign: "center", padding: isMobile ? "28px 16px 20px" : "48px 48px 32px" }}>
                <h1 style={{ fontSize: isMobile ? "1.4rem" : "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.025em", margin: "0 0 6px 0", lineHeight: 1.2 }}>
                    FAQ's – Frequently Asked Questions
                </h1>
                <p style={{ fontSize: "0.85rem", color: "#999", margin: 0 }}>
                    Last updated: March 24, 2025
                </p>
            </div>

            {isMobile ? (
                // ── MOBILE LAYOUT ──────────────────────────────────────────
                <div>
                    {/* Horizontal scrollable tab bar */}
                    <div style={{ borderBottom: "1px solid #ebebeb", overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
                        <div style={{ display: "flex", padding: "0 14px", gap: "4px", minWidth: "max-content" }}>
                            {faqData.map((cat) => {
                                const Icon = cat.icon;
                                const isActive = activeCategory === cat.category;
                                return (
                                    <button
                                        key={cat.category}
                                        onClick={() => setActiveCategory(cat.category)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            padding: "14px 14px 12px",
                                            background: "none",
                                            border: "none",
                                            borderBottom: isActive ? "2px solid #111" : "2px solid transparent",
                                            color: isActive ? "#111" : "#888",
                                            fontSize: "0.85rem",
                                            fontWeight: isActive ? 700 : 500,
                                            cursor: "pointer",
                                            whiteSpace: "nowrap",
                                            transition: "all 0.15s ease",
                                        }}
                                    >
                                        <Icon size={14} style={{ flexShrink: 0 }} />
                                        {cat.category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Mobile Main Content */}
                    <div style={{ padding: "24px 16px" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", margin: "0 0 4px 0" }}>
                                    {current?.category}
                                </h2>
                                <p style={{ fontSize: "0.8rem", color: "#aaa", margin: "0 0 20px 0" }}>
                                    {current?.items.length} articles in this section
                                </p>

                                <div style={{ borderTop: "1px solid #ebebeb" }}>
                                    {current?.items.map((item, i) => (
                                        <FAQItem key={i} q={item.q} a={item.a} index={i} />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile Bottom CTA */}
                        <div style={{ marginTop: "32px", padding: "20px", background: "#f7f7f7", borderRadius: "12px" }}>
                            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111", margin: "0 0 4px 0" }}>Still Have Questions?</p>
                            <p style={{ fontSize: "0.82rem", color: "#777", margin: "0 0 16px 0", lineHeight: 1.5 }}>
                                Can't find the answer? Our support team is here to help.
                            </p>
                            <a
                                href="/contact"
                                style={{ display: "inline-block", padding: "10px 20px", borderRadius: "8px", background: "#111", color: "#fff", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Mobile Contact Info */}
                        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                            <a href="mailto:hello@ugate.in" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#000", textDecoration: "none" }}>
                                <Mail size={14} />
                                hello@ugate.in
                            </a>
                            <span style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.82rem", color: "#777", lineHeight: 1.5 }}>
                                <MapPin size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
                                Shop No. 236, Roongta Fururex, Govind Nagar, Nashik-422008
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                // ── DESKTOP LAYOUT ─────────────────────────────────────────
                <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto", padding: "0 0 80px", minHeight: "calc(100vh - 200px)" }}>

                    {/* Sidebar */}
                    <aside style={{ width: "240px", flexShrink: 0, padding: "40px 24px 40px 48px", borderRight: "1px solid #ebebeb" }}>
                        <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#aaa", margin: "0 0 14px 0" }}>
                            Browse Help Topics
                        </p>

                        <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                            {faqData.map((cat) => {
                                const Icon = cat.icon;
                                const isActive = activeCategory === cat.category;
                                return (
                                    <button
                                        key={cat.category}
                                        onClick={() => setActiveCategory(cat.category)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "10px 12px",
                                            borderRadius: "8px",
                                            border: "none",
                                            background: isActive ? "#eff6ff" : "transparent",
                                            color: isActive ? "#000" : "#555",
                                            fontSize: "0.9rem",
                                            fontWeight: isActive ? 700 : 500,
                                            cursor: "pointer",
                                            textAlign: "left",
                                            width: "100%",
                                            transition: "all 0.15s ease",
                                        }}
                                        onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = "#f5f5f5"; }}
                                        onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                                    >
                                        <Icon size={15} style={{ flexShrink: 0 }} />
                                        {cat.category}
                                    </button>
                                );
                            })}
                        </nav>

                        {/* Contact card */}
                        <div style={{ marginTop: "40px", padding: "18px", background: "#f7f7f7", borderRadius: "12px" }}>
                            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111", margin: "0 0 6px 0" }}>Contact Us</p>
                            <p style={{ fontSize: "0.8rem", color: "#777", margin: "0 0 14px 0", lineHeight: 1.5 }}>
                                Can't find an answer? Our support team is here to help.
                            </p>
                            <a
                                href="/contact"
                                style={{ display: "inline-block", padding: "9px 18px", borderRadius: "7px", background: "#111", color: "#fff", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none", transition: "background 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
                            >
                                Get In Touch
                            </a>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main style={{ flex: 1, padding: "40px 48px" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111", letterSpacing: "-0.02em", margin: "0 0 6px 0" }}>
                                    {current?.category}
                                </h2>
                                <p style={{ fontSize: "0.85rem", color: "#aaa", margin: "0 0 28px 0" }}>
                                    {current?.items.length} articles in this section
                                </p>

                                <div style={{ borderTop: "1px solid #ebebeb" }}>
                                    {current?.items.map((item, i) => (
                                        <FAQItem key={i} q={item.q} a={item.a} index={i} />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom CTA */}
                        <div style={{ marginTop: "48px", padding: "28px 32px", background: "#f7f7f7", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                            <div>
                                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: "0 0 4px 0" }}>Still Have Questions?</p>
                                <p style={{ fontSize: "0.85rem", color: "#777", margin: 0 }}>
                                    If you can't find the answers you are looking for, feel free to contact our support team.
                                </p>
                            </div>
                            <a
                                href="/contact"
                                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 24px", borderRadius: "8px", background: "#111", color: "#fff", fontSize: "0.875rem", fontWeight: 600, textDecoration: "none", flexShrink: 0, transition: "background 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
                            >
                                Contact Us
                            </a>
                        </div>

                        {/* Contact Info */}
                        <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
                            <a href="mailto:hello@ugate.in" style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "0.85rem", color: "#000", textDecoration: "none" }}>
                                <Mail size={14} />
                                hello@ugate.in
                            </a>
                            <span style={{ display: "flex", alignItems: "flex-start", gap: "7px", fontSize: "0.85rem", color: "#777" }}>
                                <MapPin size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
                                Shop No. 236, Roongta Fururex, Govind Nagar, Nashik-422008
                            </span>
                        </div>
                    </main>
                </div>
            )}
        </div>
    );
};

export default FAQ;