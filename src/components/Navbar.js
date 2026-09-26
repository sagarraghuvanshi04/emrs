import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { company } from '../data/siteData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(15,36,68,0.98)' : 'rgba(15,36,68,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.2)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: 18, letterSpacing: '-0.3px', lineHeight: 1.2 }}>{company.name}</span>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 500 }}>EMRS & Institutional Solutions</span>
        </div>

        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-desktop">
          {navLinks.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)} style={{
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)',
              fontSize: 13, fontWeight: 500, padding: '8px 14px', cursor: 'pointer',
              borderRadius: 6, transition: 'all 0.2s', fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.2px',
            }}
              onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.8)'; e.target.style.background = 'none'; }}
            >{l.label}</button>
          ))}
          <button onClick={() => handleNav('#contact')} className="btn btn-green btn-sm" style={{ marginLeft: 8 }}>Get In Touch</button>
        </div>

        <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{
          background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8, display: 'none'
        }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{
          background: 'rgba(15,36,68,0.99)', borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)',
              fontSize: 15, fontWeight: 500, padding: '12px 0',
              borderBottom: '1px solid rgba(255,255,255,0.07)', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}>{l.label}</button>
          ))}
          <button onClick={() => handleNav('#contact')} className="btn btn-green" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>Get In Touch</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
