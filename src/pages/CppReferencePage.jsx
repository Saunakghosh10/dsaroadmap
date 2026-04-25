import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CPP_SECTIONS } from "../data/cppSections";
import CodeBlock from "../components/CodeBlock";

export default function CppReferencePage() {
  const [openItem, setOpenItem] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return CPP_SECTIONS.map(s => ({
      ...s,
      items: s.items.filter(it =>
        !search ||
        it.title.toLowerCase().includes(search.toLowerCase()) ||
        it.code.toLowerCase().includes(search.toLowerCase()) ||
        it.note.toLowerCase().includes(search.toLowerCase())
      )
    })).filter(s => s.items.length > 0);
  }, [search]);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "8px", textTransform: "uppercase" }}>
          Competitive Programming
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "-2px",
          color: "#E8E8E8",
        }}>
          C++ <span style={{ color: "#00BFFF" }}>Reference</span>
        </h1>
        <p style={{ color: "#555", fontSize: "13px", marginTop: "8px" }}>
          37 essential snippets from T1 (must-know) to T5 (advanced CP).
        </p>
      </div>

      <input
        placeholder="Search syntax... (e.g. vector, sort, BFS, map)"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          background: "#0D0D14",
          border: "1px solid #18181F",
          borderRadius: "8px",
          color: "#CCC",
          fontSize: "13px",
          fontFamily: "'JetBrains Mono', monospace",
          outline: "none",
          marginBottom: "28px",
          boxSizing: "border-box",
        }}
      />

      {filtered.map((section, si) => (
        <div key={si} style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <span style={{ fontSize: "10px", fontWeight: 900, color: section.color, background: section.color + "15", padding: "3px 10px", borderRadius: "4px", letterSpacing: "1px" }}>
              {section.tier}
            </span>
            <span style={{ fontSize: "15px", fontWeight: 800, color: "#E0E0E0", fontFamily: "'Space Grotesk', sans-serif" }}>
              {section.label}
            </span>
            <span style={{ fontSize: "11px", color: "#333" }}>{section.sublabel}</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {section.items.map((item, ii) => {
              const key = `${si}-${ii}`;
              const isOpen = openItem === key;
              return (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: ii * 0.02 }}
                  style={{
                    background: "#0D0D14",
                    border: `1px solid ${isOpen ? section.color + "30" : "#18181F"}`,
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    onClick={() => setOpenItem(isOpen ? null : key)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "14px 18px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: section.color }} />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#D0D0D0", fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</span>
                    </div>
                    <span style={{ color: "#333", fontSize: "12px" }}>{isOpen ? "▲" : "▼"}</span>
                  </div>

                  {isOpen && (
                    <div style={{ padding: "0 18px 18px" }}>
                      <div style={{ fontSize: "12px", color: "#555", marginBottom: "12px", lineHeight: 1.7, borderTop: "1px solid #18181F", paddingTop: "12px" }}>
                        💡 {item.note}
                      </div>
                      <CodeBlock code={item.code} borderColor={section.color} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div style={{ padding: "60px", textAlign: "center", color: "#333", fontSize: "14px" }}>
          No snippets match your search.
        </div>
      )}
    </div>
  );
}
