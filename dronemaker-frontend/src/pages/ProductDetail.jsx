import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/product.css';

// ─── Mock data ────────────────────────────────────────────────────────────────
const GALLERY_IMAGES = [
  'https://dji-vietnam.vn/wp-content/uploads/2024/08/DJI-Neo_propeller-battery-detached.jpg',
  'https://dji-vietnam.vn/wp-content/uploads/2024/08/DJI-Neo_from-above_rendered-247x296.jpg',
  'https://dji-vietnam.vn/wp-content/uploads/2024/08/DJI-Neo_rendered_5-247x296.jpg',
  'https://dji-vietnam.vn/wp-content/uploads/2024/08/dji-neo-propeller-guard-4-247x296.jpg'
];

const MOCK_REVIEWS = [
  {
    id: 1,
    name: 'Nguyen Van Minh',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-QU9ySAmapg17qZeOOZbd6S19vQdIxkBtXECdUIUylmHdSnrDWS385z7dKToFoOzNDyaE27y7NAHlvCryvyPAVk1RNBhXogyRH0y9d14RzObr13c3UbRNRRKfsBZI-KZSam6qX2-PGujjXmoHwkFPCJAUnu9552-51OJSOikVxX6r7nQ0rEZMRZr_zyZLH62gteX1Kv7Z_nOo3LDKFXMUNXxeWB5Vw1KhmjUzc8uVqaoLF-cTyPZahYjRbXU-zDieVM0sMMFLGdY',
    rating: 5,
    date: '15/03/2024',
    title: 'Exceeded expectations',
    content: 'After 2 months of use, I am truly impressed with the camera quality and flight time. The 3-axis gimbal keeps footage extremely stable even in strong winds. Totally worth the price.',
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: 'Tran Thi Lan',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO3bjAbOp_qPKysOwx2PHz1W2FUx5svIgP9S5UJSBXm9R6bpQ9qrPmehL1-F7hzIGyrh2gsE1DRuPu9zz7C_AWhifCr_lsGcGwomuJ2m1XsQr3kUfS-mzlN7WPgpQZmXUJlmbL2rJ0YTztAtBrApUv2MfP2cPNkVOaubUZ55bZn1-jozo5H20EGICMF-6J1NR4CkLkx6vDOxEjlso122KWVXCVk_wqoZl_Go4fyx6nItuW9LRAHXQ12-lxryJVBNmpEyFzMxkLMGo',
    rating: 4,
    date: '02/04/2024',
    title: 'Good quality, fast delivery',
    content: 'Well packaged. Battery lasts longer than expected, about 42 minutes in real use. Minus one star because the controller feels a bit heavy.',
    verified: true,
    helpful: 11,
  },
  {
    id: 3,
    name: 'Pham Quoc Huy',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe7ZcSGKew2ihTUlTVD47e4MFIiemtQLUjwEgRJHaM6kWtWUsPfGTj-fA_oLR3-ENLdtp6Kj-SCnkyMjhiByx0w4BfPCCBJKjC3z19MMo_o4b9IG5EEarzL-iY0gGUTqvMcHYC6KHynZd9Q-TMus3a0E0aTfSXfSq9KRxpogRc-bwNYaaEspqsgGGboUMHqKxuM5UsvARMifeZnnmHJRcCKAIxRVuxxgDGeYVkI3F3gg1UjTKvtjvuz8JBfK1Gv7lXQFW3sdnsG-s',
    rating: 5,
    date: '18/04/2024',
    title: 'Best drone I’ve ever used',
    content: 'Bought it for event filming. Video quality is sharp and colors are accurate. ActiveTrack is very smooth. Extremely satisfied.',
    verified: false,
    helpful: 8,
  },
  {
    id: 4,
    name: 'Le Duc Thanh',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM6d2PSrcCJpj1Hdg_MhhFbhlSnQhbpfInrcInrm3k5XtxlXkmJffE4cTZLZVVRZFXKsQl5rMepIMYshe6iZd8jsyI6oQrWtTquywJ1w-TaXusPkqlYYTJo2hL-bo902rxDOCK-4yPnV8GtlNLWzvC4cE_bDQhcuXs56E5HeHU2DzDtNztODzYygKb6ECEsLghuO5GhfiLYoeB8oRnzReBXfDthzDUkGp3PyvxF7IO6wt7mfORxgq4bvg0jva4MhFkXjt-yyqd2JY',
    rating: 4,
    date: '28/04/2024',
    title: 'Worth the price',
    content: 'Compared to Mavic 3, Gen 2 has clear improvements in processing speed and connectivity. Stable signal up to 8km. Support team is also very helpful.',
    verified: true,
    helpful: 5,
  },
];


// ─── Sub-components ────────────────────────────────────────────────────────────
const StarRating = ({ rating, size = 'sm' }) => {
  const sizeMap = { sm: '16px', md: '20px', lg: '24px' };
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="material-symbols-outlined"
          style={{
            fontSize: sizeMap[size],
            color: star <= rating ? '#f59e0b' : '#d1d5db',
            fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0",
          }}
        >
          star
        </span>
      ))}
    </div>
  );
};

const RatingSummary = () => {
  const avg = 4.5;
  const counts = [{ stars: 5, pct: 72 }, { stars: 4, pct: 20 }, { stars: 3, pct: 5 }, { stars: 2, pct: 2 }, { stars: 1, pct: 1 }];
  return (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', padding: '2rem', background: 'var(--color-surface-container-low)', borderRadius: '0.75rem', marginBottom: '2.5rem' }}>
      <div style={{ textAlign: 'center', flexShrink: 0 }}>
        <div style={{ fontFamily: 'var(--font-headline)', fontSize: '3.5rem', fontWeight: 900, color: 'var(--color-on-surface)', lineHeight: 1 }}>{avg}</div>
        <StarRating rating={Math.round(avg)} size="md" />
        <div style={{ fontSize: '0.75rem', color: 'var(--color-outline)', marginTop: '0.5rem', fontWeight: 600 }}>124 đánh giá</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {counts.map(({ stars, pct }) => (
          <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-on-surface-variant)', width: '1.25rem', textAlign: 'right' }}>{stars}</span>
            <span className="material-symbols-outlined" style={{ fontSize: '14px', color: '#f59e0b', fontVariationSettings: "'FILL' 1" }}>star</span>
            <div style={{ flex: 1, height: '6px', background: 'var(--color-surface-container-highest)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct}%`, background: pct > 30 ? 'var(--color-primary)' : 'var(--color-outline-variant)', borderRadius: '99px', transition: 'width 0.6s ease' }} />
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-outline)', width: '2rem' }}>{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [helpful, setHelpful] = useState(review.helpful);
  const [voted, setVoted] = useState(false);

  const handleHelpful = () => {
    if (voted) return;
    setHelpful(h => h + 1);
    setVoted(true);
  };

  return (
    <div style={{
      background: 'var(--color-surface-container-lowest)',
      border: '1px solid rgba(193,198,214,0.15)',
      borderRadius: '0.75rem',
      padding: '1.75rem',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <img src={review.avatar} alt={review.name} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-on-surface)' }}>{review.name}</span>
              {review.verified && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '0.625rem', fontWeight: 700, color: '#059669', background: '#d1fae5', padding: '2px 6px', borderRadius: '99px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '10px', fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Ordered
                </span>
              )}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-outline)' }}>{review.date}</span>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>

      {/* Content */}
      <h5 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-on-surface)', marginBottom: '0.5rem' }}>{review.title}</h5>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{review.content}</p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid rgba(193,198,214,0.12)', paddingTop: '1rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-outline)' }}>Hữu ích không?</span>
        <button
          onClick={handleHelpful}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.25rem',
            padding: '0.25rem 0.625rem', borderRadius: '0.375rem',
            background: voted ? 'var(--color-primary)' : 'var(--color-surface-container)',
            color: voted ? 'white' : 'var(--color-on-surface-variant)',
            border: 'none', fontSize: '0.75rem', fontWeight: 700,
            cursor: voted ? 'default' : 'pointer',
            transition: 'all 0.3s',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '14px', fontVariationSettings: voted ? "'FILL' 1" : "'FILL' 0" }}>thumb_up</span>
          {helpful}
        </button>
      </div>
    </div>
  );
};

// ─── Toast Notification ────────────────────────────────────────────────────────
const Toast = ({ visible }) => (
  <div style={{
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: `translateX(-50%) translateY(${visible ? '0' : '4rem'})`,
    opacity: visible ? 1 : 0,
    background: '#1a1c1d',
    color: 'white',
    padding: '0.875rem 1.5rem',
    borderRadius: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: 600,
    fontSize: '0.875rem',
    zIndex: 1000,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
    pointerEvents: 'none',
  }}>
    <span className="material-symbols-outlined" style={{ color: '#34c759', fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
    Added to cart!
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
const ProductDetail = () => {
 

  // ── State ──────────────────────────────────────────────────────────────────
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'reviews'
  const [toastVisible, setToastVisible] = useState(false);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleThumbClick = (idx) => setActiveImageIdx(idx);

  const handleQtyChange = (delta) => {
    setQuantity(prev => Math.min(10, Math.max(1, prev + delta)));
  };

  const handleAddToCart = () => {
    if (toastVisible) return;
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <main className="product-page">
      <div className="product-container">

        {/* BREADCRUMBS */}
        <nav className="breadcrumbs">
          <a href="#">Home</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <a href="#">Products</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Drone Phantom X Pro</span>
        </nav>

        {/* ── 1. HERO SECTION (7:5) ── */}
        <section className="product-hero-grid">

          {/* Left: Media Gallery */}
          <div className="gallery-wrapper">
            {/* Main image */}
            <div className="gallery-main">
              <img
                key={activeImageIdx}
                alt={`Phantom X Pro - góc ${activeImageIdx + 1}`}
                src={GALLERY_IMAGES[activeImageIdx]}
                style={{ animation: 'fadeIn 0.25s ease' }}
              />
            </div>

            {/* Thumbnails */}
            <div className="gallery-thumbnails">
              {GALLERY_IMAGES.map((src, idx) => (
                <div
                  key={idx}
                  className={`thumb-item${activeImageIdx === idx ? ' active' : ''}`}
                  onClick={() => handleThumbClick(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <img alt={`Thumbnail ${idx + 1}`} src={src} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="product-info-wrapper">
            <h1 className="product-title">Phantom X Pro Gen 2</h1>

            <div className="product-pricing">
              <span className="price-current">24.990.000₫</span>
              <span className="price-original">29.500.000₫</span>
            </div>

            <p className="product-desc">
              Phantom X Pro is not just a drone, it’s a professional creative tool. With a new aerodynamic structure, it can withstand level 7 winds and maintain absolute image stability thanks to the restructured 3-axis gimbal system.
            </p>

            <div className="product-actions">
              {/* SKU */}
              <div className="sku-row">
                <span className="meta-label">SKU:</span>
                <span className="sku-value">DM-PXPRO-G2-WHT</span>
              </div>

              {/* Quantity */}
              <div className="qty-row">
                <span className="meta-label">Quantity:</span>
                <div className="qty-selector">
                  <button
                    className="qty-btn"
                    onClick={() => handleQtyChange(-1)}
                    disabled={quantity <= 1}
                    style={{ opacity: quantity <= 1 ? 0.35 : 1, transition: 'opacity 0.2s' }}
                  >
                    <span className="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <input
                    className="qty-input"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="qty-btn"
                    onClick={() => handleQtyChange(1)}
                    disabled={quantity >= 10}
                    style={{ opacity: quantity >= 10 ? 0.35 : 1, transition: 'opacity 0.2s' }}
                  >
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
                {quantity >= 10 && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-outline)', marginTop: '0.25rem' }}>
                    Maximum 10 products per order
                  </span>
                )}
              </div>

              {/* Add to cart */}
              <Link 
                to='/cart'
                className="btn-add-cart-large"
                onClick={handleAddToCart}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <span className="material-symbols-outlined">shopping_basket</span>
                ADD TO CART
                {quantity > 1 && (
                  <span style={{
                    background: 'rgba(255,255,255,0.25)',
                    borderRadius: '99px',
                    padding: '0 0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    marginLeft: '0.25rem',
                  }}>
                    ×{quantity}
                  </span>
                )}
              </Link>
            </div>

            {/* Support Box */}
            <div className="support-box">
              <h3 className="support-title">
                <span className="material-symbols-outlined text-primary text-lg">support_agent</span>
                Product Support
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

        {/* ── 2. TABS & DETAILS SECTION ── */}
        <section className="product-tabs-section">
          <div className="tabs-header">
            <button
              className={`tab-btn${activeTab === 'details' ? ' active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Product Details
            </button>
            <button
              className={`tab-btn${activeTab === 'reviews' ? ' active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews (124)
            </button>
          </div>

          {/* ── Tab: Chi tiết sản phẩm ── */}
          {activeTab === 'details' && (
            <div className="details-grid">

              {/* Left: Main Details */}
              <div className="details-main-content">
                <div>
                  <h4 className="details-heading">Go through any limit</h4>
                  <p className="product-desc">
                    Phantom X Pro is not just a drone, it’s a professional creative tool. With a new aerodynamic structure, it can withstand level 7 winds and maintain absolute image stability thanks to the restructured 3-axis gimbal system.
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
                    <span className="stat-value">45 Minutes</span>
                    <span className="stat-label">Flight Time</span>
                  </div>
                </div>
              </div>

              {/* Right: Tech Specs Sidebar */}
              <aside className="specs-sidebar">
                <h5 className="specs-title">Technical Specifications</h5>
                <div className="specs-list">
                  {[
                    ['Weight', '720g'],
                    ['Range', '12km'],
                    ['Max Speed', '19 m/s'],
                    ['Sensor', 'CMOS 1"'],
                    ['Image Resolution', '48MP'],
                    ['Charging Time', '< 90 minutes'],
                    ['Water Resistance', 'IP53'],
                    ['Operating Temperature', '-10°C ~ 40°C'],
                  ].map(([label, value]) => (
                    <div className="spec-row" key={label}>
                      <span className="spec-label">{label}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          )}

          {/* ── Tab: Đánh giá ── */}
          {activeTab === 'reviews' && (
            <div style={{ maxWidth: '820px' }}>
              {/* Rating summary */}
              <RatingSummary />

              {/* Sort & filter bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '1rem', color: 'var(--color-on-surface)' }}>
                  All Reviews
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-outline)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Sort by:
                  </span>
                  <select style={{
                    background: 'var(--color-surface-container-highest)',
                    border: 'none', borderRadius: '0.375rem',
                    padding: '0.375rem 0.75rem', fontSize: '0.8rem',
                    fontFamily: 'var(--font-body)', outline: 'none',
                    color: 'var(--color-on-surface)', cursor: 'pointer',
                  }}>
                    <option>Newest</option>
                    <option>Highest Rated</option>
                    <option>Most Helpful</option>
                  </select>
                </div>
              </div>

              {/* Review cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {MOCK_REVIEWS.map(review => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              {/* Write review CTA */}
              <div style={{
                padding: '2rem',
                border: '1.5px dashed var(--color-outline-variant)',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--color-outline)', marginBottom: '0.5rem', display: 'block' }}>rate_review</span>
                <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-on-surface)' }}>Did you purchase this product?</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', marginBottom: '1.25rem' }}>Share your experience to help other customers.</p>
                <button style={{
                  background: 'var(--color-primary)',
                  color: 'white', border: 'none',
                  padding: '0.75rem 1.75rem', borderRadius: '0.5rem',
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  fontSize: '0.875rem', cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  Write Review
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Fade-in keyframe via style tag */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Toast */}
      <Toast visible={toastVisible} />
    </main>
  );
};

export default ProductDetail;