import React, { useState, useMemo } from 'react';
import '../assets/order-management.css';

// 1. Chuyển đổi dữ liệu tĩnh thành mảng Mock Data để có thể lọc
const mockOrders = [
  {
    id: '#ORD-892',
    name: 'Marcus Thorne',
    email: 'm.thorne@example.com',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-QU9ySAmapg17qZeOOZbd6S19vQdIxkBtXECdUIUylmHdSnrDWS385z7dKToFoOzNDyaE27y7NAHlvCryvyPAVk1RNBhXogyRH0y9d14RzObr13c3UbRNRRKfsBZI-KZSam6qX2-PGujjXmoHwkFPCJAUnu9552-51OJSOikVxX6r7nQ0rEZMRZr_zyZLH62gteX1Kv7Z_nOo3LDKFXMUNXxeWB5Vw1KhmjUzc8uVqaoLF-cTyPZahYjRbXU-zDieVM0sMMFLGdY',
    dateStr: 'Oct 24',
    yearStr: '2024',
    rawDate: new Date('2024-10-24'),
    items: '1x DJI Mavic\n3 Pro',
    total: '$2,199.00',
    paymentStatus: 'Paid',
    paymentClass: 'badge-paid',
    paymentMethodType: 'credit-card', // Thêm trường ẩn để lọc
    fulfillmentStatus: 'Shipped',
    fulfillmentClass: 'badge-shipped',
    fulfillmentType: 'shipped' // Thêm trường ẩn để lọc
  },
  {
    id: '#ORD-891',
    name: 'Elena Rodriguez',
    email: 'elena.r@agency.net',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO3bjAbOp_qPKysOwx2PHz1W2FUx5svIgP9S5UJSBXm9R6bpQ9qrPmehL1-F7hzIGyrh2gsE1DRuPu9zz7C_AWhifCr_lsGcGwomuJ2m1XsQr3kUfS-mzlN7WPgpQZmXUJlmbL2rJ0YTztAtBrApUv2MfP2cPNkVOaubUZ55bZn1-jozo5H20EGICMF-6J1NR4CkLkx6vDOxEjlso122KWVXCVk_wqoZl_Go4fyx6nItuW9LRAHXQ12-lxryJVBNmpEyFzMxkLMGo',
    dateStr: 'Oct 23',
    yearStr: '2024',
    rawDate: new Date('2024-10-23'),
    items: '2x DJI RS 5\nGimbal',
    total: '$1,598.00',
    paymentStatus: 'Pending',
    paymentClass: 'badge-pending',
    paymentMethodType: 'paypal',
    fulfillmentStatus: 'Processing',
    fulfillmentClass: 'badge-processing',
    fulfillmentType: 'processing'
  },
  {
    id: '#ORD-890',
    name: 'Julian Weber',
    email: 'weber.j@techcorp.de',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe7ZcSGKew2ihTUlTVD47e4MFIiemtQLUjwEgRJHaM6kWtWUsPfGTj-fA_oLR3-ENLdtp6Kj-SCnkyMjhiByx0w4BfPCCBJKjC3z19MMo_o4b9IG5EEarzL-iY0gGUTqvMcHYC6KHynZd9Q-TMus3a0E0aTfSXfSq9KRxpogRc-bwNYaaEspqsgGGboUMHqKxuM5UsvARMifeZnnmHJRcCKAIxRVuxxgDGeYVkI3F3gg1UjTKvtjvuz8JBfK1Gv7lXQFW3sdnsG-s',
    dateStr: 'Oct 22',
    yearStr: '2024',
    rawDate: new Date('2024-10-22'),
    items: '1x Matrice\n350 RTK',
    total: '$12,450.00',
    paymentStatus: 'Paid',
    paymentClass: 'badge-paid',
    paymentMethodType: 'crypto',
    fulfillmentStatus: 'Delivered',
    fulfillmentClass: 'badge-delivered',
    fulfillmentType: 'delivered'
  },
  {
    id: '#ORD-889',
    name: 'Sarah Jenkins',
    email: 's.jenkins@media.io',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM6d2PSrcCJpj1Hdg_MhhFbhlSnQhbpfInrcInrm3k5XtxlXkmJffE4cTZLZVVRZFXKsQl5rMepIMYshe6iZd8jsyI6oQrWtTquywJ1w-TaXusPkqlYYTJo2hL-bo902rxDOCK-4yPnV8GtlNLWzvC4cE_bDQhcuXs56E5HeHU2DzDtNztODzYygKb6ECEsLghuO5GhfiLYoeB8oRnzReBXfDthzDUkGp3PyvxF7IO6wt7mfORxgq4bvg0jva4MhFkXjt-yyqd2JY',
    dateStr: 'Oct 21',
    yearStr: '2024',
    rawDate: new Date('2024-10-21'),
    items: '1x Avata 2\nFly More Kit',
    total: '$1,199.00',
    paymentStatus: 'Failed',
    paymentClass: 'badge-failed',
    paymentMethodType: 'credit-card',
    fulfillmentStatus: 'Cancelled',
    fulfillmentClass: 'badge-cancelled',
    fulfillmentType: 'cancelled'
  }
];

const OrderManagement = () => {
  // 2. State lưu trữ giá trị trên thanh Filter (chưa apply)
  const [filterInputs, setFilterInputs] = useState({
    date: 'last-30',
    payment: 'all',
    status: 'all'
  });

  // 3. State lưu trữ Filter đã được xác nhận (khi bấm Apply)
  const [appliedFilters, setAppliedFilters] = useState({
    date: 'last-30',
    payment: 'all',
    status: 'all'
  });

  // Xử lý thay đổi lựa chọn trên thẻ select
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    // Map id của select HTML sang key của state
    const key = id.replace('filter-', ''); 
    setFilterInputs(prev => ({ ...prev, [key]: value }));
  };

  // Áp dụng bộ lọc khi bấm nút
  const handleApplyFilters = () => {
    setAppliedFilters(filterInputs);
  };

  // 4. Logic lọc dữ liệu thực tế
  const filteredOrders = useMemo(() => {
    return mockOrders.filter(order => {
      // Lọc theo Payment Method
      if (appliedFilters.payment !== 'all' && order.paymentMethodType !== appliedFilters.payment) {
        return false;
      }
      
      // Lọc theo Order Status (Fulfillment)
      if (appliedFilters.status !== 'all' && order.fulfillmentType !== appliedFilters.status) {
        return false;
      }

      // Lọc theo Date
      const today = new Date('2024-10-25'); // Mốc thời gian giả định cho mock data
      const diffTime = Math.abs(today - order.rawDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (appliedFilters.date === 'last-7' && diffDays > 7) return false;
      if (appliedFilters.date === 'last-30' && diffDays > 30) return false;
      if (appliedFilters.date === 'last-90' && diffDays > 90) return false;
      if (appliedFilters.date === 'this-year' && order.rawDate.getFullYear() !== today.getFullYear()) return false;

      return true;
    });
  }, [appliedFilters]);

  // 5. Logic Xuất CSV
  const handleExportCSV = () => {
    // Tạo headers
    const headers = ['Order ID', 'Customer Name', 'Customer Email', 'Date', 'Items', 'Total', 'Payment Status', 'Fulfillment Status'];
    
    // Map dữ liệu thành các dòng CSV
    const csvRows = filteredOrders.map(order => {
      // Thay thế dấu \n thành space để không làm hỏng file CSV
      const cleanItems = order.items.replace(/\n/g, ' '); 
      const cleanDate = `${order.dateStr}, ${order.yearStr}`;
      
      return [
        order.id, 
        `"${order.name}"`, 
        order.email, 
        `"${cleanDate}"`, 
        `"${cleanItems}"`, 
        `"${order.total}"`, 
        order.paymentStatus, 
        order.fulfillmentStatus
      ].join(',');
    });

    // Gom lại thành nội dung text CSV
    const csvContent = [headers.join(','), ...csvRows].join('\n');

    // Tạo blob và link tải xuống
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'drone_orders_export.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-layout">
      {/* 2. MAIN CONTENT AREA */}
      <main className="main-content">
        
        {/* Page Content */}
        <div className="page-container">
          
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h2 className="page-header__title">Order Management</h2>
              <p className="page-header__subtitle">Track and process customer drone shipments</p>
            </div>
            <button className="btn-export" onClick={handleExportCSV}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              Export CSV
            </button>
          </div>

          {/* Filter Bar */}
          <section className="filter-bar">
            <div className="filter-bar__group">
              <label className="filter-bar__label" htmlFor="filter-date">Order Date</label>
              <select 
                className="filter-bar__select" 
                id="filter-date"
                value={filterInputs.date}
                onChange={handleFilterChange}
              >
                <option value="last-7">Last 7 Days</option>
                <option value="last-30">Last 30 Days</option>
                <option value="last-90">Last 90 Days</option>
                <option value="this-year">This Year</option>
              </select>
            </div>
            
            <div className="filter-bar__group">
              <label className="filter-bar__label" htmlFor="filter-payment">Payment Method</label>
              <select 
                className="filter-bar__select" 
                id="filter-payment"
                value={filterInputs.payment}
                onChange={handleFilterChange}
              >
                <option value="all">All Methods</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>
            
            <div className="filter-bar__group">
              <label className="filter-bar__label" htmlFor="filter-status">Order Status</label>
              <select 
                className="filter-bar__select" 
                id="filter-status"
                value={filterInputs.status}
                onChange={handleFilterChange}
              >
                <option value="all">All Statuses</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div className="filter-bar__actions">
              <button className="filter-bar__button" onClick={handleApplyFilters}>
                Apply Filters
              </button>
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
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="td-id" style={{ paddingLeft: '2rem' }}>{order.id}</td>
                      <td>
                        <div className="customer-cell">
                          <img alt={order.name.split(' ')[0]} className="customer-avatar" src={order.avatar} />
                          <div>
                            <div className="customer-name">{order.name}</div>
                            <div className="customer-email">{order.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="td-date">
                        {order.dateStr},<br />{order.yearStr}
                      </td>
                      <td className="td-items">
                        {order.items.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i === 0 && <br />}
                          </React.Fragment>
                        ))}
                      </td>
                      <td className="td-total">{order.total}</td>
                      <td><span className={`status-badge ${order.paymentClass}`}>{order.paymentStatus}</span></td>
                      <td><span className={`status-badge ${order.fulfillmentClass}`}>{order.fulfillmentStatus}</span></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3rem' }}>
                      <p style={{ color: 'var(--color-on-surface-variant)' }}>No orders match the selected filters.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="pagination">
              <span>Showing 1-{filteredOrders.length} of {filteredOrders.length} orders</span>
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