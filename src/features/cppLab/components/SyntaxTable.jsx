import { useMemo } from "react";
import { cppLabTheme } from "../data/theme";

export default function SyntaxTable({ categories, openIndex, onToggle, search, onSearchChange }) {
  const filtered = useMemo(() => {
    const q = (search ?? "").trim().toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            !q ||
            item.syntax.toLowerCase().includes(q) ||
            item.meaning.toLowerCase().includes(q) ||
            item.use.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, search]);

  return (
    <div>
      <input
        placeholder="Search syntax... (e.g. push_back, lower_bound, XOR)"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 14px",
          background: cppLabTheme.card,
          border: `1px solid ${cppLabTheme.border}`,
          borderRadius: "10px",
          color: "#CCC",
          fontSize: "12px",
          fontFamily: "inherit",
          marginBottom: "18px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      {filtered.map((cat, ci) => {
        const isOpen = openIndex === ci;
        return (
          <div key={cat.category} style={{ marginBottom: "12px" }}>
            <div
              onClick={() => onToggle(isOpen ? -1 : ci)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 18px",
                background: cppLabTheme.card,
                border: `1px solid ${isOpen ? cat.color + "30" : cppLabTheme.border}`,
                borderRadius: isOpen ? "12px 12px 0 0" : "12px",
                cursor: "pointer",
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color }} />
              <span style={{ fontSize: "13px", fontWeight: 800, color: "#D0D0D0", fontFamily: "'Space Grotesk', sans-serif" }}>
                {cat.category}
              </span>
              <span style={{ fontSize: "11px", color: "#333", marginLeft: "auto" }}>{cat.items.length} syntaxes</span>
              <span style={{ color: "#444", fontSize: "12px" }}>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div style={{ border: `1px solid ${cat.color}30`, borderTop: "none", borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 1fr", padding: "8px 18px", background: "#09090F", borderBottom: `1px solid ${cppLabTheme.border}` }}>
                  {["SYNTAX", "MEANING", "USE WHEN"].map((h) => (
                    <div key={h} style={{ fontSize: "9px", color: "#333", letterSpacing: "2px" }}>
                      {h}
                    </div>
                  ))}
                </div>
                {cat.items.map((item, ii) => (
                  <div
                    key={`${cat.category}-${ii}`}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 2fr 1fr",
                      padding: "11px 18px",
                      background: ii % 2 === 0 ? "#0D0D14" : "#0A0A10",
                      borderBottom: ii < cat.items.length - 1 ? `1px solid ${cppLabTheme.border}` : "none",
                      alignItems: "start",
                      gap: 0,
                    }}
                  >
                    <code
                      style={{
                        fontSize: "11px",
                        color: cat.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        lineHeight: 1.6,
                        wordBreak: "break-word",
                      }}
                    >
                      {item.syntax}
                    </code>
                    <div style={{ fontSize: "11px", color: "#888", lineHeight: 1.6, paddingLeft: "12px" }}>{item.meaning}</div>
                    <div style={{ fontSize: "10px", color: "#666", lineHeight: 1.5, paddingLeft: "8px" }}>{item.use}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {filtered.length === 0 && (
        <div style={{ padding: "50px 12px", textAlign: "center", color: "#333", fontSize: "13px" }}>No syntax matches your search.</div>
      )}
    </div>
  );
}

