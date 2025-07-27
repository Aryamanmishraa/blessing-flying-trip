import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    destination: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      destination: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
      link: 'tel:+15551234567'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['info@blessingflyingtrip.com', 'support@blessingflyingtrip.com'],
      link: 'mailto:info@blessingflyingtrip.com'
    },
    {
      icon: '📍',
      title: 'Office',
      details: ['123 Travel Street', 'New York, NY 10001'],
      link: '#'
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      link: '#'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title fade-in-up">Get In Touch</h2>
          <p className="section-subtitle fade-in-up">
            Ready to start your visa application? Contact us today for a free consultation!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-subtitle">
              Reach out to us through any of the following channels. Our expert team is here to help!
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">
                    <span>{info.icon}</span>
                  </div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>
                        {info.link !== '#' ? (
                          <a href={info.link}>{detail}</a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">📘</a>
                <a href="#" className="social-icon twitter">🐦</a>
                <a href="#" className="social-icon instagram">📷</a>
                <a href="#" className="social-icon linkedin">💼</a>
                <a href="#" className="social-icon whatsapp">💬</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container fade-in-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send Us a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Type *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="tourist-visa">Tourist Visa</option>
                    <option value="business-visa">Business Visa</option>
                    <option value="student-visa">Student Visa</option>
                    <option value="medical-visa">Medical Visa</option>
                    <option value="passport-services">Passport Services</option>
                    <option value="transit-visa">Transit Visa</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="destination">Destination Country</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Where do you want to travel?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
