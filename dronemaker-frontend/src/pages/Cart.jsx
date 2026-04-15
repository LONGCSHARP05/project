import React from 'react';
import '../assets/cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="container-cart">
        {/* 1. Breadcrumbs */}
        <nav className="cart-breadcrumbs">
          TRANG CHỦ / <span>GIỎ HÀNG</span>
        </nav>

        {/* 2. Page Header */}
        <header className="cart-header">
          <h1 className="cart-title">Giỏ hàng của bạn</h1>
          <p className="cart-count">Bạn đang có 2 sản phẩm trong giỏ</p>
        </header>

        {/* 3. Main Content Grid */}
        <div className="cart-grid">
          
          {/* Column Left: Products */}
          <section className="cart-items-list">
            
            {/* Item 1 */}
            <div className="cart-item">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQXyubKeCWFaapBXW9HrrQMWqovUzM9XGpUuG5O91KtK-JgMKIyer4MzVWNERPx7iuzSAVQsIPy7rez7NuIS16fWfGktuA7ZhLnyfgWzLzHGYKbPo66DAHXohnm6Roo68BkapNVfyLSc4t3KhVSB_dRqHMpkaLVdY0C9WJ4Ov_zqOyZpZwqSG7srPbqAi_oYjkCBx4cC1JIWi7uhm2l9oN9Yj4yym6Jws8IUQgr3iSNsrFKgPcIF8t99Y-7nnGBHbSzMrl6Ygj-Nk" 
                alt="Mavic 3 Pro" 
                className="item-img"
              />
              <div className="item-info">
                <h3 className="item-name">DJI Mavic 3 Pro</h3>
                <p className="item-variant">Combo 3 Pin + Sạc nhanh 100W</p>
              </div>
              <div className="item-controls">
                <button className="btn-remove">
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <div className="quantity-selector">
                  <button className="qty-btn">-</button>
                  <span className="qty-num">1</span>
                  <button className="qty-btn">+</button>
                </div>
                <div className="item-price">49.000.000đ</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="cart-item">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8l7kqJxV8NPPV_5776c3SYRAd8DEE0oqQDuO7-bV9k1hX-q6s_GR3q1IkBtAukIBu-9ACcGEShAIaqkW6WiMhTnjBd_AeowPPGGYzNhwLTFCtu3YIgvmDgPjef-JXevWVuQfocv1Y3A-YvhJ25Vdw6QZfVprJkWRbYNdaYdkcgnhgXN_DWl9xMc97WE7bw7cjvG2sL8FfDqpDK9PHfR_i5ygTyTcOCNKXxPpwYVkVTrCVvZILND9OUlFPiOf1ICHjuo1AhRCz_M" 
                alt="Avata 2" 
                className="item-img"
              />
              <div className="item-info">
                <h3 className="item-name">DJI Avata 2</h3>
                <p className="item-variant">Fly More Kit (Single Battery)</p>
              </div>
              <div className="item-controls">
                <button className="btn-remove">
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <div className="quantity-selector">
                  <button className="qty-btn">-</button>
                  <span className="qty-num">1</span>
                  <button className="qty-btn">+</button>
                </div>
                <div className="item-price">25.000.000đ</div>
              </div>
            </div>

          </section>

          {/* Column Right: Order Summary */}
          <aside className="cart-summary-area">
            <div className="cart-summary-card">
              <h2 className="summary-title">Tóm tắt đơn hàng</h2>
              
              <div className="summary-row">
                <span>Tạm tính</span>
                <span>74.000.000đ</span>
              </div>
              <div className="summary-row">
                <span>Vận chuyển</span>
                <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Miễn phí</span>
              </div>
              
              <div className="promo-box">
                <input 
                  type="text" 
                  className="promo-input" 
                  placeholder="Nhập mã giảm giá..."
                />
              </div>

              <div className="summary-row total">
                <span>Tổng cộng</span>
                <span>74.000.000đ</span>
              </div>

              <button className="btn-checkout">
                Thanh toán ngay
                <span className="material-symbols-outlined">east</span>
              </button>

              <div className="security-trust">
                <span className="material-symbols-outlined" style={{fontSize: '18px'}}>verified_user</span>
                <span style={{fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase'}}>An toàn & Bảo mật 100%</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Cart;