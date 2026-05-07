import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RevisionSystem() {
  const cards = [
    { title: "Flashcards", desc: "Active recall for STL & Syntax", path: "/flashcards", color: "#00FF88", icon: "🎴" },
    { title: "Tech Docs", desc: "Master the technology stack", path: "/tech-docs", color: "#60A5FA", icon: "📚" },
    { title: "Daily Training", desc: "Revise & Solve problems", path: "/revision", color: "#F472B6", icon: "🎯" },
  ];

  return (
    <div style={{ marginTop: '56px' }}>
      <div style={{ fontSize: '11px', color: '#333', letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase' }}>
        Mastery & Revision
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {cards.map((card, i) => (
          <Link key={i} to={card.path} style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.02, borderColor: card.color + '40' }}
              style={{
                background: 'linear-gradient(180deg, #0D0D14 0%, #05050A 100%)',
                border: '1px solid #18181F',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ 
                fontSize: '32px', 
                width: '64px', height: '64px', 
                background: card.color + '10', 
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${card.color}20`
              }}>
                {card.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#E8E8E8', marginBottom: '4px', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.4 }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
