import React, { useState } from 'react';
import { FileText, Eye, Download, Shield, Award, CheckCircle, X, ExternalLink, Lock, Calendar, Hash, Building2 } from 'lucide-react';
import { documents } from '../data/siteData';

const typeIcon = {
  'Business Credential': Shield,
  'Work Order': FileText,
  'Experience Certificate': Award,
  'Completion Certificate': CheckCircle,
  'Appreciation Letter': Award,
  'Purchase Order': FileText,
};

const typeColor = {
  'Business Credential': '#0f2444',
  'Work Order': '#1a6b3c',
  'Experience Certificate': '#1e4d8c',
  'Completion Certificate': '#166534',
  'Appreciation Letter': '#7c3d0f',
  'Purchase Order': '#0f766e',
};

const tabs = [
  { key: 'business', label: 'Business Credentials', icon: Shield, desc: 'GST, PAN, UDYAM and firm registrations' },
  { key: 'tenders', label: 'Work Orders & Tenders', icon: FileText, desc: 'Tender documents and work orders received' },
  { key: 'certificates', label: 'Certificates & Letters', icon: Award, desc: 'Experience, completion and appreciation documents' },
];

function DocViewer({ doc, onClose }) {
  const isPdf = doc.fileType === 'pdf';
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 3000,
      background: 'rgba(0,0,0,0.85)',
      display: 'flex', flexDirection: 'column',
    }} onClick={onClose}>
      {/* Toolbar */}
      <div style={{
        background: '#0f2444', padding: '12px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexShrink: 0,
      }} onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <FileText size={18} color="#6ee7a0" />
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{doc.name}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{doc.type}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {doc.file && (
            <a href={doc.file} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', padding: '7px 14px', borderRadius: 6,
              fontSize: 12, fontWeight: 600, textDecoration: 'none',
            }}>
              <ExternalLink size={13} /> Open in New Tab
            </a>
          )}
          {doc.file && (
            <a href={doc.file} download style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: '#1a6b3c', border: 'none',
              color: '#fff', padding: '7px 14px', borderRadius: 6,
              fontSize: 12, fontWeight: 600, textDecoration: 'none',
            }}>
              <Download size={13} /> Download
            </a>
          )}
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)', border: 'none',
            color: '#fff', cursor: 'pointer', borderRadius: 6, padding: '7px 10px',
          }}><X size={18} /></button>
        </div>
      </div>

      {/* Viewer area */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        onClick={e => e.stopPropagation()}>
        {doc.file ? (
          isPdf ? (
            <iframe
              src={doc.file}
              title={doc.name}
              style={{ width: '100%', maxWidth: 900, height: '100%', border: 'none', borderRadius: 8 }}
            />
          ) : (
            <img src={doc.file} alt={doc.name} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8, objectFit: 'contain' }} />
          )
        ) : (
          <div style={{
            background: 'rgba(255,255,255,0.05)', border: '2px dashed rgba(255,255,255,0.15)',
            borderRadius: 16, padding: '60px 40px', textAlign: 'center', maxWidth: 480,
          }}>
            <Lock size={48} color="rgba(255,255,255,0.2)" style={{ margin: '0 auto 16px' }} />
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Document Not Yet Uploaded</div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7 }}>
              Place the file in <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4 }}>public/documents/</code> and update the <code style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4 }}>file</code> field in siteData.js
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DocCard({ doc }) {
  const [viewing, setViewing] = useState(false);
  const Icon = typeIcon[doc.type] || FileText;
  const color = typeColor[doc.type] || '#0f2444';
  const hasFile = !!doc.file;

  return (
    <>
      <div style={{
        background: '#fff', borderRadius: 12, padding: '20px 22px',
        border: `1px solid ${hasFile ? '#e5e7eb' : '#e5e7eb'}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.09)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
      >
        {/* Status strip */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: hasFile ? color : '#e5e7eb',
        }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{
            width: 46, height: 46, borderRadius: 10, flexShrink: 0,
            background: color + '12',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={20} color={color} />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 4 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0f2444', lineHeight: 1.35 }}>{doc.name}</div>
              <span style={{
                flexShrink: 0, fontSize: 10, fontWeight: 700, padding: '3px 8px',
                borderRadius: 20, letterSpacing: '0.3px',
                background: hasFile ? '#dcfce7' : '#f3f4f6',
                color: hasFile ? '#166534' : '#9ca3af',
              }}>{hasFile ? 'UPLOADED' : 'PENDING'}</span>
            </div>

            <div style={{ fontSize: 11, color: '#6b7280', fontWeight: 500, marginBottom: 10 }}>{doc.type}</div>

            {/* Metadata */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 14 }}>
              {doc.issuer && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                  <Building2 size={11} /> {doc.issuer}
                </span>
              )}
              {(doc.number || doc.ref) && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                  <Hash size={11} /> {doc.number || doc.ref}
                </span>
              )}
              {doc.date && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                  <Calendar size={11} /> {doc.date}
                </span>
              )}
              {doc.state && (
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#6b7280' }}>
                  📍 {doc.state}
                </span>
              )}
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setViewing(true)} style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '7px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                background: hasFile ? color : '#f3f4f6',
                border: 'none',
                color: hasFile ? '#fff' : '#9ca3af',
                cursor: hasFile ? 'pointer' : 'default',
                fontFamily: 'Inter, sans-serif',
              }}>
                <Eye size={13} /> View
              </button>
              {hasFile && (
                <a href={doc.file} download style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '7px 14px', borderRadius: 6, fontSize: 12, fontWeight: 600,
                  background: '#f3f4f6', border: '1px solid #e5e7eb',
                  color: '#374151', textDecoration: 'none',
                }}>
                  <Download size={13} /> Download
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {viewing && <DocViewer doc={doc} onClose={() => setViewing(false)} />}
    </>
  );
}

export default function Documents() {
  const [tab, setTab] = useState('business');
  const activeTab = tabs.find(t => t.key === tab);
  const docs = documents[tab] || [];
  const uploadedCount = docs.filter(d => d.file).length;

  return (
    <section id="documents" className="section section-dark">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label section-label-light">Credentials & Documents</span>
          <h2 className="section-title" style={{ color: '#fff' }}>Documents & Credentials</h2>
          <div className="divider divider-center" style={{ background: '#c8a84b' }} />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.6)', margin: '0 auto' }}>
            Our business registrations, tender documents, work orders and certificates — all in one place.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          {tabs.map(t => {
            const TIcon = t.icon;
            const isActive = tab === t.key;
            return (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '11px 22px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                cursor: 'pointer', border: '2px solid',
                borderColor: isActive ? '#c8a84b' : 'rgba(255,255,255,0.15)',
                background: isActive ? '#c8a84b' : 'rgba(255,255,255,0.05)',
                color: isActive ? '#0f2444' : 'rgba(255,255,255,0.7)',
                fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
              }}>
                <TIcon size={15} /> {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab info bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.06)', borderRadius: 8,
          padding: '12px 20px', marginBottom: 24, flexWrap: 'wrap', gap: 8,
        }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>{activeTab?.desc}</span>
          <span style={{
            fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20,
            background: uploadedCount > 0 ? 'rgba(26,107,60,0.3)' : 'rgba(255,255,255,0.08)',
            color: uploadedCount > 0 ? '#6ee7a0' : 'rgba(255,255,255,0.4)',
          }}>
            {uploadedCount} / {docs.length} Uploaded
          </span>
        </div>

        {/* Document cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 860, margin: '0 auto' }}>
          {docs.map((doc, i) => <DocCard key={i} doc={doc} />)}
        </div>

        {/* Upload instructions */}
        <div style={{
          marginTop: 36, padding: '20px 24px',
          background: 'rgba(200,168,75,0.08)',
          border: '1px dashed rgba(200,168,75,0.3)',
          borderRadius: 10, maxWidth: 860, margin: '36px auto 0',
        }}>
          <div style={{ color: '#c8a84b', fontWeight: 700, fontSize: 13, marginBottom: 6 }}>📁 How to Upload Documents</div>
          <ol style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, lineHeight: 2, paddingLeft: 18 }}>
            <li>Copy your PDF file into <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: 3 }}>public/documents/business/</code>, <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: 3 }}>work-orders/</code> or <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: 3 }}>certificates/</code></li>
            <li>Open <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: 3 }}>src/data/siteData.js</code> and find the document entry</li>
            <li>Set <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 6px', borderRadius: 3 }}>file: "/documents/business/your-file.pdf"</code></li>
            <li>Save — the View and Download buttons will activate automatically</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
