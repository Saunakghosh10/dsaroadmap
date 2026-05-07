export const ACHIEVEMENTS = [
  {
    id: 'streak_3',
    title: 'Consistent Learner',
    description: 'Maintain a 3-day revision streak',
    icon: '🔥',
    requirement: { type: 'streak', value: 3 },
    color: '#FF6B35'
  },
  {
    id: 'flashcard_master',
    title: 'Flashcard Ninja',
    description: 'Review 50 flashcards total',
    icon: '🎴',
    requirement: { type: 'flashcard_count', value: 50 },
    color: '#00FF88'
  },
  {
    id: 'quiz_perfect',
    title: 'Perfect Score',
    description: 'Get 100% on a syntax quiz',
    icon: '🎯',
    requirement: { type: 'quiz_score', value: 100 },
    color: '#F472B6'
  },
  {
    id: 'stl_expert',
    title: 'STL Expert',
    description: 'Complete the STL section in tech docs',
    icon: '📦',
    requirement: { type: 'tech_read', value: 'cpp' },
    color: '#60A5FA'
  },
  {
    id: 'problem_solver',
    title: 'Pattern Seeker',
    description: 'Identify 10 patterns correctly in training',
    icon: '🔍',
    requirement: { type: 'pattern_count', value: 10 },
    color: '#A78BFA'
  }
];
