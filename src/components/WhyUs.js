import React from 'react';
import { MapPin, Package, Award, Clock, Users, TrendingUp } from 'lucide-react';
import { whyUs } from '../data/siteData';

const iconMap = { MapPin, Package, Award, Clock, Users, TrendingUp };

export default function WhyUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Why Work With Us</span>
          <h2 className="section-title">Why Choose Us</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            What makes us the preferred institutional supply and service partner for EMRS and government institutions.
          </p>
        </div>

        <div className="grid-3">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={i} style={{
                background: '#fff', borderRadius: 12, padding: '28px 24px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#0f2444';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: 'linear-gradient(135deg, #0f2444, #1a3a6b)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  {Icon && <Icon size={22} color="#6ee7a0" />}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0f2444', marginBottom: 10 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
