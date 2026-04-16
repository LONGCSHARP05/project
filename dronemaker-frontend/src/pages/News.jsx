import React from 'react';
import '../assets/news.css'; // Import file CSS ở trên

const News = () => {
  return (
    <main className="news-page">
      {/* 1. EDITORIAL HEADER */}
      <div className="news-header">
        <h2 className="news-tagline">The Aero Journal</h2>
        <h1 className="news-title">
          News & <br />Perspectives.
        </h1>
        <p className="news-desc">
          Exploring the intersection of cinematic vision and aerospace precision. The latest from the world of autonomous flight.
        </p>
      </div>

      {/* 2. BLOG FEED */}
      <section className="news-feed">
        
        {/* Article 1: Innovation */}
        <article className="article-card">
          <div className="article-img-wrapper">
            <img 
              className="article-img" 
              alt="Carbon fiber drone frame" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0hTT0jpO8qhWsbIg3RM-2tNpSkjxJu2EjQH5f5P--ld-fXnxqEbTF45_LK3x8U_J0EDihkGqHqrIV-OD7n47kmc1jRSLfqk4mPchIqbbYKCzhxNBryV4t0kAHuUvKuWdGafNjUd1nhlrp-sH4RgcewpCQg9XLH_-T4AulZwtmvAJteWWIh7Zv85aaI1GRMDtfLidDB_a3fSv1SRYBehkaYRenx8aDAJ2GLQroCA-uOD2BcV8cqqu6GuEh0zNN581lmA4mPMe8KT0" 
            />
          </div>
          <div className="article-content">
            <div className="article-meta">
              <span className="article-badge badge-primary">Innovation</span>
              <time className="article-date">October 24, 2024</time>
            </div>
            <h3 className="article-title">The Carbon Era: Reimagining Structural Integrity in Flight</h3>
            <p className="article-excerpt">
              We delve deep into the manufacturing process of our latest airframe, exploring how nanotechnology is reducing weight while tripling impact resistance for extreme environments.
            </p>
            <div className="article-read-more">
              <span>Read Full Insight</span>
              <span className="material-symbols-outlined article-read-more-icon">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Article 2: Cinema */}
        <article className="article-card">
          <div className="article-img-wrapper">
            <img 
              className="article-img" 
              alt="Mountain range at dawn" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnJmkR4uBMXJlX-fWVhbLhuqRV3-RHk0FvSiliEr7HIXkFIrSFCITcs87Vyv8vSK2x9v6g5-0eQqR3AhAIxtFcTrGu9vYdDaYf6bBc1F725lcYce-lajDLBWv-WBciuN_eFvG-m219Jdrvt_0E9fnk36D4a0MP_Hshs_tATAVGjIz4AEeHtNElIojXw5eL5PkoW-eCrHvENiuoeQGNHY24IAdf3IjUHsERVctYD6qM2_V_M5IC4kpG2P9UME_sKWTdtkbuOdS_do" 
            />
          </div>
          <div className="article-content">
            <div className="article-meta">
              <span className="article-badge badge-secondary">Cinema</span>
              <time className="article-date">October 18, 2024</time>
            </div>
            <h3 className="article-title">Beyond the Frame: 10-Bit Color Science in the Cloud</h3>
            <p className="article-excerpt">
              Why dynamic range matters more than resolution. A technical breakdown of how DroneMaker sensors capture the subtle nuances of morning light in high-altitude environments.
            </p>
            <div className="article-read-more">
              <span>Read Full Insight</span>
              <span className="material-symbols-outlined article-read-more-icon">arrow_forward</span>
            </div>
          </div>
        </article>

        {/* Article 3: Special Report (Asymmetric Layout) */}
        <div className="special-report">
          <div className="special-content">
            <span className="special-badge">Special Report</span>
            <h2 className="special-title">The Future of Autonomous Logistics in Urban Corridors.</h2>
            <p className="special-desc">
              Download our whitepaper on the integration of Level 5 autonomy in dense metropolitan airspace.
            </p>
            <button className="special-btn">Download Whitepaper</button>
          </div>
          <div className="special-img-wrapper">
            <img 
              className="special-img" 
              alt="Urban cityscape with drone flight paths" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTbY6peuaRtyyadWtAWvkfwbGFp0xGXO9xSoQRtnlbQVM3oWt-P2S5gjad-tizG_DDJ1ikTVHeIllZwdsL3ZO5G5c0DmtInpwgFMeu7hCe0sXcq3ZLo-fBP5_tOS6mpkQlCZ-6KRUjl_esl3CiS7n34jonFdkbIDSRNUwNNSfIFpeV2-_BTC7DawHdG7OokhXy8mZc2tvcFBwtV3ERmCjBiPFc17ciE3lcJLairIR5zjlGek259t7aEsxA3TsPp-V2rbUFRnyxHsc" 
            />
          </div>
        </div>

        {/* Article 4: Industry */}
        <article onClick={() => {window.location.href = '/news/:id';}} className="article-card">
          <div className="article-img-wrapper">
            <img 
              className="article-img" 
              alt="Industrial drone inspecting wind turbine" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOIDkWYojkewoeN37azwl_X_SA9s1v7gY2DOfLAaGLA8tDCSsdyxM8i9v_CLQD3qcgVoHYRQXQJC9LEfulfjT9HbySK-FhwbzK67o8lYYE1EKEOpiWjqC-KA_pXyTEFJ9AihLkvsQnIGhbphzyos2kU7DXhMRxvS6dDfHMCqG6_zgUcsO25xjlks_ZXtCB5Dc9EeLK-BZHsBuze1o8EjFR4xh2jZ6ImUcnqobClfqwwf_Bs50T79SolXDSBDrcSU-ksqyKOKM-7Jc" 
            />
          </div>
          <div className="article-content">
            <div className="article-meta">
              <span className="article-badge badge-secondary">Industry</span>
              <time className="article-date">October 12, 2024</time>
            </div>
            <h3 className="article-title">Infrastructure 2.0: AI-Driven Inspection Workflows</h3>
            <p className="article-excerpt">
              Automating the mundane. How enterprise partners are using DroneMaker's SDK to identify hairline fractures in critical infrastructure within seconds.
            </p>
            <div className="article-read-more">
              <span>Read Full Insight</span>
              <span className="material-symbols-outlined article-read-more-icon">arrow_forward</span>
            </div>
          </div>
        </article>

      </section>

      {/* 3. PAGINATION */}
      <div className="pagination-wrapper">
        <button className="pagination-btn">
          <span className="material-symbols-outlined">chevron_left</span>
          <span className="pagination-text">Previous</span>
        </button>
        
        <div className="pagination-numbers">
          <span className="page-num active">1</span>
          <span className="page-num">2</span>
          <span className="page-num">3</span>
        </div>
        
        <button className="pagination-btn active">
          <span className="pagination-text">Next</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

    </main>
  );
};

export default News;