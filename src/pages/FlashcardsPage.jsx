import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLASHCARDS } from '../data/flashcardData';

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const card = FLASHCARDS[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
    }, 200);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    }, 200);
  };

  return (
    <div style={{ padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#E8E8E8', marginBottom: '8px' }}>
          Flash<span style={{ color: '#00FF88' }}>Cards</span>
        </h1>
        <p style={{ color: '#888', fontSize: '14px' }}>
          Master C++ syntax and STL through interactive active recall.
        </p>
      </header>

      <div style={{ position: 'relative', height: '400px', perspective: '1000px' }}>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction * 100, opacity: 0, rotateY: 0 }}
            animate={{ x: 0, opacity: 1, rotateY: isFlipped ? 180 : 0 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              transformStyle: 'preserve-3d',
              cursor: 'pointer',
            }}
          >
            {/* Front */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, #12121A 0%, #0A0A12 100%)',
              border: '1px solid #18181F',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            }}>
              <span style={{ position: 'absolute', top: '24px', left: '24px', fontSize: '10px', color: '#00FF88', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                {card.category}
              </span>
              <h2 style={{ fontSize: '24px', color: '#DDD', lineHeight: 1.4 }}>{card.front}</h2>
              <div style={{ marginTop: '24px', fontSize: '12px', color: '#555', fontStyle: 'italic' }}>
                Click to reveal answer
              </div>
            </div>

            {/* Back */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, #0A0A12 0%, #001A0E 100%)',
              border: '1px solid #00FF8840',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center',
              transform: 'rotateY(180deg)',
              boxShadow: '0 20px 40px rgba(0,255,136,0.1)',
            }}>
              <h2 style={{ fontSize: '28px', color: '#00FF88', fontFamily: 'monospace' }}>{card.back}</h2>
              {card.hint && (
                <div style={{ marginTop: '24px', padding: '12px 20px', background: '#00FF8810', borderRadius: '8px', border: '1px solid #00FF8820', color: '#00FF88', fontSize: '13px' }}>
                  💡 {card.hint}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        <button 
          onClick={handlePrev}
          style={{
            background: '#12121A',
            border: '1px solid #18181F',
            color: '#888',
            padding: '12px 24px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.2s'
          }}
        >
          Previous
        </button>
        <span style={{ color: '#555', fontSize: '14px', fontWeight: 600 }}>
          {currentIndex + 1} / {FLASHCARDS.length}
        </span>
        <button 
          onClick={handleNext}
          style={{
            background: '#00FF88',
            border: 'none',
            color: '#05050A',
            padding: '12px 24px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 800,
            transition: 'all 0.2s'
          }}
        >
          Next Card
        </button>
      </div>
    </div>
  );
}
