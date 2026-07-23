const Skills = () => {
  const [activeTab, setActiveTab] = React.useState('all');

  const skillsData = [
    // Languages
    { name: 'Python', category: 'languages', icon: '🐍', desc: 'Data structures, AI, ML & Backend' },
    { name: 'JavaScript', category: 'languages', icon: '⚡', desc: 'Modern ES6+, DOM manipulation & Async' },
    { name: 'HTML5', category: 'languages', icon: '🌐', desc: 'Semantic tags, Accessibility & Structure' },
    { name: 'CSS3', category: 'languages', icon: '🎨', desc: 'Flexbox, Grid, Animations & Responsive Design' },
    
    // Frameworks & Backend
    { name: 'Django', category: 'frameworks', icon: '🎸', desc: 'Full-stack web applications & ORM' },
    { name: 'REST APIs', category: 'frameworks', icon: '🔌', desc: 'API design, HTTP methods & Integration' },
    { name: 'React (Basic)', category: 'frameworks', icon: '⚛️', desc: 'Component architecture, Hooks & State' },

    // Databases & VC
    { name: 'MySQL', category: 'databases', icon: '🛢️', desc: 'Relational data modeling & SQL queries' },
    { name: 'PostgreSQL', category: 'databases', icon: '🐘', desc: 'Database administration & queries' },
    { name: 'Git & GitHub', category: 'databases', icon: '📦', desc: 'Version control, branching & collaboration' },

    // Tools & OS
    { name: 'VS Code', category: 'tools', icon: '💻', desc: 'Primary IDE & extension ecosystem' },
    { name: 'PyCharm', category: 'tools', icon: '🐍', desc: 'Python development & debugging' },
    { name: 'Windows & Linux', category: 'tools', icon: '🐧', desc: 'Cross-platform command line & workflows' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Stack</div>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-subtitle">
            Technologies and developer tools I work with to turn ideas into high-performing web applications.
          </p>
        </div>

        {/* Skill Category Filter */}
        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Stack ({skillsData.length})
          </button>
          <button 
            className={`filter-btn ${activeTab === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveTab('languages')}
          >
            Languages
          </button>
          <button 
            className={`filter-btn ${activeTab === 'frameworks' ? 'active' : ''}`}
            onClick={() => setActiveTab('frameworks')}
          >
            Frameworks & Web
          </button>
          <button 
            className={`filter-btn ${activeTab === 'databases' ? 'active' : ''}`}
            onClick={() => setActiveTab('databases')}
          >
            Databases & Git
          </button>
          <button 
            className={`filter-btn ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools & OS
          </button>
        </div>

        {/* Skill Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div className="glass-card skill-card" key={index}>
              <div className="skill-icon-badge">{skill.icon}</div>
              <div className="skill-info">
                <h4>{skill.name}</h4>
                <div className="skill-cat">{skill.category}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
