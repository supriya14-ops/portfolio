const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Driven by Innovation & Quality</h2>
          <p className="section-subtitle">
            A snapshot of my background, education, and creative mindset.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: Objective & Education */}
          <div className="glass-card about-card">
            <h3>
              <span>🎯</span>
              <span>Career Objective & Background</span>
            </h3>
            <p className="about-text">
              I am an Information Science & Engineering undergraduate at PES College of Engineering with a passion for software development and artificial intelligence. My goal is to build robust, user-friendly, and scalable web solutions that drive business growth and deliver high user satisfaction.
            </p>

            <div className="education-box">
              <div className="edu-header">
                <div className="edu-title">B.E. Information Science & Engineering</div>
                <div className="edu-cgpa">CGPA: 9.28</div>
              </div>
              <div className="edu-institution">PES College of Engineering, Mandya</div>
              <div className="edu-year">2022 – 2026</div>
            </div>

            <div className="education-box">
              <div className="edu-header">
                <div className="edu-title">Pre-University Course (Science)</div>
                <div className="edu-cgpa">96.5%</div>
              </div>
              <div className="edu-institution">BGS Science PU College, Belur</div>
              <div className="edu-year">2022</div>
            </div>

            <div className="education-box">
              <div className="edu-header">
                <div className="edu-title">Secondary School Leaving Certificate (SSLC)</div>
                <div className="edu-cgpa">93.75%</div>
              </div>
              <div className="edu-institution">Divya Education Society, Belur</div>
              <div className="edu-year">2020</div>
            </div>
          </div>

          {/* Card 2: Interpersonal & Creative Hobbies */}
          <div className="glass-card about-card">
            <h3>
              <span>💡</span>
              <span>Interpersonal & Creative Mindset</span>
            </h3>
            <p className="about-text">
              Beyond writing code, I cultivate analytical thinking and attention to detail through personal creative pursuits:
            </p>

            <div className="skills-creative-list">
              <div className="creative-item">
                <div className="creative-icon">🍳</div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Problem-Solving & Adaptability (Culinary Art)</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    Enhanced time management, multitasking, and structured troubleshooting through cooking by analyzing mistakes and optimizing recipe parameters.
                  </p>
                </div>
              </div>

              <div className="creative-item">
                <div className="creative-icon">🎨</div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Visual Thinking & Design Focus (Sketching)</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    Cultivated spatial awareness, precision, and aesthetic intuition through fine-art sketching, bringing strong visual detail to frontend development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
