import React from 'react';
import { Building2, MapPin, Layers } from 'lucide-react';
import { institutions } from '../data/siteData';

export default function Institutions() {
  return (
    <section id="institutions" className="section section-alt">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Our Clients</span>
          <h2 className="section-title">Institutions We Have Served</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            A growing list of EMRS and government institutions that have trusted us for their supply and service requirements.
          </p>
        </div>

        <div className="grid-4">
          {institutions.map(inst => (
            <div key={inst.id} style={{
              background: '#fff', borderRadius: 12, padding: '24px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'all 0.2s',
              textAlign: 'center',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#0f2444';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              {/* Logo placeholder */}
              <div style={{
                width: 64, height: 64, borderRadius: 12,
                background: '#f3f4f6', border: '2px dashed #d1d5db',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <Building2 size={24} color="#9ca3af" />
              </div>

              <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0f2444', marginBottom: 8, lineHeight: 1.4 }}>{inst.name}</h4>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 10 }}>
                <MapPin size={12} color="#6b7280" />
                <span style={{ fontSize: 12, color: '#6b7280' }}>{inst.location}</span>
              </div>

              <div style={{
                background: '#f7f8fa', borderRadius: 6, padding: '8px 12px',
                display: 'flex', alignItems: 'flex-start', gap: 6,
              }}>
                <Layers size={12} color="#1a6b3c" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.5 }}>{inst.services}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: 40,
          padding: '20px', background: '#fff',
          borderRadius: 10, border: '1px dashed #d1d5db',
          maxWidth: 600, margin: '40px auto 0',
        }}>
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7 }}>
            <strong style={{ color: '#0f2444' }}>Note:</strong> Institution logos are displayed only with explicit permission from the respective institutions. Replace placeholders with actual institution names and details.
          </p>
        </div>
      </div>
    </section>
  );
}
