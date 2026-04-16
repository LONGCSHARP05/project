import React from 'react';
import '../assets/product-creation.css'; // Đường dẫn đến file css của bạn

const ProductCreation = () => {
  return (
    <div className="inventory-body">
      
      {/* 1. LEFT SIDEBAR
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Admin Panel</h1>
          <p className="sidebar-subtitle">DroneMaker Control</p>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item inactive group">
            <span className="material-symbols-outlined text-lg">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item active">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <span>Products</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined text-lg">shopping_cart</span>
            <span>Orders</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined text-lg">article</span>
            <span>Articles</span>
          </a>
          <a href="#" className="nav-item inactive">
            <span className="material-symbols-outlined text-lg">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        
        <div className="sidebar-user-card">
          <div className="user-info">
            <div className="user-avatar">JD</div>
            <div className="user-details">
              <p className="user-name">John Director</p>
              <p className="user-role">Super Admin</p>
            </div>
          </div>
          <button className="btn-logout">Logout</button>
        </div>
      </aside> */}

      {/* 2. MAIN CONTENT AREA */}
      <main className="main-content">
        
        <header className="page-header">
          <div>
            <h2 className="page-title">Product Inventory</h2>
            <p className="page-subtitle">Manage your precision-engineered drone fleet</p>
          </div>
          
        </header>

        <div className="inventory-grid">
          
          {/* Left: Product List Table */}
          <div className="table-card">
            <div className="table-responsive">
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
                  {/* Row 1: Active Product */}
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-img-box">
                          <img alt="Apex X1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt6lyrvxH0XqKmN5cLdv_x8oPbyVV5W3dtRzdKDtCjx1H71NehjdHBWlU8MKJYSeXugOTpp6LdA4MBFkrD8VFyqegrVDtZTe_CNcCJChk2NUNPOH0HISo7lQrKngVjDV9VtEbepn7qiazo8XDoo-Qdhk5Ix5lmhudSb12Zz-KjATzi9nQhWR3DT4tSQ6OynDxOtGWgrIQWJlEBpAfQ9yQuaqUquUT9oDbHO7m02D_KvDtwQsGDPGNMD4mVWYrij0cGRUBIsEEfN6o" />
                        </div>
                        <div>
                          <p className="product-name">Apex X1 Phantom</p>
                          <p className="product-sku">SKU: DM-AX1-2024</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">Enterprise / Aerial</span>
                    </td>
                    <td>
                      <label className="toggle-wrapper">
                        <input type="checkbox" className="toggle-input" defaultChecked />
                        <div className="toggle-track">
                          <div className="toggle-dot"></div>
                        </div>
                        <span className="toggle-label">Hiện</span>
                      </label>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="action-btn edit"><span className="material-symbols-outlined text-lg">edit</span></button>
                        <button className="action-btn delete"><span className="material-symbols-outlined text-lg">delete</span></button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2: Inactive Product */}
                  <tr>
                    <td>
                      <div className="product-cell">
                        <div className="product-img-box">
                          <img alt="Surveyor Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHaVrtgkTsECBu22ayykdmX5PF_OoCo1qxzAj2cOOHaS9iSC3tYv-EpXLDCXF1uCNArgFSPUXPKHokR929qL0sEI2DaWQTvnuS205wqwKu0XtXxcixBNldxWF-aiQq-wJAn0XdgiGkssfqhrKLO8MHY9L_BAf_rQa5TpQFD_y4nCXSr5bUc4aBUpau5FouSwW1sZa9YOTHujJQbvtKEHanjh3sCcCBDs8jrhyjbgjqOl5P7NXzOrTlag0NlzpmVeJJPm_Kqbde68M" />
                        </div>
                        <div>
                          <p className="product-name">Surveyor Pro IV</p>
                          <p className="product-sku">SKU: DM-SP4-99</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">Industrial / Mapping</span>
                    </td>
                    <td>
                      <label className="toggle-wrapper">
                        <input type="checkbox" className="toggle-input" />
                        <div className="toggle-track">
                          <div className="toggle-dot"></div>
                        </div>
                        <span className="toggle-label">Ẩn</span>
                      </label>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button className="action-btn edit"><span className="material-symbols-outlined text-lg">edit</span></button>
                        <button className="action-btn delete"><span className="material-symbols-outlined text-lg">delete</span></button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Form Sidebar */}
          <div>
            <div className="form-card">
              <h3 className="form-title">Create New Drone</h3>
              <form className="inventory-form">
                
                <div className="form-group">
                  <label className="form-label">Product Name</label>
                  <input className="form-input" type="text" placeholder="e.g. Stratosphere V2" />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">L1 Category</label>
                    <select className="form-select">
                      <option>Enterprise</option>
                      <option>Consumer</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">L2 Category</label>
                    <select className="form-select">
                      <option>Aerial Photography</option>
                      <option>Surveying</option>
                      <option>Racing</option>
                    </select>
                  </div>
                </div>

                {/* WYSIWYG Mockup */}
                <div className="form-group">
                  <label className="form-label">Product Description</label>
                  <div className="wysiwyg-container">
                    <div className="wysiwyg-toolbar">
                      <button type="button" className="toolbar-btn"><span className="material-symbols-outlined text-sm">format_bold</span></button>
                      <button type="button" className="toolbar-btn"><span className="material-symbols-outlined text-sm">format_italic</span></button>
                      <button type="button" className="toolbar-btn"><span className="material-symbols-outlined text-sm">format_list_bulleted</span></button>
                      <button type="button" className="toolbar-btn"><span className="material-symbols-outlined text-sm">link</span></button>
                      <button type="button" className="toolbar-btn"><span className="material-symbols-outlined text-sm">image</span></button>
                    </div>
                    <textarea 
                      className="wysiwyg-textarea" 
                      rows="6" 
                      placeholder="Enter technical specifications and marketing copy..."
                    ></textarea>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-discard">Discard</button>
                  <button type="submit" className="btn-publish">Publish Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
};

export default ProductCreation;