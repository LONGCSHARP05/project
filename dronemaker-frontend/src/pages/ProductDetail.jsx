import React from 'react';
import '../assets/product.css';

const ProductDetail = () => {
  return (
    <main className="product-page">
      <div className="product-container">
        
        {/* BREADCRUMBS */}
        <nav className="breadcrumbs">
          <a href="#">Trang chủ</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <a href="#">Sản phẩm</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Drone Phantom X Pro</span>
        </nav>

        {/* 1. HERO SECTION (7:5) */}
        <section className="product-hero-grid">
          
          {/* Left: Media Gallery */}
          <div className="gallery-wrapper">
            <div className="gallery-main">
              <img 
                alt="Phantom X Pro Main View" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfeX1V5v25LW25I5lzYMRX-4_FZ_aZHT8HDKok9IOG0rV7n85CAtWYg93qQv3xDG-LLfU8r4WvlEeTp8GvJ3nLKri_CggjUYEr-IQCe5DrvjqokJOWZH6Lno7RLhIaTAQLyIGZWXDD4evNEIL_aSDHcPpRI8ScSTqLzCVQFbn0HbxX7KXcWKjQucFoiI1BZg0cGgbZcs4Aj8KSHaFa28lF3cEqapEEoUc5uAsflw32FbMRMvGnU7v1o0a0KUXwA0bZzASpvXt4ogY" 
              />
            </div>
            <div className="gallery-thumbnails">
              <div className="thumb-item active">
                <img alt="View 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTmvAfLJXRjxac6WKIR7fQF8kQphjdKvum6GhDOwcc2UbvFZ2dGTm-u5oYvd-hNTNv5C87wnNMrZ0z06a1s4qqjM7BMFwHpCRB1YZ5sJNoAxWIWE2QLyWZOge6wlFcLNabSVbMb6uTa4QcnV33_g-sMe_NLclZ3vLAklPyzaeT0tlp5lsd-SHrDQBSqhCtrcm5K0ZRlboVamTOoF-ASuiB3hMUZd2TibkmGYTrn_bvFdJ9UiYzJu22_UOziHQWWChex7aWSvBK9Og" />
              </div>
              <div className="thumb-item">
                <img alt="View 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_QkRWek_0VrQdCpP1q3VVeZ-pEERUPyObMI4R0cvsLeDTYa8TLRsrwEqh0Uqe48z7wn3pf7STlAyADM-3CqVxTvd6G1VQr21CJv66MYoAyhEQcpfqV5ZKpPW9xSrsHrKsjx3LaSOc4dAgACbENlE0t8UjaQHxzU19n5g5oZzy4dCqV0MJcA6aKBnWYvIwwpmqIskQaXsKJ0_vdsoxZSKTu5CJ8CTp0y_dnRY3UWYl7sSj4I-oFYDOGNVmN9m6lH9bJSQ-6_VzMQQ" />
              </div>
              <div className="thumb-item">
                <img alt="View 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnt1I2dRkduKhqQdidRVKPa9CHVJnAMk-fCETqNhtMHLZKDFrSRVJQ0qyL6YHiysRS2p286ZpKwIfvg_LrLNr-vZ7cpPqQi6tC4igMtVS4N5yAJnRyUmuFKhG5_LTMnZaEeMLk0FXAzxPJefPrB-4PN3650BM5UVhIhBPbFHD4EoTiwfCPpDUGvcndIYDDZXycLq6fLCjeieeO3RYMbvIurjDHIYiXvcdGwvizo2ZKPrZK_T0dQkwj1ZfwsxTgQm9bh5wdm_oOrk" />
              </div>
              <div className="thumb-item">
                <img alt="View 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3bHmhyy-VRli-Ayt6_VQ336dJc0p2Kd8vtW4sMhAc6I3mEYcWWJ_2WhgzmjKggjD0eLYDEao_YxWenDEBnRvJm1QYiAX2hAD2YCG0AMinwA6I4LOC65Oqwt1ZK5cB26K_-KCkoPGhRIIKLX-CzxRum79IefTQ46shZLvXd3D5t8ql1DmI_R0kKWRgRJZaX8iCt1EwrEsz7t8uHlbCfezZtye_Ea2V7kdUFEQSVT8QqUwhoLhYB1w19a-Q_G9W24BTgle-bSLYU0" />
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="product-info-wrapper">
            {/* <span className="product-badge-new">New Arrival</span> */}
            <h1 className="product-title">Phantom X Pro Gen 2</h1>
            
            <div className="product-pricing">
              <span className="price-current">24.990.000₫</span>
              <span className="price-original">29.500.000₫</span>
            </div>

            <p className="product-desc">
              Trải nghiệm tầm nhìn không giới hạn với Phantom X Pro. Trang bị cảm biến CMOS 1 inch, quay phim 5.4K và thời gian bay lên đến 45 phút. Đỉnh cao của công nghệ flycam dân dụng hiện nay.
            </p>

            <div className="product-actions">
              <div className="sku-row">
                <span className="meta-label">SKU:</span>
                <span className="sku-value">DM-PXPRO-G2-WHT</span>
              </div>

              <div className="qty-row">
                <span className="meta-label">Số lượng:</span>
                <div className="qty-selector">
                  <button className="qty-btn">
                    <span className="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <input className="qty-input" type="text" defaultValue="1" readOnly />
                  <button className="qty-btn">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
              </div>

              <button className="btn-add-cart-large">
                <span className="material-symbols-outlined">shopping_basket</span>
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>

            {/* Support Box */}
            <div className="support-box">
              <h3 className="support-title">
                <span className="material-symbols-outlined text-primary text-lg">support_agent</span>
                Hỗ trợ sản phẩm
              </h3>
              <div className="support-list">
                <a href="tel:18001234" className="support-item">
                  <span className="material-symbols-outlined text-sm text-outline">call</span>
                  Hotline: 1800 1234
                </a>
                <div className="support-item">
                  <span className="material-symbols-outlined text-sm text-outline">share</span>
                  <div className="share-links">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Copy Link</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. TABS & DETAILS SECTION */}
        <section className="product-tabs-section">
          
          <div className="tabs-header">
            <button className="tab-btn active">Chi tiết sản phẩm</button>
            <button className="tab-btn">Đánh giá (124)</button>
          </div>

          <div className="details-grid">
            
            {/* Left: Main Details */}
            <div className="details-main-content">
              <div>
                <h4 className="details-heading">Vượt Qua Mọi Giới Hạn</h4>
                <p className="product-desc">
                  Phantom X Pro không chỉ là một chiếc drone, đó là một công cụ sáng tạo chuyên nghiệp được thu nhỏ. Với cấu trúc khí động học mới, nó có thể chống lại gió cấp 7 và giữ ổn định hình ảnh tuyệt đối nhờ hệ thống gimbal 3 trục được tái cấu trúc.
                </p>
                <div className="details-image">
                  <img 
                    alt="Drone flying in forest" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgoucps1Q-ySQZnGgbq50h8flJkserdl57VI88-iBXum3-EJN_AUZNTYfMf7Mu6pb6-0yOqTdy-XJQmx0b-bOKfB1lf2-AhSUb6-YaumA9H-uYJ1ZkL-P3WZjCuGyz4AoeFNy0zw9ng0kmjKtuxKCaN4cCVDcqbLgp3n1Iiv9jr6ehyZUKFeouuQIg3MJIjTwwfjKNkJJD-_yc1wyB8zSbUTTy_oXV72sm8a-4OoVpHtaT4SkaXMbtGJpOGC6R1jk7zJVenjRSik" 
                  />
                </div>
              </div>

              <div className="feature-stats-row">
                <div className="feature-stat-box">
                  <span className="stat-value">4K/60fps</span>
                  <span className="stat-label">Video Quality</span>
                </div>
                <div className="feature-stat-box">
                  <span className="stat-value">45 Phút</span>
                  <span className="stat-label">Thời gian bay</span>
                </div>
              </div>
            </div>

            {/* Right: Tech Specs Sidebar */}
            <aside className="specs-sidebar">
              <h5 className="specs-title">Thông số kỹ thuật</h5>
              <div className="specs-list">
                <div className="spec-row">
                  <span className="spec-label">Trọng lượng</span>
                  <span className="spec-value">720g</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Khoảng cách truyền</span>
                  <span className="spec-value">12km</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Tốc độ tối đa</span>
                  <span className="spec-value">19 m/s</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Cảm biến</span>
                  <span className="spec-value">CMOS 1"</span>
                </div>
              </div>
            </aside>

          </div>
        </section>

      </div>
    </main>
  );
};

export default ProductDetail;