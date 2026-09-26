import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryCategories } from '../data/siteData';

const galleryItems = [
  { id: 1,  src: '/images/projects/food-grain.png',         category: 'Food Supply',      caption: 'Ration & Food Items — Eklavya Adarsh Awasiya Vidyalaya, Jaitpur' },
  { id: 2,  src: '/images/projects/fur.jpeg',               category: 'Furniture',        caption: 'Furniture Supply — EMRS Bhainsdehi, Betul' },
  { id: 3,  src: '/images/projects/fur1.jpeg',              category: 'Furniture',        caption: 'Furniture Supply — EMRS Bhainsdehi, Betul' },
  { id: 4,  src: '/images/projects/image.png',              category: 'Vehicles',         caption: 'Vehicle Hiring / Taxi Service — EMRS Junnardeo, Chhindwara' },
  { id: 5,  src: '/images/projects/dress1.avif',            category: 'School Work',      caption: 'Dress & Shoes Supply — EMRS Narharpur, Kanker' },
  { id: 6,  src: '/images/projects/board.jpeg',             category: 'School Work',      caption: 'Name Board Supply — EMRS Chicholi & EMRS Tamiya' },
  { id: 7,  src: '/images/projects/nameplate-chicholi.jpeg',category: 'School Work',      caption: 'Name Plate — EMRS Chicholi, Betul' },
  { id: 8,  src: '/images/projects/security.avif',          category: 'Manpower',         caption: 'Security Services — EMRS Jagdalpur, Bastar' },
  { id: 9,  src: '/images/projects/water cooler.avif',      category: 'Other',            caption: 'Water Cooler Supply — EMRS Dongariya, GPM, Bilaspur' },
  { id: 10, src: '/images/projects/tv.avif',                category: 'Other',            caption: 'TV Supply — EMRS Dongariya, GPM, Bilaspur' },
  { id: 11, src: '/images/projects/pole.avif',              category: 'Other',            caption: 'Pole Supply — EMRS Dongariya, GPM, Bilaspur' },
  { id: 12, src: '/images/projects/bed.avif',               category: 'Other',            caption: 'Bed Supply — EMRS Jagdalpur, Bastar' },
  { id: 13, src: '/images/projects/computer.avif',          category: 'Computer Lab',     caption: 'Computer Supply — EMRS Bastana, Jagdalpur, Bastar' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategory);

  // Only show categories that have images
  const usedCategories = ['All', ...new Set(galleryItems.map(g => g.category))];

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Visual Portfolio</span>
          <h2 className="section-title">Our Work Gallery</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            Visual documentation of our supply, service and project work across institutions.
          </p>
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {usedCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '8px 18px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              cursor: 'pointer', border: '1.5px solid',
              borderColor: activeCategory === cat ? '#0f2444' : '#d1d5db',
              background: activeCategory === cat ? '#0f2444' : '#fff',
              color: activeCategory === cat ? '#fff' : '#374151',
              fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
            }}>{cat}</button>
          ))}
        </div>

        {/* Gallery grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {filtered.map(item => (
            <div key={item.id} style={{
              position: 'relative', borderRadius: 12, overflow: 'hidden',
              cursor: 'pointer', border: '1px solid #e5e7eb',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              background: '#f1f5f9',
            }}
              onClick={() => setLightbox(item)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                e.currentTarget.querySelector('.gallery-overlay').style.opacity = '0';
              }}
            >
              <img src={item.src} alt={item.caption}
                style={{ width: '100%', height: 210, objectFit: 'cover', display: 'block' }} />
              <div className="gallery-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'rgba(15,36,68,0.72)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.2s', padding: 16,
              }}>
                <ZoomIn size={28} color="#fff" />
                <span style={{ color: '#fff', fontSize: 12, fontWeight: 600, marginTop: 10, textAlign: 'center', lineHeight: 1.5 }}>{item.caption}</span>
              </div>
              <div style={{ padding: '10px 14px', background: '#fff' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 20,
                  background: '#f3f4f6', color: '#374151',
                }}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'rgba(0,0,0,0.92)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: 24,
        }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} style={{
            position: 'absolute', top: 20, right: 20,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            color: '#fff', cursor: 'pointer', borderRadius: 8, padding: 10,
          }}><X size={20} /></button>
          <div style={{ maxWidth: 860, width: '100%', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} style={{
              maxWidth: '100%', maxHeight: '78vh', borderRadius: 12,
              objectFit: 'contain', boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            }} />
            <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 16, fontSize: 14, fontWeight: 500 }}>
              {lightbox.caption}
            </p>
            <span style={{
              display: 'inline-block', marginTop: 6,
              fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20,
              background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)',
            }}>{lightbox.category}</span>
          </div>
        </div>
      )}
    </section>
  );
}
