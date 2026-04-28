import TypeChecker from "./TypeChecker";
import { pyLabTheme } from "../data/theme";

export default function DailyExercises({ exercises, openIndex, onSelectDay, onPracticed, lastPracticedISO }) {
  const current = exercises[openIndex];

  return (
    <div>
      <div style={{ fontSize: "12px", color: "#555", marginBottom: "18px", lineHeight: 1.7 }}>
        Do Day 1 + Day 2 with typing (don’t copy-paste). After that, you’ll be able to write most DSA solutions in Python quickly.
      </div>

      {lastPracticedISO && (
        <div
          style={{
            marginBottom: "16px",
            padding: "12px 14px",
            background: "#FFD16608",
            border: "1px solid #FFD16620",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.6 }}>
            Last practice: <span style={{ color: "#FFD166" }}>{new Date(lastPracticedISO).toLocaleDateString()}</span>
          </div>
          <div style={{ fontSize: "11px", color: "#444" }}>Goal: finish Day 1 + Day 2 in 1–2 days.</div>
        </div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
        {exercises.map((ex, i) => (
          <button
            key={ex.day}
            type="button"
            onClick={() => onSelectDay(i)}
            style={{
              padding: "6px 14px",
              background: openIndex === i ? ex.color + "20" : pyLabTheme.card,
              border: `1px solid ${openIndex === i ? ex.color + "50" : pyLabTheme.border}`,
              color: openIndex === i ? ex.color : "#666",
              borderRadius: "10px",
              fontSize: "10px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: openIndex === i ? 800 : 500,
            }}
          >
            {ex.day}
          </button>
        ))}
      </div>

      {current && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 900,
                color: current.color,
                background: current.color + "15",
                padding: "4px 10px",
                borderRadius: "10px",
              }}
            >
              {current.day}
            </span>
            <span style={{ fontSize: "15px", fontWeight: 800, color: "#E0E0E0", fontFamily: "'Space Grotesk', sans-serif" }}>
              {current.title}
            </span>
          </div>

          {current.tasks.map((task, ti) => (
            <TypeChecker
              key={`${openIndex}-${ti}`}
              task={task}
              idx={ti}
              accentColor={current.color}
              onPracticed={onPracticed}
            />
          ))}
        </div>
      )}
    </div>
  );
}

