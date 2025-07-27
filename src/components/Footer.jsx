import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Tourist Visa', href: '#services' },
    { name: 'Business Visa', href: '#services' },
    { name: 'Student Visa', href: '#services' },
    { name: 'Medical Visa', href: '#services' },
    { name: 'Passport Services', href: '#services' },
    { name: 'Transit Visa', href: '#services' }
  ]

  const popularCountries = [
    '🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia',
    '🇩🇪 Germany', '🇫🇷 France', '🇯🇵 Japan', '🇸🇬 Singapore'
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-top">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <div className="plane">
                    <span>✈️</span>
                  </div>
                  <div className="blessing-text">
                    <span className="blessing">Blessing</span>
                    <span className="flying">Flying</span>
                    <span className="trip">Trip</span>
                  </div>
                </div>
              </div>
              <p className="footer-description">
                Your trusted partner for visa and passport services worldwide. 
                Making travel dreams come true with expert guidance and seamless processing.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">💬</a>
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href={service.href}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Popular Destinations</h3>
              <div className="popular-countries">
                {popularCountries.map((country, index) => (
                  <span key={index} className="country-tag">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@blessingflyingtrip.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123 Travel Street, NY 10001</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <span>Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Blessing Flying Trip. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
