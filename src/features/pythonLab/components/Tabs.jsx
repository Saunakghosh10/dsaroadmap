export default function Tabs({ tabs, active, onChange, accent = "#FFD166" }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        background: "#0D0D14",
        padding: "4px",
        borderRadius: "10px",
        border: "1px solid #18181F",
        width: "fit-content",
        flexWrap: "wrap",
      }}
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          type="button"
          style={{
            padding: "7px 16px",
            background: active === t.id ? accent : "transparent",
            color: active === t.id ? "#05050A" : "#444",
            border: "none",
            borderRadius: "8px",
            fontSize: "11px",
            fontWeight: active === t.id ? 800 : 500,
            cursor: "pointer",
            letterSpacing: "1px",
            fontFamily: "inherit",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

