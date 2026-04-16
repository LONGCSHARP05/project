// import React from 'react';
// import '../assets/create-article.css';

// const CreateArticle = () => {
//   return (
//     <div className="create-layout">
      

//       {/* 3. MAIN CANVAS */}
//       <main className="main-canvas">
        
//         {/* Page Header */}
//         <header className="page-header">
//           <div className="page-header__left">
//             <button onClick={() => {window.location.href = '/admin/article-management';}} className="btn-back" title="Back to Articles">
//               <span className="material-symbols-outlined">arrow_back</span>
//             </button>
//             <h1 className="page-title">Create New Article</h1>
//           </div>
//           <div className="page-header__actions">
//             <button className="btn btn--ghost">Save Draft</button>
//             <button className="btn btn--primary">Publish Article</button>
//           </div>
//         </header>

//         {/* Grid 2:1 */}
//         <div className="editor-grid">
          
//           {/* LEFT: MAIN EDITOR */}
//           <section className="editor-main">
//             <div className="editor-card">
              
//               {/* Cover Upload */}
//               <div className="upload-zone">
//                 <span className="material-symbols-outlined upload-zone__icon">add_a_photo</span>
//                 <span className="upload-zone__title">Add a featured cover image</span>
//                 <span className="upload-zone__hint">Recommended: 2100x900px (JPG, PNG)</span>
//               </div>

//               {/* Title Input */}
//               <input 
//                 className="title-input" 
//                 placeholder="Enter article title..." 
//                 type="text" 
//               />

//               {/* WYSIWYG Toolbar */}
//               <div className="wysiwyg-toolbar">
//                 <span className="toolbar-btn material-symbols-outlined">format_bold</span>
//                 <span className="toolbar-btn material-symbols-outlined">format_italic</span>
//                 <span className="toolbar-btn material-symbols-outlined">format_underlined</span>
//                 <div className="toolbar-divider"></div>
//                 <span className="toolbar-btn material-symbols-outlined">format_list_bulleted</span>
//                 <span className="toolbar-btn material-symbols-outlined">format_list_numbered</span>
//                 <div className="toolbar-divider"></div>
//                 <span className="toolbar-btn material-symbols-outlined">link</span>
//                 <span className="toolbar-btn material-symbols-outlined">image</span>
//                 <span className="toolbar-btn material-symbols-outlined">code</span>
//                 <div className="toolbar-divider"></div>
//                 <span className="toolbar-btn material-symbols-outlined">format_quote</span>
//               </div>

//               {/* Text Area */}
//               <textarea 
//                 className="editor-textarea" 
//                 placeholder="Start writing your story here..."
//               ></textarea>
              
//             </div>
//           </section>

//           {/* RIGHT: SETTINGS SIDEBAR */}
//           <aside className="editor-sidebar">
//             <div className="settings-card">
              
//               {/* Status Toggle */}
//               <div className="status-toggle">
//                 <span className="status-toggle__label">Active Status</span>
//                 <label className="toggle-wrapper">
//                   <input type="checkbox" className="toggle-checkbox" defaultChecked />
//                   <span className="toggle-slider"></span>
//                 </label>
//               </div>

//               {/* Category */}
//               <div className="setting-group">
//                 <label className="setting-label">Category</label>
//                 <select className="setting-select">
//                   <option>Guide</option>
//                   <option>News</option>
//                   <option>Announcement</option>
//                   <option>Product Review</option>
//                 </select>
//               </div>

//               {/* Author */}
//               <div className="setting-group">
//                 <label className="setting-label">Author</label>
//                 <input className="setting-input" placeholder="e.g. Alex Drone" type="text" defaultValue="Admin Console" />
//               </div>

//               {/* Publish Date */}
//               <div className="setting-group">
//                 <label className="setting-label">Publish Date</label>
//                 <input className="setting-input" type="date" />
//               </div>

//               {/* Read Time */}
//               <div className="setting-group">
//                 <label className="setting-label">Read Time (Est.)</label>
//                 <div className="input-with-suffix">
//                   <input className="setting-input" type="number" defaultValue="5" />
//                   <span className="input-suffix">MIN</span>
//                 </div>
//               </div>

//               {/* Tags */}
//               <div className="setting-group">
//                 <label className="setting-label">Tags</label>
//                 <div className="tag-list">
//                   <span className="tag">DRONES</span>
//                   <span className="tag">TECH</span>
//                   <span className="tag tag--add">
//                     <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>add</span> ADD TAG
//                   </span>
//                 </div>
//               </div>

//               {/* SEO Preview */}
//               <div className="seo-preview">
//                 <div className="seo-card">
//                   <h4 className="seo-card__title">SEO Preview</h4>
//                   <div className="seo-card__url">https://dronemaker.com/blog/new-article...</div>
//                   <div className="seo-card__desc">
//                     The future of aerial photography starts today with our latest innovation in drone mechanics...
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </aside>

//         </div>
//       </main>
//     </div>
//   );
// };

// export default CreateArticle;

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/create-article.css';

const CreateArticle = () => {
  const navigate = useNavigate();
  
  // 1. Quản lý State cho Form
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState('');
  const [formData, setFormData] = useState({
    status: true,
    category: 'Guide',
    author: 'Admin Console',
    publishDate: '',
    readTime: 5,
  });
  const [tags, setTags] = useState(['DRONES', 'TECH']);
  const [showToast, setShowToast] = useState(false);

  // 2. Refs cho Upload và Editor
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  // 3. Logic Upload Ảnh
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  // 4. Logic WYSIWYG Editor (Bold, Italic, Bullet List)
  const handleFormat = (command) => {
    document.execCommand(command, false, null);
    if (editorRef.current) editorRef.current.focus();
  };

  // 5. Logic Thêm Tag
  const handleAddTag = () => {
    const newTag = window.prompt("Nhập tag mới:");
    if (newTag && newTag.trim() !== '') {
      setTags([...tags, newTag.trim().toUpperCase()]);
    }
  };

  // 6. Xóa Tag
  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  // 7. Logic Auto-Fill (Mock Data) khi Double Click vào Editor
  const handleAutoFill = () => {
    setTitle("Khám phá hệ thống Camera kép trên Mavic 3 Pro");
    if (editorRef.current) {
      editorRef.current.innerHTML = "<b>Mavic 3 Pro</b> mang đến một kỷ nguyên mới cho nghệ thuật nhiếp ảnh trên không.<br><br><ul><li>Cảm biến 4/3 CMOS Hasselblad</li><li>Khả năng quay Apple ProRes 422 HQ</li><li>Thời gian bay tối đa 43 phút</li></ul><br>Hãy cùng DroneMaker tìm hiểu chi tiết về siêu phẩm này nhé!";
    }
    setFormData({
      status: true,
      category: 'News',
      author: 'Vũ Trường Long',
      publishDate: '2026-10-24',
      readTime: 8,
    });
    setTags(['DRONES', 'REVIEW', 'DJI']);
  };

  // 8. Logic Publish Bài viết
  const handlePublish = () => {
    if (!title || !editorRef.current?.innerText.trim()) {
      alert("Vui lòng nhập tiêu đề và nội dung bài viết!");
      return;
    }
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/admin/article-management'); // Chuyển về danh sách sau khi đăng
    }, 2000);
  };

  return (
    <div className="create-layout">
      
      {/* MAIN CANVAS */}
      <main className="main-canvas">
        
        {/* Page Header */}
        <header className="page-header">
          <div className="page-header__left">
            <button onClick={() => navigate(-1)} className="btn-back" title="Back to Articles">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h1 className="page-title">Create New Article</h1>
          </div>
          <div className="page-header__actions">
            <button className="btn btn--ghost">Save Draft</button>
            <button className="btn btn--primary" onClick={handlePublish}>Publish Article</button>
          </div>
        </header>

        {/* Grid 2:1 */}
        <div className="editor-grid">
          
          {/* LEFT: MAIN EDITOR */}
          <section className="editor-main">
            <div className="editor-card">
              
              {/* Cover Upload */}
              <div 
                className="upload-zone" 
                onClick={() => fileInputRef.current.click()}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {coverImage ? (
                  <img src={coverImage} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                ) : (
                  <>
                    <span className="material-symbols-outlined upload-zone__icon">add_a_photo</span>
                    <span className="upload-zone__title">Add a featured cover image</span>
                    <span className="upload-zone__hint">Recommended: 2100x900px (JPG, PNG)</span>
                  </>
                )}
                {/* Input ẩn để hứng file tải lên */}
                <input type="file" hidden ref={fileInputRef} onChange={handleImageUpload} accept="image/*" />
              </div>

              {/* Title Input */}
              <input 
                className="title-input" 
                placeholder="Enter article title..." 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* WYSIWYG Toolbar */}
              <div className="wysiwyg-toolbar">
                {/* Dùng onMouseDown + e.preventDefault() để khi bấm nút, editor không bị mất focus */}
                <span className="toolbar-btn material-symbols-outlined" onMouseDown={(e) => { e.preventDefault(); handleFormat('bold'); }}>format_bold</span>
                <span className="toolbar-btn material-symbols-outlined" onMouseDown={(e) => { e.preventDefault(); handleFormat('italic'); }}>format_italic</span>
                <span className="toolbar-btn material-symbols-outlined" onMouseDown={(e) => { e.preventDefault(); handleFormat('underline'); }}>format_underlined</span>
                <div className="toolbar-divider"></div>
                <span className="toolbar-btn material-symbols-outlined" onMouseDown={(e) => { e.preventDefault(); handleFormat('insertUnorderedList'); }}>format_list_bulleted</span>
                <span className="toolbar-btn material-symbols-outlined" onMouseDown={(e) => { e.preventDefault(); handleFormat('insertOrderedList'); }}>format_list_numbered</span>
                <div className="toolbar-divider"></div>
                <span className="toolbar-btn material-symbols-outlined">link</span>
                <span className="toolbar-btn material-symbols-outlined">image</span>
                <span className="toolbar-btn material-symbols-outlined">code</span>
                <div className="toolbar-divider"></div>
                <span className="toolbar-btn material-symbols-outlined">format_quote</span>
              </div>

              {/* Text Area (Chuyển thành contentEditable để hỗ trợ format văn bản) */}
              <div 
                ref={editorRef}
                className="editor-textarea" 
                contentEditable="true"
                suppressContentEditableWarning={true}
                onDoubleClick={handleAutoFill}
                data-placeholder="Start writing your story here..."
                style={{ outline: 'none', minHeight: '400px' }}
              ></div>
              
            </div>
          </section>

          {/* RIGHT: SETTINGS SIDEBAR */}
          <aside className="editor-sidebar">
            <div className="settings-card">
              
              {/* Status Toggle */}
              <div className="status-toggle">
                <span className="status-toggle__label">Active Status</span>
                <label className="toggle-wrapper">
                  <input 
                    type="checkbox" 
                    className="toggle-checkbox" 
                    checked={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.checked})}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              {/* Category */}
              <div className="setting-group">
                <label className="setting-label">Category</label>
                <select 
                  className="setting-select"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="Guide">Guide</option>
                  <option value="News">News</option>
                  <option value="Announcement">Announcement</option>
                  <option value="Product Review">Product Review</option>
                </select>
              </div>

              {/* Author */}
              <div className="setting-group">
                <label className="setting-label">Author</label>
                <input 
                  className="setting-input" 
                  placeholder="e.g. Alex Drone" 
                  type="text" 
                  value={formData.author}
                  onChange={(e) => setFormData({...formData, author: e.target.value})}
                />
              </div>

              {/* Publish Date */}
              <div className="setting-group">
                <label className="setting-label">Publish Date</label>
                <input 
                  className="setting-input" 
                  type="date" 
                  value={formData.publishDate}
                  onChange={(e) => setFormData({...formData, publishDate: e.target.value})}
                />
              </div>

              {/* Read Time */}
              <div className="setting-group">
                <label className="setting-label">Read Time (Est.)</label>
                <div className="input-with-suffix">
                  <input 
                    className="setting-input" 
                    type="number" 
                    value={formData.readTime}
                    onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                  />
                  <span className="input-suffix">MIN</span>
                </div>
              </div>

              {/* Tags */}
              <div className="setting-group">
                <label className="setting-label">Tags</label>
                <div className="tag-list">
                  {tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="tag" 
                      title="Click để xóa"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleRemoveTag(index)}
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="tag tag--add" onClick={handleAddTag}>
                    <span className="material-symbols-outlined text-xs" style={{ fontSize: '14px' }}>add</span> ADD TAG
                  </span>
                </div>
              </div>

              {/* SEO Preview */}
              <div className="seo-preview">
                <div className="seo-card">
                  <h4 className="seo-card__title">SEO Preview</h4>
                  <div 
                    className="seo-card__url" 
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={() => navigate(`/news/dji-mavic-3-pro-preview`)}
                    title="Bấm để xem Preview trang chủ đề"
                  >
                    https://dronemaker.com/news/preview...
                  </div>
                  <div className="seo-card__desc">
                    {title ? title : "The future of aerial photography starts today with our latest innovation in drone mechanics..."}
                  </div>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>

      {/* Toast Thông báo đăng bài thành công */}
      {showToast && (
        <div className="article-toast">
          <span className="material-symbols-outlined" style={{ color: '#34c759' }}>check_circle</span>
          Đăng bài viết thành công!
        </div>
      )}

    </div>
  );
};

export default CreateArticle;