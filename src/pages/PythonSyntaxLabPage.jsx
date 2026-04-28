import PythonSyntaxLab from "../features/pythonLab/PythonSyntaxLab";

export default function PythonSyntaxLabPage() {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "18px" }}>
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "5px",
            color: "#333",
            marginBottom: "8px",
            textTransform: "uppercase",
          }}
        >
          DSA Bootcamp
        </div>
        <h1
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 900,
            margin: 0,
            letterSpacing: "-2px",
            color: "#E8E8E8",
            lineHeight: 1.05,
          }}
        >
          Python <span style={{ color: "#FFD166" }}>Lab</span>
        </h1>
        <p style={{ color: "#555", fontSize: "13px", marginTop: "10px", lineHeight: 1.7 }}>
          Two-day track to become DSA-ready in Python: core syntax, DSA templates, and daily typing drills (LeetCode + CP I/O).
        </p>
      </div>

      <PythonSyntaxLab />
    </div>
  );
}

