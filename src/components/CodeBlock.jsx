export default function CodeBlock({ code, borderColor = "#00FF88" }) {
  return (
    <pre style={{
      background: "#080810",
      border: `1px solid ${borderColor}20`,
      borderRadius: "6px",
      padding: "14px 16px",
      fontSize: "11px",
      color: "#A8E6CF",
      overflowX: "auto",
      margin: 0,
      lineHeight: 1.8,
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      whiteSpace: "pre",
    }}>
      {code}
    </pre>
  );
}
