import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ACHIEVEMENTS } from '../data/achievementData';

export default function RevisionPage() {
  const dailyTasks = [
    { title: "Review 10 Flashcards", path: "/flashcards", icon: "🎴", color: "#00FF88" },
    { title: "AI Mock Interview", path: "/ai-interview", icon: "🤖", color: "#60A5FA" },
    { title: "C++ Syntax Quiz", path: "/syntax-quiz", icon: "📝", color: "#A78BFA" },
    { title: "Solve a Python Lab", path: "/py-lab", icon: "🐍", color: "#3776AB" },
    { title: "Browse Resources", path: "/resources", icon: "🌐", color: "#FB923C" },
  ];

  return (
    <div style={{ padding: '40px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#E8E8E8', marginBottom: '12px' }}>
          Daily<span style={{ color: '#00FF88' }}>Revision</span>
        </h1>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Consistency is the only path to mastery. Complete your daily drills and track your progress.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '56px' }}>
        {/* Progress & Achievements Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Daily Goal Card */}
          <section style={{
            background: 'linear-gradient(135deg, #0A0A12 0%, #12121A 100%)',
            border: '1px solid #18181F',
            borderRadius: '24px',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}>
            <div style={{ position: 'relative', width: '100px', height: '100px', flexShrink: 0 }}>
              <svg style={{ transform: 'rotate(-90deg)', width: '100px', height: '100px' }}>
                <circle cx="50" cy="50" r="46" fill="none" stroke="#18181F" strokeWidth="6" />
                <motion.circle 
                  cx="50" cy="50" r="46" fill="none" stroke="#00FF88" strokeWidth="6" 
                  strokeDasharray="289"
                  initial={{ strokeDashoffset: 289 }}
                  animate={{ strokeDashoffset: 289 * 0.2 }} 
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <span style={{ fontSize: '20px', fontWeight: 800, color: '#E8E8E8' }}>80%</span>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '16px', color: '#E8E8E8', marginBottom: '8px', fontWeight: 700 }}>Daily Goal</h2>
              <p style={{ color: '#555', fontSize: '12px', lineHeight: 1.5 }}>
                Almost there! Complete one more AI Mock Interview to hit 100% today.
              </p>
            </div>
          </section>

          {/* Achievements Preview */}
          <section style={{
            background: '#0D0D14',
            border: '1px solid #18181F',
            borderRadius: '24px',
            padding: '24px',
          }}>
            <h2 style={{ fontSize: '12px', color: '#00FF88', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
              Recent Achievements
            </h2>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {ACHIEVEMENTS.slice(0, 3).map(ach => (
                <div key={ach.id} style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: ach.color + '10', border: `1px solid ${ach.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', cursor: 'help'
                }} title={ach.title + ": " + ach.description}>
                  {ach.icon}
                </div>
              ))}
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: '#18181F', border: '1px solid #222',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '11px', color: '#444', fontWeight: 800
              }}>
                +{ACHIEVEMENTS.length - 3}
              </div>
            </div>
          </section>
        </div>

        {/* Task List */}
        <div>
          <h2 style={{ fontSize: '11px', color: '#333', letterSpacing: '3px', marginBottom: '24px', textTransform: 'uppercase' }}>
            Daily Drills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {dailyTasks.map((task, idx) => (
              <Link key={idx} to={task.path} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -5, borderColor: task.color + '40' }}
                  style={{
                    background: '#0A0A12',
                    border: '1px solid #18181F',
                    borderRadius: '16px',
                    padding: '20px',
                    textAlign: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{task.icon}</div>
                  <h3 style={{ fontSize: '13px', color: '#DDD', fontWeight: 600 }}>{task.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
