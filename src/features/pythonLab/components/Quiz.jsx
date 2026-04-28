import { useMemo, useState } from "react";
import { pyLabTheme } from "../data/theme";

export default function Quiz({ questions }) {
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizSel, setQuizSel] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const current = useMemo(() => questions[quizIdx], [questions, quizIdx]);

  function handleSubmit() {
    if (quizSel === null) return;
    setQuizSubmitted(true);
    if (quizSel === current.ans) setQuizScore((s) => s + 1);
  }

  function handleNext() {
    if (quizIdx + 1 >= questions.length) {
      setQuizDone(true);
      return;
    }
    setQuizIdx((i) => i + 1);
    setQuizSel(null);
    setQuizSubmitted(false);
  }

  function restart() {
    setQuizIdx(0);
    setQuizSel(null);
    setQuizSubmitted(false);
    setQuizScore(0);
    setQuizDone(false);
  }

  if (quizDone) {
    return (
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#333", marginBottom: "10px" }}>QUIZ COMPLETE</div>
        <div style={{ fontSize: "64px", fontWeight: 900, fontFamily: "'Space Grotesk', system-ui, sans-serif", color: pyLabTheme.accent, lineHeight: 1 }}>
          {quizScore}
          <span style={{ fontSize: "28px", color: "#222" }}>/{questions.length}</span>
        </div>
        <div style={{ fontSize: "12px", color: "#666", marginTop: "10px", marginBottom: "22px" }}>
          {quizScore >= 10 ? "DSA-ready." : quizScore >= 7 ? "Almost there." : "Do Day 1 + Day 2 again."}
        </div>
        <button
          type="button"
          onClick={restart}
          style={{
            padding: "12px 26px",
            background: pyLabTheme.accent,
            color: "#05050A",
            border: "none",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: 900,
            cursor: "pointer",
            letterSpacing: "2px",
            fontFamily: "inherit",
          }}
        >
          RETRY QUIZ
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "560px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
        <span style={{ fontSize: "10px", color: "#333" }}>
          {quizIdx + 1} / {questions.length}
        </span>
        <span style={{ fontSize: "10px", color: pyLabTheme.accent }}>{quizScore} correct</span>
      </div>

      <div style={{ height: "2px", background: "#111", borderRadius: "2px", marginBottom: "18px" }}>
        <div
          style={{
            height: "100%",
            background: pyLabTheme.accent,
            width: `${(quizIdx / questions.length) * 100}%`,
            borderRadius: "2px",
            transition: "width 0.3s",
          }}
        />
      </div>

      <div style={{ padding: "18px", background: pyLabTheme.card, border: `1px solid ${pyLabTheme.border}`, borderRadius: "14px", marginBottom: "14px" }}>
        <div style={{ fontSize: "10px", color: "#333", letterSpacing: "3px", marginBottom: "10px" }}>PYTHON DSA QUIZ</div>
        <div style={{ fontSize: "16px", color: "#E0E0E0", fontWeight: 800, lineHeight: 1.6, fontFamily: "'Space Grotesk', sans-serif" }}>{current.q}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
        {current.options.map((opt, oi) => {
          const isSelected = quizSel === oi;
          const isCorrect = quizSubmitted && oi === current.ans;
          const isWrong = quizSubmitted && isSelected && oi !== current.ans;
          return (
            <button
              key={oi}
              type="button"
              onClick={() => !quizSubmitted && setQuizSel(oi)}
              style={{
                padding: "12px 14px",
                textAlign: "left",
                background: isCorrect ? "#00FF8812" : isWrong ? "#FF4D4D12" : isSelected ? "#FFFFFF06" : pyLabTheme.card,
                border: `1px solid ${
                  isCorrect ? "#00FF8840" : isWrong ? "#FF4D4D40" : isSelected ? "#2A2A3A" : pyLabTheme.border
                }`,
                borderRadius: "12px",
                color: isCorrect ? "#00FF88" : isWrong ? "#FF6B6B" : isSelected ? "#DDD" : "#777",
                fontSize: "12px",
                fontWeight: isSelected || isCorrect ? 800 : 500,
                cursor: quizSubmitted ? "default" : "pointer",
                fontFamily: "inherit",
                transition: "all 0.12s",
              }}
            >
              {isCorrect ? "✓ " : isWrong ? "✗ " : ""}
              {opt}
            </button>
          );
        })}
      </div>

      {!quizSubmitted ? (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={quizSel === null}
          style={{
            width: "100%",
            padding: "12px",
            background: quizSel !== null ? pyLabTheme.accent : "#111",
            color: quizSel !== null ? "#05050A" : "#333",
            border: "none",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: 900,
            cursor: quizSel !== null ? "pointer" : "default",
            letterSpacing: "2px",
            fontFamily: "inherit",
          }}
        >
          LOCK IN →
        </button>
      ) : (
        <button
          type="button"
          onClick={handleNext}
          style={{
            width: "100%",
            padding: "12px",
            background: pyLabTheme.accent,
            color: "#05050A",
            border: "none",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: 900,
            cursor: "pointer",
            letterSpacing: "2px",
            fontFamily: "inherit",
          }}
        >
          {quizIdx + 1 >= questions.length ? "SEE RESULTS →" : "NEXT →"}
        </button>
      )}
    </div>
  );
}

