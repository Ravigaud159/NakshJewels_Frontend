import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Header.module.css';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>

          <Link to="/" className={styles.logo}>
            Naksh Jewels
          </Link>

          <nav className={styles.nav}>
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              Products
            </NavLink>

            <NavLink 
              to="/cart" 
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              Cart
              {totalItems > 0 && (
                <span className={styles.cartCount}>
                  {totalItems}
                </span>
              )}
            </NavLink>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
