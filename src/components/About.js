import React from 'react';
import { MapPin, Users, Award, TrendingUp } from 'lucide-react';
import { company } from '../data/siteData';

const strengths = [
  { icon: MapPin, label: 'Operating States', value: 'MP, CG & Odisha' },
  { icon: Award, label: 'Annual Turnover', value: '₹3–4 Crore+' },
  { icon: Users, label: 'Experienced Team', value: 'Trained Professionals' },
  { icon: TrendingUp, label: 'Business Scale', value: 'Multi-State Operations' },
];

const aboutPoints = [
  { title: 'EMRS Expertise', desc: 'Deep understanding of EMRS procurement norms, compliance requirements and institutional operations.' },
  { title: 'Supply Network', desc: 'Established supply chain across MP, Chhattisgarh and Odisha for timely and reliable delivery.' },
  { title: 'Government Compliant', desc: 'Fully registered with GST, UDYAM and all applicable government registrations.' },
  { title: 'End-to-End Capability', desc: 'Single-vendor solutions from supply and manpower to technical services and facility management.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="about-grid">

          {/* Left: Image */}
          <div>
            <div style={{
              width: '100%', borderRadius: 20, overflow: 'hidden',
              marginBottom: 20,
              boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
              border: '5px solid #fff',
              outline: '2px solid #e5e7eb',
              position: 'relative',
            }}>
              <img
                src="/images/projects/company.png"
                alt="Company / Team Photo"
                style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block', background: '#f7f8fa' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(15,36,68,0.88) 0%, transparent 100%)',
                padding: '40px 24px 22px',
              }}>
                <div style={{ color: '#c8a84b', fontWeight: 800, fontSize: 16, letterSpacing: '0.3px' }}>{company.name}</div>
                <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, marginTop: 4 }}>EMRS & Institutional Supply Solutions · MP · CG · Odisha</div>
              </div>
            </div>
            {/* Strength cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {strengths.map((s, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 12, padding: '16px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  transition: 'box-shadow 0.2s',
                }}>
                  <div style={{ background: 'linear-gradient(135deg, #0f2444, #1a3a6b)', borderRadius: 8, padding: 9, flexShrink: 0 }}>
                    <s.icon size={15} color="#6ee7a0" />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2444', marginTop: 2 }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="section-label">About Us</span>
            <h2 className="section-title">A Trusted Institutional Supply & Service Partner</h2>
            <div className="divider" />
            <p style={{ color: '#4b5563', lineHeight: 1.85, marginBottom: 14, fontSize: 15 }}>
              {company.about.split('\n\n')[0]}
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.85, marginBottom: 32, fontSize: 15 }}>
              {company.about.split('\n\n')[1]}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 36 }}>
              {aboutPoints.map((p, i) => (
                <div key={i} style={{
                  padding: '18px', borderRadius: 12,
                  borderLeft: '3px solid #1a6b3c',
                  background: '#f7f8fa',
                  border: '1px solid #e5e7eb',
                  borderLeftWidth: 3, borderLeftColor: '#1a6b3c',
                }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#0f2444', marginBottom: 5 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65 }}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                { value: company.experience, label: 'Experience', bg: 'linear-gradient(135deg, #0f2444, #1a3a6b)', color: '#6ee7a0' },
                { value: '3 States', label: 'MP · CG · Odisha', bg: 'linear-gradient(135deg, #1a6b3c, #22a05a)', color: '#fff' },
                { value: '₹3–4 Cr+', label: 'Annual Turnover', bg: 'linear-gradient(135deg, #c8a84b, #e8c96a)', color: '#0f2444' },
                { value: '9+', label: 'Institutions Served', bg: '#f7f8fa', color: '#0f2444', border: '1px solid #e5e7eb' },
              ].map((s, i) => (
                <div key={i} style={{
                  textAlign: 'center', padding: '16px 20px',
                  background: s.bg, borderRadius: 12,
                  border: s.border || 'none', flex: 1, minWidth: 90,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: s.color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 4, fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
