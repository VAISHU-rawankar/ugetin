// // HelpCenter.jsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   helpCenterMeta,
//   helpCategories,
//   popularArticles,
//   supportChannels,
//   systemStatus,
// } from "../data/helpCenterData";

// // ── Icons ─────────────────────────────────────────────────────────────────────

// const iconStyle = { width: 36, height: 36, color: "#374151", flexShrink: 0 };

// const CategoryIcon = ({ type }) => {
//   if (type === "building")
//     return (
//       <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
//       </svg>
//     );
//   if (type === "visitor")
//     return (
//       <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
//       </svg>
//     );
//   if (type === "shield")
//     return (
//       <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//       </svg>
//     );
//   if (type === "billing")
//     return (
//       <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
//       </svg>
//     );
//   return null;
// };

// const HelpActions = () => {
//   const [hovered, setHovered] = useState(null);

//   const cardStyle = (type) => ({
//     flex: 1,
//     border: "1px solid #e5e7eb",
//     borderRadius: 8,
//     padding: "24px",
//     textAlign: "center",
//     background: "#fff",
//     transition: "all 0.2s",
//     boxShadow: hovered === type ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
//   });

//   const buttonStyle = {
//     background: "#111827",
//     color: "#fff",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: 6,
//     cursor: "pointer",
//     fontSize: 13,
//     fontWeight: 600,
//   };

//   return (
//     <div style={{ marginTop: 40, display: "flex", gap: 16 }}>

//       {/* Left Card */}
//       <div
//         style={cardStyle("help")}
//         onMouseEnter={() => setHovered("help")}
//         onMouseLeave={() => setHovered(null)}
//       >
//         <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
//           Need More Help?
//         </h3>
//         <p style={{ fontSize: 13, color: "#fafafaff", marginBottom: 20 }}>
//           Contact our support team.
//         </p>

//         <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>

//           {/* Email */}
//           <div style={{ textAlign: "center" }}>
//             <div style={{ background: "#111827", color: "white", padding: 10, borderRadius: 6 }}>
//               <SupportIcon type="email" />
//             </div>
//             <p style={{ fontSize: 12, marginTop: 6 }}>Email Us</p>
//           </div>

//           {/* Chat */}
//           <div style={{ textAlign: "center" }}>
//             <div style={{ background: "#111827", color: "white", padding: 10, borderRadius: 6 }}>
//               <SupportIcon type="chat" />
//             </div>
//             <p style={{ fontSize: 12, marginTop: 6 }}>Live Chat</p>
//           </div>

//         </div>
//       </div>

//       {/* Right Card */}
//       <div
//         style={cardStyle("faq")}
//         onMouseEnter={() => setHovered("faq")}
//         onMouseLeave={() => setHovered(null)}
//       >
//         <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
//           FAQs
//         </h3>
//         <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
//           Frequently Asked Questions
//         </p>

//         <button style={buttonStyle}>
//           View FAQs
//         </button>
//       </div>
//     </div>
//   );
// };

// const SupportIcon = ({ type }) => {
//   const s = { width: 20, height: 20 };
//   if (type === "email")
//     return (
//       <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//       </svg>
//     );
//   if (type === "chat")
//     return (
//       <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
//       </svg>
//     );
//   if (type === "phone")
//     return (
//       <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//       </svg>
//     );
//   return null;
// };



// // ── Sub-components (all inline styles) ───────────────────────────────────────

// const CategoryCard = ({ category, index }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: "#fff",
//         border: `1px solid ${hovered ? "#9ca3af" : "#e5e7eb"}`,
//         borderRadius: 12,
//         padding: "20px",
//         cursor: "pointer",
//         boxShadow: hovered ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
//         transition: "border-color 0.2s, box-shadow 0.2s",
//       }}
//     >
//       {/* Header */}
//       <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #f3f4f6" }}>
//         <CategoryIcon type={category.icon} />
//         <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", lineHeight: 1.3, margin: 0 }}>
//           {category.title}
//         </h3>
//       </div>
//       {/* Articles */}
//       <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
//         {category.articles.map((article) => (
//           <li key={article.label}>
//             <a
//               href={article.href}
//               style={{ fontSize: 13, color: "#4b5563", textDecoration: "none" }}
//               onMouseEnter={(e) => { e.currentTarget.style.color = "#111827"; }}
//               onMouseLeave={(e) => { e.currentTarget.style.color = "#4b5563"; e.currentTarget.style.textDecoration = "none"; }}
//             >
//               {article.label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// const PopularArticles = ({ articles }) => (
//   <div style={{ marginTop: 32 }}>
//     <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 12 }}>Popular Articles</h2>
//     <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
//       {articles.map((article) => (
//         <li key={article.label} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
//           <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: "50%", background: "#9ca3af", flexShrink: 0, display: "inline-block" }} />
//           <a
//             href={article.href}
//             style={{ fontSize: 13, color: "#374151", textDecoration: "none" }}
//             onMouseEnter={(e) => { e.currentTarget.style.color = "#111827"; }}
//             onMouseLeave={(e) => { e.currentTarget.style.color = "#374151"; e.currentTarget.style.textDecoration = "none"; }}
//           >
//             {article.label}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const SupportSection = ({ channels }) => (
//   <div style={{ marginTop: 40, textAlign: "center" }}>
//     <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Still Need Help?</h2>
//     <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
//       Hamari support team aapki madad ke liye available hai
//     </p>
//     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
//       {channels.map((ch) => (
//         <SupportButton key={ch.label} ch={ch} />
//       ))}
//     </div>
//   </div>
// );

// const SupportButton = ({ ch }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <a
//       href={ch.href}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         gap: 8,
//         padding: "10px 20px",
//         border: `1px solid ${hovered ? "#9ca3af" : "#d1d5db"}`,
//         borderRadius: 8,
//         fontSize: 13,
//         fontWeight: 500,
//         color: "#374151",
//         textDecoration: "none",
//         background: hovered ? "#f9fafb" : "#fff",
//         transition: "all 0.18s",
//       }}
//     >
//       <SupportIcon type={ch.icon} />
//       {ch.label}
//     </a>
//   );
// };



// const SearchBar = ({ placeholder, onSearch }) => {
//   const [query, setQuery] = useState("");
//   const [btnHovered, setBtnHovered] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch?.(query);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", maxWidth: 560, margin: "20px auto 0" }}>
//       <div style={{ display: "flex", flex: 1, alignItems: "center", border: "1px solid #d1d5db", borderRadius: 8, overflow: "hidden", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.07)" }}>
//         <span style={{ paddingLeft: 14, color: "#9ca3af", display: "flex" }}>
//           <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
//           </svg>
//         </span>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder={placeholder}
//           style={{ flex: 1, padding: "10px 12px", fontSize: 13, color: "#374151", border: "none", outline: "none", background: "transparent" }}
//         />
//       </div>
//       <button
//         type="submit"
//         onMouseEnter={() => setBtnHovered(true)}
//         onMouseLeave={() => setBtnHovered(false)}
//         style={{
//           marginLeft: 8,
//           padding: "10px 20px",
//           background: btnHovered ? "#374151" : "#111827",
//           color: "#fff",
//           fontSize: 13,
//           fontWeight: 600,
//           border: "none",
//           borderRadius: 8,
//           cursor: "pointer",
//           transition: "background 0.18s",
//         }}
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// // ── Main HelpCenter Component ─────────────────────────────────────────────────

// const HelpCenter = ({
//   meta = helpCenterMeta,
//   categories = helpCategories,
//   articles = popularArticles,
//   channels = supportChannels,
//   status = systemStatus,
//   onSearch,
// }) => {
//   return (
//     <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "sans-serif" }}>
//       <div style={{ maxWidth: "900px", margin: "0 auto", marginTop: "50px", padding: "40px 16px" }}>

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.45 }}
//           style={{ textAlign: "center" }}
//         >
//           <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "16px" }}>
//             {meta.title}
//           </h1>
//           <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>{meta.subtitle}</p>
//           <SearchBar placeholder={meta.searchPlaceholder} onSearch={onSearch} />
//         </motion.div>

//         {/* Divider */}
//         <hr style={{ margin: "32px 0", borderColor: "#e5e7eb" }} />

//         {/* Categories Grid */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
//           {categories.map((cat, i) => (
//             <CategoryCard key={cat.id} category={cat} index={i} />
//           ))}
//         </div>

//         {/* Popular Articles */}
//         <PopularArticles articles={articles} />

//         {/* Divider */}
//         <hr style={{ margin: "32px 0", borderColor: "#e5e7eb" }} />

//         {/* Still Need Help */}
//         <SupportSection channels={channels} />

//         <HelpActions />
//       </div>
//     </div>
//   );
// };

// export default HelpCenter;



















// HelpCenter.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  helpCenterMeta,
  helpCategories,
  popularArticles,
  supportChannels,
  systemStatus,
} from "../data/helpCenterData";

// ── Responsive hook ────────────────────────────────────────────────────────────

const useIsMobile = (breakpoint = 600) => {
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

// ── Icons ─────────────────────────────────────────────────────────────────────

const CategoryIcon = ({ type, size = 36 }) => {
  const iconStyle = { width: size, height: size, color: "#374151", flexShrink: 0 };
  if (type === "building")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    );
  if (type === "visitor")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  if (type === "billing")
    return (
      <svg style={iconStyle} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    );
  return null;
};

const SupportIcon = ({ type }) => {
  const s = { width: 20, height: 20 };
  if (type === "email")
    return (
      <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    );
  if (type === "chat")
    return (
      <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    );
  if (type === "phone")
    return (
      <svg style={s} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    );
  return null;
};

// ── Sub-components ────────────────────────────────────────────────────────────

const CategoryCard = ({ category, index, isMobile }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: `1px solid ${hovered ? "#9ca3af" : "#e5e7eb"}`,
        borderRadius: 12,
        padding: isMobile ? "16px" : "20px",
        cursor: "pointer",
        boxShadow: hovered ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 10 : 12,
          marginBottom: 12,
          paddingBottom: 12,
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <CategoryIcon type={category.icon} size={isMobile ? 28 : 36} />
        <h3
          style={{
            fontSize: isMobile ? 15 : 20,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {category.title}
        </h3>
      </div>

      {/* Articles */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {category.articles.map((article) => (
          <li key={article.label}>
            <a
              href={article.href}
              style={{ fontSize: isMobile ? 12 : 13, color: "#4b5563", textDecoration: "none" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#111827"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#4b5563"; }}
            >
              {article.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const PopularArticles = ({ articles, isMobile }) => (
  <div style={{ marginTop: 48, padding: isMobile ? "0 4px" : "0" }}>
    <h2 style={{ 
        fontFamily: "'DM Sans', sans-serif",
        fontSize: isMobile ? "1.1rem" : "1.25rem", 
        fontWeight: 700, 
        color: "#111827", 
        marginBottom: "24px" 
    }}>
      Popular Articles
    </h2>
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
      {articles.map((article) => (
        <li key={article.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#9ca3af",
              flexShrink: 0,
              display: "inline-block",
            }}
          />
          <a
            href={article.href || "#"}
            style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: isMobile ? "0.9rem" : "1rem", 
                color: "#2563eb", 
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s"
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#1d4ed8"; e.currentTarget.style.textDecoration = "underline"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#2563eb"; e.currentTarget.style.textDecoration = "none"; }}
          >
            {article.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SupportButton = ({ ch }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={ch.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 20px",
        border: `1px solid ${hovered ? "#9ca3af" : "#d1d5db"}`,
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 500,
        color: "#374151",
        textDecoration: "none",
        background: hovered ? "#f9fafb" : "#fff",
        transition: "all 0.18s",
      }}
    >
      <SupportIcon type={ch.icon} />
      {ch.label}
    </a>
  );
};

const SupportSection = ({ channels, isMobile }) => (
  <div style={{ marginTop: 40, textAlign: "center" }}>
    <h2 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>
      Still Need Help?
    </h2>
    <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
      Hamari support team aapki madad ke liye available hai
    </p>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
      {channels.map((ch) => (
        <SupportButton key={ch.label} ch={ch} />
      ))}
    </div>
  </div>
);

const HelpActions = ({ isMobile }) => {
  const [hovered, setHovered] = useState(null);

  const cardStyle = (type) => ({
    flex: 1,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: isMobile ? "16px" : "24px",
    textAlign: "center",
    background: "#fff",
    transition: "all 0.2s",
    boxShadow: hovered === type ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
  });

  const buttonStyle = {
    background: "#111827",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
  };

  return (
    <div
      style={{
        marginTop: 40,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 16,
      }}
    >
      {/* Left Card */}
      <div
        style={cardStyle("help")}
        onMouseEnter={() => setHovered("help")}
        onMouseLeave={() => setHovered(null)}
      >
        <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>
          Need More Help?
        </h3>
        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
          Contact our support team.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {/* Email Us */}
          <a 
            href="mailto:support@ugate.in" 
            style={{ textAlign: "center", textDecoration: "none", color: "inherit", cursor: "pointer" }}
          >
            <div style={{ background: "#111827", color: "white", padding: 10, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SupportIcon type="email" />
            </div>
            <p style={{ fontSize: 12, marginTop: 6, fontWeight: 500 }}>Email Us</p>
          </a>

          {/* Live Chat */}
          <div 
            onClick={() => alert("Live Chat is being initialized...")}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <div style={{ background: "#111827", color: "white", padding: 10, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <SupportIcon type="chat" />
            </div>
            <p style={{ fontSize: 12, marginTop: 6, fontWeight: 500 }}>Live Chat</p>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div
        style={cardStyle("faq")}
        onMouseEnter={() => setHovered("faq")}
        onMouseLeave={() => setHovered(null)}
      >
        <h3 style={{ fontSize: isMobile ? 16 : 18, fontWeight: 700, marginBottom: 8 }}>
          FAQs
        </h3>
        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 20 }}>
          Frequently Asked Questions
        </p>
        <button 
          style={buttonStyle}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          View FAQs
        </button>
      </div>
    </div>
  );
};

const SearchBar = ({ placeholder, onSearch, isMobile }) => {
  const [query, setQuery] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        maxWidth: 560,
        margin: "20px auto 0",
        // On very small screens make it slightly narrower with padding
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          border: "1px solid #d1d5db",
          borderRadius: 8,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
          minWidth: 0, // allow shrinking
        }}
      >
        <span style={{ paddingLeft: 14, color: "#9ca3af", display: "flex", flexShrink: 0 }}>
          <svg style={{ width: 16, height: 16 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
          </svg>
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isMobile ? "Search issues…" : placeholder}
          style={{
            flex: 1,
            padding: "10px 8px",
            fontSize: 13,
            color: "#374151",
            border: "none",
            outline: "none",
            background: "transparent",
            minWidth: 0,
          }}
        />
      </div>
      <button
        type="submit"
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          marginLeft: 8,
          padding: "10px 16px",
          background: btnHovered ? "#374151" : "#111827",
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          transition: "background 0.18s",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        Search
      </button>
    </form>
  );
};

// ── Main HelpCenter Component ─────────────────────────────────────────────────

const HelpCenter = ({
  meta = helpCenterMeta,
  categories = helpCategories,
  articles = popularArticles,
  channels = supportChannels,
  status = systemStatus,
  onSearch,
}) => {
  const isMobile = useIsMobile(640);

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "sans-serif" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginTop: isMobile ? "100px" : "80px",
          padding: isMobile ? "20px 12px" : "40px 16px",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          style={{ textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 800,
              color: "#111",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            {meta.title}
          </h1>
          <p style={{ fontSize: 13, color: "#6b7280", margin: 0, padding: "0 8px" }}>
            {meta.subtitle}
          </p>
          <SearchBar placeholder={meta.searchPlaceholder} onSearch={onSearch} isMobile={isMobile} />
        </motion.div>

        {/* Divider */}
        <hr style={{ margin: isMobile ? "20px 0" : "32px 0", borderColor: "#e5e7eb" }} />

        {/* Categories Grid — 1 col on mobile, 2 cols on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? 12 : 16,
          }}
        >
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} isMobile={isMobile} />
          ))}
        </div>

        {/* Popular Articles */}
        <PopularArticles articles={articles} isMobile={isMobile} />

        {/* Divider */}
        <hr style={{ margin: isMobile ? "20px 0" : "32px 0", borderColor: "#e5e7eb" }} />

        {/* Still Need Help */}
        <SupportSection channels={channels} isMobile={isMobile} />

        <HelpActions isMobile={isMobile} />
      </div>
    </div>
  );
};

export default HelpCenter;