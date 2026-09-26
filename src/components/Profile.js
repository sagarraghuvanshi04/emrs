import React from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';

const profileContents = [
  'Company Overview & History',
  'Services & Capabilities',
  'Project Portfolio',
  'Business Credentials',
  'Team & Operations',
  'Contact Information',
];

export default function Profile() {
  return (
    <section id="profile" style={{
      background: 'linear-gradient(135deg, #0a1c38 0%, #0f2444 60%, #0d3060 100%)',
      padding: '80px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 64, alignItems: 'center',
        }} className="profile-grid">

          <div>
            <span className="section-label section-label-light">Company Profile</span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, marginBottom: 16, lineHeight: 1.25 }}>
              Want to Know More About Us?
            </h2>
            <div className="divider" style={{ background: '#c8a84b' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
              Download our complete company profile to explore our services, experience, projects and credentials.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn" style={{
                background: '#c8a84b', color: '#0f2444',
                fontSize: 15, padding: '14px 32px', fontWeight: 700,
              }}>
                <Download size={18} /> Download Company Profile
              </button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline-white" style={{ fontSize: 15, padding: '14px 32px' }}>
                Contact Us
              </button>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 16 }}>
              PDF format · [FILE SIZE] · Updated [DATE]
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16, padding: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: '#c8a84b', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <FileText size={22} color="#0f2444" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>Company Profile</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Complete Business Overview</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 14 }}>
              Profile Includes:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {profileContents.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={14} color="#6ee7a0" />
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .profile-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
