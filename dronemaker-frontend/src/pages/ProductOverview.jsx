import React from 'react';
import '../assets/product-overview.css';

const ProductOverview = () => {
  return (
    <div className="inventory-layout">
      
      {/* 1. SIDEBAR */}
      <aside className="sidebar">
        <div className="sidebar__header">
          <h1 className="sidebar__title">Admin Panel</h1>
          <p className="sidebar__subtitle">DroneMaker Control</p>
        </div>
        
        <nav className="sidebar__nav">
          <a className="nav__link nav__link--inactive" href="#">
            <span className="material-symbols-outlined nav__icon">dashboard</span>
            <span>Dashboard</span>
          </a>
          
          {/* Active Item */}
          <a className="nav__link nav__link--active" href="#">
            <span className="material-symbols-outlined nav__icon" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <span>Products</span>
          </a>
          
          <a className="nav__link nav__link--inactive" href="#">
            <span className="material-symbols-outlined nav__icon">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a className="nav__link nav__link--inactive" href="#">
            <span className="material-symbols-outlined nav__icon">article</span>
            <span>Articles</span>
          </a>
          <a className="nav__link nav__link--inactive" href="#">
            <span className="material-symbols-outlined nav__icon">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        
        <div className="sidebar__footer">
          <div className="user-profile">
            <div className="user-profile__avatar">JD</div>
            <div className="user-profile__info">
              <p className="user-profile__name">John Director</p>
              <p className="user-profile__role">Super Admin</p>
            </div>
          </div>
          <button className="btn-logout">Logout</button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="main-content">
        
        {/* Page Header */}
        <header className="page-header">
          <div>
            <h2 className="page-header__title">Product Inventory</h2>
            <p className="page-header__subtitle">Manage your precision-engineered drone fleet</p>
          </div>
          <button className="btn-primary">
            <span className="material-symbols-outlined text-sm">add</span>
            <span>New Product</span>
          </button>
        </header>

        {/* Dashboard Grid (2:1) */}
        <div className="dashboard-grid">
          
          {/* Left Column: Data Table */}
          <section className="table-card">
            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {/* Row 1 */}
                  <tr>
                    <td>
                      <div className="product-cell">
                        <img 
                          className="product-cell__img" 
                          alt="Apex X1 Phantom" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6lyrvxH0XqKmN5cLdv_x8oPbyVV5W3dtRzdKDtCjx1H71NehjdHBWlU8MKJYSeXugOTpp6LdA4MBFkrD8VFyqegrVDtZTe_CNcCJChk2NUNPOH0HISo7lQrKngVjDV9VtEbepn7qiazo8XDoo-Qdhk5Ix5lmhudSb12Zz-KjATzi9nQhWR3DT4tSQ6OynDxOtGWgrIQWJlEBpAfQ9yQuaqUquUT9oDbHO7m02D_KvDtwQsGDPGNMD4mVWYrij0cGRUBIsEEfN6o" 
                        />
                        <div>
                          <p className="product-cell__name">Apex X1 Phantom</p>
                          <p className="product-cell__sku">SKU: DM-AX1-2024</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">Enterprise / Aerial</span>
                    </td>
                    <td>
                      <label className="switch">
                        <input className="switch__input" type="checkbox" defaultChecked />
                        <div className="switch__track">
                          <div className="switch__dot"></div>
                        </div>
                        <span className="switch__label">Hiện</span>
                      </label>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="btn-icon">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="btn-icon btn-icon--danger">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td>
                      <div className="product-cell">
                        <img 
                          className="product-cell__img" 
                          alt="Surveyor Pro IV" 
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHaVrtgkTsECBu22ayykdmX5PF_OoCo1qxzAj2cOOHaS9iSC3tYv-EpXLDCXF1uCNArgFSPUXPKHokR929qL0sEI2DaWQTvnuS205wqwKu0XtXxcixBNldxWF-aiQq-wJAn0XdgiGkssfqhrKLO8MHY9L_BAf_rQa5TpQFD_y4nCXSr5bUc4aBUpau5FouSwW1sZa9YOTHujJQbvtKEHanjh3sCcCBDs8jrhyjbgjqOl5P7NXzOrTlag0NlzpmVeJJPm_Kqbde68M" 
                        />
                        <div>
                          <p className="product-cell__name">Surveyor Pro IV</p>
                          <p className="product-cell__sku">SKU: DM-SP4-99</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">Industrial / Mapping</span>
                    </td>
                    <td>
                      <label className="switch">
                        <input className="switch__input" type="checkbox" />
                        <div className="switch__track">
                          <div className="switch__dot"></div>
                        </div>
                        <span className="switch__label">Ẩn</span>
                      </label>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="btn-icon">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                        <button className="btn-icon btn-icon--danger">
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </section>

          {/* Right Column: Inventory Overview Widget */}
          <aside className="overview-widget">
            <h3 className="overview-widget__title">Inventory Overview</h3>
            
            {/* Stat Cards */}
            <div className="stat-card stat-card--neutral">
              <span className="stat-card__label">Total Drones</span>
              <span className="stat-card__value">1,284</span>
            </div>
            
            <div className="stat-card stat-card--warning">
              <span className="stat-card__label">Low Stock</span>
              <span className="stat-card__value">12 Units</span>
            </div>
            
            <div className="stat-card stat-card--primary">
              <span className="stat-card__label">Active Drafts</span>
              <span className="stat-card__value">4 Drafts</span>
            </div>

            {/* Activity Timeline */}
            <div className="timeline">
              <div className="timeline__item">
                <span className="timeline__dot timeline__dot--success"></span>
                <div className="timeline__content">
                  Stock Updated
                  <span className="timeline__time">2 minutes ago</span>
                </div>
              </div>
              
              <div className="timeline__item">
                <span className="timeline__dot timeline__dot--info"></span>
                <div className="timeline__content">
                  Draft Saved: Stratosphere V3
                  <span className="timeline__time">1 hour ago</span>
                </div>
              </div>
              
              <div className="timeline__item">
                <span className="timeline__dot timeline__dot--warning"></span>
                <div className="timeline__content">
                  New Order Received
                  <span className="timeline__time">3 hours ago</span>
                </div>
              </div>
            </div>

            <button className="btn-ghost">View Full Report</button>
          </aside>

        </div>
      </main>
      
      {/* NO FOOTER HERE PER YOUR REQUIREMENT */}
      
    </div>
  );
};

export default ProductOverview;