

// import React, { useState } from 'react';
// import '../assets/shop.css';

// const MOCK_PRODUCTS = [
//   { id: 1, name: 'DJI Mini 4 Pro', price: 25000000, category: 'Mini Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mini+4+Pro', label: 'Bestseller' },
//   { id: 2, name: 'DJI Air 3', price: 32000000, category: 'Air Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Air+3', label: 'New' },
//   { id: 3, name: 'DJI Mavic 3 Pro', price: 54000000, category: 'Mavic Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mavic+3+Pro', label: 'Pro' },
//   { id: 4, name: 'DroneMaker Inspire 3', price: 145000000, category: 'Enterprise', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Inspire+3', label: 'Professional' },
//   { id: 5, name: 'DJI Mini 3', price: 12000000, category: 'Mini Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mini+3', label: '' },
//   { id: 6, name: 'Matrice 350 RTK', price: 210000000, category: 'Enterprise', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Matrice+350', label: 'Heavy Duty' },
// ];

// const ITEMS_PER_PAGE = 4; // Cài đặt 4 sản phẩm / 1 trang

// const Shop = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [sortOption, setSortOption] = useState('default');
//   const [priceInput, setPriceInput] = useState({ min: '', max: '' });
//   const [appliedPrice, setAppliedPrice] = useState({ min: null, max: null });
  
//   // STATE MỚI: Quản lý trang hiện tại
//   const [currentPage, setCurrentPage] = useState(1);

//   // --- LOGIC LỌC & SẮP XẾP ---
//   let filteredProducts = MOCK_PRODUCTS.filter((product) => {
//     const matchCategory = activeCategory === 'All' || product.category === activeCategory;
//     const matchMin = appliedPrice.min === null || product.price >= appliedPrice.min;
//     const matchMax = appliedPrice.max === null || product.price <= appliedPrice.max;
//     return matchCategory && matchMin && matchMax;
//   });

//   if (sortOption === 'price-asc') filteredProducts.sort((a, b) => a.price - b.price);
//   if (sortOption === 'price-desc') filteredProducts.sort((a, b) => b.price - a.price);

//   // --- LOGIC PHÂN TRANG (PAGINATION) ---
//   const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   // Cắt mảng để lấy đúng số sản phẩm của trang hiện tại
//   const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   // Hàm xử lý đổi trang
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//       window.scrollTo({ top: 0, behavior: 'smooth' }); // Cuộn lên đầu trang mượt mà
//     }
//   };

//   const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

//   // Các hàm tương tác bộ lọc (Có reset về trang 1)
//   const handleApplyPrice = () => {
//     setAppliedPrice({
//       min: priceInput.min ? Number(priceInput.min) : null,
//       max: priceInput.max ? Number(priceInput.max) : null,
//     });
//     setCurrentPage(1); // Reset về trang 1 khi lọc
//   };

//   const handleCategoryClick = (e, categoryName) => {
//     e.preventDefault();
//     setActiveCategory(categoryName);
//     setCurrentPage(1); // Reset về trang 1 khi đổi danh mục
//   };

//   return (
//     <main className="shop-page">
//       <div className="shop-container">
//         <nav className="breadcrumbs">
//           <a href="#">Trang chủ</a>
//           <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
//           <span className="current">Cửa hàng</span>
//         </nav>

//         <div className="shop-layout">
          
//           {/* SIDEBAR */}
//           <aside className="shop-sidebar">
//             <section className="sidebar-section">
//               <h3 className="sidebar-title">Danh mục</h3>
//               <div className="category-group" style={{ marginBottom: '10px' }}>
//                  <a href="#" onClick={(e) => handleCategoryClick(e, 'All')} style={{ fontWeight: activeCategory === 'All' ? 'bold' : 'normal', color: activeCategory === 'All' ? '#0059b5' : 'inherit', textDecoration: 'none' }}>Hiển thị tất cả</a>
//               </div>
//               <div className="category-group">
//                 <div className="category-header"><span className="category-name">Consumer Drones</span></div>
//                 <div className="category-sublist">
//                   <a href="#" onClick={(e) => handleCategoryClick(e, 'Mini Series')} className={activeCategory === 'Mini Series' ? 'active-link' : ''}>Mini Series</a>
//                   <a href="#" onClick={(e) => handleCategoryClick(e, 'Air Series')} className={activeCategory === 'Air Series' ? 'active-link' : ''}>Air Series</a>
//                   <a href="#" onClick={(e) => handleCategoryClick(e, 'Mavic Series')} className={activeCategory === 'Mavic Series' ? 'active-link' : ''}>Mavic Series</a>
//                 </div>
//               </div>
//             </section>

//             <section className="sidebar-section">
//               <h3 className="sidebar-title">Lọc theo giá</h3>
//               <div className="filter-price">
//                 <div className="price-inputs">
//                   <input type="number" placeholder="Tối thiểu" value={priceInput.min} onChange={(e) => setPriceInput({...priceInput, min: e.target.value})} />
//                   <span>-</span>
//                   <input type="number" placeholder="Tối đa" value={priceInput.max} onChange={(e) => setPriceInput({...priceInput, max: e.target.value})} />
//                 </div>
//                 <button className="btn-filter" onClick={handleApplyPrice}>Áp dụng</button>
//               </div>
//             </section>
//           </aside>

//           {/* MAIN CONTENT */}
//           <section className="shop-main">
//             <header className="shop-header">
//               {/* Toolbar */}
//             <div className="shop-toolbar">
//               <p className="shop-results">
//                 Hiển thị {filteredProducts.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} của {filteredProducts.length} kết quả
//               </p>
//               <div className="sort-group">
//                 <label className="sort-label">Sắp xếp:</label>
//                 <select className="sort-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//                   <option>Mặc định</option>
//                   <option>Giá: Thấp đến Cao</option>
//                   <option>Giá: Cao đến Thấp</option>
//                   <option>Mới nhất</option>
//                 </select>
//                 <span className="material-symbols-outlined sort-icon">expand_more</span>
//               </div>
//             </div>
//             </header>

//             {/* LƯỚI SẢN PHẨM SỬ DỤNG currentProducts */}
//             <div className="product-grid">
//               {currentProducts.length > 0 ? (
//                 currentProducts.map(product => (
//                   <div className="product-card" key={product.id}>
//                     <div className="product-image-wrap">
//                       <img alt={product.name} className="product-image" src={product.image} />
//                     </div>
//                     <div>
//                       {product.label && <span className="product-label label-outline">{product.label}</span>}
//                       <h4 className="product-title">{product.name}</h4>
//                       <p className="product-price">{formatPrice(product.price)}</p>
//                     </div>
//                     <div className="product-add-cart">
//                       <button className="btn-add-cart"><span className="material-symbols-outlined">shopping_bag</span>Thêm vào giỏ hàng</button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div style={{ padding: '2rem', textAlign: 'center', color: '#717785', gridColumn: '1 / -1' }}>Không tìm thấy sản phẩm nào.</div>
//               )}
//             </div>

//             {/* COMPONENT PHÂN TRANG ĐỘNG */}
//             {totalPages > 1 && (
//               <div className="pagination">
//                 <button 
//                   className="page-btn" 
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   <span className="material-symbols-outlined">chevron_left</span>
//                 </button>

//                 {/* Render mảng số trang */}
//                 {[...Array(totalPages)].map((_, index) => (
//                   <button 
//                     key={index + 1} 
//                     className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
//                     onClick={() => handlePageChange(index + 1)}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}

//                 <button 
//                   className="page-btn" 
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   <span className="material-symbols-outlined">chevron_right</span>
//                 </button>
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Shop;


import React, { useState } from 'react';
import '../assets/shop.css';

// 1. MOCK DATA ĐÃ ĐƯỢC THÊM (Tổng 9 sản phẩm để test phân trang 6 món/trang)
const MOCK_PRODUCTS = [
  { id: 1, name: 'DJI Mini 4 Pro', price: 25000000, category: 'Mini Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mini+4+Pro', label: 'Bestseller' },
  { id: 2, name: 'DJI Air 3', price: 32000000, category: 'Air Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Air+3', label: 'New' },
  { id: 3, name: 'DJI Mavic 3 Pro', price: 54000000, category: 'Mavic Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mavic+3+Pro', label: 'Pro' },
  { id: 4, name: 'DroneMaker Inspire 3', price: 145000000, category: 'Enterprise', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Inspire+3', label: 'Professional' },
  { id: 5, name: 'DJI Mini 3', price: 12000000, category: 'Mini Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mini+3', label: '' },
  { id: 6, name: 'Matrice 350 RTK', price: 210000000, category: 'Enterprise', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Matrice+350', label: 'Heavy Duty' },
  // 3 Sản phẩm thêm vào:
  { id: 7, name: 'DJI Avata 2', price: 28000000, category: 'Mavic Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Avata+2', label: 'FPV' },
  { id: 8, name: 'Agras T40', price: 350000000, category: 'Enterprise', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Agras+T40', label: 'Agriculture' },
  { id: 9, name: 'DJI Mini SE', price: 8000000, category: 'Mini Series', image: 'https://placehold.co/300x200/e2e8f0/1e293b?text=Mini+SE', label: 'Cheap' },
];

const ITEMS_PER_PAGE = 6; // YÊU CẦU 1: 6 sản phẩm mỗi trang

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [priceInput, setPriceInput] = useState({ min: '', max: '' });
  const [appliedPrice, setAppliedPrice] = useState({ min: null, max: null });
  const [currentPage, setCurrentPage] = useState(1);

  // --- LOGIC LỌC (Lọc theo Category và Giá) ---
  let filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchMin = appliedPrice.min === null || product.price >= appliedPrice.min;
    const matchMax = appliedPrice.max === null || product.price <= appliedPrice.max;
    return matchCategory && matchMin && matchMax;
  });

  // --- LOGIC SẮP XẾP (YÊU CẦU 2) ---
  if (sortOption === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'newest') {
    filteredProducts.sort((a, b) => b.id - a.id); // Mới nhất = ID lớn nhất nằm trên
  } else {
    filteredProducts.sort((a, b) => a.id - b.id); // Mặc định = Xếp theo ID cũ nhất
  }

  // --- LOGIC PHÂN TRANG ---
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  // --- CÁC HÀM XỬ LÝ (YÊU CẦU 3) ---
  const handleApplyPrice = () => {
    setAppliedPrice({
      min: priceInput.min ? Number(priceInput.min) : null,
      max: priceInput.max ? Number(priceInput.max) : null,
    });
    setCurrentPage(1);
  };

  // Nút xóa riêng bộ lọc giá
  const handleResetPrice = () => {
    setPriceInput({ min: '', max: '' });
    setAppliedPrice({ min: null, max: null });
    setCurrentPage(1);
  };

  const handleCategoryClick = (e, categoryName) => {
    e.preventDefault();
    setActiveCategory(categoryName);
    setCurrentPage(1);
  };

  // Nút Xóa mọi bộ lọc (Gắn vào chữ "Hiển thị tất cả")
  const handleResetAll = (e) => {
    e.preventDefault();
    setActiveCategory('All');
    setPriceInput({ min: '', max: '' });
    setAppliedPrice({ min: null, max: null });
    setSortOption('default');
    setCurrentPage(1);
  };

  return (
    <main className="shop-page">
      <div className="shop-container">
        <nav className="breadcrumbs">
          <a href="#">Trang chủ</a>
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
          <span className="current">Cửa hàng</span>
        </nav>

        <div className="shop-layout">
          
          <aside className="shop-sidebar">
            <section className="sidebar-section">
              <h3 className="sidebar-title">Danh mục</h3>
              
              {/* NÚT RESET ALL */}
              <div className="category-group" style={{ marginBottom: '10px' }}>
                 <a 
                   href="#" 
                   onClick={handleResetAll} 
                   style={{ 
                     fontWeight: activeCategory === 'All' ? 'bold' : 'normal', 
                     color: activeCategory === 'All' ? '#0059b5' : 'inherit', 
                     textDecoration: 'none' 
                   }}
                 >
                   Hiển thị tất cả
                 </a>
              </div>

              <div className="category-group">
                <div className="category-header"><span className="category-name">Consumer Drones</span></div>
                <div className="category-sublist">
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'Mini Series')} className={activeCategory === 'Mini Series' ? 'active-link' : ''}>Mini Series</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'Air Series')} className={activeCategory === 'Air Series' ? 'active-link' : ''}>Air Series</a>
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'Mavic Series')} className={activeCategory === 'Mavic Series' ? 'active-link' : ''}>Mavic Series</a>
                </div>
              </div>

              <div className="category-group">
                <div className="category-header"><span className="category-name">Enterprise</span></div>
                <div className="category-sublist">
                  <a href="#" onClick={(e) => handleCategoryClick(e, 'Enterprise')} className={activeCategory === 'Enterprise' ? 'active-link' : ''}>Kỹ thuật & Nông nghiệp</a>
                </div>
              </div>
            </section>

            <section className="sidebar-section">
              <h3 className="sidebar-title">Lọc theo giá</h3>
              <div className="filter-price">
                <div className="price-inputs">
                  <input type="number" placeholder="Tối thiểu" value={priceInput.min} onChange={(e) => setPriceInput({...priceInput, min: e.target.value})} />
                  <span>-</span>
                  <input type="number" placeholder="Tối đa" value={priceInput.max} onChange={(e) => setPriceInput({...priceInput, max: e.target.value})} />
                </div>
                {/* HÀNG NÚT CÓ THÊM NÚT XÓA */}
                <div className="price-actions" style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <button className="btn-filter" onClick={handleApplyPrice}>Áp dụng</button>
                  <button className="btn-filter btn-reset-price" onClick={handleResetPrice}>Xóa</button>
                </div>
              </div>
            </section>
          </aside>

          <section className="shop-main">
            <header className="shop-header">
              {/* Toolbar */}
              <div className="shop-toolbar">
                <p className="shop-results">
                  Hiển thị {filteredProducts.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} của {filteredProducts.length} kết quả
                </p>
                <div className="sort-group">
                  <label className="sort-label">Sắp xếp:</label>
                  <select className="sort-select" value={sortOption} onChange={(e) => { setSortOption(e.target.value); setCurrentPage(1); }}>
                    <option value="default">Thứ tự mặc định</option>
                    <option value="newest">Mới nhất</option>
                    <option value="price-asc">Giá: Thấp đến Cao</option>
                    <option value="price-desc">Giá: Cao đến Thấp</option>
                  </select>
                </div>
              </div>

            </header>

            <div className="product-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map(product => (
                  <div className="product-card" key={product.id}>
                    <div className="product-image-wrap">
                      <img alt={product.name} className="product-image" src={product.image} />
                    </div>
                    <div>
                      {product.label && <span className="product-label label-outline">{product.label}</span>}
                      <h4 className="product-title">{product.name}</h4>
                      <p className="product-price">{formatPrice(product.price)}</p>
                    </div>
                    <div className="product-add-cart">
                      <button className="btn-add-cart"><span className="material-symbols-outlined">shopping_bag</span>Thêm vào giỏ hàng</button>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#717785', gridColumn: '1 / -1' }}>Không tìm thấy sản phẩm nào phù hợp với bộ lọc.</div>
              )}
            </div>

                                {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="page-btn" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button 
                    key={index + 1} 
                    className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button 
                  className="page-btn" 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}

          </section>       
        </div>
      </div>
    </main>
  );
};

export default Shop;