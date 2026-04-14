import React from 'react';
import '../assets/home.css';

const Home = () => {
  return (
    <>
      {/* 1. HERO SLIDE BANNER (Nằm ngoài <main> theo thiết kế gốc) */}
      <section className="hero-dark">
        <div className="hero-dark-bg">
          <img 
            className="hero-dark-img" 
            alt="DJI RS 5" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSkNkh3xDpVOknaQ3ajv33n67_q6sYSw7nS_r09hblQerPGk23K3OPsNEuzuaWsB7CiF2ixPf7b1zSStvVT1j_TB7ha1fPgbr51SZlglGNo7gbxlWP7GgrqC3Lp-u1iyjyiISODWpVWwzTw3pCxbYpaL1vhz4Q5AQnnxRhEEOUkvA2NE9GfJXLqlJVGrsgsk-4RJeT7Z2yoELsp8ovKwdQbfkDk1z65UkW0r7U6BnPVD6jtFN5PI9Nyz6z5v_iCTnPFhrY5bpbYdY" 
          />
          <div className="hero-dark-gradient"></div>
        </div>
        <div className="hero-content-wrapper">
          <span className="hero-label">The new benchmark</span>
          <h1 className="hero-dark-title">DJI RS 5</h1>
          <p className="hero-dark-desc">
            Unrivaled stabilization meets groundbreaking intelligent tracking. Redefining the limits of cinematography for creators everywhere.
          </p>
          <div className="hero-actions">
            <button className="btn-primary-dark">Order Now</button>
            <a href="#" className="link-explore-dark">
              Explore Features
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <main className="home-page">
        {/* 2. HERO SLIDER SECTION (Sáng màu) */}
        <section className="hero-light">
          <div className="hero-light-bg">
            <img 
              className="hero-light-img" 
              alt="DJI RS 5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSkNkh3xDpVOknaQ3ajv33n67_q6sYSw7nS_r09hblQerPGk23K3OPsNEuzuaWsB7CiF2ixPf7b1zSStvVT1j_TB7ha1fPgbr51SZlglGNo7gbxlWP7GgrqC3Lp-u1iyjyiISODWpVWwzTw3pCxbYpaL1vhz4Q5AQnnxRhEEOUkvA2NE9GfJXLqlJVGrsgsk-4RJeT7Z2yoELsp8ovKwdQbfkDk1z65UkW0r7U6BnPVD6jtFN5PI9Nyz6z5v_iCTnPFhrY5bpbYdY" 
            />
            <div className="hero-light-gradient"></div>
          </div>
          <div className="hero-light-content">
            <span className="hero-label-sm">Precision Engineering</span>
            <h1 className="hero-light-title">DJI RS 5</h1>
            <p className="hero-light-desc">
              Unrivaled stabilization meets groundbreaking intelligent tracking. Redefining the limits of cinematography for creators everywhere.
            </p>
            <div className="hero-actions">
              <button className="btn-primary-gradient">Order Now</button>
              <button className="link-explore-light">
                Explore Features
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. QUICK LINKS CATEGORIES */}
        <section className="quick-links-section">
          <div className="quick-links-grid">
            <a href="#" className="quick-link-card">
              <div className="quick-link-icon-wrap">
                <span className="material-symbols-outlined quick-link-icon">flight</span>
              </div>
              <div>
                <h3 className="quick-link-title">Flycam</h3>
                <p className="quick-link-desc">Premium Aerial Views</p>
              </div>
            </a>
            
            <a href="#" className="quick-link-card">
              <div className="quick-link-icon-wrap">
                <span className="material-symbols-outlined quick-link-icon">settings_input_component</span>
              </div>
              <div>
                <h3 className="quick-link-title">Accessories</h3>
                <p className="quick-link-desc">Enhance Experience</p>
              </div>
            </a>

            <a href="#" className="quick-link-card">
              <div className="quick-link-icon-wrap">
                <span className="material-symbols-outlined quick-link-icon">build</span>
              </div>
              <div>
                <h3 className="quick-link-title">Spare Parts</h3>
                <p className="quick-link-desc">Maintain Performance</p>
              </div>
            </a>
          </div>
        </section>

        {/* 4. FEATURED PRODUCTS */}
        <section className="products-section">
          <div className="container">
            <div className="section-header-flex">
              <div>
                <h2 className="section-title">Precision Machines</h2>
                <p className="text-on-surface-variant">Selected high-performance gear for professional results.</p>
              </div>
              <a href="#" className="view-all-link">View All Series</a>
            </div>

            <div className="products-grid">
              {/* Product Card 1 */}
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img className="product-img" alt="Mavic 3 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQXyubKeCWFaapBXW9HrrQMWqovUzM9XGpUuG5O91KtK-JgMKIyer4MzVWNERPx7iuzSAVQsIPy7rez7NuIS16fWfGktuA7ZhLnyfgWzLzHGYKbPo66DAHXohnm6Roo68BkapNVfyLSc4t3KhVSB_dRqHMpkaLVdY0C9WJ4Ov_zqOyZpZwqSG7srPbqAi_oYjkCBx4cC1JIWi7uhm2l9oN9Yj4yym6Jws8IUQgr3iSNsrFKgPcIF8t99Y-7nnGBHbSzMrl6Ygj-Nk" />
                  <div className="product-badge-new">New Arrival</div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Mavic 3 Pro</h3>
                  <p className="product-subtitle">Triple-Camera System, 43-min Flight Time</p>
                  <div className="product-bottom">
                    <span className="product-price">$2,199.00</span>
                    <button className="add-btn">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img className="product-img" alt="Avata 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8l7kqJxV8NPPV_5776c3SYRAd8DEE0oqQDuO7-bV9k1hX-q6s_GR3q1IkBtAukIBu-9ACcGEShAIaqkW6WiMhTnjBd_AeowPPGGYzNhwLTFCtu3YIgvmDgPjef-JXevWVuQfocv1Y3A-YvhJ25Vdw6QZfVprJkWRbYNdaYdkcgnhgXN_DWl9xMc97WE7bw7cjvG2sL8FfDqpDK9PHfR_i5ygTyTcOCNKXxPpwYVkVTrCVvZILND9OUlFPiOf1ICHjuo1AhRCz_M" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Avata 2</h3>
                  <p className="product-subtitle">Immersive FPV Flight Experience</p>
                  <div className="product-bottom">
                    <span className="product-price">$1,299.00</span>
                    <button className="add-btn">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="product-card">
                <div className="product-img-wrapper">
                  <img className="product-img" alt="Mini 4 Pro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB47ZsSkJYcmkOAJkfSNMK8fgJLOxpGr81iJpiI0Bu5bjAwkb77VNFLRNouFCZ3-NICFEkTHkhWjnQoh3GPKgMQ4aEOBTWgpYZNnKbmieng_ptBqkGJ7CvhKxIkinrQsHJxZ-UyshPtMvishq01brP1MObZ1Ju3Jppr2yhrP5ptekuzu7QK8nT_CT0w9Z7Y4ujh4yu9akf0racx5DEYUJRBdF2k9ky2SppyVsEND-KE3E0RT2nwvKGpWZmSKzaD7g3c4LOdfUN2FWE" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Mini 4 Pro</h3>
                  <p className="product-subtitle">Under 249g, 4K/60fps HDR Video</p>
                  <div className="product-bottom">
                    <span className="product-price">$759.00</span>
                    <button className="add-btn">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. VIDEO GUIDES SECTION */}
        <section className="videos-section">
          <div className="container">
            <div className="videos-header">
              <h2 className="section-title">Master Your Craft</h2>
              <p className="text-on-surface-variant max-w-2xl">From initial setup to advanced cinematography techniques, our expert-led tutorials help you push boundaries.</p>
            </div>

            <div className="videos-grid">
              {/* Video 1 */}
              <div className="video-card">
                <img className="video-img" alt="Flight Tutorial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmPDxqO5DLYIdD-6bRv3-QCZcJjra4nHMPn0UvIXhsBwcMp4MP54AGMf6O_H072W7taSdUde4QCV6R-FoJE0CCzzwuSZogX3hnuFukbFJhIsBwKogpyXYNpWeCyzbPW1B3HptSFU3uHjSdge_XmWSSu8nIGGj_B2EfrzoEThtPULbxKX0sHmkEZY52FK69TSk8qfoaGC6pbyaK1yOLb4nPhSBzePnGxDCI5GszhKAS2JEFDQM_yOC7jsg6iJifbbRBjfVK2TfWzas" />
                <div className="video-play-overlay">
                  <div className="play-circle">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="video-info-overlay">
                  <p className="video-tag">Basics</p>
                  <h4 className="video-title">Initial Setup & First Flight</h4>
                </div>
              </div>

              {/* Video 2 */}
              <div className="video-card">
                <img className="video-img" alt="Cinematography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKB5Uctz3Gk3kUYRXz3IXAD6DphbM-Xdx21yXMiHwj9QPHDvjto_pyEAysf0qZGPtH4NIkXGCGLQiCWna7PND1veElgTUi0-fyN88lRTo6s5Jezfb9f1dQvezksPiR215SRnxqislrZjQUtbTneOa4z78uuW_CYk4Rlt5ELiUAHLpdJRGewvHfRz4U6b3oxWxsp-4Mo-_35kTyVqJnZSNMxY5aaG4v_9CvEvcyUIyuI10DljkXZnoJfjaVh_LNbB5DRG1VtuzyC58" />
                <div className="video-play-overlay">
                  <div className="play-circle">
                    <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="video-info-overlay">
                  <p className="video-tag">Advanced</p>
                  <h4 className="video-title">Cinematic Movements Masterclass</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FEATURED SPECIFICATIONS (BENTO) */}
        <section className="bento-section">
          <div className="container bento-grid">
            {/* Box Lớn */}
            <div className="bento-card bento-large">
              <span className="text-tertiary font-bold text-sm mb-4">4K/120fps</span>
              <h3>Ultra-High Frame Rate</h3>
              <p className="text-on-surface-variant mb-8">Capture breathtaking slow-motion footage in stunning 4K resolution. Experience clarity like never before.</p>
              <button className="bento-link">
                Learn about optics <span className="material-symbols-outlined">arrow_outward</span>
              </button>
            </div>

            {/* Box Dài */}
            <div className="bento-card bento-wide">
              <div>
                <span className="text-3xl font-black block mb-2">15km</span>
                <p className="font-headline text-xl">Max Transmission Range</p>
              </div>
              <div className="ml-auto opacity-20">
                <span className="material-symbols-outlined text-8xl">settings_input_antenna</span>
              </div>
            </div>

            {/* Box Vuông 1 */}
            <div className="bento-card bento-small-1">
              <span className="text-2xl font-bold mb-1">20min</span>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Charging Time</p>
            </div>

            {/* Box Vuông 2 */}
            <div className="bento-card bento-small-2">
              <span className="text-2xl font-bold mb-1">Omni</span>
              <p className="text-xs uppercase tracking-widest font-bold opacity-60">Obstacle Sensing</p>
            </div>
          </div>
        </section>
      </main>

      {/* 7. STATISTICS SECTION */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-num">15,000+</div>
            <div className="stat-text">Khách hàng hài lòng</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">50+</div>
            <div className="stat-text">Mẫu Drone & Phụ kiện</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2.5M+</div>
            <div className="stat-text">Giờ bay an toàn</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">24/7</div>
            <div className="stat-text">Hỗ trợ kỹ thuật</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;