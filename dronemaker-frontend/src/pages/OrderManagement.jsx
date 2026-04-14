import React from 'react';
import '../assets/order-management.css';

const OrderManagement = () => {
  return (
    <div className="admin-layout">
      
      {/* 1. LEFT SIDEBAR
      <aside className="sidebar">
        <div className="sidebar__header">
          <h1 className="sidebar__title">Admin Panel</h1>
          <p className="sidebar__subtitle">DroneMaker Control</p>
        </div>
        
        <nav className="sidebar__nav">
          <a href="#" className="nav__item nav__item--inactive">
            <span className="material-symbols-outlined nav__icon">dashboard</span>
            Dashboard
          </a>
          <a href="#" className="nav__item nav__item--inactive">
            <span className="material-symbols-outlined nav__icon">inventory_2</span>
            Products
          </a> */}
          {/* Active Item */}
          {/* <a href="#" className="nav__item nav__item--active">
            <span className="material-symbols-outlined nav__icon" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            Orders
          </a>
          <a href="#" className="nav__item nav__item--inactive">
            <span className="material-symbols-outlined nav__icon">article</span>
            Articles
          </a>
          <a href="#" className="nav__item nav__item--inactive">
            <span className="material-symbols-outlined nav__icon">settings</span>
            Settings
          </a>
        </nav>

        <div className="sidebar__footer">
          <button className="btn-logout">
            <span className="material-symbols-outlined nav__icon">logout</span>
            Logout
          </button>
        </div>
      </aside> */}

      {/* 2. MAIN CONTENT AREA */}
      <main className="main-content">
        
        {/* Top Header */}
        <header className="top-header">
          <div className="top-header__brand">DroneMaker</div>
          <div className="top-header__actions">
            <div className="search-box">
              <span className="material-symbols-outlined search-box__icon">search</span>
              <input 
                className="search-box__input" 
                placeholder="Search orders..." 
                type="text" 
              />
            </div>
            <button className="profile-btn">
              <span className="material-symbols-outlined text-2xl">account_circle</span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-container">
          
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h2 className="page-header__title">Order Management</h2>
              <p className="page-header__subtitle">Track and process customer drone shipments</p>
            </div>
            <button className="btn-export">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              Export CSV
            </button>
          </div>

          {/* Filter Bar */}
          <section className="filter-bar">
            <div className="filter-bar__group">
              <label className="filter-bar__label" htmlFor="filter-date">Order Date</label>
              <select className="filter-bar__select" id="filter-date">
                <option value="last-7">Last 7 Days</option>
                <option value="last-30">Last 30 Days</option>
                <option value="last-90">Last 90 Days</option>
                <option value="this-year">This Year</option>
              </select>
            </div>
            
            <div className="filter-bar__group">
              <label className="filter-bar__label" htmlFor="filter-payment">Payment Method</label>
              <select className="filter-bar__select" id="filter-payment">
                <option value="all">All Methods</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
            
            <div className="filter-bar__group">
              <label className="filter-bar__label" htmlFor="filter-status">Order Status</label>
              <select className="filter-bar__select" id="filter-status">
                <option value="all">All Statuses</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div className="filter-bar__actions">
              <button className="filter-bar__button">Apply Filters</button>
            </div>
          </section>

          {/* Data Table */}
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ paddingLeft: '2rem' }}>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th style={{ textAlign: 'right' }}>Total</th>
                  <th>Payment</th>
                  <th>Fulfillment</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className="td-id" style={{ paddingLeft: '2rem' }}>#ORD-892</td>
                  <td>
                    <div className="customer-cell">
                      <img alt="Marcus" className="customer-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-QU9ySAmapg17qZeOOZbd6S19vQdIxkBtXECdUIUylmHdSnrDWS385z7dKToFoOzNDyaE27y7NAHlvCryvyPAVk1RNBhXogyRH0y9d14RzObr13c3UbRNRRKfsBZI-KZSam6qX2-PGujjXmoHwkFPCJAUnu9552-51OJSOikVxX6r7nQ0rEZMRZr_zyZLH62gteX1Kv7Z_nOo3LDKFXMUNXxeWB5Vw1KhmjUzc8uVqaoLF-cTyPZahYjRbXU-zDieVM0sMMFLGdY" />
                      <div>
                        <div className="customer-name">Marcus Thorne</div>
                        <div className="customer-email">m.thorne@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="td-date">
                    Oct 24,<br />2024
                  </td>
                  <td className="td-items">1x DJI Mavic<br />3 Pro</td>
                  <td className="td-total">$2,199.00</td>
                  <td><span className="status-badge badge-paid">Paid</span></td>
                  <td><span className="status-badge badge-shipped">Shipped</span></td>
                </tr>

                {/* Row 2 */}
                <tr>
                  <td className="td-id" style={{ paddingLeft: '2rem' }}>#ORD-891</td>
                  <td>
                    <div className="customer-cell">
                      <img alt="Elena" className="customer-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO3bjAbOp_qPKysOwx2PHz1W2FUx5svIgP9S5UJSBXm9R6bpQ9qrPmehL1-F7hzIGyrh2gsE1DRuPu9zz7C_AWhifCr_lsGcGwomuJ2m1XsQr3kUfS-mzlN7WPgpQZmXUJlmbL2rJ0YTztAtBrApUv2MfP2cPNkVOaubUZ55bZn1-jozo5H20EGICMF-6J1NR4CkLkx6vDOxEjlso122KWVXCVk_wqoZl_Go4fyx6nItuW9LRAHXQ12-lxryJVBNmpEyFzMxkLMGo" />
                      <div>
                        <div className="customer-name">Elena Rodriguez</div>
                        <div className="customer-email">elena.r@agency.net</div>
                      </div>
                    </div>
                  </td>
                  <td className="td-date">
                    Oct 23,<br />2024
                  </td>
                  <td className="td-items">2x DJI RS 5<br />Gimbal</td>
                  <td className="td-total">$1,598.00</td>
                  <td><span className="status-badge badge-pending">Pending</span></td>
                  <td><span className="status-badge badge-processing">Processing</span></td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td className="td-id" style={{ paddingLeft: '2rem' }}>#ORD-890</td>
                  <td>
                    <div className="customer-cell">
                      <img alt="Julian" className="customer-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe7ZcSGKew2ihTUlTVD47e4MFIiemtQLUjwEgRJHaM6kWtWUsPfGTj-fA_oLR3-ENLdtp6Kj-SCnkyMjhiByx0w4BfPCCBJKjC3z19MMo_o4b9IG5EEarzL-iY0gGUTqvMcHYC6KHynZd9Q-TMus3a0E0aTfSXfSq9KRxpogRc-bwNYaaEspqsgGGboUMHqKxuM5UsvARMifeZnnmHJRcCKAIxRVuxxgDGeYVkI3F3gg1UjTKvtjvuz8JBfK1Gv7lXQFW3sdnsG-s" />
                      <div>
                        <div className="customer-name">Julian Weber</div>
                        <div className="customer-email">weber.j@techcorp.de</div>
                      </div>
                    </div>
                  </td>
                  <td className="td-date">
                    Oct 22,<br />2024
                  </td>
                  <td className="td-items">1x Matrice<br />350 RTK</td>
                  <td className="td-total">$12,450.00</td>
                  <td><span className="status-badge badge-paid">Paid</span></td>
                  <td><span className="status-badge badge-delivered">Delivered</span></td>
                </tr>

                {/* Row 4 */}
                <tr>
                  <td className="td-id" style={{ paddingLeft: '2rem' }}>#ORD-889</td>
                  <td>
                    <div className="customer-cell">
                      <img alt="Sarah" className="customer-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM6d2PSrcCJpj1Hdg_MhhFbhlSnQhbpfInrcInrm3k5XtxlXkmJffE4cTZLZVVRZFXKsQl5rMepIMYshe6iZd8jsyI6oQrWtTquywJ1w-TaXusPkqlYYTJo2hL-bo902rxDOCK-4yPnV8GtlNLWzvC4cE_bDQhcuXs56E5HeHU2DzDtNztODzYygKb6ECEsLghuO5GhfiLYoeB8oRnzReBXfDthzDUkGp3PyvxF7IO6wt7mfORxgq4bvg0jva4MhFkXjt-yyqd2JY" />
                      <div>
                        <div className="customer-name">Sarah Jenkins</div>
                        <div className="customer-email">s.jenkins@media.io</div>
                      </div>
                    </div>
                  </td>
                  <td className="td-date">
                    Oct 21,<br />2024
                  </td>
                  <td className="td-items">1x Avata 2<br />Fly More Kit</td>
                  <td className="td-total">$1,199.00</td>
                  <td><span className="status-badge badge-failed">Failed</span></td>
                  <td><span className="status-badge badge-cancelled">Cancelled</span></td>
                </tr>
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="pagination">
              <span>Showing 1-10 of 2,482 orders</span>
              <div className="pagination__controls">
                <button className="pagination__btn">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                </button>
                <button className="pagination__btn">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Metrics Bento Grid */}
          <div className="metrics-grid">
            
            {/* Chart Column */}
            <div className="chart-card">
              <div>
                <h3 className="chart-card__title">Weekly Throughput</h3>
                <p className="chart-card__subtitle">Shipping efficiency and volume trends</p>
              </div>
              <div className="chart-bars">
                <div className="chart-bar" style={{ height: '40%' }}></div>
                <div className="chart-bar" style={{ height: '30%' }}></div>
                <div className="chart-bar" style={{ height: '50%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar chart-bar--active" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '50%' }}></div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="metrics-sidebar">
              <div className="revenue-card">
                <span className="material-symbols-outlined revenue-card__icon">trending_up</span>
                <span className="revenue-card__label">Revenue Today</span>
                <div className="revenue-card__value">$42,890.12</div>
                <div className="revenue-card__trend">
                  <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>arrow_upward</span>
                  12.5% vs yesterday
                </div>
              </div>

              <div className="urgent-card">
                <h4 className="urgent-card__title">Urgent Actions</h4>
                <ul className="urgent-list">
                  <li className="urgent-list__item">
                    <span className="urgent-list__label">Late Shipments</span>
                    <span className="urgent-list__badge badge-red">12</span>
                  </li>
                  <li className="urgent-list__item">
                    <span className="urgent-list__label">Refund Requests</span>
                    <span className="urgent-list__badge badge-yellow">4</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default OrderManagement;