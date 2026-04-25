import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PATTERNS, PATTERN_META, ALL_PROBLEMS } from "../data/patternData";
import { roadmap } from "../data/roadmapData";

export default function HomePage() {
  const totalProblems = roadmap.reduce((a, p) => a + p.totalProblems, 0);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px" }}>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "56px" }}
      >
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "12px", textTransform: "uppercase" }}>
          Competitive Programming System
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: "clamp(36px, 7vw, 64px)",
          fontWeight: 900,
          margin: "0 0 12px",
          letterSpacing: "-3px",
          lineHeight: 1.05,
          color: "#E8E8E8",
        }}>
          Pattern Radar<br />
          <span style={{ color: "#00FF88" }}>& DSA Roadmap</span>
        </h1>
        <p style={{ color: "#555", fontSize: "14px", maxWidth: "520px", lineHeight: 1.7, marginBottom: "28px" }}>
          {PATTERNS.length} patterns · {ALL_PROBLEMS.length} problems · 5-phase roadmap · C++ cheat sheet · AI-powered quiz
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link to="/quiz" style={{
            padding: "14px 28px",
            background: "#00FF88",
            color: "#05050A",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 800,
            textDecoration: "none",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}>
            Start Training →
          </Link>
          <Link to="/roadmap" style={{
            padding: "14px 28px",
            background: "#0D0D14",
            color: "#888",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            letterSpacing: "1px",
            border: "1px solid #18181F",
          }}>
            View Roadmap
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "12px",
        marginBottom: "56px",
      }}>
        {[
          { label: "Total Problems", value: totalProblems, color: "#00FF88" },
          { label: "Patterns", value: PATTERNS.length, color: "#00BFFF" },
          { label: "C++ Snippets", value: 37, color: "#FFB300" },
          { label: "Phases", value: 5, color: "#FF6B35" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            style={{
              padding: "20px",
              background: "#0D0D14",
              border: "1px solid #18181F",
              borderRadius: "10px",
            }}
          >
            <div style={{ fontSize: "28px", fontWeight: 900, color: stat.color, fontFamily: "'Space Grotesk', sans-serif" }}>
              {stat.value}
            </div>
            <div style={{ fontSize: "11px", color: "#444", marginTop: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pattern Preview */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "11px", color: "#333", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>
          Pattern Radar — {PATTERNS.length} Signals
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "8px",
        }}>
          {PATTERNS.slice(0, 8).map(p => {
            const meta = PATTERN_META[p];
            const cnt = ALL_PROBLEMS.filter(q => q.pattern === p).length;
            return (
              <Link
                key={p}
                to={`/problems?pattern=${encodeURIComponent(p)}`}
                style={{
                  padding: "14px 16px",
                  background: "#0D0D14",
                  border: "1px solid #18181F",
                  borderRadius: "8px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: meta.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#D0D0D0" }}>{p}</span>
                  <span style={{ marginLeft: "auto", fontSize: "10px", color: "#333" }}>{cnt}Q</span>
                </div>
                <div style={{ fontSize: "10px", color: "#333", lineHeight: 1.6 }}>{meta.signal}</div>
              </Link>
            );
          })}
        </div>
        <div style={{ marginTop: "12px", textAlign: "center" }}>
          <Link to="/patterns" style={{ fontSize: "11px", color: "#444", textDecoration: "none" }}>
            See all {PATTERNS.length} patterns →
          </Link>
        </div>
      </div>

      {/* Roadmap Preview */}
      <div>
        <div style={{ fontSize: "11px", color: "#333", letterSpacing: "3px", marginBottom: "16px", textTransform: "uppercase" }}>
          5-Phase Roadmap
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {roadmap.map((phase, i) => (
            <Link
              key={i}
              to="/roadmap"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px 20px",
                background: "#0D0D14",
                border: `1px solid ${phase.color}20`,
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              <span style={{
                fontSize: "24px",
                fontWeight: 900,
                color: phase.color + "40",
                fontFamily: "'Space Grotesk', sans-serif",
                minWidth: "40px",
              }}>{phase.phase}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#D0D0D0", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {phase.title}
                </div>
                <div style={{ fontSize: "11px", color: "#444", marginTop: "2px" }}>{phase.subtitle}</div>
              </div>
              <span style={{ fontSize: "11px", color: phase.color }}>{phase.totalProblems} problems</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
