// src/contexts/CartContext.jsx
import React, { createContext, useState,  useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => React.useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Lấy dữ liệu từ localStorage nếu có, không thì mảng rỗng
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('dronemaker_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Lưu vào localStorage mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    localStorage.setItem('dronemaker_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Thêm vào giỏ
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item
        );
      }
      return [...prevItems, { ...product, qty: quantity }];
    });
    alert(`Đã thêm ${quantity} sản phẩm ${product.name} vào giỏ hàng!`);
  };

  // Tính tổng phụ (Subtotal)
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getSubtotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};