import React from 'react';
import '../assets/contact.css';

const Contact = () => {
  return (
    <main className="contact-page">
      
      {/* 1. Header Section */}
      <nav className="breadcrumbs">
          <a href="#">Home</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Contact</span>
        </nav>

      {/* 2. Grid Content */}
      <div className="contact-grid">
        
        {/* Left Column: Form */}
        <div className="contact-form-card">
          <h2 className="form-title">Send us a message</h2>
          <form className="form-wrapper">
            
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Nguyen Van A" 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="email@example.com" 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Address</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Hanoi, Vietnam" 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea 
                className="form-textarea" 
                placeholder="How can we help you?" 
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Send Request
            </button>
            
          </form>
        </div>

        {/* Right Column: Info & Map */}
        <div className="contact-info-section">
          
          <div className="info-items-grid">
            {/* Address */}
            <div className="info-item">
              <div className="info-icon-box">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div className="info-text-group">
                <p>Address</p>
                <p>Hoa Lac Hi-Tech Park, Thach That, Hanoi, Vietnam</p>
              </div>
            </div>

            {/* Hotline */}
            <div className="info-item">
              <div className="info-icon-box">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="info-text-group">
                <p>Hotline</p>
                <p>1900 6789</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-item">
              <div className="info-icon-box">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="info-text-group">
                <p>Email</p>
                <p>support@dronemaker.vn</p>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="map-card">
            <div 
              className="map-bg" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx-VpwFuHFveytN4zhUMaMwR7RvIhO3BK3uamCHwINiZo_J3dG1eeFPAUrkNijvWQeBV1fcAQVS1mv7J8Nq-KBXIqqGwFyUbt6hrk7S_dfLMtVwb46WMKS3N28sMO11TyVVKYYTeOtCD_h4B_OKlGKFvvjd-0cNA5mo_6C9wDrYQ1efV-vVWVZVuzgEJwsKameCUgg3H4CoMmOlePI2-4xNxJ-jN4iJGwKYXrbyCiq_yL8koXp8eY9Gcs_n_Q46mnPbPLaw-HsKCo')" }}
            ></div>
            <div className="map-gradient"></div>
            
            <div onClick={() => window.open('https://www.google.com/maps/place/Khu+C%C3%B4ng+Ngh%E1%BB%87+Cao+H%C3%B2a+L%E1%BA%A1c/data=!4m2!3m1!1s0x0:0xcfc029607e11a4fe?sa=X&ved=1t:2428&ictx=111', '_blank')} className="map-floating-bar">
              <div className="map-floating-left">
                <span className="material-symbols-outlined map-icon">map</span>
                <span className="map-floating-text">Open in Maps</span>
              </div>
              <span className="material-symbols-outlined map-arrow">arrow_forward</span>
            </div>
          </div>

        </div>
      </div>
      
    </main>
  );
};

export default Contact;