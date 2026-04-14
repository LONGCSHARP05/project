import React from 'react';
import '../assets/admin-dashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-body">
      
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Admin Panel</h1>
          <p className="sidebar-subtitle">DroneMaker Control</p>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined">inventory_2</span>
            <span>Products</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined">article</span>
            <span>Articles</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <img 
              alt="Admin Avatar" 
              className="user-avatar" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_7ItPuO4VEenGTpZRUGboSyevCaJ8Zi4bummiSA1PXqNh1xkDAYfjidCTqGR-2NtedX2_bNs5dwG_iaghwI0ljBPpJYFsdojxQRcQaPF8RKXT6NKNs4H-4c7mV5le3G6wwtP79fTHocIIx9SirInHeOPBOCi_UGx28PuFZdEXxMHL4YRzdiuZ-KphBlXDBdMUIjJqNITDNAFttyIdEEAHnMvDBWTTUEcFyrbEtr_UkP_KGRHThOGlRVXNCGZ56rxtVSSdaPP1Ztk" 
            />
            <div>
              <p className="user-name">Alex Rivera</p>
              <p className="user-role">System Lead</p>
            </div>
          </div>
          <button className="btn-logout">
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        
        {/* TOP HEADER */}
        <header className="admin-header">
          <div className="header-brand">
            <span className="brand-text">DroneMaker</span>
            <div className="header-divider"></div>
            <h2 className="page-title">Overview</h2>
          </div>
          
          <div className="header-actions">
            <div className="search-box">
              <input 
                className="search-input" 
                placeholder="Search systems..." 
                type="text" 
              />
              <span className="material-symbols-outlined search-icon">search</span>
            </div>
            <button className="icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="icon-btn">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <div className="dashboard-content">
          
          {/* 1. HERO STATS */}
          <section className="stats-grid">
            <div className="stat-card">
              <div>
                <div className="stat-header">
                  <span className="stat-label stat-label-light">Online Users</span>
                  <div className="pulse-dot"></div>
                </div>
                <h3 className="stat-value">1,284</h3>
              </div>
              <div className="stat-footer">
                <p className="stat-trend-up">
                  <span className="material-symbols-outlined text-xs">trending_up</span>
                  +12% from last hour
                </p>
              </div>
            </div>

            <div className="stat-card">
              <div>
                <span className="stat-label stat-label-light block mb-4">Total Visitors</span>
                <h3 className="stat-value">42.5k</h3>
              </div>
              <div className="stat-footer flex items-center gap-2">
                <div className="stat-progress-bg">
                  <div className="stat-progress-fill"></div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant">70%</span>
              </div>
            </div>

            <div className="stat-card stat-card-bordered">
              <div>
                <span className="stat-label stat-label-light block mb-4">Total Products</span>
                <h3 className="stat-value">158</h3>
              </div>
              <div className="stat-footer">
                <button className="stat-link">
                  Manage Inventory
                  <span className="material-symbols-outlined text-xs">chevron_right</span>
                </button>
              </div>
            </div>

            <div className="stat-card stat-card-dark">
              <div>
                <span className="stat-label stat-label-dark block mb-4">Total Orders</span>
                <h3 className="stat-value">892</h3>
              </div>
              <div className="stat-footer">
                <p className="stat-dark-note">Monthly revenue peak: $124k</p>
              </div>
            </div>
          </section>

          {/* 2. CHARTS & LOGS */}
          <section className="middle-grid">
            
            {/* Chart */}
            <div className="chart-card">
              <div className="chart-header">
                <div>
                  <h4 className="card-title">System Performance</h4>
                  <p className="card-subtitle">Global drone telemetry & user engagement</p>
                </div>
                <select className="chart-select">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                </select>
              </div>
              
              <div className="bar-chart-container">
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '65%' }}></div>
                <div className="chart-bar" style={{ height: '50%' }}></div>
                <div className="chart-bar" style={{ height: '85%' }}></div>
                <div className="chart-bar active" style={{ height: '100%' }}></div>
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '75%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '55%' }}></div>
                <div className="chart-bar" style={{ height: '30%' }}></div>
              </div>
              <div className="chart-x-axis">
                <span>01 May</span>
                <span>10 May</span>
                <span>20 May</span>
                <span>30 May</span>
              </div>
            </div>

            {/* Logs */}
            <div className="logs-card">
              <h4 className="card-title mb-6">System Logs</h4>
              <div className="logs-list">
                
                <div className="log-item">
                  <div className="log-icon-wrapper bg-blue-light">
                    <span className="material-symbols-outlined text-sm">shopping_bag</span>
                  </div>
                  <div>
                    <p className="log-title">New Order #892</p>
                    <p className="log-desc">Pro X Drone - $1,299</p>
                    <span className="log-time">2 minutes ago</span>
                  </div>
                </div>

                <div className="log-item">
                  <div className="log-icon-wrapper bg-orange-light">
                    <span className="material-symbols-outlined text-sm">update</span>
                  </div>
                  <div>
                    <p className="log-title">Firmware Push</p>
                    <p className="log-desc">v2.4.1 deployed to North America</p>
                    <span className="log-time">45 minutes ago</span>
                  </div>
                </div>

                <div className="log-item">
                  <div className="log-icon-wrapper bg-grey-light">
                    <span className="material-symbols-outlined text-sm">person_add</span>
                  </div>
                  <div>
                    <p className="log-title">New Operator Joined</p>
                    <p className="log-desc">Sarah Jenkins (Enterprise)</p>
                    <span className="log-time">3 hours ago</span>
                  </div>
                </div>

              </div>
              <button className="btn-view-all">View All Activity</button>
            </div>
          </section>

          {/* 3. DATA TABLE */}
          <section className="table-card">
            <div className="table-header">
              <h4 className="card-title">Active Shipments</h4>
              <button className="btn-export">Export Data</button>
            </div>
            
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Drone Model</th>
                    <th>Status</th>
                    <th className="td-right">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-main">New York, USA</td>
                    <td className="td-sub">SkyMaster Gen-4</td>
                    <td><span className="status-badge badge-transit">In Transit</span></td>
                    <td className="td-right">$2,450.00</td>
                  </tr>
                  <tr>
                    <td className="td-main">Tokyo, Japan</td>
                    <td className="td-sub">Eco-Scan Mini</td>
                    <td><span className="status-badge badge-processing">Processing</span></td>
                    <td className="td-right">$890.00</td>
                  </tr>
                  <tr>
                    <td className="td-main">Berlin, Germany</td>
                    <td className="td-sub">Industrial Heavy-Lift</td>
                    <td><span className="status-badge badge-customs">Customs Clear</span></td>
                    <td className="td-right">$12,200.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>


      </main>
    </div>
  );
};

export default AdminDashboard;