import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MCQ_DATA } from '../data/mcqData';

export default function SyntaxQuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const q = MCQ_DATA[currentIdx];

  const handleOptionClick = (idx) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null || submitted) return;
    setSubmitted(true);
    if (selected === q.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < MCQ_DATA.length) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', color: '#00FF88', marginBottom: '16px' }}>Quiz Complete!</h1>
        <p style={{ fontSize: '20px', color: '#DDD', marginBottom: '32px' }}>
          You scored <span style={{ fontWeight: 800 }}>{score}</span> out of {MCQ_DATA.length}
        </p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            background: '#00FF88', color: '#05050A', border: 'none',
            padding: '16px 32px', borderRadius: '12px', fontWeight: 800, cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 24px', maxWidth: '700px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', color: '#E8E8E8' }}>Syntax <span style={{ color: '#00FF88' }}>Mastery</span> Quiz</h1>
          <p style={{ color: '#555', fontSize: '13px' }}>Question {currentIdx + 1} of {MCQ_DATA.length}</p>
        </div>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#00FF88' }}>
          {score} / {MCQ_DATA.length}
        </div>
      </header>

      <motion.div
        key={currentIdx}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        style={{
          background: '#0A0A12',
          border: '1px solid #18181F',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '24px'
        }}
      >
        <h2 style={{ fontSize: '18px', color: '#DDD', lineHeight: 1.5, marginBottom: '24px' }}>
          {q.question}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {q.options.map((opt, idx) => {
            let bg = '#12121A';
            let border = '#18181F';
            let color = '#AAA';

            if (selected === idx) {
              bg = '#00FF8810';
              border = '#00FF8840';
              color = '#00FF88';
            }

            if (submitted) {
              if (idx === q.answer) {
                bg = '#00FF8820';
                border = '#00FF88';
                color = '#00FF88';
              } else if (selected === idx) {
                bg = '#FF2D5520';
                border = '#FF2D55';
                color = '#FF2D55';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionClick(idx)}
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: '12px',
                  padding: '16px 20px',
                  color: color,
                  textAlign: 'left',
                  fontSize: '14px',
                  cursor: submitted ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{ 
                  width: '24px', height: '24px', borderRadius: '50%', 
                  border: `1px solid ${border}`, display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', fontSize: '12px'
                }}>
                  {String.fromCharCode(65 + idx)}
                </div>
                {opt}
              </button>
            );
          })}
        </div>
      </motion.div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: '#00FF8805',
              border: '1px solid #00FF8820',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px'
            }}
          >
            <p style={{ color: '#00FF88', fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
              {selected === q.answer ? '✅ Correct!' : '❌ Incorrect'}
            </p>
            <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.5 }}>
              {q.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            style={{
              background: selected === null ? '#18181F' : '#00FF88',
              color: selected === null ? '#444' : '#05050A',
              border: 'none', padding: '12px 32px', borderRadius: '8px',
              fontWeight: 800, cursor: selected === null ? 'not-allowed' : 'pointer'
            }}
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            style={{
              background: '#00FF88', color: '#05050A',
              border: 'none', padding: '12px 32px', borderRadius: '8px',
              fontWeight: 800, cursor: 'pointer'
            }}
          >
            {currentIdx + 1 === MCQ_DATA.length ? 'Show Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}
