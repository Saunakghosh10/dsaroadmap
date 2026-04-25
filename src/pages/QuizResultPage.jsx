import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function QuizResultPage({ quiz }) {
  const { score, queue, history, bestStreak, reset } = quiz;

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ maxWidth: "560px", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{ textAlign: "center", marginBottom: "28px" }}
        >
          <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "10px", textTransform: "uppercase" }}>
            Session Complete
          </div>
          <div style={{ fontSize: "72px", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "#00FF88", lineHeight: 1 }}>
            {score}<span style={{ fontSize: "28px", color: "#222" }}>/{queue.length}</span>
          </div>
          <div style={{ fontSize: "12px", color: "#444", marginTop: "8px" }}>
            Best streak: {bestStreak} 🔥
          </div>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "24px", maxHeight: "45vh", overflowY: "auto" }}>
          {history.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              style={{
                display: "flex", gap: "10px", alignItems: "center",
                padding: "10px 14px",
                background: "#0D0D14",
                border: `1px solid ${h.correct ? "#00FF8820" : "#FF4D4D20"}`,
                borderRadius: "7px",
              }}
            >
              <span style={{ color: h.correct ? "#00FF88" : "#FF4D4D", fontWeight: 700, fontSize: "13px" }}>
                {h.correct ? "✓" : "✗"}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", color: "#C0C0C0" }}>{h.title}</div>
                {!h.correct && (
                  <div style={{ fontSize: "10px", color: "#FF6B6B", marginTop: "2px" }}>
                    You: {h.guess} → {h.pattern}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <Link
            to="/quiz"
            onClick={reset}
            style={{
              flex: 1,
              padding: "14px",
              background: "#00FF88",
              color: "#05050A",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: 800,
              textDecoration: "none",
              textAlign: "center",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            TRAIN AGAIN
          </Link>
          <Link
            to="/"
            style={{
              padding: "14px 18px",
              background: "#0D0D14",
              color: "#444",
              border: "1px solid #18181F",
              borderRadius: "8px",
              fontSize: "11px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
