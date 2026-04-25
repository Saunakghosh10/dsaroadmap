import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PATTERNS, PATTERN_META } from "../data/patternData";
import { DIFF_COLORS, COMPANY_COLORS } from "../data/constants";

export default function QuizSessionPage({ quiz }) {
  const navigate = useNavigate();

  const {
    current, currentIdx, queue, selected, setSelected,
    submitted, score, streak, aiLoading, aiText,
    handleSubmit, handleNext, generateProblem, generating, genError,
  } = quiz;

  useEffect(() => {
    if (!current && queue.length === 0) {
      navigate("/quiz");
    }
  }, [current, queue.length, navigate]);

  if (!current) return null;

  const isCorrect = submitted && selected === current.pattern;
  const isWrong = submitted && selected !== current.pattern;

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "24px" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
        <button onClick={() => navigate("/quiz")} style={{ background: "none", border: "none", color: "#333", fontSize: "11px", cursor: "pointer", padding: 0, fontFamily: "inherit" }}>
          ← EXIT
        </button>
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <span style={{ fontSize: "11px", color: "#333" }}>{currentIdx + 1} / {queue.length}</span>
          {streak >= 2 && <span style={{ fontSize: "10px", color: "#FFB300", background: "#FFB30015", padding: "3px 8px", borderRadius: "4px" }}>🔥 {streak}</span>}
          <span style={{ fontSize: "11px", color: "#00FF88" }}>{score} ✓</span>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: "3px", background: "#111", borderRadius: "2px", marginBottom: "24px" }}>
        <motion.div
          style={{ height: "100%", background: "#00FF88", borderRadius: "2px" }}
          initial={{ width: 0 }}
          animate={{ width: `${((currentIdx) / queue.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Problem card */}
      <div style={{ padding: "24px", background: "#0D0D14", border: "1px solid #18181F", borderRadius: "12px", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "10px", color: "#333", letterSpacing: "3px", textTransform: "uppercase" }}>Identify Pattern</span>
          <span style={{ fontSize: "10px", color: DIFF_COLORS[current.difficulty], background: DIFF_COLORS[current.difficulty] + "20", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>{current.difficulty}</span>
          {current.company?.slice(0, 3).map(c => (
            <span key={c} style={{ fontSize: "9px", color: COMPANY_COLORS[c] || "#444", border: `1px solid ${(COMPANY_COLORS[c] || "#444")}30`, padding: "1px 6px", borderRadius: "3px" }}>{c}</span>
          ))}
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: "20px", fontWeight: 800, color: "#E8E8E8", margin: "0 0 12px", letterSpacing: "-0.5px" }}>
          {current.title}
        </h2>
        <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, margin: 0 }}>{current.description}</p>
      </div>

      {/* Pattern buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "6px", marginBottom: "14px" }}>
        {PATTERNS.map(p => {
          const isSel = selected === p;
          const isCorr = submitted && p === current.pattern;
          const isWr = submitted && isSel && p !== current.pattern;
          const meta = PATTERN_META[p];
          return (
            <button
              key={p}
              onClick={() => !submitted && setSelected(p)}
              style={{
                padding: "9px 11px",
                background: isCorr ? meta.color + "10" : isWr ? "#FF4D4D10" : isSel ? "#FFFFFF06" : "#0D0D14",
                border: `1px solid ${isCorr ? meta.color + "45" : isWr ? "#FF4D4D45" : isSel ? "#2A2A35" : "#18181F"}`,
                borderRadius: "6px",
                color: isCorr ? meta.color : isWr ? "#FF6B6B" : isSel ? "#DDD" : "#555",
                fontSize: "10px",
                fontWeight: isSel || isCorr ? 700 : 400,
                cursor: submitted ? "default" : "pointer",
                textAlign: "left",
                fontFamily: "inherit",
                transition: "all 0.12s",
              }}
            >
              {isCorr ? "✓ " : isWr ? "✗ " : ""}{p}
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          style={{
            width: "100%",
            padding: "14px",
            background: selected ? "#00FF88" : "#111",
            color: selected ? "#05050A" : "#333",
            border: "none",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 800,
            cursor: selected ? "pointer" : "default",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "inherit",
          }}
        >
          LOCK IN →
        </button>
      )}

      {submitted && (
        <div>
          <div style={{
            padding: "18px",
            background: isCorrect ? "#00FF8808" : "#FF4D4D08",
            border: `1px solid ${isCorrect ? "#00FF8825" : "#FF4D4D25"}`,
            borderRadius: "10px",
            marginBottom: "10px",
          }}>
            <div style={{ fontSize: "11px", color: isCorrect ? "#00FF88" : "#FF6B6B", letterSpacing: "2px", fontWeight: 700, marginBottom: "10px" }}>
              {isCorrect ? "✓ CORRECT" : `✗ WRONG  ·  ANSWER: ${current.pattern}`}
            </div>
            {aiLoading
              ? <div style={{ fontSize: "12px", color: "#2A2A35" }}>● AI coach analyzing...</div>
              : <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.8, margin: "0 0 10px" }}>{aiText}</p>
            }
            <div style={{ fontSize: "11px", color: "#2A2A35", borderTop: "1px solid #111", paddingTop: "10px" }}>
              🔍 <span style={{ color: "#333" }}>{current.signal}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => {
                const result = handleNext();
                if (result === "finished") navigate("/quiz/results");
              }}
              style={{
                flex: 1,
                padding: "12px",
                background: "#00FF88",
                color: "#05050A",
                border: "none",
                borderRadius: "7px",
                fontSize: "12px",
                fontWeight: 800,
                cursor: "pointer",
                letterSpacing: "2px",
                fontFamily: "inherit",
              }}
            >
              {currentIdx + 1 >= queue.length ? "SEE RESULTS →" : "NEXT →"}
            </button>
            <button
              onClick={() => generateProblem(PATTERNS)}
              disabled={generating}
              style={{
                padding: "12px 14px",
                background: "#0D0D14",
                color: generating ? "#222" : "#444",
                border: "1px solid #18181F",
                borderRadius: "7px",
                fontSize: "11px",
                cursor: generating ? "default" : "pointer",
                fontFamily: "inherit",
              }}
              title="Generate new AI problem"
            >
              {generating ? "..." : "+AI"}
            </button>
          </div>
          {genError && <div style={{ fontSize: "10px", color: "#FF6B6B", marginTop: "6px" }}>{genError}</div>}
        </div>
      )}
    </div>
  );
}
