const Contact = ({ showToast }) => {
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast('✨ Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`📋 Copied ${label} to clipboard!`);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have an opportunity, a project idea, or just want to connect, feel free to drop a message!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="glass-card contact-info-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Contact Information</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              I am actively looking for Full Stack Developer roles and internship opportunities.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="method-icon">✉️</div>
                <div className="method-details" style={{ flexGrow: 1 }}>
                  <label>Email Address</label>
                  <a href="mailto:supriyabk2005@gmail.com">supriyabk2005@gmail.com</a>
                </div>
                <button 
                  className="btn btn-outline" 
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={() => copyToClipboard('supriyabk2005@gmail.com', 'Email')}
                >
                  Copy
                </button>
              </div>

              <div className="contact-method-item">
                <div className="method-icon">📱</div>
                <div className="method-details" style={{ flexGrow: 1 }}>
                  <label>Phone Number</label>
                  <a href="tel:+919019398843">+91 9019398843</a>
                </div>
                <button 
                  className="btn btn-outline" 
                  style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                  onClick={() => copyToClipboard('+919019398843', 'Phone')}
                >
                  Copy
                </button>
              </div>

              <div className="contact-method-item">
                <div className="method-icon">💼</div>
                <div className="method-details">
                  <label>LinkedIn Profile</label>
                  <a href="https://www.linkedin.com/in/supriya-b-k-52239625b" target="_blank" rel="noreferrer">
                    linkedin.com/in/supriya-b-k-52239625b ↗
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon">📦</div>
                <div className="method-details">
                  <label>GitHub Profile</label>
                  <a href="https://github.com/supriya14-ops" target="_blank" rel="noreferrer">
                    github.com/supriya14-ops ↗
                  </a>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <label>Location</label>
                  <span>Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="e.g. Rahul Sharma" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="e.g. rahul@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  className="form-input" 
                  placeholder="Full Stack Developer Opportunity / Inquiry" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <span>🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
