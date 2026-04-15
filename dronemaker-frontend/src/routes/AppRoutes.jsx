import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Article from "../pages/Article";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetail from "../pages/ProductDetail";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import ProductCreation from "../pages/ProductCreation";
import ProductOverview from "../pages/ProductOverview";
import ArticleManagement from "../pages/ArticleManagement";
import OrderManagement from "../pages/OrderManagement";
import CreateArticle from "../pages/CreateArticle";
// Protected Route Component


// Trang placeholder tạm thời cho các route chưa có nội dung
function PlaceholderPage({ title }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{title}</h2>
      <p>Nội dung đang được phát triển...</p>
    </div>
  );
}

function AppRoutes() {

  return (
    <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/product-creation" element={<ProductCreation />} />
          <Route path="/admin/article-management" element={<ArticleManagement />} />
          <Route path="/admin/order-management" element={<OrderManagement />} />
          <Route path="/admin/product-overview" element={<ProductOverview />} />
          <Route path="/admin/create-article" element={<CreateArticle />} />
        </Route>
    </Routes>
  );
}

export default AppRoutes;