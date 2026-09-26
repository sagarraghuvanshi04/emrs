import React, { useState } from 'react';
import {
  Wheat, ShoppingBasket, UtensilsCrossed, Bed, BookOpen, Trophy, Sparkles, Zap, Armchair, MoreHorizontal,
  Brush, Shield, ChefHat, UserCheck, Users, Monitor, Cpu, Network, Wifi, Tv, Camera,
  Car, Truck, Package, MapPin, HardHat, Droplets, Wrench, Hammer, Building2, ArrowRight,
  Shirt, Footprints, ShoppingBag
} from 'lucide-react';
import { services } from '../data/siteData';

const iconMap = {
  Wheat, ShoppingBasket, UtensilsCrossed, Bed, BookOpen, Trophy, Sparkles, Zap, Armchair, MoreHorizontal,
  Brush, Shield, ChefHat, UserCheck, Users, Monitor, Cpu, Network, Wifi, Tv, Camera,
  Car, Truck, Package, MapPin, HardHat, Droplets, Wrench, Hammer, Building2,
  Shirt, Footprints, ShoppingBag,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const active = services[activeTab];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            Comprehensive supply and service solutions tailored for EMRS, government schools and institutional clients.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center',
          marginBottom: 48, padding: '4px',
        }}>
          {services.map((s, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600,
              cursor: 'pointer', border: '2px solid',
              borderColor: activeTab === i ? s.color : '#e5e7eb',
              background: activeTab === i ? s.color : '#fff',
              color: activeTab === i ? '#fff' : '#374151',
              transition: 'all 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}>
              {s.category}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 20,
        }}>
          {active.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={i} style={{
                background: '#fff', borderRadius: 10, padding: '24px 20px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = active.color;
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: active.color + '15',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                }}>
                  {Icon && <Icon size={20} color={active.color} />}
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#0f2444', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65, marginBottom: 14 }}>{item.desc}</p>
                <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 12, fontWeight: 600, color: active.color,
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 0, fontFamily: 'Inter, sans-serif',
                  }}>
                  View Details <ArrowRight size={12} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
