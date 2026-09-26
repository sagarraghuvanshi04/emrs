import React from 'react';
import { ArrowRight, Download, CheckCircle, Shield, Award, Phone } from 'lucide-react';
import { stats, company } from '../data/siteData';

const highlights = [
  'EMRS Approved Vendor',
  'Multi-State Operations',
  'GST & UDYAM Registered',
  '7+ Years Experience',
];

const trustPoints = [
  { icon: Shield, text: 'Government Compliant' },
  { icon: Award, text: 'EMRS Specialist' },
  { icon: CheckCircle, text: 'Verified Vendor' },
];

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      background: 'linear-gradient(135deg, #060f20 0%, #0f2444 50%, #0a1f3d 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 68,
    }}>
      {/* Background elements */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035,
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '36px 36px',
      }} />
      <div style={{
        position: 'absolute', top: '-15%', right: '-5%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,107,60,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '80px 32px' }}>

        {/* Top trust bar */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 20,
          background: 'rgba(200,168,75,0.1)', border: '1px solid rgba(200,168,75,0.25)',
          borderRadius: 40, padding: '8px 20px', marginBottom: 32, flexWrap: 'wrap',
        }}>
          {trustPoints.map((t, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: '#c8a84b' }}>
              <t.icon size={13} /> {t.text}
              {i < trustPoints.length - 1 && <span style={{ color: 'rgba(200,168,75,0.3)', marginLeft: 8 }}>|</span>}
            </span>
          ))}
        </div>

        <div style={{ maxWidth: 800 }}>
          {/* Company name */}
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.45)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 16 }}>
            {company.name}
          </div>

          <h1 style={{
            fontSize: 'clamp(30px, 5vw, 56px)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.12,
            marginBottom: 10,
            letterSpacing: '-0.5px',
          }}>
            Complete Supply &amp; Service
          </h1>
          <h1 style={{
            fontSize: 'clamp(30px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.12,
            marginBottom: 28,
            letterSpacing: '-0.5px',
            background: 'linear-gradient(90deg, #6ee7a0, #c8a84b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Solutions for EMRS &amp; Institutions
          </h1>

          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8,
            marginBottom: 16,
            maxWidth: 640,
          }}>
            Trusted supplier of food grains, furniture, manpower, vehicles and institutional supplies to <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Eklavya Model Residential Schools</strong> across Madhya Pradesh, Chhattisgarh and Odisha.
          </p>

          {/* Highlight pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
            {highlights.map(h => (
              <span key={h} style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'rgba(110,231,160,0.1)', border: '1px solid rgba(110,231,160,0.25)',
                color: '#6ee7a0', fontSize: 12, fontWeight: 600, padding: '5px 14px',
                borderRadius: 20,
              }}>
                <CheckCircle size={11} /> {h}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <button onClick={() => scrollTo('#projects')} className="btn btn-green" style={{ fontSize: 15, padding: '15px 34px', borderRadius: 10 }}>
              View Our Work <ArrowRight size={16} />
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn" style={{
              fontSize: 15, padding: '15px 34px', borderRadius: 10,
              background: 'rgba(255,255,255,0.08)', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.2)',
            }}>
              <Phone size={15} /> Contact Us
            </button>
            <button onClick={() => scrollTo('#profile')} className="btn btn-outline-white" style={{ fontSize: 14, padding: '15px 28px', borderRadius: 10 }}>
              <Download size={15} /> Company Profile
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          marginTop: 72,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.09)',
          backdropFilter: 'blur(8px)',
        }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              textAlign: 'center',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              position: 'relative',
            }}>
              <div style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#6ee7a0', lineHeight: 1.1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
        }
      `}</style>
    </section>
  );
}
