// import React from 'react';
// import '../assets/product.css';

// const ProductDetail = () => {
//   return (
//     <main className="product-page">
//       <div className="product-container">
        
//         {/* BREADCRUMBS */}
//         <nav className="breadcrumbs">
//           <a href="#">Trang chủ</a>
//           <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
//           <a href="#">Sản phẩm</a>
//           <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
//           <span className="current">Drone Phantom X Pro</span>
//         </nav>

//         {/* 1. HERO SECTION (7:5) */}
//         <section className="product-hero-grid">
          
//           {/* Left: Media Gallery */}
//           <div className="gallery-wrapper">
//             <div className="gallery-main">
//               <img 
//                 alt="Phantom X Pro Main View" 
//                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfeX1V5v25LW25I5lzYMRX-4_FZ_aZHT8HDKok9IOG0rV7n85CAtWYg93qQv3xDG-LLfU8r4WvlEeTp8GvJ3nLKri_CggjUYEr-IQCe5DrvjqokJOWZH6Lno7RLhIaTAQLyIGZWXDD4evNEIL_aSDHcPpRI8ScSTqLzCVQFbn0HbxX7KXcWKjQucFoiI1BZg0cGgbZcs4Aj8KSHaFa28lF3cEqapEEoUc5uAsflw32FbMRMvGnU7v1o0a0KUXwA0bZzASpvXt4ogY" 
//               />
//             </div>
//             <div className="gallery-thumbnails">
//               <div className="thumb-item active">
//                 <img alt="View 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTmvAfLJXRjxac6WKIR7fQF8kQphjdKvum6GhDOwcc2UbvFZ2dGTm-u5oYvd-hNTNv5C87wnNMrZ0z06a1s4qqjM7BMFwHpCRB1YZ5sJNoAxWIWE2QLyWZOge6wlFcLNabSVbMb6uTa4QcnV33_g-sMe_NLclZ3vLAklPyzaeT0tlp5lsd-SHrDQBSqhCtrcm5K0ZRlboVamTOoF-ASuiB3hMUZd2TibkmGYTrn_bvFdJ9UiYzJu22_UOziHQWWChex7aWSvBK9Og" />
//               </div>
//               <div className="thumb-item">
//                 <img alt="View 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_QkRWek_0VrQdCpP1q3VVeZ-pEERUPyObMI4R0cvsLeDTYa8TLRsrwEqh0Uqe48z7wn3pf7STlAyADM-3CqVxTvd6G1VQr21CJv66MYoAyhEQcpfqV5ZKpPW9xSrsHrKsjx3LaSOc4dAgACbENlE0t8UjaQHxzU19n5g5oZzy4dCqV0MJcA6aKBnWYvIwwpmqIskQaXsKJ0_vdsoxZSKTu5CJ8CTp0y_dnRY3UWYl7sSj4I-oFYDOGNVmN9m6lH9bJSQ-6_VzMQQ" />
//               </div>
//               <div className="thumb-item">
//                 <img alt="View 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlnt1I2dRkduKhqQdidRVKPa9CHVJnAMk-fCETqNhtMHLZKDFrSRVJQ0qyL6YHiysRS2p286ZpKwIfvg_LrLNr-vZ7cpPqQi6tC4igMtVS4N5yAJnRyUmuFKhG5_LTMnZaEeMLk0FXAzxPJefPrB-4PN3650BM5UVhIhBPbFHD4EoTiwfCPpDUGvcndIYDDZXycLq6fLCjeieeO3RYMbvIurjDHIYiXvcdGwvizo2ZKPrZK_T0dQkwj1ZfwsxTgQm9bh5wdm_oOrk" />
//               </div>
//               <div className="thumb-item">
//                 <img alt="View 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ3bHmhyy-VRli-Ayt6_VQ336dJc0p2Kd8vtW4sMhAc6I3mEYcWWJ_2WhgzmjKggjD0eLYDEao_YxWenDEBnRvJm1QYiAX2hAD2YCG0AMinwA6I4LOC65Oqwt1ZK5cB26K_-KCkoPGhRIIKLX-CzxRum79IefTQ46shZLvXd3D5t8ql1DmI_R0kKWRgRJZaX8iCt1EwrEsz7t8uHlbCfezZtye_Ea2V7kdUFEQSVT8QqUwhoLhYB1w19a-Q_G9W24BTgle-bSLYU0" />
//               </div>
//             </div>
//           </div>

//           {/* Right: Product Info */}
//           <div className="product-info-wrapper">
//             {/* <span className="product-badge-new">New Arrival</span> */}
//             <h1 className="product-title">Phantom X Pro Gen 2</h1>
            
//             <div className="product-pricing">
//               <span className="price-current">24.990.000₫</span>
//               <span className="price-original">29.500.000₫</span>
//             </div>

//             <p className="product-desc">
//               Trải nghiệm tầm nhìn không giới hạn với Phantom X Pro. Trang bị cảm biến CMOS 1 inch, quay phim 5.4K và thời gian bay lên đến 45 phút. Đỉnh cao của công nghệ flycam dân dụng hiện nay.
//             </p>

//             <div className="product-actions">
//               <div className="sku-row">
//                 <span className="meta-label">SKU:</span>
//                 <span className="sku-value">DM-PXPRO-G2-WHT</span>
//               </div>

//               <div className="qty-row">
//                 <span className="meta-label">Số lượng:</span>
//                 <div className="qty-selector">
//                   <button className="qty-btn">
//                     <span className="material-symbols-outlined text-lg">remove</span>
//                   </button>
//                   <input className="qty-input" type="text" defaultValue="1" readOnly />
//                   <button className="qty-btn">
//                     <span className="material-symbols-outlined text-lg">add</span>
//                   </button>
//                 </div>
//               </div>

//               <button className="btn-add-cart-large">
//                 <span className="material-symbols-outlined">shopping_basket</span>
//                 THÊM VÀO GIỎ HÀNG
//               </button>
//             </div>

//             {/* Support Box */}
//             <div className="support-box">
//               <h3 className="support-title">
//                 <span className="material-symbols-outlined text-primary text-lg">support_agent</span>
//                 Hỗ trợ sản phẩm
//               </h3>
//               <div className="support-list">
//                 <a href="tel:18001234" className="support-item">
//                   <span className="material-symbols-outlined text-sm text-outline">call</span>
//                   Hotline: 1800 1234
//                 </a>
//                 <div className="support-item">
//                   <span className="material-symbols-outlined text-sm text-outline">share</span>
//                   <div className="share-links">
//                     <a href="#">Facebook</a>
//                     <a href="#">Twitter</a>
//                     <a href="#">Copy Link</a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </section>

//         {/* 2. TABS & DETAILS SECTION */}
//         <section className="product-tabs-section">
          
//           <div className="tabs-header">
//             <button className="tab-btn active">Chi tiết sản phẩm</button>
//             <button className="tab-btn">Đánh giá (124)</button>
//           </div>

//           <div className="details-grid">
            
//             {/* Left: Main Details */}
//             <div className="details-main-content">
//               <div>
//                 <h4 className="details-heading">Vượt Qua Mọi Giới Hạn</h4>
//                 <p className="product-desc">
//                   Phantom X Pro không chỉ là một chiếc drone, đó là một công cụ sáng tạo chuyên nghiệp được thu nhỏ. Với cấu trúc khí động học mới, nó có thể chống lại gió cấp 7 và giữ ổn định hình ảnh tuyệt đối nhờ hệ thống gimbal 3 trục được tái cấu trúc.
//                 </p>
//                 <div className="details-image">
//                   <img 
//                     alt="Drone flying in forest" 
//                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQgoucps1Q-ySQZnGgbq50h8flJkserdl57VI88-iBXum3-EJN_AUZNTYfMf7Mu6pb6-0yOqTdy-XJQmx0b-bOKfB1lf2-AhSUb6-YaumA9H-uYJ1ZkL-P3WZjCuGyz4AoeFNy0zw9ng0kmjKtuxKCaN4cCVDcqbLgp3n1Iiv9jr6ehyZUKFeouuQIg3MJIjTwwfjKNkJJD-_yc1wyB8zSbUTTy_oXV72sm8a-4OoVpHtaT4SkaXMbtGJpOGC6R1jk7zJVenjRSik" 
//                   />
//                 </div>
//               </div>

//               <div className="feature-stats-row">
//                 <div className="feature-stat-box">
//                   <span className="stat-value">4K/60fps</span>
//                   <span className="stat-label">Video Quality</span>
//                 </div>
//                 <div className="feature-stat-box">
//                   <span className="stat-value">45 Phút</span>
//                   <span className="stat-label">Thời gian bay</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Tech Specs Sidebar */}
//             <aside className="specs-sidebar">
//               <h5 className="specs-title">Thông số kỹ thuật</h5>
//               <div className="specs-list">
//                 <div className="spec-row">
//                   <span className="spec-label">Trọng lượng</span>
//                   <span className="spec-value">720g</span>
//                 </div>
//                 <div className="spec-row">
//                   <span className="spec-label">Khoảng cách truyền</span>
//                   <span className="spec-value">12km</span>
//                 </div>
//                 <div className="spec-row">
//                   <span className="spec-label">Tốc độ tối đa</span>
//                   <span className="spec-value">19 m/s</span>
//                 </div>
//                 <div className="spec-row">
//                   <span className="spec-label">Cảm biến</span>
//                   <span className="spec-value">CMOS 1"</span>
//                 </div>
//               </div>
//             </aside>

//           </div>
//         </section>

//       </div>
//     </main>
//   );
// };

// export default ProductDetail;


import React, { useState } from 'react';
import '../assets/product.css';

// ─── Mock data ────────────────────────────────────────────────────────────────
const GALLERY_IMAGES = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDfeX1V5v25LW25I5lzYMRX-4_FZ_aZHT8HDKok9IOG0rV7n85CAtWYg93qQv3xDG-LLfU8r4WvlEeTp8GvJ3nLKri_CggjUYEr-IQCe5DrvjqokJOWZH6Lno7RLhIaTAQLyIGZWXDD4evNEIL_aSDHcPpRI8ScSTqLzCVQFbn0HbxX7KXcWKjQucFoiI1BZg0cGgbZcs4Aj8KSHaFa28lF3cEqapEEoUc5uAsflw32FbMRMvGnU7v1o0a0KUXwA0bZzASpvXt4ogY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTmvAfLJXRjxac6WKIR7fQF8kQphjdKvum6GhDOwcc2UbvFZ2dGTm-u5oYvd-hNTNv5C87wnNMrZ0z06a1s4qqjM7BMFwHpCRB1YZ5sJNoAxWIWE2QLyWZOge6wlFcLNabSVbMb6uTa4QcnV33_g-sMe_NLclZ3vLAklPyzaeT0tlp5lsd-SHrDQBSqhCtrcm5K0ZRlboVamTOoF-ASuiB3hMUZd2TibkmGYTrn_bvFdJ9UiYzJu22_UOziHQWWChex7aWSvBK9Og',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD_QkRWek_0VrQdCpP1q3VVeZ-pEERUPyObMI4R0cvsLeDTYa8TLRsrwEqh0Uqe48z7wn3pf7STlAyADM-3CqVxTvd6G1VQr21CJv66MYoAyhEQcpfqV5ZKpPW9xSrsHrKsjx3LaSOc4dAgACbENlE0t8UjaQHxzU19n5g5oZzy4dCqV0MJcA6aKBnWYvIwwpmqIskQaXsKJ0_vdsoxZSKTu5CJ8CTp0y_dnRY3UWYl7sSj4I-oFYDOGNVmN9m6lH9bJSQ-6_VzMQQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAlnt1I2dRkduKhqQdidRVKPa9CHVJnAMk-fCETqNhtMHLZKDFrSRVJQ0qyL6YHiysRS2p286ZpKwIfvg_LrLNr-vZ7cpPqQi6tC4igMtVS4N5yAJnRyUmuFKhG5_LTMnZaEeMLk0FXAzxPJefPrB-4PN3650BM5UVhIhBPbFHD4EoTiwfCPpDUGvcndIYDDZXycLq6fLCjeieeO3RYMbvIurjDHIYiXvcdGwvizo2ZKPrZK_T0dQkwj1ZfwsxTgQm9bh5wdm_oOrk',
];

const MOCK_REVIEWS = [
  {
    id: 1,
    name: 'Nguyễn Văn Minh',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-QU9ySAmapg17qZeOOZbd6S19vQdIxkBtXECdUIUylmHdSnrDWS385z7dKToFoOzNDyaE27y7NAHlvCryvyPAVk1RNBhXogyRH0y9d14RzObr13c3UbRNRRKfsBZI-KZSam6qX2-PGujjXmoHwkFPCJAUnu9552-51OJSOikVxX6r7nQ0rEZMRZr_zyZLH62gteX1Kv7Z_nOo3LDKFXMUNXxeWB5Vw1KhmjUzc8uVqaoLF-cTyPZahYjRbXU-zDieVM0sMMFLGdY',
    rating: 5,
    date: '15/03/2024',
    title: 'Sản phẩm vượt kỳ vọng',
    content: 'Sau 2 tháng sử dụng, tôi thực sự ấn tượng với chất lượng camera và thời gian bay. Gimbal 3 trục giữ ảnh cực kỳ ổn định ngay cả khi gió mạnh. Đáng đồng tiền bát gạo.',
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: 'Trần Thị Lan',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO3bjAbOp_qPKysOwx2PHz1W2FUx5svIgP9S5UJSBXm9R6bpQ9qrPmehL1-F7hzIGyrh2gsE1DRuPu9zz7C_AWhifCr_lsGcGwomuJ2m1XsQr3kUfS-mzlN7WPgpQZmXUJlmbL2rJ0YTztAtBrApUv2MfP2cPNkVOaubUZ55bZn1-jozo5H20EGICMF-6J1NR4CkLkx6vDOxEjlso122KWVXCVk_wqoZl_Go4fyx6nItuW9LRAHXQ12-lxryJVBNmpEyFzMxkLMGo',
    rating: 4,
    date: '02/04/2024',
    title: 'Chất lượng tốt, giao hàng nhanh',
    content: 'Đóng gói rất cẩn thận. Pin trâu hơn tôi tưởng, bay được khoảng 42 phút thực tế. Chỉ trừ 1 sao vì bộ điều khiển hơi nặng khi cầm lâu.',
    verified: true,
    helpful: 11,
  },
  {
    id: 3,
    name: 'Phạm Quốc Huy',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe7ZcSGKew2ihTUlTVD47e4MFIiemtQLUjwEgRJHaM6kWtWUsPfGTj-fA_oLR3-ENLdtp6Kj-SCnkyMjhiByx0w4BfPCCBJKjC3z19MMo_o4b9IG5EEarzL-iY0gGUTqvMcHYC6KHynZd9Q-TMus3a0E0aTfSXfSq9KRxpogRc-bwNYaaEspqsgGGboUMHqKxuM5UsvARMifeZnnmHJRcCKAIxRVuxxgDGeYVkI3F3gg1UjTKvtjvuz8JBfK1Gv7lXQFW3sdnsG-s',
    rating: 5,
    date: '18/04/2024',
    title: 'Flycam tốt nhất tôi từng dùng',
    content: 'Mua cho mục đích quay phim sự kiện. Kết quả video sắc nét, màu sắc trung thực. Chế độ ActiveTrack theo dõi chủ thể cực mượt. Rất hài lòng với lần mua này.',
    verified: false,
    helpful: 8,
  },
  {
    id: 4,
    name: 'Lê Đức Thành',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM6d2PSrcCJpj1Hdg_MhhFbhlSnQhbpfInrcInrm3k5XtxlXkmJffE4cTZLZVVRZFXKsQl5rMepIMYshe6iZd8jsyI6oQrWtTquywJ1w-TaXusPkqlYYTJo2hL-bo902rxDOCK-4yPnV8GtlNLWzvC4cE_bDQhcuXs56E5HeHU2DzDtNztODzYygKb6ECEsLghuO5GhfiLYoeB8oRnzReBXfDthzDUkGp3PyvxF7IO6wt7mfORxgq4bvg0jva4MhFkXjt-yyqd2JY',
    rating: 4,
    date: '28/04/2024',
    title: 'Đáng mua ở tầm giá này',
    content: 'So với Mavic 3 cũ thì Gen 2 cải thiện rõ rệt về tốc độ xử lý và kết nối. Sóng ổn định ở khoảng cách 8km. Đội ngũ hỗ trợ của DroneMaker cũng rất nhiệt tình.',
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
                  Đã mua hàng
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
    Đã thêm vào giỏ hàng!
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
          <a href="#">Trang chủ</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <a href="#">Sản phẩm</a>
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
              Trải nghiệm tầm nhìn không giới hạn với Phantom X Pro. Trang bị cảm biến CMOS 1 inch, quay phim 5.4K và thời gian bay lên đến 45 phút. Đỉnh cao của công nghệ flycam dân dụng hiện nay.
            </p>

            <div className="product-actions">
              {/* SKU */}
              <div className="sku-row">
                <span className="meta-label">SKU:</span>
                <span className="sku-value">DM-PXPRO-G2-WHT</span>
              </div>

              {/* Quantity */}
              <div className="qty-row">
                <span className="meta-label">Số lượng:</span>
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
                    Tối đa 10 sản phẩm mỗi đơn hàng
                  </span>
                )}
              </div>

              {/* Add to cart */}
              <button
                className="btn-add-cart-large"
                onClick={handleAddToCart}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <span className="material-symbols-outlined">shopping_basket</span>
                THÊM VÀO GIỎ HÀNG
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

        {/* ── 2. TABS & DETAILS SECTION ── */}
        <section className="product-tabs-section">
          <div className="tabs-header">
            <button
              className={`tab-btn${activeTab === 'details' ? ' active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Chi tiết sản phẩm
            </button>
            <button
              className={`tab-btn${activeTab === 'reviews' ? ' active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Đánh giá (124)
            </button>
          </div>

          {/* ── Tab: Chi tiết sản phẩm ── */}
          {activeTab === 'details' && (
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
                  {[
                    ['Trọng lượng', '720g'],
                    ['Khoảng cách truyền', '12km'],
                    ['Tốc độ tối đa', '19 m/s'],
                    ['Cảm biến', 'CMOS 1"'],
                    ['Độ phân giải ảnh', '48MP'],
                    ['Thời gian sạc', '< 90 phút'],
                    ['Chuẩn kháng nước', 'IP53'],
                    ['Nhiệt độ hoạt động', '-10°C ~ 40°C'],
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
                  Tất cả đánh giá
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-outline)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Sắp xếp:
                  </span>
                  <select style={{
                    background: 'var(--color-surface-container-highest)',
                    border: 'none', borderRadius: '0.375rem',
                    padding: '0.375rem 0.75rem', fontSize: '0.8rem',
                    fontFamily: 'var(--font-body)', outline: 'none',
                    color: 'var(--color-on-surface)', cursor: 'pointer',
                  }}>
                    <option>Mới nhất</option>
                    <option>Đánh giá cao nhất</option>
                    <option>Hữu ích nhất</option>
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
                <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-on-surface)' }}>Bạn đã mua sản phẩm này?</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-on-surface-variant)', marginBottom: '1.25rem' }}>Chia sẻ trải nghiệm để giúp những khách hàng khác.</p>
                <button style={{
                  background: 'var(--color-primary)',
                  color: 'white', border: 'none',
                  padding: '0.75rem 1.75rem', borderRadius: '0.5rem',
                  fontFamily: 'var(--font-headline)', fontWeight: 700,
                  fontSize: '0.875rem', cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  Viết đánh giá
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