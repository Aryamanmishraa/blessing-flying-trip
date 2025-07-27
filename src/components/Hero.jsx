import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-icons">
          <span className="icon icon-1">🌍</span>
          <span className="icon icon-2">✈️</span>
          <span className="icon icon-3">📋</span>
          <span className="icon icon-4">🛂</span>
          <span className="icon icon-5">🌟</span>
          <span className="icon icon-6">🎯</span>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Your Gateway to <span className="gradient-text">Global Travel</span>
            </h1>
            <p className="hero-subtitle fade-in-up">
              Blessing Flying Trip specializes in visa and passport services for all countries. 
              We make your travel dreams a reality with our expert assistance and seamless process.
            </p>
            
            <div className="hero-stats fade-in-up">
              <div className="stat">
                <div className="stat-number">195+</div>
                <div className="stat-label">Countries Covered</div>
              </div>
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Travelers</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
            
            <div className="hero-actions fade-in-up">
              <a href="#services" className="btn btn-primary">Explore Services</a>
              <a href="#contact" className="btn btn-secondary">Get Quote</a>
            </div>
          </div>
          
          <div className="hero-visual fade-in-right">
            <div className="passport-card">
              <div className="passport-header">
                <div className="passport-logo">
                  <span>🛂</span>
                </div>
                <div className="passport-title">VISA SERVICES</div>
              </div>
              <div className="passport-content">
                <div className="service-item">
                  <span className="service-icon">🌍</span>
                  <span>All Countries</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">⚡</span>
                  <span>Fast Processing</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">✅</span>
                  <span>Expert Guidance</span>
                </div>
                <div className="service-item">
                  <span className="service-icon">🎯</span>
                  <span>100% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
