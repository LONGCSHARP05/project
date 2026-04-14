import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/admin-login.css'; // Đảm bảo import CSS

const AdminLogin = () => {
  // 1. Khởi tạo state để lưu trữ dữ liệu người dùng nhập
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  // 1. Thêm state để quản lý việc hiển thị mật khẩu
  const [showPassword, setShowPassword] = useState(false);

  // 2. Hàm xử lý đảo ngược trạng thái
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // State để hiển thị thông báo lỗi nếu nhập sai
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();

  // 2. Hàm xử lý khi người dùng gõ vào ô input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Cập nhật đúng trường đang gõ (username hoặc password)
    });
    // Xóa lỗi khi người dùng bắt đầu gõ lại
    if (errorMessage) setErrorMessage('');
  };

  // 3. Hàm xử lý khi nhấn nút Đăng nhập
  const handleLogin = (e) => {
    e.preventDefault(); // Ngăn trình duyệt load lại trang mặc định của thẻ <form>

    // 4. Mock Data Logic (Kiểm tra cứng dữ liệu)
    const MOCK_USERNAME = 'admin';
    const MOCK_PASSWORD = '123'; // Đặt mật khẩu giả đơn giản để test

    if (formData.username === MOCK_USERNAME && formData.password === MOCK_PASSWORD) {
      // Đăng nhập thành công:
      // a. Lưu một token giả vào Local Storage để xác nhận là đã login
      localStorage.setItem('adminToken', 'dummy-token-xyz-789');
      
      // b. Chuyển hướng vào trang Dashboard
      navigate('/admin/dashboard');
    } else {
      // Đăng nhập thất bại:
      setErrorMessage('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
  };

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
          <form className="login-form" onSubmit={handleLogin}>
            
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
                  value={formData.username}
                  onChange={handleChange}
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
                  type={showPassword ? 'text' : 'password'}
                  className="form-input" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••••••" 
                  value={formData.password}
                  onChange={handleChange}
                />
                <button type="button" className="input-icon-right" onClick={togglePasswordVisibility}>
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
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

            {/* Khu vực hiển thị lỗi nếu có */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

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