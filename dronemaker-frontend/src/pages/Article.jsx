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
            <a href="#">Home</a>
            <div className="breadcrumb-active">
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
              <a href="#">News</a>
            </div>
            <div className="breadcrumb-active">
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>chevron_right</span>
              <a href="#">Insights</a>
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
            <span className="meta-text">May, 2024</span>
            <span className="meta-dot"></span>
            <span className="meta-text">5 min read</span>
          </div>
          
          <h1 className="article-h1">
            DJI Mini 5 Pro: Frequently Asked Questions (Complete Guide)
          </h1>
          
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
              <h3 className="toc-title font-headline">Table of Contents</h3>
              
              <nav className="toc-nav">
                <a href="#camera" className="toc-link active">
                  <span className="toc-line"></span>
                  <span>Camera & Imaging</span>
                </a>
                <a href="#performance" className="toc-link">
                  <span className="toc-line"></span>
                  <span>Flight Performance</span>
                </a>
                <a href="#features" className="toc-link">
                  <span className="toc-line"></span>
                  <span>Smart Features</span>
                </a>
              </nav>

              <p className="toc-quote">
                "Every detail about the most powerful 249g drone today is thoroughly explained by the Aero Precision engineering team."
              </p>
            </div>
          </aside>

          {/* Right: Reading Area */}
          <div className="reading-area">
            
            {/* Section 1: Camera */}
            <div id="camera" className="content-section">
              <h2 className="content-h2">Camera & Imaging</h2>
              
              <div className="qa-block">
                <p className="question">Q: Does the DJI Mini 5 Pro use a new sensor?</p>
                <p className="answer">
                  Yes, the DJI Mini 5 Pro is equipped with a next-generation 1/1.3-inch CMOS sensor featuring Dual Native ISO Fusion, enabling a wider dynamic range and superior noise handling in low-light conditions. The upgraded image processor also supports smoother 4K/60fps HDR recording.
                </p>
              </div>
              
              <div className="qa-block">
                <p className="question">Q: What is the digital zoom capability?</p>
                <p className="answer">
                  The device supports up to 2x digital zoom in 4K, 3x at 2.7K resolution, and up to 4x in Full HD, allowing you to capture close-up shots without flying too close to the subject.
                </p>
              </div>

              <figure className="article-figure">
                <div className="figure-img-box">
                  <img alt="Mini 5 Pro Camera Detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJzOuNcFX_YR_EkMiOg7zJDVX9F4pi8jT_-TAyCc3389MGTUiajsU5_M0OEW8rij7MH5VOMwWrnKWczRAEmOVkEcaUVOzxg8p4UbmwXa9ZLA3h3ddRS0pHQOK7mfCpKYaxHd2KCHc48tW6I32V1i_40Q9wdqTfR2eB9F7g6HxHiIgFnvfRYyoGkLxwzmYMiu-QypwL2Ib_DWc_0XASHleLGUPpfcmIUuaX-0SXR4m_UmC8CsDTXqPYpSgExp9bT_YD5fAAyliNTbg" />
                </div>
                <figcaption className="figcaption-text">
                  Close-up of the 3-axis gimbal and new 48MP sensor on the Mini 5 Pro.
                </figcaption>
              </figure>
            </div>

            {/* Section 2: Performance */}
            <div id="performance" className="content-section">
              <h2 className="content-h2">Flight Performance</h2>
              
              <blockquote className="article-blockquote">
                <p className="quote-body font-headline">
                  "Power hidden behind a compact design. A significant leap in motor performance allows the Mini 5 Pro to easily resist level 5 winds."
                </p>
                <cite className="quote-author font-headline">
                  — Aero Precision Engineering Team
                </cite>
              </blockquote>

              <div className="qa-block">
                <p className="question">Q: Is the actual flight time close to the advertised specs?</p>
                <p className="answer">
                  Under ideal conditions, the Intelligent Flight Battery provides up to 34 minutes of flight time. With the Plus battery, this can reach up to 47 minutes—a record for drones under 250g. In real-world conditions in Vietnam, typical flight time ranges from 30 to 41 minutes depending on wind conditions.
                </p>
              </div>

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
              <h2 className="content-h2">Smart Features</h2>
              
              <div className="qa-block">
                <p className="question">Q: How does ActiveTrack 6.0 work?</p>
                <p className="answer">
                  The Mini 5 Pro uses an omnidirectional sensing system to build a 3D map of its surroundings. ActiveTrack 6.0 allows the drone to predict the subject's movement path even when temporarily obstructed by trees or structures.
                </p>
              </div>

              <div className="image-grid-2">
                <div className="grid-img-box">
                  <img alt="Drone tracking biker" src="https://dji-vietnam.vn/wp-content/uploads/2023/04/DJI-Inspire-3-32.jpg" />
                </div>
                <div className="grid-img-box">
                  <img alt="Aerial view of car" src="https://dji-vietnam.vn/wp-content/uploads/2023/04/DJI-Inspire-3-17-scaled.jpg" />
                </div>
              </div>
            </div>
            

            {/* Social Share Bar */}
            <div className="share-bar">
              <div className="share-left">
                <span className="share-label font-headline">Share:</span>
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
                  <span className="bookmark-text">Save article</span>
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
                <span className="related-subtitle font-headline">Explore more</span>
                <h2 className="related-title font-headline">Related Articles</h2>
              </div>
              <a href="#" className="related-view-all font-headline">
                VIEW ALL <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>

            <div className="related-grid">
              
              <article className="related-card">
                <div className="related-img-box">
                  <img alt="Guide 1" src="https://dji-vietnam.vn/wp-content/uploads/2023/04/DJI-Inspire-3-16-scaled.jpg" />
                </div>
                <div className="related-info">
                  <span className="related-badge font-headline">Guide</span>
                  <h3 className="related-card-title font-headline">
                    5 Tips to Master Flight in Urban Environments
                  </h3>
                  <p className="related-excerpt">
                    How to avoid signal interference and maintain stable connection when flying drones between skyscrapers?
                  </p>
                </div>
              </article>

              <article className="related-card">
                <div className="related-img-box">
                  <img alt="Guide 2" src="https://dji-vietnam.vn/wp-content/uploads/2023/04/DJI-Inspire-3-27-scaled.jpg" />
                </div>
                <div className="related-info">
                  <span className="related-badge font-headline">Technical</span>
                  <h3 className="related-card-title font-headline">
                    D-Log M Color Profile: Cinematic Color Grading Secrets
                  </h3>
                  <p className="related-excerpt">
                    Maximize dynamic range with professional color grading workflow in DaVinci Resolve.
                  </p>
                </div>
              </article>

              <article className="related-card">
                <div className="related-img-box">
                  <img alt="Guide 3" src="https://dji-vietnam.vn/wp-content/uploads/2023/04/DJI-Inspire-3-31.jpg" />
                </div>
                <div className="related-info">
                  <span className="related-badge font-headline">Maintenance</span>
                  <h3 className="related-card-title font-headline">
                    When Should You Replace Your Drone Propellers?
                  </h3>
                  <p className="related-excerpt">
                    Small signs of damage can lead to major accidents. Follow this checklist for regular drone inspection.
                  </p>
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