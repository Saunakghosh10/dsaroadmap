import React from 'react';
import { motion } from 'framer-motion';
import { RESOURCES } from '../data/resourceData';

export default function ResourceHubPage() {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: 800, color: '#E8E8E8', marginBottom: '12px' }}>
          Resource<span style={{ color: '#00FF88' }}>Hub</span>
        </h1>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '600px', lineHeight: 1.6 }}>
          A curated collection of the best books, websites, and channels to master DSA and C++.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {RESOURCES.map((group, idx) => (
          <section key={idx}>
            <h2 style={{ 
              fontSize: '12px', color: '#00FF88', textTransform: 'uppercase', 
              letterSpacing: '2px', marginBottom: '24px', borderBottom: '1px solid #18181F',
              paddingBottom: '12px'
            }}>
              {group.category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {group.items.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, borderColor: '#00FF8840' }}
                  style={{
                    background: '#0A0A12',
                    border: '1px solid #18181F',
                    borderRadius: '16px',
                    padding: '24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#E8E8E8', marginBottom: '8px' }}>
                    {item.name} ↗
                  </h3>
                  <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </motion.a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
