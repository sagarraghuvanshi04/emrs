import React from 'react';
import { Calendar } from 'lucide-react';
import { timeline } from '../data/siteData';

export default function Experience() {
  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label section-label-light">Our Journey</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Company Experience & Milestones</h2>
          <div className="divider divider-center" style={{ background: '#c8a84b' }} />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
            A track record of consistent growth and institutional service delivery across central and eastern India.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: 2, background: 'rgba(255,255,255,0.1)',
            transform: 'translateX(-50%)',
          }} className="timeline-line" />

          {timeline.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              marginBottom: 40,
              position: 'relative',
            }} className="timeline-item">
              {/* Center dot */}
              <div style={{
                position: 'absolute', left: '50%', top: 24,
                width: 14, height: 14, borderRadius: '50%',
                background: '#c8a84b', border: '3px solid #0f2444',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }} className="timeline-dot" />

              <div style={{
                width: '44%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10, padding: '20px 24px',
                marginLeft: i % 2 === 0 ? 0 : 'auto',
                marginRight: i % 2 === 0 ? 'auto' : 0,
              }} className="timeline-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <Calendar size={14} color="#c8a84b" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#c8a84b' }}>{item.year}</span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .timeline-line { left: 20px !important; transform: none !important; }
          .timeline-dot { left: 20px !important; transform: translateX(-50%) !important; }
          .timeline-item { justify-content: flex-end !important; }
          .timeline-card { width: calc(100% - 52px) !important; margin-left: 0 !important; margin-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
