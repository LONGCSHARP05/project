// src/App.jsx
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { CartProvider } from './contexts/CartContext' // Thêm dòng này

function App() {
  return (
    <CartProvider> {/* Bọc Provider bên ngoài BrowserRouter */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App