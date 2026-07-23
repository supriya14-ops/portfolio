const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ fontWeight: '800', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
              <span className="gradient-text">Supriya B K</span>
            </div>
            <p className="footer-text">
              Full Stack Developer & Research Intern | PES College of Engineering
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/supriya14-ops" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-text"
              style={{ fontWeight: '600' }}
            >
              GitHub ↗
            </a>
            <a 
              href="https://www.linkedin.com/in/supriya-b-k-52239625b" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-text"
              style={{ fontWeight: '600' }}
            >
              LinkedIn ↗
            </a>

            <p className="footer-text">
              © {new Date().getFullYear()} Supriya B K.
            </p>

            <button 
              className="back-to-top" 
              onClick={scrollToTop} 
              title="Back to Top"
              aria-label="Back to Top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
