const Projects = () => {
  const projectsData = [
    {
      title: 'Event Management Application',
      category: 'Web Development',
      badge: 'Full Stack Web App',
      icon: '🎉',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Development', 'Vercel'],
      desc: 'An end-to-end interactive platform for discovering, creating, and managing event schedules seamlessly with real-time UI filtering and high availability.',
      bullets: [
        'Architected and deployed an end-to-end interactive event management platform enabling users to browse, create, and manage event schedules seamlessly.',
        'Implemented responsive user interface layouts, interactive event details, and dynamic client-side filtering for enhanced user engagement.',
        'Deployed the application on Vercel ensuring high availability, optimized resource loading, and fast access across modern web browsers.'
      ],
      liveUrl: 'https://vercel.com',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.15))'
    },
    {
      title: 'Smart Medicinal Plant Identifier',
      category: 'AI & Machine Learning',
      badge: 'Computer Vision & AI',
      icon: '🌿',
      tech: ['Python', 'CNN', 'PSO', 'SVM', 'Web Development', 'Vercel'],
      desc: 'An AI-powered computer vision application that classifies medicinal plant species from leaf images and reveals therapeutic botanical data.',
      bullets: [
        'Built a web-based AI tool leveraging computer vision and machine learning (CNN, PSO, SVM) to classify medicinal plant species from leaf images.',
        'Preprocessed and structured large-scale image datasets, optimizing model training efficiency and achieving high classification accuracy.',
        'Developed an intuitive web interface hosted on Vercel that delivers detailed botanical names, therapeutic properties, and health benefits to end-users.'
      ],
      liveUrl: 'https://vercel.com',
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25), rgba(16, 185, 129, 0.15))'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of web applications and AI tools I have architected, developed, and deployed live.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div className="glass-card project-card" key={idx}>
              <div className="project-preview" style={{ background: project.gradient }}>
                <div className="project-preview-icon">{project.icon}</div>
                <span className="exp-badge" style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                  {project.badge}
                </span>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="exp-list" style={{ marginBottom: '1.25rem' }}>
                  {project.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: '0.9rem' }}>{b}</li>
                  ))}
                </div>

                <div className="tech-tags" style={{ marginBottom: '1.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Deployed on Vercel</span>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <a 
                      href="https://github.com/supriya14-ops" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link-btn"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span>GitHub</span>
                      <span>↗</span>
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link-btn"
                    >
                      <span>Live Demo</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
