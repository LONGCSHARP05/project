import React from 'react';
import '../assets/cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="container-cart">
        {/* 1. Breadcrumbs */}
        <nav className="cart-breadcrumbs">
          HOME / <span>CART</span>
        </nav>

        {/* 2. Page Header */}
        <header className="cart-header">
          <p className="cart-count">You have 2 items in your cart</p>
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
                <p className="item-variant">3-Battery Combo + 100W Fast Charger</p>
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
                <div className="item-price">49,000,000₫</div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="cart-item">
              <img 
                src="https://dji-vietnam.vn/wp-content/uploads/2024/08/DJI-Neo_propeller-battery-detached.jpg" 
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
                <div className="item-price">25,000,000₫</div>
              </div>
            </div>

          </section>

          {/* Column Right: Order Summary */}
          <aside className="cart-summary-area">
            <div className="cart-summary-card">
              <h2 className="summary-title">Order Summary</h2>
              
              <div className="summary-row">
                <span>Subtotal</span>
                <span>74,000,000₫</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span style={{ color: '#16a34a', fontWeight: 'bold' }}>Free</span>
              </div>
              
              <div className="promo-box">
                <input 
                  type="text" 
                  className="promo-input" 
                  placeholder="Enter discount code..."
                />
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>74,000,000₫</span>
              </div>

              <button className="btn-checkout" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
                <span className="material-symbols-outlined">east</span>
              </button>

              <div className="security-trust">
                <span className="material-symbols-outlined" style={{fontSize: '18px'}}>verified_user</span>
                <span style={{fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase'}}>
                  100% Secure & Safe
                </span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Cart;