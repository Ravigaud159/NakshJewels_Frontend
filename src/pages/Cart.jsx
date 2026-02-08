import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some beautiful jewelry to your cart!</p>
          <button 
            className="btn"
            onClick={() => navigate('/')}
            style={{ marginTop: '1rem' }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cart-container">
        <h1>Your Shopping Cart</h1>
        <div className="cart-items">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-total">
          Total: Rs {totalPrice}
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button 
            className="btn"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </button>
          <button 
            className="btn btn-danger"
            onClick={clearCart}
          >
            Clear Cart
          </button>
          <button 
            className="btn btn-success"
            onClick={handleCheckout}
            style={{ marginLeft: 'auto' }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

