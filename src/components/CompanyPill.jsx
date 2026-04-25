import { COMPANY_COLORS } from "../data/constants";

export default function CompanyPill({ company }) {
  const color = COMPANY_COLORS[company] || "#444";
  return (
    <span style={{
      fontSize: "9px",
      color,
      border: `1px solid ${color}30`,
      padding: "1px 5px",
      borderRadius: "3px",
      fontFamily: "'JetBrains Mono', monospace",
    }}>
      {company}
    </span>
  );
}
