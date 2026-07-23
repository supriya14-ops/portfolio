const Certifications = () => {
  const certs = [
    {
      title: 'Full Stack Development Course',
      issuer: 'Dhee Coding Lab',
      status: 'Currently Pursuing',
      icon: '🚀',
      desc: 'Comprehensive training in modern frontend & backend architectures, databases, and full stack web development.'
    },
    {
      title: 'Basics of Python',
      issuer: 'Infosys Springboard',
      status: 'Completed Certification',
      icon: '🏆',
      desc: 'Core Python syntax, object-oriented programming, data structures, and algorithmic logic certification.'
    }
  ];

  return (
    <section id="certifications" className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Learning & Credentials</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and official skill validations.
          </p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, index) => (
            <div className="glass-card cert-card" key={index}>
              <div className="cert-badge-icon">{cert.icon}</div>
              <div className="cert-info">
                <h4>{cert.title}</h4>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="exp-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                  {cert.status}
                </div>
                <p className="cert-desc">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
