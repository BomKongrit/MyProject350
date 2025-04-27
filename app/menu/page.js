'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Menu() {
  
  useEffect(() => {
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (filterButtons.length > 0 && menuItems.length > 0) {
      
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
      
          this.classList.add('active');
          
          
          const filterValue = this.getAttribute('data-filter');
          
          
          menuItems.forEach(item => {
            if (filterValue === 'all') {
              item.style.display = 'block';
              
              
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
              }, 100);
            } else {
              if (item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                
                
                setTimeout(() => {
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0)';
                }, 100);
              } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                
                
                setTimeout(() => {
                  item.style.display = 'none';
                }, 300);
              }
            }
          });
        });
      });
      
      
      menuItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      });
      
      
      filterButtons[0].click();
    }

    
    return () => {
      if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
          button.removeEventListener('click', () => {});
        });
      }
    };
  }, []);

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
            <button className="filter-btn active" data-filter="all">ทั้งหมด</button>
            <button className="filter-btn" data-filter="main">อาหารจานหลัก</button>
            <button className="filter-btn" data-filter="appetizer">อาหารเรียกน้ำย่อย</button>
            <button className="filter-btn" data-filter="dessert">ของหวาน</button>
            <button className="filter-btn" data-filter="beverage">เครื่องดื่ม</button>
          </div>

          <div className="menu-items">
          
            <div className="menu-item" data-category="main">
              <div className="menu-item-img">
                <img 
                  src="https://i.pinimg.com/736x/83/5d/b7/835db7db3d9f0607a672a33c98b5a048.jpg" 
                  alt="ต้มยำกุ้ง" 
                  width={300} 
                  height={200} 
                  
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ต้มยำกุ้ง</h3>
                  <span className="price">฿180</span>
                </div>
                <p>ต้มยำกุ้งน้ำข้น รสชาติเข้มข้น กุ้งสดใหม่ เสิร์ฟพร้อมข้าวสวย</p>
              </div>
            </div>

            <div className="menu-item" data-category="main">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/98/c9/5d/98c95df876af9448fe3da03c0a9507cc.jpg" 
                  alt="ผัดไทยกุ้งสด" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ผัดไทยกุ้งสด</h3>
                  <span className="price">฿120</span>
                </div>
                <p>ผัดไทยสูตรดั้งเดิม เส้นนุ่ม กุ้งสดใหม่ คลุกเคล้ากับซอสรสเข้มข้น</p>
              </div>
            </div>

            <div className="menu-item" data-category="main">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/0d/d4/1d/0dd41dd1670880d153030edc9b2c0469.jpg" 
                  alt="แกงเขียวหวานไก่" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>แกงเขียวหวานไก่</h3>
                  <span className="price">฿150</span>
                </div>
                <p>แกงเขียวหวานไก่เนื้อนุ่ม รสชาติกลมกล่อม เสิร์ฟพร้อมข้าวสวย</p>
              </div>
            </div>

            <div className="menu-item" data-category="main">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/e8/30/34/e83034e9c64884fe20f66428f318cc38.jpg" 
                  alt="ผัดกระเพราหมูสับไข่ดาว" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ผัดกระเพราหมูสับไข่ดาว</h3>
                  <span className="price">฿120</span>
                </div>
                <p>ผัดกระเพราหมูสับรสจัดจ้าน เสิร์ฟพร้อมไข่ดาวและข้าวสวย</p>
              </div>
            </div>

          
            <div className="menu-item" data-category="appetizer">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/e3/e8/57/e3e85774a9c8639f999cc90aa224f386.jpg" 
                  alt="ปอเปี๊ยะทอด" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ปอเปี๊ยะทอด</h3>
                  <span className="price">฿90</span>
                </div>
                <p>ปอเปี๊ยะทอดกรอบ ไส้หมูสับและผัก เสิร์ฟพร้อมน้ำจิ้มรสเด็ด</p>
              </div>
            </div>

            <div className="menu-item" data-category="appetizer">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/da/97/e7/da97e784f768f45ade286d1b8213666e.jpg" 
                  alt="ยำวุ้นเส้น" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ยำวุ้นเส้น</h3>
                  <span className="price">฿120</span>
                </div>
                <p>ยำวุ้นเส้นรสเผ็ดเปรี้ยว ใส่กุ้งสด หมูสับ และผักสด</p>
              </div>
            </div>

            
            <div className="menu-item" data-category="dessert">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/aa/cb/0b/aacb0bc748a1d2db9f8af6c21cedbc06.jpg" 
                  alt="ข้าวเหนียวมะม่วง" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ข้าวเหนียวมะม่วง</h3>
                  <span className="price">฿100</span>
                </div>
                <p>ข้าวเหนียวมูนหอมมัน ราดด้วยกะทิสด เสิร์ฟพร้อมมะม่วงน้ำดอกไม้สุก</p>
              </div>
            </div>

            <div className="menu-item" data-category="dessert">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/ef/1f/a7/ef1fa7d93ab37745479f05d9b009bddb.jpg" 
                  alt="บัวลอย" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>บัวลอย</h3>
                  <span className="price">฿80</span>
                </div>
                <p>บัวลอยไส้งาดำ ในน้ำกะทิหอมหวาน</p>
              </div>
            </div>

          
            <div className="menu-item" data-category="beverage">
              <div className="menu-item-img">
                <img
                  src="https://i.pinimg.com/736x/ec/ba/21/ecba217fa648dcecd80f91e88dd8b889.jpg" 
                  alt="ชาไทยเย็น" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>ชาไทยเย็น</h3>
                  <span className="price">฿60</span>
                </div>
                <p>ชาไทยรสชาติเข้มข้น หวานมัน เสิร์ฟพร้อมน้ำแข็ง</p>
              </div>
            </div>

            <div className="menu-item" data-category="beverage">
              <div className="menu-item-img">
                <img 
                  src="https://i.pinimg.com/736x/29/d1/a2/29d1a28d53310b072edea53622f078ec.jpg" 
                  alt="น้ำมะนาว" 
                  width={300} 
                  height={200} 
                />
              </div>
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>น้ำมะนาว</h3>
                  <span className="price">฿50</span>
                </div>
                <p>น้ำมะนาวสดคั้น หวานอมเปรี้ยว เสิร์ฟพร้อมน้ำแข็ง</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
