import React from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';

import '../assets/main-layout.css';

const MainLayout = () => {
  // const location = useLocation();
  // const navigate = useNavigate();



  return (
    <>
      {/* --- HEADER --- */}
      <nav className="global-header">
        <div className="header-container">
          <Link to="/home" className="brand-logo">DroneMaker</Link>

          <div className="nav-links">
            {/* Thêm logic đổi class "active" dựa vào URL */}
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/news" className="nav-link">News</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="header-actions">
            <div className="search-wrapper">
              <input
                className="search-input"
                placeholder="Search technology..."
                type="text"
              />
            </div>
            <Link to="/cart" className="action-icon-btn">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
            <Link to="/admin/login" className="action-icon-btn">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          </div>    
        </div>
      </nav>

      {/* --- RENDER TRANG CON Ở ĐÂY (Vd: About, Home) --- */}
      <Outlet />

      {/* --- FOOTER --- */}
      <footer className="global-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="brand-logo-footer">DroneMaker</span>
            <p className="footer-desc">
              Engineering the next frontier of autonomous flight systems and aerial intelligence.
            </p>
          </div>

          <div className="footer-col">
            <h6 className="footer-heading">Company Info</h6>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/press" className="footer-link">Press Kit</Link>
          </div>

          <div className="footer-col">
            <h6 className="footer-heading">Categories</h6>
            <Link to="/industrial" className="footer-link">Industrial</Link>
            <Link to="/consumer" className="footer-link">Consumer</Link>
            <Link to="/software" className="footer-link">Software</Link>
          </div>

          <div className="footer-col">
            <h6 className="footer-heading">Newsletter</h6>
            <p className="newsletter-text">Get tech updates weekly.</p>
            <form className="newsletter-form">
              <input
                className="newsletter-input"
                placeholder="Email"
                type="email"
              />
              <button className="newsletter-btn" type="button">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">© 2024 DroneMaker. All Rights Reserved.</div>
          <div className="social-links">
            <span className="material-symbols-outlined social-icon">social_leaderboard</span>
            <span className="material-symbols-outlined social-icon">public</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;