import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>TZKSolution</h2>
            <span className="tagline">Enterprise Technology Partners</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transforming Businesses with 
              <span className="gradient-text"> Enterprise Solutions</span>
            </h1>
            <p className="hero-description">
              From digital marketing to custom ERP/CRM/CMS development, we deliver 
              industry-level solutions that scale. Specializing in Odoo & SAP integrations 
              for enterprise transformation.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('services')}>
                Our Services
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get Consultation
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-cards">
              <div className="floating-card">Digital Marketing</div>
              <div className="floating-card">Web Applications</div>
              <div className="floating-card">ERP Solutions</div>
              <div className="floating-card">SAP Integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About TZKSolution</h2>
          <div className="about-grid">
            <div className="about-content">
              <h3>Industry-Leading Technology Partners</h3>
              <p>
                TZKSolution is a premier technology consulting firm specializing in enterprise-grade 
                solutions that drive digital transformation. With deep expertise in modern web technologies, 
                enterprise resource planning, and business process automation, we help organizations 
                achieve operational excellence.
              </p>
              <div className="stats">
                <div className="stat">
                  <h4>50+</h4>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat">
                  <h4>15+</h4>
                  <p>Enterprise Clients</p>
                </div>
                <div className="stat">
                  <h4>5+</h4>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="about-features">
              <div className="feature">
                <h4>🎯 Strategic Approach</h4>
                <p>Data-driven solutions aligned with business objectives</p>
              </div>
              <div className="feature">
                <h4>⚡ Cutting-Edge Technology</h4>
                <p>Latest frameworks and industry best practices</p>
              </div>
              <div className="feature">
                <h4>🤝 Partnership Focus</h4>
                <p>Long-term relationships built on trust and results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Digital Marketing Solutions</h3>
              <p>
                Comprehensive digital marketing strategies including SEO, social media management, 
                PPC campaigns, content marketing, and analytics-driven growth optimization.
              </p>
              <ul>
                <li>Search Engine Optimization</li>
                <li>Social Media Management</li>
                <li>PPC & Ad Campaigns</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Custom Web Applications</h3>
              <p>
                Full-stack web application development using modern technologies like React, 
                Node.js, Python, and cloud-native architectures for scalable solutions.
              </p>
              <ul>
                <li>React/Vue.js Applications</li>
                <li>API Development & Integration</li>
                <li>Cloud Deployment</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>ERP/CRM/CMS Development</h3>
              <p>
                Custom enterprise resource planning, customer relationship management, 
                and content management systems tailored to your business processes.
              </p>
              <ul>
                <li>Custom ERP Solutions</li>
                <li>CRM Development</li>
                <li>Content Management Systems</li>
                <li>Business Process Automation</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3>Odoo Integration & Customization</h3>
              <p>
                Expert Odoo implementation, customization, and integration services to 
                streamline your business operations with this powerful ERP platform.
              </p>
              <ul>
                <li>Odoo Implementation</li>
                <li>Custom Module Development</li>
                <li>Third-party Integrations</li>
                <li>Migration & Upgrades</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>SAP Integration Solutions</h3>
              <p>
                Enterprise-grade SAP integration services connecting your existing systems 
                with SAP modules for seamless data flow and process optimization.
              </p>
              <ul>
                <li>SAP System Integration</li>
                <li>Data Migration</li>
                <li>Custom SAP Development</li>
                <li>Performance Tuning</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud & DevOps Solutions</h3>
              <p>
                Modern cloud infrastructure setup, DevOps implementation, and continuous 
                integration/deployment pipelines for scalable and reliable systems.
              </p>
              <ul>
                <li>AWS/Azure Cloud Setup</li>
                <li>DevOps & CI/CD</li>
                <li>Container Solutions</li>
                <li>Monitoring & Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">🏭</div>
              </div>
              <div className="portfolio-content">
                <h3>Manufacturing ERP Solution</h3>
                <p>Custom ERP system for manufacturing company with inventory management, production planning, and quality control modules.</p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">🛒</div>
              </div>
              <div className="portfolio-content">
                <h3>E-commerce Platform</h3>
                <p>Full-featured e-commerce solution with payment integration, inventory management, and advanced analytics dashboard.</p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Python</span>
                  <span>Stripe</span>
                  <span>AWS</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">📊</div>
              </div>
              <div className="portfolio-content">
                <h3>Odoo Integration Project</h3>
                <p>Complete Odoo implementation for retail chain with custom modules for multi-location inventory and reporting.</p>
                <div className="tech-stack">
                  <span>Odoo</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>API Integration</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">🏥</div>
              </div>
              <div className="portfolio-content">
                <h3>Healthcare Management System</h3>
                <p>HIPAA-compliant healthcare management system with patient records, appointment scheduling, and billing integration.</p>
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>HIPAA</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">🌐</div>
              </div>
              <div className="portfolio-content">
                <h3>SAP Integration Platform</h3>
                <p>Enterprise integration platform connecting multiple SAP modules with third-party systems for data synchronization.</p>
                <div className="tech-stack">
                  <span>SAP</span>
                  <span>Java</span>
                  <span>REST APIs</span>
                  <span>Oracle</span>
                </div>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="portfolio-image">
                <div className="placeholder-image">📱</div>
              </div>
              <div className="portfolio-content">
                <h3>Digital Marketing Campaign</h3>
                <p>Comprehensive digital marketing campaign resulting in 300% increase in lead generation and 150% ROI improvement.</p>
                <div className="tech-stack">
                  <span>Google Ads</span>
                  <span>Facebook Ads</span>
                  <span>SEO</span>
                  <span>Analytics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's Build Something Amazing Together</h3>
              <p>
                Ready to transform your business with cutting-edge technology solutions? 
                Our team of experts is here to help you achieve your goals.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>📧 Email:</strong>
                  <p>info@tzksolution.com</p>
                </div>
                <div className="contact-item">
                  <strong>📱 Phone:</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <strong>🌍 Location:</strong>
                  <p>Global Remote Team</p>
                </div>
                <div className="contact-item">
                  <strong>⏰ Availability:</strong>
                  <p>24/7 Support Available</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="erp-crm">ERP/CRM Development</option>
                    <option value="odoo">Odoo Integration</option>
                    <option value="sap">SAP Integration</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Project Details" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>TZKSolution</h3>
              <p>Enterprise Technology Partners</p>
            </div>
            <div className="footer-links">
              <p>&copy; 2024 TZKSolution. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
