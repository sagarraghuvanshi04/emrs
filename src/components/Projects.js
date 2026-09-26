import React, { useState } from 'react';
import { MapPin, Calendar, Tag, X, Image, FileText, IndianRupee, Layers, Eye, Download } from 'lucide-react';
import { projects, projectStateFilters, projectServiceFilters } from '../data/siteData';

const stateBadge = { 'Madhya Pradesh': 'badge-blue', 'Chhattisgarh': 'badge-green', 'Odisha': 'badge-purple' };

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = React.useState(0);
  const images = project.images || [];
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 2000,
      background: 'rgba(0,0,0,0.7)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 24,
    }} onClick={onClose}>
      <div style={{
        background: '#fff', borderRadius: 16, maxWidth: 680, width: '100%',
        maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ background: '#0f2444', padding: '24px 28px', borderRadius: '16px 16px 0 0', position: 'relative' }}>
          <button onClick={onClose} style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            color: '#fff', cursor: 'pointer', borderRadius: 8, padding: 8,
          }}><X size={18} /></button>
          <span className={`badge ${stateBadge[project.state] || 'badge-blue'}`} style={{ marginBottom: 10, display: 'inline-block' }}>{project.state}</span>
          <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{project.name}</h3>
          {project.institutions ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
              {project.institutions.map((inst, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#c8a84b', fontSize: 12, fontWeight: 700 }}>#{i + 1}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{inst.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>— {inst.location}</span>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>{project.institution}</p>
          )}
        </div>

        <div style={{ padding: '28px' }}>
          {/* Project images */}
          {images.length > 0 ? (
            <div style={{ position: 'relative', width: '100%', height: 220, borderRadius: 10, marginBottom: 24, background: '#f1f5f9', overflow: 'hidden' }}>
              <img src={images[imgIndex]} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              {images.length > 1 && (
                <>
                  <button onClick={() => setImgIndex(i => (i - 1 + images.length) % images.length)} style={{
                    position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.45)', border: 'none', color: '#fff',
                    borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: 16,
                  }}>‹</button>
                  <button onClick={() => setImgIndex(i => (i + 1) % images.length)} style={{
                    position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.45)', border: 'none', color: '#fff',
                    borderRadius: '50%', width: 32, height: 32, cursor: 'pointer', fontSize: 16,
                  }}>›</button>
                  <div style={{ position: 'absolute', bottom: 8, width: '100%', display: 'flex', justifyContent: 'center', gap: 6 }}>
                    {images.map((_, i) => (
                      <div key={i} onClick={() => setImgIndex(i)} style={{
                        width: 7, height: 7, borderRadius: '50%', cursor: 'pointer',
                        background: i === imgIndex ? '#0f2444' : 'rgba(0,0,0,0.25)',
                      }} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="placeholder-img" style={{ width: '100%', height: 200, marginBottom: 24 }}>
              <Image size={36} />
              <span>[PROJECT IMAGES]</span>
            </div>
          )}

          {/* Details grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            {[
              { icon: MapPin, label: 'Location', value: project.location },
              { icon: Tag, label: 'Category', value: project.category },
              { icon: Calendar, label: 'Work Period', value: project.period },
              { icon: IndianRupee, label: 'Project Value', value: project.value },
            ].map((d, i) => (
              <div key={i} style={{ background: '#f7f8fa', borderRadius: 8, padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                  <d.icon size={13} color="#6b7280" />
                  <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{d.label}</span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0f2444' }}>{d.value}</div>
              </div>
            ))}
          </div>

          {/* Scope */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <Layers size={14} color="#1a6b3c" />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Scope of Work</span>
            </div>
            <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, background: '#f7f8fa', padding: '14px 16px', borderRadius: 8 }}>{project.scope}</p>
          </div>

          {/* Per-project documents */}
          {project.docs && project.docs.length > 0 && (
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12 }}>Supporting Documents</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {project.docs.map((doc, i) => {
                  const hasFile = !!doc.file;
                  return (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: '#f7f8fa', border: '1px solid #e5e7eb',
                      borderRadius: 8, padding: '10px 14px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <FileText size={14} color={hasFile ? '#1a6b3c' : '#9ca3af'} />
                        <span style={{ fontSize: 13, fontWeight: 600, color: hasFile ? '#0f2444' : '#9ca3af' }}>{doc.label}</span>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20,
                          background: hasFile ? '#dcfce7' : '#f3f4f6',
                          color: hasFile ? '#166534' : '#9ca3af',
                        }}>{hasFile ? 'AVAILABLE' : 'PENDING'}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {hasFile && (
                          <>
                            <a href={doc.file} target="_blank" rel="noreferrer" style={{
                              display: 'flex', alignItems: 'center', gap: 4,
                              padding: '5px 10px', borderRadius: 5, fontSize: 11, fontWeight: 600,
                              background: '#0f2444', color: '#fff', textDecoration: 'none',
                            }}><Eye size={11} /> View</a>
                            <a href={doc.file} download style={{
                              display: 'flex', alignItems: 'center', gap: 4,
                              padding: '5px 10px', borderRadius: 5, fontSize: 11, fontWeight: 600,
                              background: '#f3f4f6', border: '1px solid #e5e7eb',
                              color: '#374151', textDecoration: 'none',
                            }}><Download size={11} /> Download</a>
                          </>
                        )}
                        {!hasFile && (
                          <span style={{ fontSize: 11, color: '#9ca3af', fontStyle: 'italic' }}>Not yet uploaded</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [stateFilter, setStateFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = projects.filter(p => {
    const stateOk = stateFilter === 'All' || p.state === stateFilter;
    const serviceOk = serviceFilter === 'All' || p.category === serviceFilter;
    return stateOk && serviceOk;
  });

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header section-header-center">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">Projects & Work Done</h2>
          <div className="divider divider-center" />
          <p className="section-subtitle">
            A portfolio of institutional supply and service projects delivered across EMRS and government institutions.
          </p>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', marginRight: 12 }}>Filter by State:</span>
            <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap' }}>
              {projectStateFilters.map(f => (
                <button key={f} onClick={() => setStateFilter(f)} style={{
                  padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  cursor: 'pointer', border: '1.5px solid',
                  borderColor: stateFilter === f ? '#0f2444' : '#d1d5db',
                  background: stateFilter === f ? '#0f2444' : '#fff',
                  color: stateFilter === f ? '#fff' : '#374151',
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
                }}>{f}</button>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px', marginRight: 12 }}>Filter by Service:</span>
            <div style={{ display: 'inline-flex', gap: 8, flexWrap: 'wrap' }}>
              {projectServiceFilters.map(f => (
                <button key={f} onClick={() => setServiceFilter(f)} style={{
                  padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
                  cursor: 'pointer', border: '1.5px solid',
                  borderColor: serviceFilter === f ? '#1a6b3c' : '#d1d5db',
                  background: serviceFilter === f ? '#1a6b3c' : '#fff',
                  color: serviceFilter === f ? '#fff' : '#374151',
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.15s',
                }}>{f}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))', gap: 40 }}>
          {filtered.map(p => (
            <div key={p.id} onClick={() => setSelected(p)} style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.13)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)'; }}
            >
              {/* Image */}
              {p.images && p.images.length > 0 ? (
                <div style={{ width: '100%', height: 260, overflow: 'hidden', background: '#f1f5f9', position: 'relative' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  {p.images.length > 1 && (
                    <div style={{
                      position: 'absolute', bottom: 12, right: 12,
                      background: 'rgba(0,0,0,0.55)', color: '#fff',
                      fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20,
                    }}>+{p.images.length - 1} more</div>
                  )}
                </div>
              ) : (
                <div className="placeholder-img" style={{ height: 260, borderRadius: 0, border: 'none', background: '#f1f5f9' }}>
                  <Image size={40} color="#9ca3af" />
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>No Image</span>
                </div>
              )}

              {/* Content */}
              <div style={{ padding: '28px 30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Badges */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                  <span className={`badge ${stateBadge[p.state] || 'badge-blue'}`} style={{ fontSize: 12, padding: '4px 12px' }}>{p.state}</span>
                  <span className="badge badge-orange" style={{ fontSize: 12, padding: '4px 12px' }}>{p.category}</span>
                </div>

                {/* Title */}
                <h4 style={{ fontSize: 19, fontWeight: 700, color: '#0f2444', marginBottom: 8, lineHeight: 1.3 }}>{p.name}</h4>

                {/* Institution(s) */}
                {p.institutions ? (
                  <div style={{ marginBottom: 14 }}>
                    {p.institutions.map((inst, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#1a6b3c', fontWeight: 600, lineHeight: 1.8 }}>
                        <span style={{ color: '#c8a84b', fontWeight: 800 }}>›</span> {inst.name}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: 15, color: '#1a6b3c', fontWeight: 600, marginBottom: 14 }}>{p.institution}</p>
                )}

                {/* Meta row */}
                <div style={{ display: 'flex', gap: 20, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#6b7280' }}>
                    <MapPin size={13} color="#c8a84b" /> {p.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#6b7280' }}>
                    <Calendar size={13} color="#c8a84b" /> {p.period}
                  </span>
                </div>

                {/* Desc */}
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.75, marginBottom: 22, flex: 1 }}>{p.desc}</p>

                {/* Footer row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: 18 }}>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>
                    {p.docs?.filter(d => d.file).length || 0} doc{p.docs?.filter(d => d.file).length !== 1 ? 's' : ''} available
                  </span>
                  <button style={{
                    background: '#0f2444', color: '#fff', border: 'none',
                    padding: '10px 22px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>View Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
            <p>No projects match the selected filters.</p>
          </div>
        )}
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
