import { useMemo, useState } from "react";

function normalizeAnswer(s) {
  return s.trim().replace(/\s+/g, " ");
}

export default function TypeChecker({ task, idx, accentColor, onPracticed }) {
  const [val, setVal] = useState("");
  const [checked, setChecked] = useState(false);

  const correct = useMemo(() => normalizeAnswer(val) === normalizeAnswer(task.answer), [val, task.answer]);

  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", marginBottom: "6px" }}>
        {idx + 1}. {task.label}
      </div>
      <div style={{ fontSize: "13px", color: "#AAA", marginBottom: "8px", lineHeight: 1.6 }}>{task.prompt}</div>

      <textarea
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          setChecked(false);
        }}
        placeholder="Type your answer here..."
        rows={Math.max(3, val.split("\n").length + 1)}
        style={{
          width: "100%",
          padding: "10px 14px",
          background: checked ? (correct ? "#00FF8808" : "#FF4D4D08") : "#080810",
          border: `1px solid ${checked ? (correct ? "#00FF8830" : "#FF4D4D30") : "#18181F"}`,
          borderRadius: "8px",
          color: "#C0C0C0",
          fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace",
          resize: "vertical",
          outline: "none",
          boxSizing: "border-box",
          lineHeight: 1.7,
        }}
      />

      <div style={{ display: "flex", gap: "8px", marginTop: "8px", flexWrap: "wrap", alignItems: "center" }}>
        <button
          type="button"
          onClick={() => {
            setChecked(true);
            onPracticed?.();
          }}
          style={{
            padding: "6px 14px",
            background: accentColor ?? "#FFD166",
            color: "#05050A",
            border: "none",
            borderRadius: "7px",
            fontSize: "11px",
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "inherit",
            letterSpacing: "1px",
          }}
        >
          CHECK
        </button>

        <button
          type="button"
          onClick={() => {
            setVal("");
            setChecked(false);
          }}
          style={{
            padding: "6px 10px",
            background: "#0D0D14",
            color: "#666",
            border: "1px solid #18181F",
            borderRadius: "7px",
            fontSize: "11px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          CLEAR
        </button>

        {checked && !correct && (
          <button
            type="button"
            onClick={() => setVal(task.answer)}
            style={{
              padding: "6px 12px",
              background: "#FFD16620",
              color: "#FFD166",
              border: "1px solid #FFD16630",
              borderRadius: "7px",
              fontSize: "11px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            SHOW ANSWER
          </button>
        )}

        {checked && (
          <span style={{ fontSize: "12px", color: correct ? "#00FF88" : "#FF6B6B", fontWeight: 700 }}>
            {correct ? "✓ Correct!" : "✗ Not quite"}
          </span>
        )}
      </div>
    </div>
  );
}

