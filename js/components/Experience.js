const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work Experience</div>
          <h2 className="section-title">Research & Industry Exposure</h2>
          <p className="section-subtitle">
            Hands-on research experience at premier academic institutes.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="glass-card timeline-card">
              <span className="exp-badge">Research Internship</span>
              
              <h3 className="exp-title">Research Intern</h3>
              <div className="exp-company">
                Indian Institute of Science (IISc), Bangalore, India
              </div>
              
              <div className="exp-meta">
                <span>📍 Department of Computational and Data Sciences (CDS)</span>
                <span>📅 Sep 2024 – Oct 2024</span>
                <span>👨‍🏫 Under Prof. K Sekar</span>
              </div>

              <div style={{ padding: '0.8rem 1.2rem', background: 'rgba(99, 102, 241, 0.08)', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <strong style={{ color: 'var(--accent-primary)', fontSize: '0.95rem' }}>Primary Project:</strong>
                <span style={{ color: 'var(--text-primary)', marginLeft: '0.5rem', fontSize: '0.95rem' }}>
                  Development of Tools and Servers to Analyze Three-Dimensional Protein Structures
                </span>
              </div>

              <ul className="exp-list">
                <li>
                  Completed a intensive 2-month research internship at IISc Bangalore's CDS department under the supervision of Prof. K Sekar.
                </li>
                <li>
                  Maintained and executed functional testing for the <strong>MIPDS web application</strong>, ensuring robust cross-browser compatibility and optimizing frontend scripts for faster page load times.
                </li>
                <li>
                  Worked with complex 3D protein structure dataset formats, assisting in data organization, validation pipelines, and frontend web portal updates.
                </li>
              </ul>

              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">HTML5</span>
                <span className="tech-tag">CSS3</span>
                <span className="tech-tag">MIPDS Web App</span>
                <span className="tech-tag">Bioinformatics Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
