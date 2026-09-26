import React from 'react';
import { Package, Users, Settings, Briefcase, ArrowRight } from 'lucide-react';
import { capabilities } from '../data/siteData';

const iconMap = { Package, Users, Settings, Briefcase };

const colors = [
  { bg: '#0f2444', accent: '#6ee7a0' },
  { bg: '#1a6b3c', accent: '#bbf7d0' },
  { bg: '#1e4d8c', accent: '#bfdbfe' },
  { bg: '#7c3d0f', accent: '#fed7aa' },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section section-alt">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Core Capabilities</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            Comprehensive institutional solutions delivered by an experienced team with deep knowledge of government and EMRS requirements.
          </p>
        </div>

        <div className="grid-4">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon];
            const c = colors[i];
            return (
              <div key={cap.id} style={{
                background: '#fff',
                borderRadius: 12,
                padding: '32px 24px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                transition: 'all 0.25s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = c.bg;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                  background: c.bg, borderRadius: '12px 12px 0 0',
                }} />
                <div style={{
                  width: 56, height: 56, borderRadius: 12,
                  background: c.bg, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: 20,
                }}>
                  {Icon && <Icon size={24} color={c.accent} />}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f2444', marginBottom: 10 }}>{cap.title}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, marginBottom: 20 }}>{cap.desc}</p>
                <a href="#services" onClick={e => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: c.bg }}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
