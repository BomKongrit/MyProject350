'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  
  useEffect(() => {
    
    const contactForm = document.getElementById('contactForm');
    
    
    
    
    function showError(input, message) {
      const formGroup = input.parentElement;
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      errorElement.style.color = 'red';
      errorElement.style.fontSize = '0.8rem';
      errorElement.style.marginTop = '0.3rem';
      formGroup.appendChild(errorElement);
      
      input.style.borderColor = 'red';
      
      input.addEventListener('focus', function() {
        input.style.borderColor = '';
        const error = formGroup.querySelector('.error-message');
        if (error) {
          error.remove();
        }
      });
    }
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    
    return () => {
      if (contactForm) {
        contactForm.removeEventListener('submit', () => {});
      }
    };
  }, []);

  return (
    <main>
      <Header />

      
      <section className="page-banner">
        <div className="banner-content">
          <h2>ติดต่อเรา</h2>
          <p>เราพร้อมให้บริการและรับฟังความคิดเห็นของคุณ</p>
        </div>
      </section>

      
      <section className="contact-section">
        <div className="container">
          <div className="contact-info-container">
            <div className="contact-info">
              <h3>ข้อมูลติดต่อ</h3>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>ที่อยู่</h4>
                  <p>123 ถนนสุขุมวิท, แขวงคลองตัน, เขตคลองเตย, กรุงเทพฯ 10110</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>โทรศัพท์</h4>
                  <p>02-123-4567</p>
                  <p>081-234-5678</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>อีเมล</h4>
                  <p>info@aroided.com</p>
                  <p>booking@aroided.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>เวลาทำการ</h4>
                  <p>จันทร์ - ศุกร์: 10:00 - 22:00</p>
                  <p>เสาร์ - อาทิตย์: 11:00 - 23:00</p>
                </div>
              </div>
              <div className="social-contact">
                <h4>ติดตามเรา</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-line"></i></a>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      

      {/* Reservation Section */}
      <section className="reservation-section">
        <div className="container">
          <div className="reservation-content">
            <h3>จองโต๊ะล่วงหน้า</h3>
            <p>สำหรับการจองโต๊ะล่วงหน้า กรุณาติดต่อเราที่เบอร์ 02-123-4567 หรือส่งอีเมลมาที่ booking@aroided.com</p>
            <p>เพื่อประสบการณ์ที่ดีที่สุด เราแนะนำให้จองล่วงหน้าอย่างน้อย 1 วัน โดยเฉพาะในช่วงวันหยุดสุดสัปดาห์</p>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
