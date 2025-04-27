'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
    
    
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        if (hamburger && hamburger.classList.contains('active')) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    });

    
    return () => {
      if (hamburger) {
        hamburger.removeEventListener('click', () => {});
      }
      
      navItems.forEach(item => {
        item.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>อร่อยเด็ด</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>หน้าหลัก</Link></li>
            <li><Link href="/menu" className={pathname === '/menu' ? 'active' : ''}>เมนูอาหาร</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>ติดต่อเรา</Link></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
