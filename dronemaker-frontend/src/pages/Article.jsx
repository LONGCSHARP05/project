import React from 'react';
import '../assets/article.css';

const Article = () => {
  return (
    <div className="article-page">
      

      {/* Main Content Spacer for Fixed Nav */}
      <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
        
        {/* 2. BREADCRUMBS */}
        <div className="container-lg">
          <nav className="article-breadcrumbs">
            <a href="#">Trang chủ</a>
            <div className="breadcrumb-active">
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
              <a href="#">Tin tức</a>
            </div>
            <div className="breadcrumb-active">
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
              <a href="#">Góc nhìn</a>
            </div>
            <div className="breadcrumb-active">
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
              <span>DJI Mini 5 Pro</span>
            </div>
          </nav>
        </div>

        {/* 3. ARTICLE HEADER */}
        <header className="container-lg article-header">
          <div className="article-meta">
            <span className="meta-badge font-headline">FAQ</span>
            <span className="meta-text">Tháng 5, 2024</span>
            <span className="meta-dot"></span>
            <span className="meta-text">5 min read</span>
          </div>
          
          <h1 className="article-h1">DJI Mini 5 Pro: Tổng hợp những câu hỏi thường gặp nhất</h1>
          
          <div className="hero-img-box">
            <img 
              alt="DJI Mini 5 Pro Hero" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRzaT9aNGr3IW6npciB1glUmPrUkk16SclZN7t88s4BXpwDRGA6pdbRR0Rb81UwkF2JkJxu4SsxPXEfnyCuOQTowXvlNy-vmwPBM6uuRI5EQhkqQue9VYPHBnlFA0GObVf4NnAFCpN7MlnsoVP3SVBNLBqO5xkK50omaQCqouGKwK3XS31-WWEOlDSfThapBDqR8o1Cml71aGsmGGygkhKkxQGVhKG36PkWZn0vYi56K-vkYk9pwUpCk7-EwiA5aQgwy9teQI7dFM" 
            />
          </div>
        </header>

        {/* 4. ASYMMETRIC CONTENT LAYOUT (1:3) */}
        <section className="container-lg article-layout">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="sidebar-toc">
            <div className="toc-sticky">
              <h3 className="toc-title font-headline">Mục lục nội dung</h3>
              
              <nav className="toc-nav">
                <a href="#camera" className="toc-link active">
                  <span className="toc-line"></span>
                  <span>Camera & Hình ảnh</span>
                </a>
                <a href="#performance" className="toc-link">
                  <span className="toc-line"></span>
                  <span>Hiệu suất bay</span>
                </a>
                <a href="#features" className="toc-link">
                  <span className="toc-line"></span>
                  <span>Tính năng thông minh</span>
                </a>
              </nav>

              <p className="toc-quote">
                "Mọi chi tiết về chiếc drone 249g mạnh mẽ nhất hiện nay được giải đáp tường tận bởi đội ngũ kỹ thuật Aero Precision."
              </p>
            </div>
          </aside>

          {/* Right: Reading Area */}
          <div className="reading-area">
            
            {/* Section 1: Camera */}
            <div id="camera" className="content-section">
              <h2 className="content-h2">Camera & Hình ảnh</h2>
              
              <div className="qa-block">
                <p className="question">Q: DJI Mini 5 Pro có sử dụng cảm biến mới không?</p>
                <p className="answer">
                  Có, DJI Mini 5 Pro được trang bị cảm biến CMOS 1/1.3 inch thế hệ mới với Dual Native ISO Fusion, cho phép dải động (dynamic range) rộng hơn và khả năng xử lý nhiễu vượt trội trong điều kiện ánh sáng yếu. Chip xử lý hình ảnh được nâng cấp giúp hỗ trợ quay 4K/60fps HDR mượt mà hơn.
                </p>
              </div>
              
              <div className="qa-block">
                <p className="question">Q: Khả năng zoom kỹ thuật số là bao nhiêu?</p>
                <p className="answer">
                  Thiết bị hỗ trợ zoom kỹ thuật số lên đến 2x khi quay 4K, 3x ở độ phân giải 2.7K và tối đa 4x ở chế độ Full HD, đảm bảo bạn có thể thu được những khung hình cận cảnh mà không cần bay quá gần vật thể.
                </p>
              </div>

              <figure className="article-figure">
                <div className="figure-img-box">
                  <img alt="Mini 5 Pro Camera Detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzOuNcFX_YR_EkMiOg7zJDVX9F4pi8jT_-TAyCc3389MGTUiajsU5_M0OEW8rij7MH5VOMwWrnKWczRAEmOVkEcaUVOzxg8p4UbmwXa9ZLA3h3ddRS0pHQOK7mfCpKYaxHd2KCHc48tW6I32V1i_40Q9wdqTfR2eB9F7g6HxHiIgFnvfRYyoGkLxwzmYMiu-QypwL2Ib_DWc_0XASHleLGUPpfcmIUuaX-0SXR4m_UmC8CsDTXqPYpSgExp9bT_YD5fAAyliNTbg" />
                </div>
                <figcaption className="figcaption-text">Cận cảnh cụm gimbal 3 trục và cảm biến 48MP mới trên Mini 5 Pro.</figcaption>
              </figure>
            </div>

            {/* Section 2: Performance */}
            <div id="performance" className="content-section">
              <h2 className="content-h2">Hiệu suất bay</h2>
              
              <blockquote className="article-blockquote">
                <p className="quote-body font-headline">
                  "Sức mạnh ẩn sau vẻ ngoài nhỏ bé. Một bước nhảy vọt về công suất động cơ giúp Mini 5 Pro kháng gió cấp 5 một cách dễ dàng."
                </p>
                <cite className="quote-author font-headline">— Aero Precision Engineering Team</cite>
              </blockquote>

              <div className="qa-block">
                <p className="question">Q: Thời gian bay thực tế có đúng như công bố không?</p>
                <p className="answer">
                  Trong điều kiện lý tưởng, pin Intelligent Flight Battery cung cấp 34 phút bay. Tuy nhiên, với viên pin Plus, con số này có thể lên tới 47 phút—một kỷ lục cho dòng drone dưới 250g. Thực tế trải nghiệm tại Việt Nam với gió trung bình, thời gian bay thường đạt khoảng 30-41 phút.
                </p>
              </div>

              {/* Video Player Placeholder */}
              <div className="video-placeholder">
                <img alt="Flight performance" className="video-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5M9B9bo4pLXcU4HXeivzPIUHB9mMkqK049Ywf24tc6LZzVYBN0BJrMxD4V1M_AOkkkjAUbftXrMBW0uq-4c9MKgrqJ5hMLAnD8VwH-rwlT8hf9pjRG51InCjdC4hh_vCkiiw666PBtdtAaW33tVdXHeN7SpI-uLS0no6ZqwcWumWokwDeMF0AtfsjV5m_t-fTeWeIr3SXVqZ39SrqZQyO2Jv3-epwCczwBsjd78teEcHBBM8zOIAOjTqmpfE992FgimFn0nAQdmo" />
                <button className="play-btn">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                </button>
                <span className="video-badge font-headline">YOUTUBE EMBED</span>
              </div>
            </div>

            {/* Section 3: Features */}
            <div id="features" className="content-section">
              <h2 className="content-h2">Tính năng thông minh</h2>
              
              <div className="qa-block">
                <p className="question">Q: ActiveTrack 6.0 hoạt động như thế nào?</p>
                <p className="answer">
                  Mini 5 Pro sử dụng hệ thống cảm biến đa hướng (Omnidirectional) để xây dựng bản đồ 3D của môi trường xung quanh. ActiveTrack 6.0 cho phép drone dự đoán quỹ đạo di chuyển của đối tượng ngay cả khi họ bị che khuất tạm thời bởi cây cối hoặc công trình.
                </p>
              </div>

              <div className="image-grid-2">
                <div className="grid-img-box">
                  <img alt="Drone tracking biker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4EamSk13XYfKWJS4MNNYs5Zkk0lvaAPYGAiIJhvwVfGAOvvMwUkLsal5iq7OKLjzJY13KAr4GSWW4EKjqPvB7BTb1Bd1toxL98b5KcEiE3Ptu9RjqULVh3ixPuB9zgjd-RRK77_3xHGVYwpeg1WxINA5ZcQjtYr0UECItccpvJPsAhn8zaMkYO2nROu0eebPeORK0FdmKnszds33cyHhArlf73LRkyZqUv22E8aRnkT-csmnO_y8PPv1LqdK6Vef8IXQb_6Nps20" />
                </div>
                <div className="grid-img-box">
                  <img alt="Aerial view of car" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnhkrWeDjCHTj7RdYrOKnfY32X5u-Dusjhkxxkn2HrIsyWxEmKwbFUc7Part2TbdMvOA-Rkw8K5JJ5v4WqM4ekmpv1z33f86WtuZlQb1oxag4AsSP_lBa9SRgYlRSMu1doJvBaegPpyDgEZI85du5u59c2zMZ5j5bCz8tzbEFFKwE8A5taJ1WNhvbTRa9NjahLrh3jvLn8Mw0kk0QFcpqhob2osXbKw1vGCBgMAZ-GNvmH14sFkBzgrwsj-9XjwdiO9ZiAVqegUMw" />
                </div>
              </div>
            </div>

            {/* Social Share Bar */}
            <div className="share-bar">
              <div className="share-left">
                <span className="share-label font-headline">Chia sẻ:</span>
                <button className="share-btn">
                  <span className="material-symbols-outlined text-sm">share</span>
                </button>
                <button className="share-btn">
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                </button>
              </div>
              
              <div className="share-right">
                <button className="bookmark-btn">
                  <span className="material-symbols-outlined text-tertiary">bookmark</span>
                  <span className="bookmark-text">Lưu bài viết</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 5. RELATED ARTICLES */}
        <section className="related-section">
          <div className="container-lg">
            <div className="related-header">
              <div>
                <span className="related-subtitle font-headline">Khám phá thêm</span>
                <h2 className="related-title font-headline">Bài viết liên quan</h2>
              </div>
              <a href="#" className="related-view-all font-headline">
                XEM TẤT CẢ <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <div className="related-grid">
              
              {/* Card 1 */}
              <article className="related-card">
                <div className="related-img-box">
                  <img alt="Guide 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--iG5tzFPEZww0hE40WOJqueGqGkob_N64dFyeR_hgdAS7U-xMc2QtgScMzCAaM5CUSZG2TcuXjPMK4EJEyVqTTYpNovABL6AeTj0EXIVlz_zOw6ufsZGR4dJqqJSJdYRegsqp65NCckJIqFUwvY0nMfjzfHkCMuPzy0VFLw0SyZij1OLyOQ5OjS6-bElJjWqJVC4Wt2otdNC5U1WvbRrau6_h_WTS6diJzlqiI1G9YU03f6EyNIf3ZhoZDPxgWx1WRpV0PfZNRM" />
                </div>
                <div className="related-info">
                  <span className="related-badge font-headline">Hướng dẫn</span>
                  <h3 className="related-card-title font-headline">5 Mẹo làm chủ đường bay trong môi trường đô thị</h3>
                  <p className="related-excerpt">Làm sao để tránh nhiễu sóng và duy trì tín hiệu ổn định khi bay drone giữa các tòa nhà chọc trời?</p>
                </div>
              </article>

              {/* Card 2 */}
              <article className="related-card">
                <div className="related-img-box">
                  <img alt="Guide 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXZjTAovtOpCpR7etigmuNdLwhnQooPX4wcvaMnrFA09r1_gf-Ptd4pXiauxTLeayyf5g8IpFsYXwDPPTOTR1EI_ihoWDKBzYwqIJH8o_6cZFGJ2v8hTpsb98Sw7iEVjkqZyCqdmyTLAn-sMaXgxDRxqV3bQnnXt_MOcDyZtqDywcmaBfwJsL5BtTOTfI_h7rlT--7awN3eavZl6r50hPge-FYXBXG2YRcz3Our1WK1gbSBRACjNa126-c7ZKjcOtzmV39iEls7WE" />
                </div>
                <div className="related-info">
                  <span className="related-badge font-headline">Kỹ thuật</span>
                  <h3 className="related-card-title font-headline">Profile màu D-Log M: Bí quyết hậu kỳ chuẩn điện ảnh</h3>
                  <p className="related-excerpt">Khai thác tối đa dải động của Mini 5 Pro với các bước chỉnh màu chuyên nghiệp trên Davinci Resolve.</p>
                </div>
              </article>

              {/* Card 3 */}
              <article className="related-card">
                <div className="related-img-box">
                  <img alt="Guide 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe0J-i0T9Zt171DDvdGHSNZJWxjcAmUj4fA20G2XijcQY2t4P7uEuhmpSGdrIpC0E1X1qVGNTevf1ZZvFmb2VbjjliUm7N63iCkHAK4blO2kTv7ZbvEr9bjtC8aHlOeFGvI8fv4eMEYc_ZQ7bAWzPpgmLHcPJqu8YcDejEPdcDKL5G6Hj6K-H_WB3XCGxvPfODd0mE_WFBVdqISyMPTqx8JxlF6Deu_yY2FhDsj8H02VQ58Y8VbO3yfSNq8EXFV7S2dsAOdDvVU8w" />
                </div>
                <div className="related-info">
                  <span className="related-badge font-headline">Bảo trì</span>
                  <h3 className="related-card-title font-headline">Khi nào bạn nên thay cánh quạt cho drone của mình?</h3>
                  <p className="related-excerpt">Những dấu hiệu hư hỏng nhỏ có thể dẫn đến tai nạn lớn. Hãy kiểm tra drone định kỳ theo checklist sau.</p>
                </div>
              </article>

            </div>
          </div>
        </section>
      </main>



    </div>
  );
};

export default Article;