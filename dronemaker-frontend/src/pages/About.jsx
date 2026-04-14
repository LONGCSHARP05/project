import React from 'react';
import '../assets/about.css'; // Đừng quên import file CSS này!

const About = () => {
  return (
    <main className="about-page">
      
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <img 
            className="hero-image" 
            alt="Cinematic wide shot of a high-tech drone" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3aTtfXcKn4qbUGcjdy4tENi7P_SDxCKVa1cfAHOObadJAecMIEe2qrPoAv4-3CGQitvnt8ckFviUR2qjO2v0k2U1nDytOmpKyDPi4HhX4pHe6XgX_6g8cYwzBRHI75D6nod7R1jGbA0P_AGdhlke0vBLwYDrx7HPuzxxZ7tf-iXLICiWEYUwpdcV4Q9oAQ9WOfrgB09OUh8LTA2e1iSNyskdyD7Gbedav2GxiHrdYZkqxou4yjxt85SfJKuyeFBCxnbpb4tQHO9U" 
          />
        </div>
        {/* Nút play video  */}
        {/* <div className="hero-play-wrapper">
          <div className="hero-play-btn">
            <span className="material-symbols-outlined hero-play-icon" style={{ fontVariationSettings: "'FILL' 1" }}>
              play_arrow
            </span>
          </div>
        </div> */}
        <div className="hero-content">
          <p className="hero-tagline">Kiến tạo Tương lai</p>
          <h1 className="hero-title">Mở rộng Tầm nhìn</h1>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="overview-section">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2 className="overview-heading">
              Chúng tôi tái định nghĩa giới hạn của trí tuệ không gian.
            </h2>
            <p className="overview-desc">
              Thành lập năm 2014, DroneMaker đã vươn mình từ một dự án phòng thí nghiệm nhỏ thành công ty dẫn đầu toàn cầu về hệ thống bay tự trị. Chúng tôi không chỉ chế tạo drone; chúng tôi kiến trúc các luồng dữ liệu giúp các ngành công nghiệp nhìn thấy những điều vô hình.
            </p>
            <div className="overview-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Bằng sáng chế</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">120</span>
                <span className="stat-label">Trung tâm toàn cầu</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Độ tin cậy</span>
              </div>
            </div>
          </div>
          
          <div className="overview-image-wrapper">
            <div className="overview-image-container">
              <img 
                alt="Technical engineer assembling drone" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDobnhac4CNEYeInbn6-G_qOoGrsQPsq4AM39kiF-ZXmNBdcBQ7quqeZBedpwdcZPGlWOe8jj5qvw49950xFXLPLA7WBrgy_p9CfVWpNURYh6Xe9M3EO_AQLLbsghAq9IzJtbTyir_ggNlJPnQxaf1ZMuR1kpn2YynNAWw2B1BQAbsPRAE-AltO0fN2TrCQ3WGL2nBwSje4w2Ot7WN4kPl3jXV1aiPnAePuhZXrKDrZkIu2JYuKM3hhWzjy1aNwKjOgmHLnEhr9Do" 
              />
            </div>
            <div className="overview-quote-card">
              <p className="quote-text">
                "Sứ mệnh của chúng tôi là làm cho bầu trời trở nên dễ tiếp cận với mọi người, từ nông nghiệp đến điện ảnh cao cấp."
              </p>
              <p className="quote-author">— Alex Chen, CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Bento Style) */}
      <section className="bento-section">
        <div className="container">
          <div className="bento-grid-fixed">
            
            {/* Card Sứ mệnh */}
            <div className="mission-card-fixed">
              <span className="bento-tag-blue">Sứ mệnh</span>
              <h3 className="bento-title-dark">
                Dân chủ hóa độ chính xác thông qua kỹ thuật hàng không tự trị.
              </h3>
              <p className="bento-desc-dark">
                Cung cấp cho mọi tổ chức góc nhìn từ chuyến bay, kết hợp AI tiên tiến với phần cứng bền bỉ để giải quyết các thách thức thực tế phức tạp.
              </p>
            </div>

            {/* Card Tầm nhìn */}
            <div className="vision-card-fixed">
              <span className="bento-tag-light">Tầm nhìn</span>
              <h3 className="bento-title-light">
                Bầu trời như một lớp hạ tầng toàn cầu liền mạch.
              </h3>
              <div className="bento-divider"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. History Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-header">
            <h2 className="section-title">Hành trình của chúng tôi.</h2>
          </div>
          
          {/* 2014 */}
          <div className="timeline-row">
            <div className="timeline-image-wrapper">
              <img className="timeline-image" alt="Vintage drone prototypes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKqsvvrrzroCI-gSQNhx0h9SdTm-Yg44ZguZTc36sc6mstx-mV1ZZse01gIWACX7TQcbloVZawVr9kdXvT7MOuhfmr9AmH_PG2FVKsHJhLepDxWjspog9JrSrhNaiCyDerxIO7XfF4cDFlW3P5ktC58Ne2lWsOm34PTWFWAOH8BPbyeuR4OGLWVTATKPOBWUgvtWVSnitWhGLDzvW1HlTn2Omo3SEANhO-k_sYLs9VyJbrvDdKV30XlZFeGMpm6WCYUsADSr7Qg4" />
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2014</span>
              <h4 className="timeline-subtitle">Kỷ nguyên Khởi nghiệp</h4>
              <p className="timeline-desc">
                Bắt đầu từ một gara nhỏ ở Thung lũng Silicon. Các nhà sáng lập của chúng tôi đã phát triển thuật toán "Smart Hover" đầu tiên, cho phép drone giữ thăng bằng hoàn hảo mà không cần GPS.
              </p>
            </div>
          </div>
          
          {/* 2018 */}
          <div className="timeline-row-reverse">
            <div className="timeline-image-wrapper">
              <img className="timeline-image" alt="Manufacturing plant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBctXra1GZ-qDjnvFGLUYqEJaJxNkruTrexgwOx8-s9i5XAn2WqRezw01RQjGAxzAU0U5YzGKIw1a9FZxDv6Iv17WRMPNy3gVeXVSsy2bPPJYs3RGrr3lWo3jiJlNfsemk6NVa1_r7w47VwE_egkk9tfAvwnb7CE6oP0HQREfcprNA_rMF6tbtOsP5Vh8Pc1Oh7rtiPWKBNZ8makZFpL1UZ7p2hgZVvh5VJBwrj4xTWPUbTiPr_AD-_Z0tvGzLdZC_BbwhwrebxCBo" />
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2018</span>
              <h4 className="timeline-subtitle">Mở rộng Công nghiệp</h4>
              <p className="timeline-desc">
                Mở rộng sang các giải pháp công nghiệp. Dòng DroneMaker 4K trở thành tiêu chuẩn cho khảo sát nông nghiệp và lập bản đồ địa hình khắp Bắc Mỹ và Châu Âu.
              </p>
            </div>
          </div>
          
          {/* 2024 */}
          <div className="timeline-row">
            <div className="timeline-image-wrapper">
              <img className="timeline-image" alt="Futuristic drone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwo8AZ3o7UJQbjUl8q2GGaswtMl-hOH9vrEc-G6sSMGQCIzo31J4dph8pr01ShecwETEeFgCNwsgDPxfVTtoALSEdPcqUMkIMT2Ml_BcD-JsZUa2ZpAXzeu_iC4CJqZ3GCoT_ZWKh1QVVd4BxteZO5xd1mfoQo2NvcE5cqU6EUcQzj1R8CjvvOLyFRFeYygF63nxlYzVheU3K6RHEpsgQx9c4JwtP0kS1kwk2zffUFfn9BqhURyhCADtvAV64SYByorBh6JaNMQOI" />
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2024</span>
              <h4 className="timeline-subtitle">Tích hợp AI</h4>
              <p className="timeline-desc">
                Giới thiệu Nexus AI Core. Nhận dạng đối tượng theo thời gian thực và trí tuệ bầy đàn giờ đây được tích hợp sẵn trên mọi thiết bị bay của DroneMaker, thiết lập tiêu chuẩn mới.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services / Capabilities */}
      <section className="capabilities-section">
        <div className="container">
          <div className="capabilities-header">
            <h2 className="section-title">Năng lực Cốt lõi.</h2>
            <p className="section-desc">Chuyên môn hóa trong ba trụ cột chính của công nghệ hàng không.</p>
          </div>
          
          <div className="capabilities-grid">
            {/* Card 1 */}
            <div className="capability-card">
              <span className="material-symbols-outlined capability-icon">agriculture</span>
              <h5 className="capability-title">Nông nghiệp Chính xác</h5>
              <p className="capability-desc">
                Cảm biến hình ảnh nhiệt và đa phổ để theo dõi sức khỏe cây trồng và quản lý tưới tiêu tự động.
              </p>
            </div>
            {/* Card 2 */}
            <div className="capability-card">
              <span className="material-symbols-outlined capability-icon">movie</span>
              <h5 className="capability-title">Hệ thống Điện ảnh</h5>
              <p className="capability-desc">
                Quay phim 8K Pro-Res với hệ thống chống rung gimbal 360 độ được thiết kế cho các tác phẩm điện ảnh đẳng cấp thế giới.
              </p>
            </div>
            {/* Card 3 */}
            <div className="capability-card">
              <span className="material-symbols-outlined capability-icon">shield</span>
              <h5 className="capability-title">Tìm kiếm & Cứu nạn</h5>
              <p className="capability-desc">
                Hỗ trợ tầm nhìn ban đêm và AI phát hiện con người dành cho lực lượng cứu hộ trong môi trường thời tiết khắc nghiệt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;