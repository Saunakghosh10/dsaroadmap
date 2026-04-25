import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PATTERNS, PATTERN_META, ALL_PROBLEMS } from "../data/patternData";

export default function PatternRadarPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "8px", textTransform: "uppercase" }}>
          Pattern Recognition
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "-2px",
          color: "#E8E8E8",
        }}>
          Pattern <span style={{ color: "#00FF88" }}>Radar</span>
        </h1>
        <p style={{ color: "#555", fontSize: "13px", marginTop: "8px" }}>
          Click any pattern to jump to the quiz filtered by that pattern.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "10px",
      }}>
        {PATTERNS.map((p, i) => {
          const meta = PATTERN_META[p];
          const cnt = ALL_PROBLEMS.filter(q => q.pattern === p).length;
          const easy = ALL_PROBLEMS.filter(q => q.pattern === p && q.difficulty === "Easy").length;
          const medium = ALL_PROBLEMS.filter(q => q.pattern === p && q.difficulty === "Medium").length;
          const hard = ALL_PROBLEMS.filter(q => q.pattern === p && q.difficulty === "Hard").length;

          return (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
            >
              <Link
                to={`/quiz?pattern=${encodeURIComponent(p)}`}
                style={{
                  display: "block",
                  padding: "18px",
                  background: "#0D0D14",
                  border: `1px solid ${meta.color}18`,
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = meta.color + "50";
                  e.currentTarget.style.background = "#111118";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = meta.color + "18";
                  e.currentTarget.style.background = "#0D0D14";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: meta.color,
                    boxShadow: `0 0 8px ${meta.color}40`,
                  }} />
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#D8D8D8", fontFamily: "'Space Grotesk', sans-serif" }}>{p}</span>
                  <span style={{ marginLeft: "auto", fontSize: "11px", color: meta.color, fontWeight: 700 }}>{cnt}Q</span>
                </div>
                <div style={{ fontSize: "11px", color: "#444", lineHeight: 1.6, marginBottom: "10px" }}>{meta.signal}</div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {easy > 0 && <span style={{ fontSize: "10px", color: "#00FF88", background: "#00FF8810", padding: "2px 6px", borderRadius: "3px" }}>E {easy}</span>}
                  {medium > 0 && <span style={{ fontSize: "10px", color: "#FFB300", background: "#FFB30010", padding: "2px 6px", borderRadius: "3px" }}>M {medium}</span>}
                  {hard > 0 && <span style={{ fontSize: "10px", color: "#FF6B6B", background: "#FF6B6B10", padding: "2px 6px", borderRadius: "3px" }}>H {hard}</span>}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
