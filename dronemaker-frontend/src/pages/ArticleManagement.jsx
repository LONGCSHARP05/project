import React from 'react';
import '../assets/article-management.css';

const ArticleManagement = () => {
  return (
    <div className="admin-body">
      
      {/* 1. SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title font-headline">Admin Panel</h1>
          <p className="sidebar-subtitle">DroneMaker Control</p>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item inactive">
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
          {/* Active State */}
          <a href="#" className="nav-item active">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
            <span>Articles</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        
        <div className="sidebar-footer">
          <button className="btn-logout">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="main-content">
        
        {/* TOP BAR */}
        <header className="admin-topbar">
          <div className="topbar-left">
            <div className="search-wrapper">
              <span className="material-symbols-outlined search-icon">search</span>
              <input 
                className="search-input" 
                placeholder="Search articles..." 
                type="text" 
              />
            </div>
          </div>
          
          <div className="topbar-right">
            <button className="notification-btn">
              <span className="material-symbols-outlined">notifications</span>
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile">
              <div className="user-text">
                <p className="user-name">Alex Rivera</p>
                <p className="user-role">Chief Editor</p>
              </div>
              <img 
                alt="Alex Rivera" 
                className="user-avatar" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwTKvhSzkQiDag8Dr4sqgw5ghQ3RzFIQXZKk2_zf_tJIN991vNffSuEecjn2TuCgLO_YcqSPna6W-MwBOAZAvA07gB1a3XxgR5autkv9Fr0Uu9Fs-GHdOOnOgJlSTftbgDLLX3PbMdiSyuIrkyW7MoGvi760TD9hPY1ClpphRyxJHetYCOmk8neYKulQG0q3h76aNEJ0udXAcGTHs26F2Qd-nU8SP22EL7rfCxFBSUp8YQJgSX8owcHd2JN6rbFoyDO-0QEwSC_18" 
              />
            </div>
          </div>
        </header>

        {/* CONTENT CANVAS */}
        <div className="content-canvas">
          
          {/* PAGE HEADER */}
          <section className="page-header">
            <div>
              <h2 className="page-title font-headline">News & Blog Management</h2>
              <p className="page-subtitle">Manage your company updates and DJI guides</p>
            </div>
            <button className="btn-create">
              <span className="material-symbols-outlined" style={{ fontWeight: 600 }}>add</span>
              <span>+ Create New Article</span>
            </button>
          </section>

          {/* ARTICLE TABLE */}
          <div className="table-container">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Article Info</th>
                  <th>Category</th>
                  <th>Author & Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                
                {/* Row 1 */}
                <tr className="article-row">
                  <td>
                    <div className="article-info-cell">
                      <img alt="Mavic 3 Pro Guide" className="article-thumb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd589OfPM5hDx83ZXH5M9oOUgY3VxQXjx51JAdGrxEWonx4ttwfieXEvZJV12cCYRDUZYMcSOi8sIOPbaXHLV0NDCXcDmKOWrTJy7fgsOmobyEWRFyfqMCuawgQ85vgLMxuMuSZm-WhEWb7gzJ-eF_nEdlR78KJut5ja3G0QVAFpWESgi0dI4BRoDd5O1ZmVgat4cUxse75dOb3IPcTZFluJO0oLzJ2ENQMVA3UHLSBQNvf1gkhWgbeivhDfWHBoCRi6Hg_5pmuZs" />
                      <div>
                        <h4 className="article-title font-headline">Mastering the DJI Mavic 3 Pro: A Pro's Guide</h4>
                        <p className="article-excerpt">Everything you need to know about the new triple camera system...</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="category-badge badge-guide">Guide</span>
                  </td>
                  <td>
                    <span className="author-name">Sarah Connor</span>
                    <span className="author-date">Oct 24, 2023</span>
                  </td>
                  <td>
                    <label className="status-toggle">
                      <input type="checkbox" className="toggle-input" defaultChecked />
                      <div className="toggle-slider"></div>
                      <span className="toggle-label">Hiện</span>
                    </label>
                  </td>
                  <td>
                    <div className="action-cell">
                      <button className="action-btn edit"><span className="material-symbols-outlined">edit</span></button>
                      <button className="action-btn delete"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="article-row">
                  <td>
                    <div className="article-info-cell">
                      <img alt="Singapore Hub Opening" className="article-thumb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjWgeATi2xVy0ds2YCLgbR7gAAgmjbwiXEknxtqOOsVGFQ6PV_2o8Cmy_ok23UOzcwZhPFQkule2xJG96-L_22ziLBIXkxsGwIsMyow4WJvkHr1aYGTbtxPasBRU50WKbzqVQwg2s7tf-0mLBQGIRaUbxltaGI1XsYU8d3pdPyrFVsJOmO8vnsZWtBWpRrfbDoaz_u5P8ON1RVWhsvc2GF-qTspDCJzEY1ATjCBbV7trUevUkkDz1a_ezmnvcsx1bBV1yY1Va917g" />
                      <div>
                        <h4 className="article-title font-headline">New DroneMaker Hub in Singapore Opening Soon</h4>
                        <p className="article-excerpt">Expanding our global footprint to serve Southeast Asia better...</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="category-badge badge-news">News</span>
                  </td>
                  <td>
                    <span className="author-name">Mark Verdon</span>
                    <span className="author-date">Oct 21, 2023</span>
                  </td>
                  <td>
                    <label className="status-toggle">
                      <input type="checkbox" className="toggle-input" />
                      <div className="toggle-slider"></div>
                      <span className="toggle-label">Ẩn</span>
                    </label>
                  </td>
                  <td>
                    <div className="action-cell">
                      <button className="action-btn edit"><span className="material-symbols-outlined">edit</span></button>
                      <button className="action-btn delete"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="article-row">
                  <td>
                    <div className="article-info-cell">
                      <img alt="Firmware Update" className="article-thumb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwAnrc-A09I9iQhWB_w6HsX69TAlaEwWCUVhuS_SDoksUYDG5Z4HtPIcD3isGk__LFBes36Dj6h8z7Xg77ZeC7EpjCHx9MdlvApVTdfXQWpS08FiWddVFTFlf2gYgI7KBe9_3Z9QjSMqFW9A_9N8dWe0LfOXed9oj4ZSGAl6NJfZYhAESP3Bw-c937sQ1ub4WMUznxmLN7EdcAntjCc3hT5MpfacpF-fBLWOSmB_H7mhQWjzfoPvt8qqnPrWssboK6pOf7WkwAWA" />
                      <div>
                        <h4 className="article-title font-headline">Firmware Update v2.0.4 Now Available</h4>
                        <p className="article-excerpt">Critical stability improvements for the Enterprise drone fleet...</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="category-badge badge-announce">Announcement</span>
                  </td>
                  <td>
                    <span className="author-name">Tech Support</span>
                    <span className="author-date">Oct 19, 2023</span>
                  </td>
                  <td>
                    <label className="status-toggle">
                      <input type="checkbox" className="toggle-input" defaultChecked />
                      <div className="toggle-slider"></div>
                      <span className="toggle-label">Hiện</span>
                    </label>
                  </td>
                  <td>
                    <div className="action-cell">
                      <button className="action-btn edit"><span className="material-symbols-outlined">edit</span></button>
                      <button className="action-btn delete"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="pagination-wrapper">
              <span className="pagination-info">Showing 1 to 3 of 42 articles</span>
              <div className="pagination-controls">
                <button className="page-btn"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
              </div>
            </div>
          </div>

          {/* ANALYTICS BENTO GRID */}
          <section className="analytics-grid">
            
            {/* Left Card: Performance Chart */}
            <div className="performance-card">
              <h3 className="perf-title font-headline">Content Performance</h3>
              <p className="perf-subtitle">Your blog traffic has increased by 24% this month.</p>
              
              <div className="bar-chart-wrapper">
                <div className="chart-bar b1"></div>
                <div className="chart-bar b2"></div>
                <div className="chart-bar b3"></div>
                <div className="chart-bar b4"></div>
                <div className="chart-bar b5"></div>
                <div className="chart-bar b6"></div>
              </div>
              
              <span className="material-symbols-outlined perf-bg-icon">trending_up</span>
            </div>

            {/* Right Card: Total Views */}
            <div className="stats-card">
              <div>
                <div className="stats-top">
                  <div className="stats-icon-box">
                    <span className="material-symbols-outlined">visibility</span>
                  </div>
                  <span className="stats-badge">+12%</span>
                </div>
                <h4 className="stats-number font-headline">124.5K</h4>
                <p className="stats-label">Total Article Views</p>
              </div>
              <button className="btn-view-stats">View Detailed Stats</button>
            </div>

          </section>
        </div>

      </main>
    </div>
  );
};

export default ArticleManagement;