import { motion } from "framer-motion";
import CodeBlock from "../../../components/CodeBlock";
import { cppLabTheme } from "../data/theme";

export default function WhyAccordion({ items, openIndex, onToggle }) {
  return (
    <div>
      <div style={{ fontSize: "12px", color: "#555", marginBottom: "16px", lineHeight: 1.7 }}>
        Before memorizing syntax, understand <span style={{ color: "#AAA" }}>why</span> it’s written that way. This makes it much harder to forget.
      </div>

      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const accent = item.accent ?? "#00FF88";

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{
              marginBottom: "10px",
              background: cppLabTheme.card,
              border: `1px solid ${isOpen ? `${accent}30` : cppLabTheme.border}`,
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => onToggle(isOpen ? -1 : i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px 18px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: `${accent}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: accent,
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                ?
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: 800, color: "#E0E0E0", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "11px", color: "#666", marginTop: "4px", lineHeight: 1.4 }}>{item.short}</div>
              </div>
              <span style={{ color: "#444", fontSize: "12px" }}>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div style={{ padding: "0 18px 18px" }}>
                <div
                  style={{
                    background: "#060610",
                    border: `1px solid ${accent}15`,
                    borderRadius: "10px",
                    padding: "14px",
                    marginBottom: "12px",
                  }}
                >
                  <pre
                    style={{
                      fontSize: "12px",
                      color: "#8A8A8A",
                      lineHeight: 1.8,
                      margin: 0,
                      whiteSpace: "pre-wrap",
                      fontFamily: "inherit",
                    }}
                  >
                    {item.explanation}
                  </pre>
                </div>

                <div style={{ fontSize: "10px", color: "#333", letterSpacing: "2px", marginBottom: "8px" }}>CODE EXAMPLE</div>
                <CodeBlock code={item.example} borderColor={accent} />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

