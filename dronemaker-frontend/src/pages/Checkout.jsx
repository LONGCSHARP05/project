import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.jsx'; // Đảm bảo import đúng file Context
import '../assets/checkout.css';

const Checkout = () => {
  const { cartItems, getSubtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // 1. Quản lý State cho Form và Lựa chọn
  const [formData, setFormData] = useState({
    name: '', email: '', country: 'Vietnam', address: '', city: '', phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [shippingMethod, setShippingMethod] = useState('standard');

  // 2. Logic Điền nhanh khi Double Click
  const handleAutoFill = () => {
    setFormData({
      name: 'Vũ Trường Long',
      email: 'longvu@example.com',
      country: 'Vietnam',
      address: '207 Giải Phóng, Đồng Tâm',
      city: 'Hà Nội',
      phone: '+84 987 654 321'
    });
  };

  // 3. Tính toán tổng tiền
  const subtotal = getSubtotal();
  const shippingFee = shippingMethod === 'express' ? 150000 : 0;
  const total = subtotal + shippingFee;

  const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  // 4. Xử lý khi bấm Đặt hàng
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }
    if (!formData.name || !formData.phone) {
      alert("Vui lòng điền thông tin giao hàng!");
      return;
    }
    alert(`ĐẶT HÀNG THÀNH CÔNG!\nTổng thanh toán: ${formatPrice(total)}\nChúng tôi sẽ liên hệ sớm!`);
    clearCart();
    navigate('/shop');
  };

  return (
    <div className="checkout-page-wrapper">
      <main className="checkout-main">
        {/* PAGE TITLE */}
        <div className="checkout-page-title-group">
          <span className="checkout-subtitle">Shipping & Payment</span>
          <h1 className="checkout-title">Trang Thanh toán</h1>
        </div>

        <div className="checkout-grid">
          {/* LEFT COLUMN: BILLING & PAYMENT */}
          <div className="checkout-forms-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Step 1: Billing Info Form */}
            <section>
              <div className="step-header">
                <div className="step-number active">1</div>
                <h2 className="step-title">Billing Info Form (Nháy đúp vào Name)</h2>
              </div>       
              {/* Ngăn hành vi reload trang mặc định của form */}
              <form className="checkout-form" onSubmit={e => e.preventDefault()}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input 
                      className="form-input" 
                      placeholder="Full name" 
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      onDoubleClick={handleAutoFill}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input 
                      className="form-input" 
                      placeholder="email@example.com" 
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select 
                    className="form-select"
                    value={formData.country}
                    onChange={e => setFormData({...formData, country: e.target.value})}
                  >
                    <option>Vietnam</option>
                    <option>United States</option>
                    <option>Singapore</option>
                    <option>Japan</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input 
                    className="form-input" 
                    placeholder="Street address, apartment, suite" 
                    type="text"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input 
                      className="form-input" 
                      placeholder="City name" 
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input 
                      className="form-input" 
                      placeholder="+84 000 000 000" 
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </form>
            </section>

            {/* Step 2: Payment Method */}
            <section style={{ paddingTop: '2rem' }}>
              <div className="step-header">
                <div className="step-number inactive">2</div>
                <h2 className="step-title">Payment Method</h2>
              </div>
              
              <div className="payment-methods-grid">
                {/* Logic chuyển đổi class active/inactive dựa trên state */}
                <div 
                  className={`payment-card ${paymentMethod === 'credit' ? 'active' : 'inactive'}`}
                  onClick={() => setPaymentMethod('credit')}
                >
                  <span className="material-symbols-outlined" style={{ color: paymentMethod === 'credit' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}>credit_card</span>
                  <span className="payment-card-text">Credit Card</span>
                </div>
                <div 
                  className={`payment-card ${paymentMethod === 'bank' ? 'active' : 'inactive'}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <span className="material-symbols-outlined" style={{ color: paymentMethod === 'bank' ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' }}>account_balance_wallet</span>
                  <span className="payment-card-text">Bank Transfer</span>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <div>
            <div className="summary-panel">
              <h2 className="summary-title">Order Summary</h2>
              
              {/* Products List Rendering */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div className="product-item" key={index}>
                      <div className="product-img-box">
                        <img alt={item.name} src={item.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuDYCi2XcCL4_vll8ckoaxDnZlc98y-3Y9AZSoh4osYUoniPIlobsf7tL4aL7tfLsWpe8Yfsu5FkBhfNFjluzn7UvZg"} />
                      </div>
                      <div className="product-details">
                        <h3 className="product-name">{item.name}</h3>
                        <p className="product-desc">{item.category || 'Sản phẩm'}</p>
                        <p className="product-price">{formatPrice(item.price)}</p>
                      </div>
                      <div className="product-qty">x{item.qty}</div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: 'var(--color-on-surface-variant)', fontSize: '0.875rem' }}>Giỏ hàng của bạn đang trống.</p>
                )}
              </div>

              {/* Pricing & Shipping */}
              <div className="summary-divider">
                <div className="price-row">
                  <span style={{ color: 'var(--color-on-surface-variant)' }}>Subtotal</span>
                  <span style={{ fontWeight: '500' }}>{formatPrice(subtotal)}</span>
                </div>

                <div className="shipping-options">
                  <span className="shipping-label">Shipping options</span>
                  
                  {/* Logic chuyển đổi class active/inactive cho Shipping */}
                  <label 
                    className={`shipping-card ${shippingMethod === 'standard' ? 'active' : 'inactive'}`}
                    onClick={() => setShippingMethod('standard')}
                  >
                    <div className="shipping-radio-group">
                      <input type="radio" name="shipping" className="custom-radio" checked={shippingMethod === 'standard'} readOnly />
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Standard Delivery</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Free</span>
                  </label>

                  <label 
                    className={`shipping-card ${shippingMethod === 'express' ? 'active' : 'inactive'}`}
                    onClick={() => setShippingMethod('express')}
                  >
                    <div className="shipping-radio-group">
                      <input type="radio" name="shipping" className="custom-radio" checked={shippingMethod === 'express'} readOnly />
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Express Courier (2h)</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>150.000₫</span>
                  </label>
                </div>

                <div className="total-row">
                  <span className="total-label">Total</span>
                  <span className="total-price">{formatPrice(total)}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="btn-order" onClick={handlePlaceOrder}>
                ĐẶT HÀNG
                <span className="material-symbols-outlined btn-order-icon">arrow_forward</span>
              </button>
              
              <p className="order-terms">
                By placing an order, you agree to DroneMaker's <br />Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Checkout;