import { useState } from "react";
import { motion } from "framer-motion";
import { roadmap } from "../data/roadmapData";

function DiffBadge({ easy, medium, hard }) {
  return (
    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
      {easy > 0 && <span style={{ background: "#00FF8820", color: "#00FF88", border: "1px solid #00FF8840", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>E×{easy}</span>}
      {medium > 0 && <span style={{ background: "#FFB30020", color: "#FFB300", border: "1px solid #FFB30040", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>M×{medium}</span>}
      {hard > 0 && <span style={{ background: "#FF4D4D20", color: "#FF6B6B", border: "1px solid #FF4D4D40", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>H×{hard}</span>}
    </div>
  );
}

export default function RoadmapPage() {
  const [openPhase, setOpenPhase] = useState(0);
  const [openTopic, setOpenTopic] = useState({ phase: 0, topic: 1 });

  const totalProblems = roadmap.reduce((a, p) => a + p.totalProblems, 0);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "8px", textTransform: "uppercase" }}>
          Competitive Programming
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: "clamp(28px, 5vw, 48px)",
          fontWeight: 900,
          margin: "0 0 8px",
          letterSpacing: "-2px",
          lineHeight: 1.1,
          color: "#E8E8E8",
          textTransform: "uppercase",
        }}>
          DSA Mastery<br />
          <span style={{ color: "#333" }}>Roadmap</span>
        </h1>
        <p style={{ color: "#555", fontSize: "13px", margin: "12px 0 20px", lineHeight: 1.6 }}>
          Zero to competitive programmer. {totalProblems} problems. 5 phases. No fluff.
        </p>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {roadmap.map((p, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color }} />
              <span style={{ fontSize: "11px", color: "#555" }}>Phase {p.phase}</span>
              <span style={{ fontSize: "11px", color: "#333" }}>{p.totalProblems}Q</span>
            </div>
          ))}
        </div>
      </div>

      {roadmap.map((phase, pi) => (
        <motion.div key={pi} style={{ marginBottom: "12px" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: pi * 0.05 }}>
          <div
            onClick={() => setOpenPhase(openPhase === pi ? -1 : pi)}
            onMouseEnter={(e) => { if (openPhase !== pi) { e.currentTarget.style.background = "#141414"; e.currentTarget.style.borderColor = phase.color + "30"; }}}
            onMouseLeave={(e) => { if (openPhase !== pi) { e.currentTarget.style.background = "#0D0D0D"; e.currentTarget.style.borderColor = "#1A1A1A"; }}}
            style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "20px 24px",
              background: openPhase === pi ? "#111" : "#0D0D0D",
              border: `1px solid ${openPhase === pi ? phase.color + "40" : "#1A1A1A"}`,
              borderRadius: openPhase === pi ? "12px 12px 0 0" : "12px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: "32px", fontWeight: 900, color: phase.color + "30", lineHeight: 1, fontFamily: "'Space Grotesk', sans-serif", minWidth: "48px" }}>{phase.phase}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.3px", fontFamily: "'Space Grotesk', sans-serif", color: "#E8E8E8" }}>{phase.title}</span>
                <span style={{ fontSize: "11px", color: phase.color, background: phase.color + "15", padding: "2px 8px", borderRadius: "4px" }}>{phase.totalProblems} problems</span>
              </div>
              <div style={{ fontSize: "12px", color: "#555", marginTop: "2px" }}>{phase.subtitle}</div>
            </div>
            <div style={{ color: openPhase === pi ? phase.color : "#444", fontSize: "14px", transform: openPhase === pi ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease, color 0.2s ease" }}>▼</div>
          </div>

          {openPhase === pi && (
            <div style={{ border: `1px solid ${phase.color}40`, borderTop: "none", borderRadius: "0 0 12px 12px", overflow: "hidden" }}>
              {phase.topics.map((topic, ti) => {
                const isOpen = openTopic.phase === pi && openTopic.topic === ti;
                return (
                  <div key={ti} style={{ borderBottom: ti < phase.topics.length - 1 ? "1px solid #151515" : "none" }}>
                    <div
                      onClick={() => setOpenTopic(isOpen ? { phase: -1, topic: -1 } : { phase: pi, topic: ti })}
                      onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.background = "#0F0F0F"; }}
                      onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.background = "transparent"; }}
                      style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px", background: isOpen ? "#111" : "transparent", cursor: "pointer", transition: "background 0.15s ease", flexWrap: "wrap" }}
                    >
                      <div style={{ flex: 1, minWidth: "200px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "14px", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", color: "#D0D0D0" }}>{topic.name}</span>
                          {topic.tag === "YOU ARE HERE" && <span style={{ fontSize: "10px", background: "#FFB30030", color: "#FFB300", border: "1px solid #FFB30050", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>◉ YOU ARE HERE</span>}
                          {topic.tag === "NEXT UP" && <span style={{ fontSize: "10px", background: "#00FF8820", color: "#00FF88", border: "1px solid #00FF8840", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>→ NEXT UP</span>}
                          {topic.tag !== "YOU ARE HERE" && topic.tag !== "NEXT UP" && <span style={{ fontSize: "10px", color: "#444", border: "1px solid #222", padding: "1px 6px", borderRadius: "4px" }}>{topic.tag}</span>}
                        </div>
                        <div style={{ marginTop: "6px" }}><DiffBadge easy={topic.easy} medium={topic.medium} hard={topic.hard} /></div>
                      </div>
                      <div style={{ color: isOpen ? "#888" : "#444", fontSize: "12px", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease, color 0.2s ease" }}>▼</div>
                    </div>

                    {isOpen && (
                      <div style={{ padding: "0 24px 20px", background: "#0C0C0C" }}>
                        <div style={{ background: phase.color + "08", border: `1px solid ${phase.color}20`, borderRadius: "8px", padding: "10px 14px", marginBottom: "16px", fontSize: "12px", color: "#888", lineHeight: 1.6 }}>
                          💡 {topic.note}
                        </div>
                        <div style={{ fontSize: "11px", color: "#444", letterSpacing: "2px", marginBottom: "10px" }}>PROBLEMS TO SOLVE</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "6px" }}>
                          {topic.keyProblems.map((p, i) => (
                            <div key={i} style={{ padding: "8px 12px", background: "#111", border: "1px solid #1A1A1A", borderRadius: "6px", fontSize: "12px", color: "#C0C0C0", display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ color: "#333", fontSize: "10px", minWidth: "16px" }}>{String(i + 1).padStart(2, "0")}</span>{p}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </motion.div>
      ))}

      <div style={{ marginTop: "40px", padding: "24px", background: "#0D0D0D", border: "1px solid #1A1A1A", borderRadius: "12px" }}>
        <div style={{ fontSize: "11px", color: "#444", letterSpacing: "3px", marginBottom: "16px" }}>THE STRATEGY</div>
        {[
          ["WHERE TO PRACTICE", "LeetCode for patterns. Codeforces for real contests. CSES Problem Set for theory. AtCoder Beginner Contests weekly."],
          ["HOW TO PRACTICE", "Don't read solutions before 30 min of genuine struggle. After solving, read the editorial anyway. Pattern recognition > memorization."],
          ["TIMELINE", "Phase 1-2 → 3 months. Phase 3-4 → 3 months. Phase 5 → ongoing. Start Codeforces Div 3 contests from month 2."],
          ["DAILY HABIT", "2-3 problems per day minimum. On weekends, do a full virtual contest. Track your submissions, not just solves."],
        ].map(([label, text], i) => (
          <div key={i} style={{ marginBottom: i < 3 ? "16px" : "0", paddingBottom: i < 3 ? "16px" : "0", borderBottom: i < 3 ? "1px solid #151515" : "none" }}>
            <div style={{ fontSize: "11px", color: "#555", letterSpacing: "1px", marginBottom: "4px" }}>{label}</div>
            <div style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
