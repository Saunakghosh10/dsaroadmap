import { PATTERN_META } from "../data/patternData";

export default function PatternTag({ pattern, size = "sm" }) {
  const meta = PATTERN_META[pattern];
  const color = meta?.color || "#555";
  const padding = size === "sm" ? "2px 8px" : "4px 12px";
  const fontSize = size === "sm" ? "10px" : "12px";
  return (
    <span style={{
      background: color + "15",
      color,
      border: `1px solid ${color}30`,
      borderRadius: "4px",
      padding,
      fontSize,
      fontWeight: 600,
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {pattern}
    </span>
  );
}
