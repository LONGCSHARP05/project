import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.jsx'; 
import '../assets/checkout.css';

const Checkout = () => {
  const { cartItems, getSubtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const mockItems = [
    {
      id: 101,
      name: "DJI Mavic 3 Pro",
      category: "Personal Drones",
      price: 49000000,
      image: "https://dji-vietnam.vn/wp-content/uploads/2024/04/avata2-body-5.jpg",
      quantity: 1
    },
    {
      id: 102,
      name: "DJI Avata 2",
      category: "FPV Drones",
      price: 25000000,
      image: "https://dji-vietnam.vn/wp-content/uploads/2024/04/dji-fpv-remote-controller-4.jpg",
      quantity: 1
    }
  ];

  const displayItems = cartItems.length > 0 ? cartItems : mockItems;

  const [formData, setFormData] = useState({
    name: '', email: '', country: 'Vietnam', address: '', city: '', phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [showToast, setShowToast] = useState(false);

  const handleAutoFill = () => {
    setFormData({
      name: 'Vu Truong Long',
      email: 'longvu@example.com',
      country: 'Vietnam',
      address: '207 Giai Phong, Dong Tam',
      city: 'Hanoi',
      phone: '+84 987 654 321'
    });
  };

  const subtotal = cartItems.length > 0 
    ? getSubtotal() 
    : mockItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  const shippingFee = shippingMethod === 'express' ? 150000 : 0;
  const total = subtotal + shippingFee;

  const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const handlePlaceOrder = () => {
    if (!formData.name || !formData.phone) {
      alert("Please fill in the shipping information!");
      return;
    }

    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
      clearCart();
      navigate('/shop');
    }, 2000);
  };

  return (
    <div className="checkout-page-wrapper">
      <main className="checkout-main">
        <nav className="breadcrumbs">
          <a href="#">Home</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Products</span>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Checkout</span>
        </nav>

        <div className="checkout-grid">
          <div className="checkout-forms-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <section>
              <div className="step-header">
                <div className="step-number active">1</div>
                <h2 className="step-title">Shipping Information</h2>
              </div>       
              <form className="checkout-form" onSubmit={e => e.preventDefault()}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      className="form-input" 
                      placeholder="Double-click to autofill" 
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
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input 
                    className="form-input" 
                    placeholder="Street address..." 
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
                      placeholder="Hanoi / Ho Chi Minh City..." 
                      type="text"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
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

            <section style={{ paddingTop: '2rem' }}>
              <div className="step-header">
                <div className="step-number inactive">2</div>
                <h2 className="step-title">Payment Method</h2>
              </div>
              
              <div className="payment-methods-grid">
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

          <div>
            <div className="summary-panel">
              <h2 className="summary-title">Order Summary</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                {displayItems.map((item, index) => (
                  <div className="product-item" key={index}>
                    <div className="product-img-box">
                      <img alt={item.name} src={item.image} />
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{item.name}</h3>
                      <p className="product-desc">{item.category}</p>
                      <p className="product-price">{formatPrice(item.price)}</p>
                    </div>
                    <div className="product-qty">x{item.quantity || item.qty}</div>
                  </div>
                ))}
              </div>

              <div className="summary-divider">
                <div className="price-row">
                  <span style={{ color: 'var(--color-on-surface-variant)' }}>Subtotal</span>
                  <span style={{ fontWeight: '500' }}>{formatPrice(subtotal)}</span>
                </div>

                <div className="shipping-options">
                  <span className="shipping-label">Shipping</span>
                  
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
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Express (2h)</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>150,000₫</span>
                  </label>
                </div>

                <div className="total-row">
                  <span className="total-label">Total</span>
                  <span className="total-price">{formatPrice(total)}</span>
                </div>
              </div>

              <button className="btn-order" onClick={handlePlaceOrder}>
                PLACE ORDER
                <span className="material-symbols-outlined btn-order-icon">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {showToast && (
        <div className="checkout-toast">
          <span className="material-symbols-outlined">check_circle</span>
          <p>Order placed successfully! Redirecting...</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;