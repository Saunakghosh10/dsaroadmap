import { useState, useRef, useCallback } from "react";

export function useQuiz() {
  const [queue, setQueue] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [history, setHistory] = useState([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiText, setAiText] = useState("");
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState("");
  const streakRef = useRef(0);

  const current = queue[currentIdx];

  const startQuiz = useCallback((problems, filterPattern, filterDiff) => {
    let pool = [...problems];
    if (filterPattern !== "All") pool = pool.filter(p => p.pattern === filterPattern);
    if (filterDiff !== "All") pool = pool.filter(p => p.difficulty === filterDiff);
    if (!pool.length) return false;
    setQueue(pool.sort(() => Math.random() - 0.5));
    setCurrentIdx(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setStreak(0);
    streakRef.current = 0;
    setHistory([]);
    setAiText("");
    return true;
  }, []);

  const getAI = useCallback(async (problem, guess, correct) => {
    setAiLoading(true);
    setAiText("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: "You are a sharp DSA coach. Be direct. Max 3 sentences. No bullets. Plain language.",
          messages: [{
            role: "user",
            content: `Problem: "${problem.title}". Correct: ${problem.pattern}. User guessed: ${guess}. ${correct ? "Correct." : "Wrong."}
3 sentences max: (1) Why this is ${problem.pattern} — exact signal in problem. ${!correct ? `(2) Why ${guess} doesn't fit.` : ""} (${correct ? 2 : 3}) One-line memory hook.`
          }]
        })
      });
      const data = await res.json();
      setAiText(data.content?.filter(b => b.type === "text").map(b => b.text).join("") || "");
    } catch {
      setAiText("Pattern locked. Keep going.");
    }
    setAiLoading(false);
  }, []);

  const generateProblem = useCallback(async (patterns) => {
    setGenerating(true);
    setGenError("");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 800,
          system: "Respond ONLY with valid JSON. No markdown.",
          messages: [{
            role: "user",
            content: `Generate one DSA problem as JSON: {"title":"...","difficulty":"Easy|Medium|Hard","company":["Google"],"description":"2-3 sentence problem description","pattern":"one of: ${patterns.join("|")}","signal":"one sentence signal"}`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.filter(b => b.type === "text").map(b => b.text).join("") || "";
      const parsed = JSON.parse(text.trim());
      setQueue(prev => [...prev, parsed]);
    } catch {
      setGenError("Generation failed. Try again.");
    }
    setGenerating(false);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!selected || submitted || !current) return;
    const correct = selected === current.pattern;
    setSubmitted(true);
    const ns = correct ? streakRef.current + 1 : 0;
    streakRef.current = ns;
    setStreak(ns);
    if (ns > bestStreak) setBestStreak(ns);
    if (correct) setScore(s => s + 1);
    setHistory(h => [...h, { title: current.title, correct, pattern: current.pattern, guess: selected }]);
    getAI(current, selected, correct);
  }, [selected, submitted, current, bestStreak, getAI]);

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= queue.length) return "finished";
    setCurrentIdx(i => i + 1);
    setSelected(null);
    setSubmitted(false);
    setAiText("");
    return "next";
  }, [currentIdx, queue.length]);

  const reset = useCallback(() => {
    setQueue([]);
    setCurrentIdx(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setStreak(0);
    streakRef.current = 0;
    setHistory([]);
    setAiText("");
  }, []);

  return {
    queue, currentIdx, current, selected, setSelected,
    submitted, score, streak, bestStreak, history,
    aiLoading, aiText, generating, genError,
    startQuiz, handleSubmit, handleNext, generateProblem, reset,
  };
}
