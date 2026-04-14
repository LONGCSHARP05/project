import React from 'react';
import '../assets/create-article.css';

const CreateArticle = () => {
  return (
    <div className="create-layout">
      
      {/* 1. SIDEBAR
      <aside className="sidebar">
        <h1 className="sidebar__brand">DroneMaker</h1>
        <nav>
          <a className="nav__item" href="#">
            <span className="material-symbols-outlined">dashboard</span> Dashboard
          </a>
          <a className="nav__item" href="#">
            <span className="material-symbols-outlined">inventory_2</span> Products
          </a>
          <a className="nav__item" href="#">
            <span className="material-symbols-outlined">shopping_cart</span> Orders
          </a>
          <a className="nav__item nav__item--active" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>article</span> Articles
          </a>
          <a className="nav__item" href="#">
            <span className="material-symbols-outlined">settings</span> Settings
          </a>
        </nav>
      </aside> */}

      {/* 2. TOPBAR */}
      <header className="topbar">
        <div className="search-box">
          <span className="material-symbols-outlined">search</span>
          <input placeholder="Search resources..." type="text" />
        </div>
        <div className="topbar__actions">
          <span className="material-symbols-outlined cursor-pointer">notifications</span>
          <span className="material-symbols-outlined cursor-pointer">help_outline</span>
          <img 
            alt="Admin Profile" 
            className="w-10 h-10 rounded-full object-cover border-2 border-transparent" 
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKfdz8dLwVBz8bm-cZ2prY9jnuMqVOX6qYlz4h8hZYX2AJRDq0y1-Iwd0T0aO6sIu9sJMcM21Fx5HnQaaWm9FsqJrBg7tnMzIuxMfJoDuvkVyKIZkMwedwQKSa5WKEi19DoRwDs9zWfzG9ssp8yZ0q-blrKxK6KRfI51KsgF4ec4FbFr0ITvmmgopM8x4M6JxsKQ4DzotyTXWWqmlzF7uhd8JpYWpTwnqQUPnTS2mNzqbLkAmp2WUInql3_VY60HfXJLNSTO2ckEY" 
          />
        </div>
      </header>

      {/* 3. MAIN CANVAS */}
      <main className="main-canvas">
        
        {/* Page Header */}
        <header className="page-header">
          <div className="page-header__left">
            <button className="btn-back" title="Back to Articles">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="page-title">Create New Article</h1>
          </div>
          <div className="page-header__actions">
            <button className="btn btn--ghost">Save Draft</button>
            <button className="btn btn--primary">Publish Article</button>
          </div>
        </header>

        {/* Grid 2:1 */}
        <div className="editor-grid">
          
          {/* LEFT: MAIN EDITOR */}
          <section className="editor-main">
            <div className="editor-card">
              
              {/* Cover Upload */}
              <div className="upload-zone">
                <span className="material-symbols-outlined upload-zone__icon">add_a_photo</span>
                <span className="upload-zone__title">Add a featured cover image</span>
                <span className="upload-zone__hint">Recommended: 2100x900px (JPG, PNG)</span>
              </div>

              {/* Title Input */}
              <input 
                className="title-input" 
                placeholder="Enter article title..." 
                type="text" 
              />

              {/* WYSIWYG Toolbar */}
              <div className="wysiwyg-toolbar">
                <span className="toolbar-btn material-symbols-outlined">format_bold</span>
                <span className="toolbar-btn material-symbols-outlined">format_italic</span>
                <span className="toolbar-btn material-symbols-outlined">format_underlined</span>
                <div className="toolbar-divider"></div>
                <span className="toolbar-btn material-symbols-outlined">format_list_bulleted</span>
                <span className="toolbar-btn material-symbols-outlined">format_list_numbered</span>
                <div className="toolbar-divider"></div>
                <span className="toolbar-btn material-symbols-outlined">link</span>
                <span className="toolbar-btn material-symbols-outlined">image</span>
                <span className="toolbar-btn material-symbols-outlined">code</span>
                <div className="toolbar-divider"></div>
                <span className="toolbar-btn material-symbols-outlined">format_quote</span>
              </div>

              {/* Text Area */}
              <textarea 
                className="editor-textarea" 
                placeholder="Start writing your story here..."
              ></textarea>
              
            </div>
          </section>

          {/* RIGHT: SETTINGS SIDEBAR */}
          <aside className="editor-sidebar">
            <div className="settings-card">
              
              {/* Status Toggle */}
              <div className="status-toggle">
                <span className="status-toggle__label">Active Status</span>
                <label className="toggle-wrapper">
                  <input type="checkbox" className="toggle-checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Category */}
              <div className="setting-group">
                <label className="setting-label">Category</label>
                <select className="setting-select">
                  <option>Guide</option>
                  <option>News</option>
                  <option>Announcement</option>
                  <option>Product Review</option>
                </select>
              </div>

              {/* Author */}
              <div className="setting-group">
                <label className="setting-label">Author</label>
                <input className="setting-input" placeholder="e.g. Alex Drone" type="text" defaultValue="Admin Console" />
              </div>

              {/* Publish Date */}
              <div className="setting-group">
                <label className="setting-label">Publish Date</label>
                <input className="setting-input" type="date" />
              </div>

              {/* Read Time */}
              <div className="setting-group">
                <label className="setting-label">Read Time (Est.)</label>
                <div className="input-with-suffix">
                  <input className="setting-input" type="number" defaultValue="5" />
                  <span className="input-suffix">MIN</span>
                </div>
              </div>

              {/* Tags */}
              <div className="setting-group">
                <label className="setting-label">Tags</label>
                <div className="tag-list">
                  <span className="tag">DRONES</span>
                  <span className="tag">TECH</span>
                  <span className="tag tag--add">
                    <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>add</span> ADD TAG
                  </span>
                </div>
              </div>

              {/* SEO Preview */}
              <div className="seo-preview">
                <div className="seo-card">
                  <h4 className="seo-card__title">SEO Preview</h4>
                  <div className="seo-card__url">https://dronemaker.com/blog/new-article...</div>
                  <div className="seo-card__desc">
                    The future of aerial photography starts today with our latest innovation in drone mechanics...
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default CreateArticle;