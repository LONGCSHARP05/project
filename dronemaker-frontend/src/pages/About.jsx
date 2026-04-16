import React from 'react';
import '../assets/about.css';

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

        <div className="hero-content">
          <p className="hero-tagline">Shaping the Future</p>
          <h1 className="hero-title">Expanding Vision</h1>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="overview-section">
        <div className="container overview-grid">
          <div className="overview-text">
            <h2 className="overview-heading">
              We redefine the limits of spatial intelligence.
            </h2>
            <p className="overview-desc">
              Founded in 2014, DroneMaker has grown from a small laboratory project into a global leader in autonomous aerial systems. We don’t just build drones—we architect data streams that enable industries to see the unseen.
            </p>
            <div className="overview-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Patents</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">120</span>
                <span className="stat-label">Global Centers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Reliability</span>
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
                "Our mission is to make the sky accessible to everyone, from agriculture to high-end cinematography."
              </p>
              <p className="quote-author">— Alex Chen, CTO</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bento-section">
        <div className="container">
          <div className="bento-grid-fixed">
            
            <div className="mission-card-fixed">
              <span className="bento-tag-blue">Mission</span>
              <h3 className="bento-title-dark">
                Democratizing precision through autonomous aerial engineering.
              </h3>
              <p className="bento-desc-dark">
                Empowering organizations with aerial insights by combining advanced AI with robust hardware to solve complex real-world challenges.
              </p>
            </div>

            <div className="vision-card-fixed">
              <span className="bento-tag-light">Vision</span>
              <h3 className="bento-title-light">
                The sky as a seamless global infrastructure layer.
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
            <h2 className="section-title">Our Journey.</h2>
          </div>
          
          {/* 2014 */}
          <div className="timeline-row">
            <div className="timeline-image-wrapper">
              <img className="timeline-image" alt="Vintage drone prototypes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcKqsvvrrzroCI-gSQNhx0h9SdTm-Yg44ZguZTc36sc6mstx-mV1ZZse01gIWACX7TQcbloVZawVr9kdXvT7MOuhfmr9AmH_PG2FVKsHJhLepDxWjspog9JrSrhNaiCyDerxIO7XfF4cDFlW3P5ktC58Ne2lWsOm34PTWFWAOH8BPbyeuR4OGLWVTATKPOBWUgvtWVSnitWhGLDzvW1HlTn2Omo3SEANhO-k_sYLs9VyJbrvDdKV30XlZFeGMpm6WCYUsADSr7Qg4" />
            </div>
            <div className="timeline-content">
              <span className="timeline-year">2014</span>
              <h4 className="timeline-subtitle">Startup Era</h4>
              <p className="timeline-desc">
                Started from a small garage in Silicon Valley. Our founders developed the first "Smart Hover" algorithm, enabling drones to maintain perfect stability without GPS.
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
              <h4 className="timeline-subtitle">Industrial Expansion</h4>
              <p className="timeline-desc">
                Expanded into industrial solutions. The DroneMaker 4K series became the standard for agricultural surveying and topographic mapping across North America and Europe.
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
              <h4 className="timeline-subtitle">AI Integration</h4>
              <p className="timeline-desc">
                Introduced Nexus AI Core. Real-time object recognition and swarm intelligence are now embedded in every DroneMaker aircraft, setting a new industry standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities */}
      <section className="capabilities-section">
        <div className="container">
          <div className="capabilities-header">
            <h2 className="section-title">Core Capabilities.</h2>
            <p className="section-desc">
              Specialized across three key pillars of aerial technology.
            </p>
          </div>
          
          <div className="capabilities-grid">
            <div className="capability-card">
              <span className="material-symbols-outlined capability-icon">agriculture</span>
              <h5 className="capability-title">Precision Agriculture</h5>
              <p className="capability-desc">
                Thermal and multispectral imaging sensors for crop health monitoring and automated irrigation management.
              </p>
            </div>

            <div className="capability-card">
              <span className="material-symbols-outlined capability-icon">movie</span>
              <h5 className="capability-title">Cinematic Systems</h5>
              <p className="capability-desc">
                8K ProRes video capture with a 360-degree stabilized gimbal system designed for world-class filmmaking.
              </p>
            </div>

            <div className="capability-card">
              <span className="material-symbols-outlined capability-icon">shield</span>
              <h5 className="capability-title">Search & Rescue</h5>
              <p className="capability-desc">
                Night vision support and AI-powered human detection for rescue operations in extreme weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;