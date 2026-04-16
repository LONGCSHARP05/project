import React, { createContext, useState } from 'react';

const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Danh sách mã giảm giá giả lập
  const PROMO_CODES = {
    "DRONE10": { type: "percent", value: 10 },
    "SAVE50K": { type: "fixed", value: 50000 },
    "NEWUSER": { type: "percent", value: 15 }
  };

  // 1. Thêm sản phẩm vào giỏ hàng (Không dùng alert, return boolean)
  const addToCart = (product, quantity = 1) => {
    try {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prevItems, { ...product, quantity }];
      });
      return true; // Trả về true để component tự handle UI (toast, v.v.)
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
      return false;
    }
  };

  // 2. Xóa 1 sản phẩm khỏi giỏ
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // 3. Cập nhật số lượng (min 1, max 10)
  const updateQuantity = (productId, newQty) => {
    const qty = Math.max(1, Math.min(10, newQty)); // Ràng buộc số lượng từ 1 đến 10
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  // 4. Lấy tổng tiền trước giảm giá (Subtotal)
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 5. Kiểm tra mã giảm giá
  const applyPromoCode = (code) => {
    const uppercaseCode = code.trim().toUpperCase();
    if (PROMO_CODES[uppercaseCode]) {
      return PROMO_CODES[uppercaseCode]; // Trả về object discount (vd: { type: 'percent', value: 10 })
    }
    return null; // Trả về null nếu mã không hợp lệ
  };

  // 6. Tính tổng tiền sau khi giảm giá
  const getTotal = (discount = null) => {
    const subtotal = getSubtotal();
    if (!discount) return subtotal;

    if (discount.type === "percent") {
      return subtotal - (subtotal * discount.value) / 100;
    }
    if (discount.type === "fixed") {
      return Math.max(0, subtotal - discount.value); // Đảm bảo tổng tiền không bị âm
    }
    return subtotal;
  };

  // 7. Đếm tổng số lượng items trong giỏ (hiển thị trên badge)
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // 8. Xóa toàn bộ giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getSubtotal,
    applyPromoCode,
    getTotal,
    getTotalItems,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};