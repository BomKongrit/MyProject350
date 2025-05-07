'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import { getFeaturedMenuItems } from './utils/menuUtils';

export default function Home() {
  const [featuredDishes, setFeaturedDishes] = useState([]);

  useEffect(() => {
    // Load featured menu items from JSON
    setFeaturedDishes(getFeaturedMenuItems());
  }, []);

  useEffect(() => {
    if (featuredDishes.length > 0) {
      const dishes = document.querySelectorAll('.dish');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      
      if (dishes.length > 0 && prevBtn && nextBtn) {
        let slideIndex = 0;
        const totalSlides = dishes.length;
        
        const getVisibleSlides = () => {
          if (window.innerWidth >= 992) return 3;
          if (window.innerWidth >= 768) return 2;
          return 1;
        };
        
        const updateSlider = () => {
          const visibleSlides = getVisibleSlides();
          
          dishes.forEach((dish, index) => {
            if (index >= slideIndex && index < slideIndex + visibleSlides) {
              dish.style.display = 'block';
            } else {
              dish.style.display = 'none';
            }
          });
        };
        
        prevBtn.addEventListener('click', () => {
          slideIndex = Math.max(0, slideIndex - 1);
          updateSlider();
        });
        
        nextBtn.addEventListener('click', () => {
          const visibleSlides = getVisibleSlides();
          slideIndex = Math.min(totalSlides - visibleSlides, slideIndex + 1);
          updateSlider();
        });
        
        updateSlider();
        
        window.addEventListener('resize', updateSlider);
        
        return () => {
          prevBtn.removeEventListener('click', () => {});
          nextBtn.removeEventListener('click', () => {});
          window.removeEventListener('resize', () => {});
        };
      }
    }
  }, [featuredDishes]);

  return (
    <main>
      <Header />
      
      <section className="hero">
        <div className="hero-content">
          <h2>ยินดีต้อนรับสู่ร้านอร่อยเด็ด</h2>
          <p>สัมผัสรสชาติอาหารที่เป็นเอกลักษณ์ในบรรยากาศที่อบอุ่น</p>
          <Link href="/menu" className="btn">ดูเมนูอาหาร</Link>
        </div>
      </section>
      
      <section className="featured-dishes">
        <div className="container">
          <h2 className="section-title">เมนูแนะนำ</h2>
          <div className="dishes-slider">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="dish">
                <img
                  src={dish.image}
                  alt={dish.name}
                  width={300}
                  height={200}
                />
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span className="price">฿{dish.price}</span>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button className="prev-btn"><i className="fas fa-chevron-left"></i></button>
            <button className="next-btn"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

    
      <section className="about">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">เกี่ยวกับเรา</h2>
            <p>ร้านอร่อยเด็ดเปิดให้บริการมากว่า 10 ปี ด้วยความมุ่งมั่นที่จะนำเสนออาหารไทยรสชาติดั้งเดิม ใช้วัตถุดิบคุณภาพดี สดใหม่ทุกวัน เพื่อให้ลูกค้าได้สัมผัสรสชาติอาหารที่อร่อยและมีคุณภาพ</p>
            <p>เรามีเมนูหลากหลายให้เลือก ทั้งอาหารไทยต้นตำรับและอาหารฟิวชั่นที่ผสมผสานความเป็นไทยกับความทันสมัย</p>
            <Link href="/menu" className="btn">ดูเมนูทั้งหมด</Link>
          </div>
          <div className="about-image">
            <img 
              src="https://i.pinimg.com/736x/2f/fe/50/2ffe50611c0e1a1e8cd045456c3cca5e.jpg" 
              alt="ร้านอร่อยเด็ด" 
              width={500} 
              height={400} 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
