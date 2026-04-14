import React from 'react';
import '../assets/checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-page-wrapper">
      {/* 1. MINIMAL HEADER (No Navigation)
      <header className="checkout-header">
        <div className="checkout-logo">DroneMaker</div>
        <div className="secure-badge">
          <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>lock</span>
          Secure Checkout
        </div>
      </header> */}

      <main className="checkout-main">
        {/* 2. PAGE TITLE */}
        <div className="checkout-page-title-group">
          <span className="checkout-subtitle">Shipping & Payment</span>
          <h1 className="checkout-title">Trang Thanh toán</h1>
        </div>

        <div className="checkout-grid">
          {/* 3. LEFT COLUMN: BILLING & PAYMENT */}
          <div className="checkout-forms-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Step 1: Billing Info Form */}
            <section>
              <div className="step-header">
                <div className="step-number active">1</div>
                <h2 className="step-title">Billing Info Form</h2>
              </div>
              
              <form className="checkout-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input className="form-input" placeholder="Full name" type="text" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input className="form-input" placeholder="email@example.com" type="email" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Country</label>
                  <select className="form-select">
                    <option>Vietnam</option>
                    <option>United States</option>
                    <option>Singapore</option>
                    <option>Japan</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input className="form-input" placeholder="Street address, apartment, suite" type="text" />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input className="form-input" placeholder="City name" type="text" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" placeholder="+84 000 000 000" type="tel" />
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
                <div className="payment-card active">
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>credit_card</span>
                  <span className="payment-card-text">Credit Card</span>
                </div>
                <div className="payment-card inactive">
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-on-surface-variant)' }}>account_balance_wallet</span>
                  <span className="payment-card-text">Bank Transfer</span>
                </div>
              </div>
            </section>
          </div>

          {/* 4. RIGHT COLUMN: ORDER SUMMARY */}
          <div>
            <div className="summary-panel">
              <h2 className="summary-title">Order Summary</h2>
              
              {/* Products List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="product-item">
                  <div className="product-img-box">
                    <img alt="AeroX Pro IV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYCi2XcCL4_vll8ckoaxDnZlc98y-3Y9AZSoh4osYUoniPIlobsf7tL4aL7tfLsWpe8Yfsu5FkBhfNFjluzn7UvZg5Ph2YVT40Gc01AEsh2S2pSP6-MfNK6hNzNU76BNhpCamuhmN_4Uomuq7eVcok9IESwP0hB-kUt1FQ1eCYj3dzuoIo1ud8yDCkG7wYmxHMyJgL5Mv-9F9TZZzihQCXpNR0ATEqfiG4WEBiDIRs8pabTROhfv5ZpERstprifOKTVfpvCCvIPzw" />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">AeroX Pro IV</h3>
                    <p className="product-desc">Carbon Stealth / 8K Camera</p>
                    <p className="product-price">24.500.000₫</p>
                  </div>
                  <div className="product-qty">x1</div>
                </div>

                <div className="product-item">
                  <div className="product-img-box">
                    <img alt="Intelligent Flight Battery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXwkkEaMfIrNJWNHFk0AEIYG7zn3wphSASwfJb4wMDo-gkkvDA4GFzx-6JxJzd4Pfbuf53ZA5G34KFS2aKK2jnHgUrYccdTgCmtwHIik9sa9_Ny22CbGL1yPsjbVIaYodYfi3VxExNy1wuA-L0od51cxc55bU5kDw5drpz5hi56pXqqAw4jOv_gMBv53sW9eup6yrvpSx2avCXwtZQ70_-HjIpMDQp-k30GAUP_MPfEOTQvY55XohlQjhhbIcy1KlxdkF-Y2-L438" />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">Intelligent Flight Battery</h3>
                    <p className="product-desc">5000mAh High Capacity</p>
                    <p className="product-price">2.200.000₫</p>
                  </div>
                  <div className="product-qty">x2</div>
                </div>
              </div>

              {/* Pricing & Shipping */}
              <div className="summary-divider">
                <div className="price-row">
                  <span style={{ color: 'var(--color-on-surface-variant)' }}>Subtotal</span>
                  <span style={{ fontWeight: '500' }}>28.900.000₫</span>
                </div>

                <div className="shipping-options">
                  <span className="shipping-label">Shipping options</span>
                  
                  <label className="shipping-card active">
                    <div className="shipping-radio-group">
                      <input type="radio" name="shipping" className="custom-radio" defaultChecked />
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Standard Delivery</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>Free</span>
                  </label>

                  <label className="shipping-card inactive">
                    <div className="shipping-radio-group">
                      <input type="radio" name="shipping" className="custom-radio" />
                      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Express Courier (2h)</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>150.000₫</span>
                  </label>
                </div>

                <div className="total-row">
                  <span className="total-label">Total</span>
                  <span className="total-price">28.900.000₫</span>
                </div>
              </div>

              {/* CTA */}
              <button className="btn-order">
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