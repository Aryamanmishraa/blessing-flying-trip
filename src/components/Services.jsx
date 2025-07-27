import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🌍',
      title: 'Tourist Visa',
      description: 'Get tourist visas for all countries worldwide. We handle the entire process from application to approval.',
      features: ['All Countries', 'Fast Processing', 'Document Assistance', '24/7 Support']
    },
    {
      icon: '💼',
      title: 'Business Visa',
      description: 'Business visa services for professionals and entrepreneurs looking to expand globally.',
      features: ['Corporate Solutions', 'Multiple Entry', 'Priority Processing', 'Consultation']
    },
    {
      icon: '🎓',
      title: 'Student Visa',
      description: 'Student visa assistance for educational opportunities across the globe.',
      features: ['University Partnerships', 'Document Review', 'Interview Prep', 'Ongoing Support']
    },
    {
      icon: '🏥',
      title: 'Medical Visa',
      description: 'Medical visa services for healthcare and treatment purposes in any country.',
      features: ['Medical Documentation', 'Hospital Coordination', 'Emergency Processing', 'Family Visas']
    },
    {
      icon: '📘',
      title: 'Passport Services',
      description: 'Complete passport application and renewal services with expert guidance.',
      features: ['New Applications', 'Renewals', 'Emergency Passport', 'Expedited Service']
    },
    {
      icon: '✈️',
      title: 'Transit Visa',
      description: 'Transit visa assistance for layovers and connecting flights worldwide.',
      features: ['Airport Transit', 'Multiple Countries', 'Short Processing', 'Travel Planning']
    }
  ]

  const countries = [
    '🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇩🇪 Germany', '🇫🇷 France',
    '🇮🇹 Italy', '🇪🇸 Spain', '🇯🇵 Japan', '🇰🇷 South Korea', '🇸🇬 Singapore', '🇦🇪 UAE',
    '🇸🇦 Saudi Arabia', '🇹🇭 Thailand', '🇲🇾 Malaysia', '🇳🇱 Netherlands', '🇸🇪 Sweden', '🇳🇴 Norway'
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title fade-in-up">Our Services</h2>
          <p className="section-subtitle fade-in-up">
            Comprehensive visa and passport services for all your travel needs across 195+ countries
          </p>
        </div>

        <div className="services-grid grid grid-3 fade-in-up">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-btn">Get Started</a>
            </div>
          ))}
        </div>

        <div className="countries-section">
          <h3 className="countries-title fade-in-up">Countries We Cover</h3>
          <div className="countries-grid fade-in-up">
            {countries.map((country, index) => (
              <div key={index} className="country-item">
                {country}
              </div>
            ))}
          </div>
          <p className="countries-note fade-in-up">
            <span className="highlight">195+ Countries</span> covered worldwide. Don't see your destination? Contact us!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
