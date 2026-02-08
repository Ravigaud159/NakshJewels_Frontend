import React from 'react';
import { useCart } from '../context/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className={styles.cartItem}>
      <img
        src={item.image}
        alt={item.name}
        className={styles.image}
      />

      <div className={styles.details}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.price}>₹{item.price}</p>
        <p className={styles.total}>
          Total: ₹{(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className={styles.actions}>
        <div className={styles.quantityControls}>
          <button
            className={styles.qtyBtn}
            onClick={() => handleQuantityChange(-1)}
          >−</button>

          <span className={styles.quantity}>{item.quantity}</span>

          <button
            className={styles.qtyBtn}
            onClick={() => handleQuantityChange(1)}
          >+</button>
        </div>

        <button
          className={styles.removeBtn}
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
