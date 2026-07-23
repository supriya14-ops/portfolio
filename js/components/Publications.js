const Publications = () => {
  const publicationsData = [
    {
      title: 'A Novel Design of Interactive Education Robot',
      type: 'Design Patent',
      meta: 'Application No: 457872-001',
      desc: 'Developed an interactive, ergonomic physical and digital design for educational robotics aimed at enhancing stem learning experiences.',
      icon: '⚙️',
      badgeClass: 'patent-badge'
    },
    {
      title: 'DFT Aware Test Architecture for Communication ICs',
      type: 'Research Paper',
      meta: 'Published & Scopus Indexed',
      desc: 'Research focusing on Design-for-Testability (DFT) aware architectures to optimize testing efficiency and reliability in communication integrated circuits.',
      icon: '🔬',
      badgeClass: 'paper-badge'
    },
    {
      title: 'Blockchain and Cryptography: A Comparative Analysis',
      type: 'Research Paper',
      meta: 'Published in IJRASET (Int. Journal of Scientific Research in Computer Science, Engineering & Info Tech)',
      desc: 'A comparative research analysis on security architectures, consensus mechanisms, and cryptographic foundations of blockchain networks.',
      icon: '📜',
      badgeClass: 'paper-badge'
    }
  ];

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Academic & IP</div>
          <h2 className="section-title">Publications & Patents</h2>
          <p className="section-subtitle">
            Research papers and patent filings in robotics, hardware architecture, and distributed ledger technologies.
          </p>
        </div>

        <div className="certs-grid" style={{ marginTop: '2rem' }}>
          {publicationsData.map((item, index) => (
            <div className="glass-card cert-card" key={index}>
              <div 
                className="cert-badge-icon" 
                style={{ 
                  background: item.type === 'Design Patent' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(99, 102, 241, 0.12)',
                  color: item.type === 'Design Patent' ? 'var(--accent-cyan)' : 'var(--accent-primary)'
                }}
              >
                {item.icon}
              </div>
              <div className="cert-info">
                <h4>{item.title}</h4>
                <div 
                  className="exp-badge" 
                  style={{ 
                    marginBottom: '0.5rem', 
                    display: 'inline-block',
                    background: item.type === 'Design Patent' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                    color: item.type === 'Design Patent' ? 'var(--accent-cyan)' : 'var(--accent-primary)'
                  }}
                >
                  {item.type}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {item.meta}
                </div>
                <p className="cert-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
