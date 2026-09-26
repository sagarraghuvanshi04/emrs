import React, { useState } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { institutions } from '../data/siteData';

const states = [
  {
    name: 'Madhya Pradesh',
    abbr: 'MP',
    desc: 'Active operations with established supply chains and institutional partnerships.',
    color: '#0f2444',
  },
  {
    name: 'Chhattisgarh',
    abbr: 'CG',
    desc: 'Serving EMRS and government institutions across the state.',
    color: '#1a6b3c',
  },
  {
    name: 'Odisha',
    abbr: 'OD',
    desc: 'Growing presence with supply and service contracts in the state.',
    color: '#1e4d8c',
  },
];

// Real coordinates for each work-order location
// SVG viewBox maps approx lat/lng of central India region
// lat: 17–27, lng: 74–87 → mapped to SVG 0–300 x 0–320
const locationPins = [
  { name: 'Eklavya Adarsh Awasiya Vidyalaya, Jaitpur', place: 'Jaitpur, MP',        service: 'Ration / Food Items', state: 'MP', lat: 23.90, lng: 80.85 },
  { name: 'EMRS Junnardeo',                            place: 'Junnardeo, Chhindwara, MP', service: 'Vehicle Hiring',   state: 'MP', lat: 22.02, lng: 78.58 },
  { name: 'EMRS Bhainsdehi',                           place: 'Bhainsdehi, Betul, MP',    service: 'Furniture Supply',  state: 'MP', lat: 21.65, lng: 77.63 },
  { name: 'EMRS Chicholi',                             place: 'Chicholi, Betul, MP',      service: 'Name Board Supply', state: 'MP', lat: 21.88, lng: 77.67 },
  { name: 'EMRS Tamiya',                               place: 'Tamiya, Chhindwara, MP',   service: 'Name Board Supply', state: 'MP', lat: 22.45, lng: 78.45 },
  { name: 'EMRS Narharpur',  place: 'Narharpur, Kanker, CG',    service: 'Dress & Shoes',     state: 'CG', lat: 20.52, lng: 81.68 },
  { name: 'EMRS Jagdalpur',  place: 'Jagdalpur, Bastar, CG',    service: 'Security Services',  state: 'CG', lat: 19.07, lng: 82.03 },
  { name: 'EMRS Dongariya',  place: 'Dongariya, GPM, CG',       service: 'Water Cooler Supply', state: 'CG', lat: 22.75, lng: 81.70 },
  { name: 'EMRS Bastana',    place: 'Bastana, Jagdalpur, CG',   service: 'Computer Supply',     state: 'CG', lat: 19.20, lng: 81.95 },
];

const stateColor = { MP: '#0f2444', CG: '#1a6b3c', OD: '#1e4d8c' };

// Convert lat/lng to SVG x/y
// Region: lat 19.5–25.5, lng 76.5–84.5
function toSVG(lat, lng) {
  const x = ((lng - 76.5) / (84.5 - 76.5)) * 300;
  const y = ((25.5 - lat) / (25.5 - 19.5)) * 280 + 20;
  return { x, y };
}

export default function Presence() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="presence" className="section section-alt">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Our Reach</span>
          <h2 className="section-title">Our Operational Presence</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            Currently serving institutions across 3 states with an expanding operational network.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="presence-grid">

          {/* Map Visual */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%', maxWidth: 460,
              background: '#fff', borderRadius: 16,
              border: '1px solid #e5e7eb',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              padding: '24px 24px 20px',
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 12, textAlign: 'center' }}>
                Work Order Locations — MP &amp; CG
              </div>

              {/* SVG Map */}
              <div style={{ position: 'relative' }}>
                <svg viewBox="0 0 300 320" style={{ width: '100%' }} xmlns="http://www.w3.org/2000/svg">
                  {/* MP region background */}
                  <ellipse cx="130" cy="130" rx="115" ry="90" fill="#dbeafe" opacity="0.5" />
                  <text x="80" y="80" fill="#1e40af" fontSize="9" fontWeight="600" opacity="0.6">Madhya Pradesh</text>

                  {/* CG region background */}
                  <ellipse cx="210" cy="230" rx="70" ry="55" fill="#dcfce7" opacity="0.5" />
                  <text x="185" y="295" fill="#166534" fontSize="9" fontWeight="600" opacity="0.6">Chhattisgarh</text>

                  {/* Grid lines */}
                  {[77, 79, 81, 83].map(lng => {
                    const x = ((lng - 76.5) / 8) * 300;
                    return <line key={lng} x1={x} y1="0" x2={x} y2="320" stroke="#e5e7eb" strokeWidth="0.5" />;
                  })}
                  {[21, 22, 23, 24, 25].map(lat => {
                    const y = ((25.5 - lat) / 6) * 280 + 20;
                    return <line key={lat} x1="0" y1={y} x2="300" y2={y} stroke="#e5e7eb" strokeWidth="0.5" />;
                  })}

                  {/* Location pins */}
                  {locationPins.map((loc, i) => {
                    const { x, y } = toSVG(loc.lat, loc.lng);
                    const color = stateColor[loc.state];
                    const isHovered = hovered === i;
                    return (
                      <g key={i} style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}>
                        {/* Pulse ring */}
                        <circle cx={x} cy={y} r={isHovered ? 14 : 10} fill={color} opacity="0.15"
                          style={{ transition: 'r 0.2s' }} />
                        {/* Pin dot */}
                        <circle cx={x} cy={y} r={6} fill={color} stroke="#fff" strokeWidth="2" />
                        {/* Pin number */}
                        <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="7" fontWeight="700">{i + 1}</text>
                        {/* Tooltip on hover */}
                        {isHovered && (
                          <g>
                            <rect x={x - 70} y={y - 46} width="140" height="36" rx="5"
                              fill="#0f2444" opacity="0.95" />
                            <text x={x} y={y - 30} textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700">{loc.place}</text>
                            <text x={x} y={y - 18} textAnchor="middle" fill="#c8a84b" fontSize="7">{loc.service}</text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Legend */}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 12 }}>
                {states.slice(0, 2).map(s => (
                  <div key={s.abbr} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: s.color }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#374151' }}>{s.name}</span>
                  </div>
                ))}
              </div>

              {/* Pin list */}
              <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {locationPins.map((loc, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '7px 10px', borderRadius: 7,
                    background: hovered === i ? '#f0f4ff' : '#f7f8fa',
                    border: `1px solid ${hovered === i ? '#bfdbfe' : '#e5e7eb'}`,
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}>
                    <div style={{
                      width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                      background: stateColor[loc.state],
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ color: '#fff', fontSize: 9, fontWeight: 700 }}>{i + 1}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#0f2444', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{loc.place}</div>
                      <div style={{ fontSize: 10, color: '#6b7280' }}>{loc.service}</div>
                    </div>
                    <span style={{
                      fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 10,
                      background: stateColor[loc.state] + '18', color: stateColor[loc.state],
                    }}>{loc.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* State Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {states.map((s, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 10, padding: '20px 24px',
                border: '1px solid #e5e7eb',
                borderLeft: `4px solid ${s.color}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                display: 'flex', alignItems: 'flex-start', gap: 16,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: s.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>
                  <MapPin size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: '#0f2444' }}>{s.name}</h4>
                    <span style={{
                      background: '#dcfce7', color: '#166534',
                      fontSize: 10, fontWeight: 700, padding: '2px 8px',
                      borderRadius: 20, letterSpacing: '0.5px',
                    }}>ACTIVE</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
                  {/* Locations in this state */}
                  <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {locationPins.filter(l => l.state === s.abbr).map((l, j) => (
                      <span key={j} style={{
                        fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 20,
                        background: s.color + '12', color: s.color, border: `1px solid ${s.color}30`,
                      }}>
                        📍 {l.place.split(',')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div style={{
              background: 'linear-gradient(135deg, #0f2444, #1a3a6b)',
              borderRadius: 10, padding: '20px 24px', color: '#fff',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <CheckCircle size={16} color="#6ee7a0" />
                <span style={{ fontWeight: 700, fontSize: 14 }}>Expanding Network</span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Our operational network is designed for rapid expansion. Additional states can be added as we grow our institutional partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .presence-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
