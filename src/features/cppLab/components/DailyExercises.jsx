import TypeChecker from "./TypeChecker";
import { cppLabTheme } from "../data/theme";

export default function DailyExercises({ exercises, openIndex, onSelectDay, onPracticed, lastPracticedISO, onJumpToToday }) {
  const current = exercises[openIndex];

  return (
    <div>
      <div style={{ fontSize: "12px", color: "#555", marginBottom: "18px", lineHeight: 1.7 }}>
        Type each answer from memory. Don’t look at the reference. This builds muscle memory faster than reading.
      </div>

      {lastPracticedISO && (
        <div
          style={{
            marginBottom: "16px",
            padding: "12px 14px",
            background: "#00FF8808",
            border: "1px solid #00FF8820",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.6 }}>
            Last practice: <span style={{ color: "#00FF88" }}>{new Date(lastPracticedISO).toLocaleDateString()}</span>
          </div>
          {onJumpToToday && (
            <button
              type="button"
              onClick={onJumpToToday}
              style={{
                padding: "7px 12px",
                background: "#0D0D14",
                color: "#AAA",
                border: `1px solid ${cppLabTheme.border}`,
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "11px",
                fontFamily: "inherit",
                fontWeight: 700,
              }}
            >
              Jump to daily practice
            </button>
          )}
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
              background: openIndex === i ? ex.color + "20" : cppLabTheme.card,
              border: `1px solid ${openIndex === i ? ex.color + "50" : cppLabTheme.border}`,
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

          <div
            style={{
              marginTop: "20px",
              padding: "14px",
              background: `${current.color}08`,
              border: `1px solid ${current.color}20`,
              borderRadius: "12px",
              fontSize: "12px",
              color: "#666",
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: current.color, fontWeight: 900 }}>Daily habit:</span> Do this exercise every morning before LeetCode. After 7 days, your hands will
            type it automatically.
          </div>
        </div>
      )}
    </div>
  );
}

