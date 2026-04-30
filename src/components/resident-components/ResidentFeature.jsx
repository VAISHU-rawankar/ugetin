// import { motion } from "framer-motion";
// import { Bell, CreditCard, AlertCircle } from "lucide-react";

// const iconMap = {
//   bell: Bell,
//   "credit-card": CreditCard,
//   "alert-circle": AlertCircle,
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.12,
//       delayChildren: 0.08,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 18 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.45,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// const ResidentFeature = ({ data = {} }) => {
//   const { heading = {}, subtitle = "", items = [] } = data;

//   return (
//     <section
//       style={{
//         padding: "64px 48px",
//         background: "#ffffff",
//       }}
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.45 }}
//         style={{ marginBottom: "10px" }}
//       >
//         <h2
//           style={{
//             fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
//             fontWeight: 700,
//             color: "#1a1a1a",
//             letterSpacing: "-0.02em",
//             lineHeight: 1.25,
//             margin: 0,
//           }}
//         >
//           {heading.line1}
//           <br />
//           {heading.line2 && (
//             <span style={{ fontWeight: 400 }}>
//               {heading.line2.replace(heading.highlightWord, "")}{" "}
//               <span style={{ fontWeight: 800 }}>
//                 {heading.highlightWord}
//               </span>
//             </span>
//           )}
//         </h2>
//       </motion.div>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.4, delay: 0.1 }}
//         style={{
//           fontSize: "0.95rem",
//           color: "#6b7280",
//           marginBottom: "36px",
//           lineHeight: 1.6,
//           maxWidth: "520px",
//         }}
//       >
//         {subtitle}
//       </motion.p>

//       {/* Cards */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
//           gap: "18px",
//           display: "flex",
//           justifyContent: "center",
//           maxWidth: "90%",
//         }}
//       >
//         {items.map((item) => {
//           const Icon = iconMap[item.icon] || Bell;

//           return (
//             <div
//                 style={{ padding: "20px" }}
//                 className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 bg-gray-50 rounded-xl"
//                 >
//                 <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
//                     <Icon size={24} className="text-gray-900" />
//                 </div>

//                 <p className="text-[25px] font-bold text-gray-900">
//                     {item.title}
//                 </p>

//                 <p className="text-[12px] text-gray-500 col-start-2">
//                     {item.description}
//                 </p>
//             </div>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

// export default ResidentFeature;

import { motion } from "framer-motion";
import { Bell, CreditCard, AlertCircle } from "lucide-react";

const iconMap = {
  bell: Bell,
  "credit-card": CreditCard,
  "alert-circle": AlertCircle,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ResidentFeature = ({ data = {} }) => {
  const { heading = {}, subtitle = "", items = [] } = data;

  return (
    <section
      style={{
        padding: "64px 24px",
        background: "#000000",
      }}
    >
      {/* Header Container - Centered */}
      <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "800px", margin: "0 auto 64px" }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ marginBottom: "16px" }}
        >
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              fontWeight: 400,
              color: "#ffffff",
              letterSpacing: "1px",
              lineHeight: 1,
              margin: 0,
            }}
          >
            {heading.line1} {heading.line2}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "#a0a0a0",
            lineHeight: 1.6,
            margin: "0 auto",
          }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Cards grid — responsive via CSS */}
      <style>{`
        .resident-feature-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .resident-feature-cards-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .resident-feature-content-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .resident-feature-card {
          padding: 24px;
          background: #111111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 20px;
          align-items: center;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .resident-feature-card:hover {
          background: #1a1a1a;
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(10px);
        }

        .feature-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-bullet-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-family: 'DM Sans', sans-serif;
          color: #ffffff;
          font-weight: 500;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          background: #ffffff;
          border-radius: 50%;
        }

        @media (max-width: 991px) {
          .resident-feature-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .resident-feature-card:hover {
            transform: translateY(-5px);
          }
        }
      `}</style>

      <div className="resident-feature-layout">
        {/* Left Side: Cards */}
        <motion.div
          className="resident-feature-cards-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item) => {
            const Icon = iconMap[item.icon] || Bell;

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="resident-feature-card"
              >
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                  <Icon size={24} color="#ffffff" strokeWidth={1.5} />
                </div>

                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: 0
                  }}>
                    {item.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          className="resident-feature-content-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.15rem",
            color: "#a0a0a0",
            lineHeight: 1.7,
            margin: 0
          }}>
            Experience a smarter way of living with our comprehensive resident toolset. 
            From instant security alerts to seamless payment processing, everything you need 
            is integrated into one intuitive interface designed for the modern society member.
          </p>

          <div className="feature-bullet-list">
            <div className="feature-bullet-item">
              <div className="bullet-dot" />
              <span>Real-time digital notice board for all society updates.</span>
            </div>
            <div className="feature-bullet-item">
              <div className="bullet-dot" />
              <span>Secure, one-tap maintenance and utility bill payments.</span>
            </div>
            <div className="feature-bullet-item">
              <div className="bullet-dot" />
              <span>Instant complaint tracking and resolution management.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResidentFeature;