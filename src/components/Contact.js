import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Download, Clock, Send } from 'lucide-react';
import { company } from '../data/siteData';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            Reach out to discuss your institutional supply and service requirements. We respond promptly.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="contact-grid">

          {/* Left: Contact Info */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #0f2444, #1a3a6b)',
              borderRadius: 16, padding: '36px 32px', color: '#fff',
            }}>
              <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{company.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 32, lineHeight: 1.6 }}>
                EMRS & Institutional Supply and Service Provider<br />
                Madhya Pradesh · Chhattisgarh · Odisha
              </p>

              {[
                { icon: Phone, label: 'Phone', values: ['7566557608', '7691933327'], type: 'tel' },
                { icon: MessageCircle, label: 'WhatsApp', values: ['7566557608', '7691933327'], type: 'wa' },
                { icon: Mail, label: 'Email', values: [company.email], type: 'mail' },
                { icon: MapPin, label: 'Office Address', values: [company.address], type: null },
              ].map((c, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 14, marginBottom: 20,
                  paddingBottom: 20,
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <c.icon size={18} color="#6ee7a0" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>{c.label}</div>
                    {c.values.map((v, j) => {
                      const href = c.type === 'tel' ? `tel:${v}` : c.type === 'wa' ? `https://wa.me/91${v}` : c.type === 'mail' ? `mailto:${v}` : null;
                      return href ? (
                        <a key={j} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 500, lineHeight: 1.8 }}>{v}</a>
                      ) : (
                        <span key={j} style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 500, lineHeight: 1.8 }}>{v}</span>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
                <Clock size={13} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Mon–Sat, 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Quick action buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
              <a href="tel:7566557608" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: 13 }}>
                <Phone size={15} /> 7566557608
              </a>
              <a href="tel:7691933327" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: 13 }}>
                <Phone size={15} /> 7691933327
              </a>
              <a href="https://wa.me/917566557608" className="btn btn-green" style={{ justifyContent: 'center', fontSize: 13 }}>
                <MessageCircle size={15} /> WhatsApp 1
              </a>
              <a href="https://wa.me/917691933327" className="btn btn-green" style={{ justifyContent: 'center', fontSize: 13 }}>
                <MessageCircle size={15} /> WhatsApp 2
              </a>
              <a href="mailto:viplavnagde04@gmail.com" className="btn btn-secondary" style={{ justifyContent: 'center', fontSize: 13, gridColumn: '1 / -1' }}>
                <Mail size={15} /> viplavnagde04@gmail.com
              </a>
              <button onClick={() => document.querySelector('#profile')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn" style={{ background: '#c8a84b', color: '#0f2444', justifyContent: 'center', fontSize: 13, fontWeight: 700, gridColumn: '1 / -1' }}>
                <Download size={15} /> Company Profile
              </button>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div style={{
            background: '#fff', borderRadius: 16, padding: '36px 32px',
            border: '1px solid #e5e7eb', boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f2444', marginBottom: 6 }}>Send Us a Message</h3>
            <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 28 }}>We will get back to you within 24 hours.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {['Your Name', 'Institution / Organization'].map(placeholder => (
                  <div key={placeholder}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{placeholder}</label>
                    <input placeholder={placeholder} style={{
                      width: '100%', padding: '10px 14px', borderRadius: 8,
                      border: '1.5px solid #e5e7eb', fontSize: 13, color: '#374151',
                      fontFamily: 'Inter, sans-serif', outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                      onFocus={e => e.target.style.borderColor = '#0f2444'}
                      onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                ))}
              </div>

              {['Phone Number', 'Email Address'].map(placeholder => (
                <div key={placeholder}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{placeholder}</label>
                  <input placeholder={placeholder} style={{
                    width: '100%', padding: '10px 14px', borderRadius: 8,
                    border: '1.5px solid #e5e7eb', fontSize: 13, color: '#374151',
                    fontFamily: 'Inter, sans-serif', outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                    onFocus={e => e.target.style.borderColor = '#0f2444'}
                    onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Service Required</label>
                <select style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1.5px solid #e5e7eb', fontSize: 13, color: '#374151',
                  fontFamily: 'Inter, sans-serif', outline: 'none', background: '#fff',
                }}>
                  <option>Select a service...</option>
                  <option>Supply & Procurement</option>
                  <option>Manpower Services</option>
                  <option>Technology & Electrical</option>
                  <option>Transport & Logistics</option>
                  <option>Maintenance & Facility</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea placeholder="Describe your requirement..." rows={4} style={{
                  width: '100%', padding: '10px 14px', borderRadius: 8,
                  border: '1.5px solid #e5e7eb', fontSize: 13, color: '#374151',
                  fontFamily: 'Inter, sans-serif', outline: 'none', resize: 'vertical',
                  transition: 'border-color 0.2s',
                }}
                  onFocus={e => e.target.style.borderColor = '#0f2444'}
                  onBlur={e => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <button className="btn btn-primary" style={{ justifyContent: 'center', padding: '13px', fontSize: 14 }}>
                <Send size={16} /> Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
