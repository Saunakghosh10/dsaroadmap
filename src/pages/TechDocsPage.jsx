import React from 'react';
import { motion } from 'framer-motion';
import { TECH_DOCS } from '../data/techData';

export default function TechDocsPage() {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#E8E8E8', marginBottom: '12px' }}>
          Tech<span style={{ color: '#00FF88' }}>Stack</span> Explorer
        </h1>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
          Deep dive into the technologies that power modern software. Understanding the 'why' is as important as the 'how'.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {TECH_DOCS.map((tech, idx) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            style={{
              background: '#0A0A12',
              border: '1px solid #18181F',
              borderRadius: '20px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ y: -5, borderColor: '#00FF8840', background: '#0D0D16' }}
          >
            <h2 style={{ fontSize: '20px', color: '#E8E8E8', marginBottom: '12px' }}>{tech.title}</h2>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '24px', lineHeight: 1.5 }}>
              {tech.description}
            </p>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '12px', color: '#00FF88', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                Key Concepts
              </h3>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {tech.keyPoints.map((point, i) => (
                  <li key={i} style={{ color: '#AAA', fontSize: '13px', marginBottom: '8px', display: 'flex', alignItems: 'start', gap: '8px' }}>
                    <span style={{ color: '#00FF88' }}>▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <h3 style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                Learning Resources
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tech.resources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#12121A',
                      color: '#00FF88',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      textDecoration: 'none',
                      border: '1px solid #18181F',
                      transition: 'all 0.2s'
                    }}
                  >
                    {res.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
