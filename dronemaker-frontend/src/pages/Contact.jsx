import React from 'react';
import '../assets/contact.css'; // Đảm bảo import đúng đường dẫn file CSS

const Contact = () => {
  return (
    <main className="contact-page">
      
      {/* 1. Header Section */}
      <section className="contact-header">
        <p className="contact-label">Connect With Us</p>
        <h1 className="contact-title">Trang Liên hệ</h1>
        <div className="contact-divider"></div>
      </section>

      {/* 2. Grid Content */}
      <div className="contact-grid">
        
        {/* Left Column: Form */}
        <div className="contact-form-card">
          <h2 className="form-title">Gửi tin nhắn cho chúng tôi</h2>
          <form className="form-wrapper">
            
            <div className="form-group">
              <label className="form-label">Họ và tên</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Nguyễn Văn A" 
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
              <label className="form-label">Địa chỉ</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Hà Nội, Việt Nam" 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Lời nhắn</label>
              <textarea 
                className="form-textarea" 
                placeholder="Chúng tôi có thể giúp gì cho bạn?" 
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Gửi Yêu Cầu
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
                <p>Địa chỉ</p>
                <p>Khu Công Nghệ Cao Hòa Lạc, Thạch Thất, Hà Nội, Việt Nam</p>
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
            
            <div className="map-floating-bar">
              <div className="map-floating-left">
                <span className="material-symbols-outlined map-icon">map</span>
                <span className="map-floating-text">Mở bản đồ trực tuyến</span>
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