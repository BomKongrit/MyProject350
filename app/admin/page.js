'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCategories, getAllMenuItems } from '../utils/menuUtils';
import './admin.css';

export default function AdminPage() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
    featured: false
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load categories and menu items from JSON
    setCategories(getCategories());
    setMenuItems(getAllMenuItems());
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // In a real application, this would make an API call to save the data
      // For this example, we'll just show a success message
      
      if (isEditing) {
        setMessage(`เมนู "${formData.name}" ถูกอัปเดตเรียบร้อยแล้ว`);
      } else {
        setMessage(`เมนู "${formData.name}" ถูกเพิ่มเรียบร้อยแล้ว`);
      }
      
      // Reset form
      setFormData({
        id: '',
        name: '',
        category: '',
        price: '',
        description: '',
        image: '',
        featured: false
      });
      
      setIsEditing(false);
      
      // In a real application, we would refresh the menu items here
      
    } catch (error) {
      setMessage(`เกิดข้อผิดพลาด: ${error.message}`);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price.toString(),
      description: item.description,
      image: item.image,
      featured: item.featured
    });
    
    setIsEditing(true);
    setMessage('');
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`คุณแน่ใจหรือไม่ที่จะลบเมนู "${name}"?`)) {
      // In a real application, this would make an API call to delete the item
      setMessage(`เมนู "${name}" ถูกลบเรียบร้อยแล้ว`);
      
      // In a real application, we would refresh the menu items here
    }
  };

  const handleCancel = () => {
    setFormData({
      id: '',
      name: '',
      category: '',
      price: '',
      description: '',
      image: '',
      featured: false
    });
    
    setIsEditing(false);
    setMessage('');
  };

  return (
    <main>
      <Header />

      <section className="page-banner">
        <div className="banner-content">
          <h2>จัดการเมนูอาหาร</h2>
          <p>เพิ่ม แก้ไข หรือลบรายการเมนูอาหาร</p>
        </div>
      </section>

      <section className="admin-section">
        <div className="container">
          <h2 className="section-title">{isEditing ? 'แก้ไขเมนู' : 'เพิ่มเมนูใหม่'}</h2>
          
          {message && (
            <div className="message">
              {message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="menu-form">
            <div className="form-group">
              <label htmlFor="name">ชื่อเมนู</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">หมวดหมู่</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">เลือกหมวดหมู่</option>
                {categories.map((category) => (
                  category.id !== 'all' && (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  )
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="price">ราคา (บาท)</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                min="0"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">รายละเอียด</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="3"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="image">URL รูปภาพ</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleInputChange}
              />
              <label htmlFor="featured">แสดงในเมนูแนะนำ</label>
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="btn">
                {isEditing ? 'บันทึกการแก้ไข' : 'เพิ่มเมนู'}
              </button>
              
              {isEditing && (
                <button type="button" className="btn cancel" onClick={handleCancel}>
                  ยกเลิก
                </button>
              )}
            </div>
          </form>
          
          <h2 className="section-title">รายการเมนูทั้งหมด</h2>
          
          <div className="menu-table">
            <table>
              <thead>
                <tr>
                  <th>รูปภาพ</th>
                  <th>ชื่อเมนู</th>
                  <th>หมวดหมู่</th>
                  <th>ราคา</th>
                  <th>แนะนำ</th>
                  <th>การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={40}
                        className="thumbnail"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>
                      {categories.find(cat => cat.id === item.category)?.name || item.category}
                    </td>
                    <td>฿{item.price}</td>
                    <td>{item.featured ? 'ใช่' : 'ไม่'}</td>
                    <td>
                      <button
                        className="btn edit"
                        onClick={() => handleEdit(item)}
                      >
                        แก้ไข
                      </button>
                      <button
                        className="btn delete"
                        onClick={() => handleDelete(item.id, item.name)}
                      >
                        ลบ
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
