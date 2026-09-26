import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { company } from '../data/siteData';

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Supply & Procurement', 'Manpower Services',
  'Technology & Electrical', 'Transport & Logistics',
  'Maintenance & Facility',
];

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer style={{ background: '#070f1e', color: 'rgba(255,255,255,0.65)', paddingTop: 60 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 20, marginBottom: 6 }}>{company.name}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: 16 }}>EMRS & Institutional Solutions</div>
            <p style={{ fontSize: 13, lineHeight: 1.75, marginBottom: 20, maxWidth: 280 }}>
              Comprehensive supply and service solutions for EMRS, government educational institutions and institutional clients across central and eastern India.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {['MP', 'CG', 'OD'].map(s => (
                <span key={s} style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                  color: '#6ee7a0', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 4,
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>Quick Links</div>
            {footerLinks.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} style={{
                display: 'block', background: 'none', border: 'none',
                color: 'rgba(255,255,255,0.55)', fontSize: 13, padding: '5px 0',
                cursor: 'pointer', fontFamily: 'Inter, sans-serif', textAlign: 'left',
                transition: 'color 0.15s',
              }}
                onMouseEnter={e => e.target.style.color = '#6ee7a0'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
              >{l.label}</button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>Services</div>
            {services.map(s => (
              <div key={s} style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', padding: '5px 0' }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>Contact</div>
            {[
              { icon: Phone, values: ['7566557608', '7691933327'], type: 'tel' },
              { icon: MessageCircle, values: ['7566557608', '7691933327'], type: 'wa' },
              { icon: Mail, values: [company.email], type: 'mail' },
              { icon: MapPin, values: [company.address], type: null },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                <c.icon size={14} color="#6ee7a0" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  {c.values.map((v, j) => {
                    const href = c.type === 'tel' ? `tel:${v}` : c.type === 'wa' ? `https://wa.me/91${v}` : c.type === 'mail' ? `mailto:${v}` : null;
                    return href ? (
                      <a key={j} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>{v}</a>
                    ) : (
                      <span key={j} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>{v}</span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            GST: {company.gst} · PAN: {company.pan}
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
