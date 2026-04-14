// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Cột trái: Sidebar cố định */}
      
      {/* Cột phải: Nội dung thay đổi theo route (Không làm load lại trang) */}
      <main className="admin-content">
        <Outlet /> 
      </main>
    </div>
  );
}

export default AdminLayout;