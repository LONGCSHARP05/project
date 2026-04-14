// // src/layouts/MainLayout.jsx
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// function AdminLayout() {
//   return (
//     <div className="admin-layout">
//       {/* Cột trái: Sidebar cố định */}
      
//       {/* Cột phải: Nội dung thay đổi theo route (Không làm load lại trang) */}
//       <main className="admin-content">
//         <Outlet /> 
//       </main>
//     </div>
//   );
// }

// export default AdminLayout;


import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import '../assets/admin-layout.css'; // Đảm bảo đường dẫn file CSS chính xác

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa token đăng nhập ở đây (nếu có)
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-wrapper">
      {/* Thêm class 'collapsed' vào thẻ aside dựa trên state 
      */}
      <aside className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        
        {/* Click vào khu vực header này sẽ kích hoạt thu/phóng */}
        <div 
          className="sidebar-header toggle-btn" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          title="Thu/Phóng Sidebar"
        >
          <span className="material-symbols-outlined toggle-icon">
            {isCollapsed ? 'menu' : 'menu_open'}
          </span>
          {/* Ẩn text khi bị thu nhỏ */}
          {!isCollapsed && (
            <div className="sidebar-text-container">
              <h1 className="sidebar-title">Admin Panel</h1>
              <p className="sidebar-subtitle">DroneMaker Control</p>
            </div>
          )}
        </div>
        
        <nav className="sidebar-nav">
          {/* Sử dụng NavLink để tự động bắt class active/inactive */}
          <NavLink to="/admin/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : 'inactive'}`}>
            <span className="material-symbols-outlined">dashboard</span>
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>
          
          <NavLink to="/admin/product-overview" className={({ isActive }) => `nav-item ${isActive ? 'active' : 'inactive'}`}>
            <span className="material-symbols-outlined">inventory_2</span>
            {!isCollapsed && <span>Products</span>}
          </NavLink>
          
          <NavLink to="/admin/order-management" className={({ isActive }) => `nav-item ${isActive ? 'active' : 'inactive'}`}>
            <span className="material-symbols-outlined">shopping_cart</span>
            {!isCollapsed && <span>Orders</span>}
          </NavLink>
          
          <NavLink to="/admin/article-management" className={({ isActive }) => `nav-item ${isActive ? 'active' : 'inactive'}`}>
            <span className="material-symbols-outlined">article</span>
            {!isCollapsed && <span>Articles</span>}
          </NavLink>
          
          <NavLink to="/admin/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : 'inactive'}`}>
            <span className="material-symbols-outlined">settings</span>
            {!isCollapsed && <span>Settings</span>}
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <img 
              alt="Admin Avatar" 
              className="user-avatar" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_7ItPuO4VEenGTpZRUGboSyevCaJ8Zi4bummiSA1PXqNh1xkDAYfjidCTqGR-2NtedX2_bNs5dwG_iaghwI0ljBPpJYFsdojxQRcQaPF8RKXT6NKNs4H-4c7mV5le3G6wwtP79fTHocIIx9SirInHeOPBOCi_UGx28PuFZdEXxMHL4YRzdiuZ-KphBlXDBdMUIjJqNITDNAFttyIdEEAHnMvDBWTTUEcFyrbEtr_UkP_KGRHThOGlRVXNCGZ56rxtVSSdaPP1Ztk" 
            />
            {!isCollapsed && (
              <div>
                <p className="user-name">Long</p>
                <p className="user-role">System Lead</p>
              </div>
            )}
          </div>
          <button className="btn-logout" onClick={handleLogout}>
            <span className="material-symbols-outlined text-sm">logout</span>
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="admin-main-content">
        <main className="admin-page-container">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;