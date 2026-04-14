import React from 'react';
import '../assets/admin-login.css'; // Đảm bảo import CSS

const AdminLogin = () => {
  return (
    <div className="login-page">
      
      {/* Hero Background Element */}
      <div className="login-bg">
        <img 
          alt="Abstract geometric background" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjfNnSK73iews7k3ZMk8mruDzri3TenusS9l324XgqsAq4HgGv6eBT2FIOzNdEHHH6ZLChEF3zXGoyF7JPYeeXXVIyM2Nk_73Lg2E5aEIYNU7DbN5taXuEK3gGvobH6ab1Denckyt8B8lnObchKCUoPJpd7pcCYbQ0hHSTfLTF-kQBH-a3ZBCy5_gO1nDkA088Ty8NAcr8fElT0JVQ_c7sj8v5LUiwuy5ZModLwzZaz8ir_HAGfYduS_JPiBP8b33IoBJrjftLLxY" 
        />
      </div>

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', justifyContent: 'center' }}>
        
        {/* Login Card */}
        <div className="login-card">
          
          {/* Brand Identity */}
          <div className="login-brand">
            <div className="brand-icon-box">
              <span className="material-symbols-outlined">flight_takeoff</span>
            </div>
            <h1 className="brand-title">DroneMaker</h1>
            <p className="brand-subtitle">Administrative Portal</p>
          </div>

          {/* Login Form */}
          <form className="login-form">
            
            {/* Username Field */}
            <div className="form-group">
              <div className="label-row">
                <label className="form-label" htmlFor="username">Username</label>
              </div>
              <div className="input-wrapper">
                <span className="material-symbols-outlined input-icon-left">person</span>
                <input 
                  className="form-input" 
                  id="username" 
                  name="username" 
                  placeholder="admin_id" 
                  type="text" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <div className="label-row">
                <label className="form-label" htmlFor="password">Password</label>
                <a className="forgot-link" href="#">Forgot Access?</a>
              </div>
              <div className="input-wrapper has-right-icon">
                <span className="material-symbols-outlined input-icon-left">lock</span>
                <input 
                  className="form-input" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••••••" 
                  type="password" 
                />
                <button type="button" className="input-icon-right">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="checkbox-group">
              <input 
                className="custom-checkbox" 
                id="remember-me" 
                name="remember-me" 
                type="checkbox" 
              />
              <label className="checkbox-label" htmlFor="remember-me">
                Keep session active for 24 hours
              </label>
            </div>

            {/* Submit Button */}
            <button className="btn-login" type="submit">
              Login
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>

          </form>

          {/* Footer Message */}
          <div className="login-footer-msg">
            <p className="restricted-text">
              Restricted area. Unauthorized access is strictly monitored.
            </p>
            <div className="version-info">
              <span>PRECISION E1</span>
              <span>V.4.22.0</span>
            </div>
          </div>

        </div>
      </main>

      {/* System Status Indicator (Decorative Editorial Element) */}
      <div className="system-status-indicator">
        <div className="status-text-group">
          <span className="status-title">Systems Nominal</span>
          <span className="status-coords">Lat: 34.0522° N | Long: 118.2437° W</span>
        </div>
        <div className="status-dot"></div>
      </div>

      {/* Bottom Aesthetic Accent */}
      <div className="bottom-accent">
        <div className="bottom-accent-fill"></div>
      </div>

    </div>
  );
};

export default AdminLogin;