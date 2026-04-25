import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ALL_PROBLEMS, PATTERNS } from "../data/patternData";
import { DIFF_COLORS } from "../data/constants";
import DifficultyBadge from "../components/DifficultyBadge";
import PatternTag from "../components/PatternTag";
import CompanyPill from "../components/CompanyPill";

export default function ProblemsPage() {
  const [searchParams] = useSearchParams();
  const initialPattern = searchParams.get("pattern") || "All";

  const [filterPattern, setFilterPattern] = useState(initialPattern);
  const [filterDiff, setFilterDiff] = useState("All");
  const [filterCompany, setFilterCompany] = useState("All");
  const [search, setSearch] = useState("");

  const companies = useMemo(() => {
    const set = new Set();
    ALL_PROBLEMS.forEach(p => p.company?.forEach(c => set.add(c)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    let pool = [...ALL_PROBLEMS];
    if (filterPattern !== "All") pool = pool.filter(p => p.pattern === filterPattern);
    if (filterDiff !== "All") pool = pool.filter(p => p.difficulty === filterDiff);
    if (filterCompany !== "All") pool = pool.filter(p => p.company?.includes(filterCompany));
    if (search.trim()) {
      const q = search.toLowerCase();
      pool = pool.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return pool;
  }, [filterPattern, filterDiff, filterCompany, search]);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#333", marginBottom: "8px", textTransform: "uppercase" }}>
          Problem Database
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "-2px",
          color: "#E8E8E8",
        }}>
          {filtered.length} <span style={{ color: "#333" }}>Problems</span>
        </h1>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
        <input
          placeholder="Search problems..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", maxWidth: "400px",
            padding: "10px 14px",
            background: "#0D0D14",
            border: "1px solid #18181F",
            borderRadius: "7px",
            color: "#CCC",
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            outline: "none",
          }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "#333", textTransform: "uppercase", letterSpacing: "1px" }}>Pattern:</span>
          {["All", ...PATTERNS].map(p => (
            <button key={p} onClick={() => setFilterPattern(p)} style={{
              padding: "4px 10px",
              background: filterPattern === p ? "#00FF8820" : "#0D0D14",
              border: `1px solid ${filterPattern === p ? "#00FF8840" : "#18181F"}`,
              color: filterPattern === p ? "#00FF88" : "#444",
              borderRadius: "4px",
              fontSize: "10px",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
            }}>{p === "All" ? "All" : p}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "#333", textTransform: "uppercase", letterSpacing: "1px" }}>Difficulty:</span>
          {["All", "Easy", "Medium", "Hard"].map(d => (
            <button key={d} onClick={() => setFilterDiff(d)} style={{
              padding: "4px 10px",
              background: filterDiff === d ? (DIFF_COLORS[d] || "#00FF88") + "20" : "#0D0D14",
              border: `1px solid ${filterDiff === d ? (DIFF_COLORS[d] || "#00FF88") + "50" : "#18181F"}`,
              color: filterDiff === d ? (DIFF_COLORS[d] || "#00FF88") : "#444",
              borderRadius: "4px",
              fontSize: "10px",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
            }}>{d}</button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", color: "#333", textTransform: "uppercase", letterSpacing: "1px" }}>Company:</span>
          {companies.map(c => (
            <button key={c} onClick={() => setFilterCompany(c)} style={{
              padding: "4px 10px",
              background: filterCompany === c ? "#00BFFF20" : "#0D0D14",
              border: `1px solid ${filterCompany === c ? "#00BFFF40" : "#18181F"}`,
              color: filterCompany === c ? "#00BFFF" : "#444",
              borderRadius: "4px",
              fontSize: "10px",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', monospace",
            }}>{c}</button>
          ))}
        </div>
      </div>

      {/* List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {filtered.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: Math.min(i * 0.01, 0.3) }}
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "10px 14px",
              background: "#0D0D14",
              border: "1px solid #18181F",
              borderRadius: "7px",
              flexWrap: "wrap",
            }}
          >
            <DifficultyBadge difficulty={p.difficulty} />
            <span style={{ fontSize: "13px", color: "#C0C0C0", flex: 1, minWidth: "150px", fontWeight: 500 }}>{p.title}</span>
            <PatternTag pattern={p.pattern} />
            <div style={{ display: "flex", gap: "4px" }}>
              {p.company?.slice(0, 2).map(c => <CompanyPill key={c} company={c} />)}
            </div>
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: "40px", textAlign: "center", color: "#333", fontSize: "13px" }}>
            No problems match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
