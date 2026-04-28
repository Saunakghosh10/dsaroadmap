import { useEffect, useMemo, useState } from "react";
import Tabs from "./components/Tabs";
import WhyAccordion from "./components/WhyAccordion";
import SyntaxTable from "./components/SyntaxTable";
import DailyExercises from "./components/DailyExercises";
import Quiz from "./components/Quiz";
import { pyLabTheme } from "./data/theme";
import { WHY_DATA } from "./data/whyData";
import { SYNTAX_CARDS } from "./data/syntaxCards";
import { EXERCISES } from "./data/exercises";
import { QUIZ_QUESTIONS } from "./data/quizQuestions";

const STORAGE = {
  tab: "pyLab.lastTab",
  dayIdx: "pyLab.lastDayIdx",
  practicedISO: "pyLab.lastPracticedISO",
};

function todayISODateOnly() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function PythonSyntaxLab() {
  const tabs = useMemo(
    () => [
      { id: "why", label: "WHY" },
      { id: "syntax", label: "SYNTAX" },
      { id: "exercises", label: "DAILY" },
      { id: "quiz", label: "QUIZ" },
    ],
    []
  );

  const [tab, setTab] = useState("why");
  const [openWhy, setOpenWhy] = useState(0);
  const [openCat, setOpenCat] = useState(0);
  const [openEx, setOpenEx] = useState(0);
  const [searchSyntax, setSearchSyntax] = useState("");
  const [lastPracticedISO, setLastPracticedISO] = useState(null);

  useEffect(() => {
    try {
      const storedTab = localStorage.getItem(STORAGE.tab);
      const storedDayIdx = localStorage.getItem(STORAGE.dayIdx);
      const storedPractice = localStorage.getItem(STORAGE.practicedISO);

      if (storedTab && tabs.some((t) => t.id === storedTab)) setTab(storedTab);
      if (storedDayIdx && !Number.isNaN(Number(storedDayIdx))) {
        const idx = Math.max(0, Math.min(EXERCISES.length - 1, Number(storedDayIdx)));
        setOpenEx(idx);
      }
      if (storedPractice) setLastPracticedISO(storedPractice);
    } catch {
      // ignore storage failures
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE.tab, tab);
    } catch {
      // ignore
    }
  }, [tab]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE.dayIdx, String(openEx));
    } catch {
      // ignore
    }
  }, [openEx]);

  function markPracticed() {
    const iso = todayISODateOnly();
    setLastPracticedISO(iso);
    try {
      localStorage.setItem(STORAGE.practicedISO, iso);
    } catch {
      // ignore
    }
  }

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#DDD" }}>
      <div style={{ marginBottom: "16px" }}>
        <Tabs tabs={tabs} active={tab} onChange={setTab} accent={pyLabTheme.accent} />
      </div>

      <div
        style={{
          background: pyLabTheme.card,
          border: `1px solid ${pyLabTheme.border}`,
          borderRadius: "16px",
          padding: "18px",
        }}
      >
        {tab === "why" && <WhyAccordion items={WHY_DATA} openIndex={openWhy} onToggle={setOpenWhy} />}

        {tab === "syntax" && (
          <SyntaxTable
            categories={SYNTAX_CARDS}
            openIndex={openCat}
            onToggle={setOpenCat}
            search={searchSyntax}
            onSearchChange={setSearchSyntax}
          />
        )}

        {tab === "exercises" && (
          <DailyExercises
            exercises={EXERCISES}
            openIndex={openEx}
            onSelectDay={setOpenEx}
            onPracticed={markPracticed}
            lastPracticedISO={lastPracticedISO}
          />
        )}

        {tab === "quiz" && <Quiz questions={QUIZ_QUESTIONS} />}
      </div>
    </div>
  );
}

