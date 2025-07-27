import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Expert Guidance',
      description: 'Our experienced team provides personalized assistance throughout your visa application process.'
    },
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'We ensure quick turnaround times without compromising on accuracy and completeness.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Your documents and personal information are handled with utmost security and confidentiality.'
    },
    {
      icon: '💫',
      title: '100% Success Rate',
      description: 'Our proven track record speaks for itself with thousands of successful visa applications.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <h2 className="section-title">Why Choose Blessing Flying Trip?</h2>
            <p className="about-description">
              At Blessing Flying Trip, we understand that obtaining a visa or passport can be a complex 
              and stressful process. That's why we're dedicated to making your travel dreams a reality 
              by providing comprehensive visa and passport services for all countries worldwide.
            </p>
            <p className="about-description">
              With years of experience in the travel industry, our expert team has successfully helped 
              thousands of travelers secure their visas and passports. We stay updated with the latest 
              immigration policies and requirements to ensure your application has the highest chance of success.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value">10,000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">195+</div>
                <div className="stat-label">Countries Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">Start Your Journey</a>
          </div>
          
          <div className="about-features fade-in-right">
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    <span>{feature.icon}</span>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="process-section fade-in-up">
          <h3 className="process-title">Our Simple Process</h3>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Consultation</h4>
                <p>Free consultation to understand your travel requirements and destination.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Documentation</h4>
                <p>We help you prepare and review all necessary documents for your application.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Application</h4>
                <p>Submit your application with our expert guidance and follow-up support.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Approval</h4>
                <p>Receive your approved visa/passport and start planning your amazing trip!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
