import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ALL_PROBLEMS } from "../data/patternData";

const NAV = [
  { label: "Roadmap", path: "/roadmap" },
  { label: "Pattern Radar", path: "/patterns" },
  { label: "Problems", path: "/problems" },
  { label: "C++ Ref", path: "/cpp" },
  { label: "C++ Lab", path: "/cpp-lab" },
  { label: "Python Lab", path: "/py-lab" },
];

export default function AppShell({ children, bestStreak }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#05050A",
      color: "#DDD",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header / Nav */}
      <header style={{
        borderBottom: "1px solid #18181F",
        background: "linear-gradient(180deg, #0A0A12 0%, #05050A 100%)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "2px",
                background: "#00FF88",
                boxShadow: "0 0 12px #00FF8840",
              }} />
              <span style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: "16px", fontWeight: 800, letterSpacing: "-0.5px",
                color: "#E8E8E8",
              }}>
                DSA<span style={{ color: "#00FF88" }}>Mastery</span>
              </span>
            </div>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
            {NAV.map(item => {
              const active = pathname === item.path || pathname.startsWith(item.path + "/");
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: active ? 700 : 400,
                    color: active ? "#00FF88" : "#555",
                    background: active ? "#00FF8810" : "transparent",
                    border: active ? "1px solid #00FF8830" : "1px solid transparent",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {bestStreak > 0 && (
              <span style={{ fontSize: "11px", color: "#FFB300" }}>
                🔥 {bestStreak}
              </span>
            )}
            <span style={{ fontSize: "10px", color: "#333" }}>
              {ALL_PROBLEMS.length} problems
            </span>
            <Link
              to="/quiz"
              style={{
                padding: "7px 16px",
                background: "#00FF88",
                color: "#05050A",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: 800,
                textDecoration: "none",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Train →
            </Link>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main style={{ flex: 1 }}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
