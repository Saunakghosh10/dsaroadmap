import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATTERNS } from "../data/patternData";
import { ALL_PROBLEMS } from "../data/patternData";
import { DIFF_COLORS } from "../data/constants";

export default function QuizSetupPage({ onStartQuiz }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlPattern = searchParams.get("pattern");

  const [filterPattern, setFilterPattern] = useState(urlPattern || "All");
  const [filterDiff, setFilterDiff] = useState("All");

  const poolSize = (() => {
    let pool = [...ALL_PROBLEMS];
    if (filterPattern !== "All") pool = pool.filter(p => p.pattern === filterPattern);
    if (filterDiff !== "All") pool = pool.filter(p => p.difficulty === filterDiff);
    return pool.length;
  })();

  const handleStart = () => {
    const ok = onStartQuiz(ALL_PROBLEMS, filterPattern, filterDiff);
    if (ok) navigate("/quiz/session");
  };

  return (
    <div style={{ maxWidth: "520px", margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "10px", textTransform: "uppercase" }}>
          Pattern Recognition Drill
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "-2px",
          color: "#E8E8E8",
        }}>
          Configure <span style={{ color: "#00FF88" }}>Session</span>
        </h1>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div style={{ fontSize: "10px", color: "#333", letterSpacing: "2px", marginBottom: "10px", textTransform: "uppercase" }}>Pattern</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {["All", ...PATTERNS].map(p => (
            <button key={p} onClick={() => setFilterPattern(p)} style={{
              padding: "5px 10px",
              background: filterPattern === p ? "#00FF8820" : "#0D0D14",
              border: `1px solid ${filterPattern === p ? "#00FF8840" : "#18181F"}`,
              color: filterPattern === p ? "#00FF88" : "#444",
              borderRadius: "4px",
              fontSize: "10px",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
            }}>{p}</button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "10px", color: "#333", letterSpacing: "2px", marginBottom: "10px", textTransform: "uppercase" }}>Difficulty</div>
        <div style={{ display: "flex", gap: "6px" }}>
          {["All", "Easy", "Medium", "Hard"].map(d => (
            <button key={d} onClick={() => setFilterDiff(d)} style={{
              padding: "7px 16px",
              background: filterDiff === d ? (DIFF_COLORS[d] || "#00FF88") + "20" : "#0D0D14",
              border: `1px solid ${filterDiff === d ? (DIFF_COLORS[d] || "#00FF88") + "50" : "#18181F"}`,
              color: filterDiff === d ? (DIFF_COLORS[d] || "#00FF88") : "#444",
              borderRadius: "5px",
              fontSize: "11px",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
              flex: 1,
            }}>{d}</button>
          ))}
        </div>
      </div>

      <div style={{ fontSize: "13px", color: "#2A2A35", textAlign: "center", marginBottom: "20px" }}>
        {poolSize} problems match your filters
      </div>

      <button
        onClick={handleStart}
        disabled={poolSize === 0}
        style={{
          width: "100%",
          padding: "14px",
          background: poolSize > 0 ? "#00FF88" : "#111",
          color: poolSize > 0 ? "#05050A" : "#333",
          border: "none",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: 800,
          cursor: poolSize > 0 ? "pointer" : "default",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {poolSize > 0 ? "START SESSION →" : "NO PROBLEMS MATCH"}
      </button>
    </div>
  );
}
