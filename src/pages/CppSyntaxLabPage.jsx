import CppSyntaxLab from "../features/cppLab/CppSyntaxLab";

export default function CppSyntaxLabPage() {
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
          Competitive Programming
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
          C++ <span style={{ color: "#00FF88" }}>Syntax Lab</span>
        </h1>
        <p style={{ color: "#555", fontSize: "13px", marginTop: "10px", lineHeight: 1.7 }}>
          Understand why syntax looks like that, then build daily muscle memory with typing drills and a quiz.
        </p>
      </div>

      <CppSyntaxLab />
    </div>
  );
}

