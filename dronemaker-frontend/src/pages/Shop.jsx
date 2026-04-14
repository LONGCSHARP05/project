import React from 'react';
import '../assets/shop.css';

const Shop = () => {
  return (
    <main className="shop-page">
      <div className="shop-container">
        
        {/* 1. BREADCRUMBS */}
        <nav className="breadcrumbs">
          <a href="#">Trang chủ</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Cửa hàng</span>
        </nav>

        <div className="shop-layout">
          
          {/* 2. SIDEBAR (25%) */}
          <aside className="shop-sidebar">
            
            {/* Category Filter */}
            <section className="sidebar-section">
              <h3 className="sidebar-title">Danh mục</h3>
              
              <div className="category-group">
                <div className="category-header">
                  <span className="category-name">Consumer Drones</span>
                  <span className="category-badge">12</span>
                </div>
                <div className="category-sublist">
                  <a href="#">Mini Series</a>
                  <a href="#">Air Series</a>
                  <a href="#">Mavic Series</a>
                </div>
              </div>

              <div className="category-group">
                <div className="category-header">
                  <span className="category-name">Enterprise</span>
                  <span className="category-badge">8</span>
                </div>
                <div className="category-sublist">
                  <a href="#">Thermal Imaging</a>
                  <a href="#">Surveying</a>
                </div>
              </div>

              <div className="category-group">
                <div className="category-header">
                  <span className="category-name">Phụ kiện</span>
                  <span className="category-badge">45</span>
                </div>
              </div>
            </section>

            {/* Price Filter */}
            <section className="sidebar-section">
              <h3 className="sidebar-title">Lọc theo giá</h3>
              <div className="price-slider-container">
                <div className="slider-track-wrap">
                  <div className="slider-track-active"></div>
                  <div className="slider-thumb thumb-left"></div>
                  <div className="slider-thumb thumb-right"></div>
                </div>
                <div className="price-values">
                  <span>0₫</span>
                  <span>50.000.000₫</span>
                </div>
              </div>
              <button className="btn-filter">Lọc</button>
            </section>

          </aside>

          {/* 3. MAIN CONTENT (75%) */}
          <section className="shop-main">
            
            {/* Toolbar */}
            <div className="shop-toolbar">
              <p className="result-count">Hiển thị 1–9 của 24 kết quả</p>
              <div className="sort-group">
                <label className="sort-label">Sắp xếp:</label>
                <select className="sort-select">
                  <option>Mặc định</option>
                  <option>Giá: Thấp đến Cao</option>
                  <option>Giá: Cao đến Thấp</option>
                  <option>Mới nhất</option>
                </select>
                <span className="material-symbols-outlined sort-icon">expand_more</span>
              </div>
            </div>

            {/* Product Grid */}
            <div className="product-grid">
              
              {/* Product 1 */}
              <div className="product-card">
                <div className="product-img-box">
                  <img alt="DroneMaker Air 3 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5CPQoqRs02CHXSrlqOtzEKG2pYLyUOBo2mi87tEygwlGWlB8K8izrRHTFJDbpPR2e8XNfsO2x3bbKS6bjPi7HTFTu-JjJEcqT_If_m5Y4DS0EghrflcnxoPuwY4ws_pNfuf-oSiVHZi-HMgJ7-TQG1Q4yyacm4WOARTtcEhviflgH-j9t3Bg4IL22SJg75a2IA_FxfmyjDz5RFe_eBh54g19GMMdX5KW-vXK-B-gLXVmSTZABZIr68zy8BvkbntOMX9RO6hk_1os" />
                </div>
                <div>
                  <span className="product-label label-tertiary">Mới về</span>
                  <h4 className="product-title">DroneMaker Air 3 Pro</h4>
                  <p className="product-price">28.900.000₫</p>
                </div>
                <div className="product-add-cart">
                  <button className="btn-add-cart">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              {/* Product 2 */}
              <div className="product-card">
                <div className="product-img-box">
                  <img alt="DroneMaker Enterprise T40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz3stUX97DUx9CeJhFnD4dHWRNtBJgDzWdZPYeEFquFU9I4qFnQJE7HFgzkqmSQMFoRA-m_sDSklmgx_8moycVdxfc4SnujAkyO26zXuHIiUH452OxTcfJ5XJXDvYk8cPTdLdsECIJys9IKqXnoSb9rvf3TjIH-6hTDt2dM31UAVgDGNgPBlQWUQYjZXPRk5pR15RXuAuABVuHPvB3ryT_aJyHv8cbXXuQjyKbEJwUMbRr3jxIWfbWe2Q-iQh0UKcjHjdDrLlGERg" />
                </div>
                <div>
                  <span className="product-label label-outline">Enterprise</span>
                  <h4 className="product-title">DroneMaker Enterprise T40</h4>
                  <p className="product-price">85.000.000₫</p>
                </div>
                <div className="product-add-cart">
                  <button className="btn-add-cart">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              {/* Product 3 */}
              <div className="product-card">
                <div className="product-img-box">
                  <img alt="DroneMaker Mini 4 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxgFB_UbR6LXK1rG5rR3BaPD5UjeqdB_ZvxDKw2zuPB3wnVM9l1cZtfIfyb-X60EGaHMDHRvOZcHax6KmJPw4a6vIqrNMeOZRXe6ysR6sT_j_5pwqDxWe_J99007YxzR8CbJ7xMSbWXSjeW0hWThadWATOuHahm91HgMpigIdP7X3bPW5W_Lh8AbU8ph95JVgEvksIk0_lv5q9LYUjFwYmHVvWLLC-HIYEwoHBJ2cuygfL77T0Ms6VxEJ28yy3ZWDaTsaQY-QUEeg" />
                </div>
                <div>
                  <span className="product-label label-tertiary">Best Seller</span>
                  <h4 className="product-title">DroneMaker Mini 4 Pro</h4>
                  <p className="product-price">16.500.000₫</p>
                </div>
                <div className="product-add-cart">
                  <button className="btn-add-cart">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              {/* Product 4 */}
              <div className="product-card">
                <div className="product-img-box">
                  <img alt="Điều khiển RC Pro 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbfH9uLlLHs04fJ2NU0k3RoiKtutNfUieCrdHhj5Afmxu6NAnaNuuhLRMBgRl25BaIt0FjAGzuAfnXqHsxjeQUzXSPU8FkNBX4RAukMnyPFxvtCGxUNbAFLC2CUTUyxFNZbSRBtdaut93H34HtjGzicVQEu1tDu49avXgxh11SC_zdgyOjyAVJk1vOvpHCRMtKoFfBP2im0kKRmQKW2BdMlso4-rAwfGuAICalR6TtjHERbDUI1zSx-J2UYo24SJpt0oS7uKwGvHY" />
                </div>
                <div>
                  <span className="product-label label-outline">Phụ kiện</span>
                  <h4 className="product-title">Điều khiển RC Pro 2</h4>
                  <p className="product-price">12.200.000₫</p>
                </div>
                <div className="product-add-cart">
                  <button className="btn-add-cart">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              {/* Product 5 */}
              <div className="product-card">
                <div className="product-img-box">
                  <img alt="DroneMaker Avata 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUOg3z0F_MELWYyUjfFxhPJ_ZQvuVoW1wfW7duu_JFQeAr7L34A9TSeYssa4HHOYOpm9dQgwI8di8HX7RLfbfLhnb6_kgAz8K6LPQyI_tG3GK67I-4mSUtfZALQ1shEultFLV5ngfO90_J5j0zzcHPMx68bvHlVn8xCjukHi1nlvp4p1DWK9m4OY8talDVdwJGZNze-b2QMXZVqFK2lxGfsyBpdpAiGYqEJqs59YPBdvesrEFLWNvf9EYHPyJ6ilwDb2L22YzuQWg" />
                </div>
                <div>
                  <span className="product-label label-tertiary">FPV Racing</span>
                  <h4 className="product-title">DroneMaker Avata 2</h4>
                  <p className="product-price">32.400.000₫</p>
                </div>
                <div className="product-add-cart">
                  <button className="btn-add-cart">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              {/* Product 6 */}
              <div className="product-card">
                <div className="product-img-box">
                  <img alt="DroneMaker Inspire 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFYGJ3V60HJyjKof6NBwDLQ9p2uM0LeDaKx2PqOabys85Lei8Fgm-fXVpJkaw5fvb_CuOhyB1eDYRMCG_VSbn7v5uW_1nqF1IegjDxzqXJtmBc2H1gkaUyme4-t6buRv21qInh-1LWXBGWhyY9y0QloCqERRhJBWjeAL7FpejeKQMvwP2F20Y9ce0hSvtPIxnA1KF7fm9P91-5juGsWVo4YlTsPDKRy5XE_URb0VLAi2ezRho7phlsAyIyiZal1C3ED6Raor5tyvE" />
                </div>
                <div>
                  <span className="product-label label-outline">Professional</span>
                  <h4 className="product-title">DroneMaker Inspire 3</h4>
                  <p className="product-price">145.000.000₫</p>
                </div>
                <div className="product-add-cart">
                  <button className="btn-add-cart">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

            </div>

            {/* 4. PAGINATION */}
            <div className="pagination">
              <button className="page-btn">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

          </section>

        </div>
      </div>
    </main>
  );
};

export default Shop;