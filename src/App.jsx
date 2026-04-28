import { Routes, Route } from "react-router-dom";
import { useQuiz } from "./hooks/useQuiz";
import AppShell from "./layout/AppShell";
import HomePage from "./pages/HomePage";
import RoadmapPage from "./pages/RoadmapPage";
import PatternRadarPage from "./pages/PatternRadarPage";
import ProblemsPage from "./pages/ProblemsPage";
import CppReferencePage from "./pages/CppReferencePage";
import CppSyntaxLabPage from "./pages/CppSyntaxLabPage";
import PythonSyntaxLabPage from "./pages/PythonSyntaxLabPage";
import QuizSetupPage from "./pages/QuizSetupPage";
import QuizSessionPage from "./pages/QuizSessionPage";
import QuizResultPage from "./pages/QuizResultPage";

export default function App() {
  const quiz = useQuiz();

  return (
    <AppShell bestStreak={quiz.bestStreak}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/patterns" element={<PatternRadarPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/cpp" element={<CppReferencePage />} />
        <Route path="/cpp-lab" element={<CppSyntaxLabPage />} />
        <Route path="/py-lab" element={<PythonSyntaxLabPage />} />
        <Route path="/quiz" element={<QuizSetupPage onStartQuiz={quiz.startQuiz} />} />
        <Route path="/quiz/session" element={<QuizSessionPage quiz={quiz} />} />
        <Route path="/quiz/results" element={<QuizResultPage quiz={quiz} />} />
      </Routes>
    </AppShell>
  );
}
