import { DIFF_COLORS } from "../data/constants";

export default function DifficultyBadge({ difficulty, size = "sm" }) {
  const color = DIFF_COLORS[difficulty] || "#555";
  const padding = size === "sm" ? "2px 8px" : "4px 12px";
  const fontSize = size === "sm" ? "11px" : "12px";
  return (
    <span style={{
      background: color + "20",
      color,
      border: `1px solid ${color}40`,
      borderRadius: "4px",
      padding,
      fontSize,
      fontWeight: 700,
      fontFamily: "'JetBrains Mono', monospace",
      letterSpacing: "0.5px",
    }}>
      {difficulty}
    </span>
  );
}
