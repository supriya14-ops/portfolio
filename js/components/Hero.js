const Hero = () => {
  const roles = ["Full Stack Developer", "IISc Research Intern", "AI & Web Enthusiast"];
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>Available for Full Stack Roles</span>
            </div>

            <h1 className="hero-title">
              Hello, I'm <br />
              <span className="gradient-text">Supriya B K</span>
            </h1>

            <div className="hero-role">
              <span>I build</span>
              <span className="gradient-text-cyan">{displayText}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className="hero-desc">
              Seeking a Full Stack Developer position where I can apply my technical skills in Python, React, JavaScript, and Web Technologies to build innovative, user-centric applications and drive meaningful digital impact.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                <span>View My Work</span>
                <span>🚀</span>
              </a>
              <a href="mailto:supriyabk2005@gmail.com" className="btn btn-outline">
                <span>Contact Me</span>
                <span>✉️</span>
              </a>
              <a 
                href="https://github.com/supriya14-ops" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline"
                style={{ padding: '0.75rem 1rem' }}
                title="GitHub Profile"
              >
                <span>GitHub ↗</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/supriya-b-k-52239625b" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline"
                style={{ padding: '0.75rem 1rem' }}
                title="LinkedIn Profile"
              >
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="portrait-glow-ring"></div>
            
            {/* Photo frame without overlapping badge animations */}
            <div className="portrait-card">
              <img 
                src="./assets/supriya_profile.jpg" 
                alt="Supriya B K - Full Stack Developer" 
                className="portrait-img" 
              />
            </div>
          </div>
        </div>

        {/* Quick Stats Ribbon */}
        <div className="stats-bar glass-card">
          <div className="stat-item">
            <div className="stat-num gradient-text">9.28</div>
            <div className="stat-label">Academic CGPA</div>
          </div>
          <div className="stat-item">
            <div className="stat-num gradient-text-cyan">IISc</div>
            <div className="stat-label">Research Internship</div>
          </div>
          <div className="stat-item">
            <div className="stat-num gradient-text">2+</div>
            <div className="stat-label">Full Stack & AI Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};
