'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCategories, getAllMenuItems, getMenuItemsByCategory } from '../utils/menuUtils';

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Load categories and menu items from JSON
    setCategories(getCategories());
    setMenuItems(getAllMenuItems());
  }, []);

  useEffect(() => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItemElements = document.querySelectorAll('.menu-item');

    if (filterButtons.length > 0 && menuItemElements.length > 0) {
      // Apply transition styles
      menuItemElements.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });
    }
  }, [menuItems]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
    // Update menu items based on selected category
    if (category === 'all') {
      setMenuItems(getAllMenuItems());
    } else {
      setMenuItems(getMenuItemsByCategory(category));
    }
  };

  return (
    <main>
      <Header />

      <section className="page-banner">
        <div className="banner-content">
          <h2>เมนูอาหาร</h2>
          <p>เลือกอาหารที่คุณชื่นชอบจากเมนูหลากหลายของเรา</p>
        </div>
      </section>

      <section className="menu-section">
        <div className="container">
          <div className="menu-filters">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`} 
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="menu-items">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item" data-category={item.category}>
                <div className="menu-item-img">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={200}
                  />
                </div>
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">฿{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
