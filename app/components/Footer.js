

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>อร่อยเด็ด</h3>
            <p>ร้านอาหารไทยรสชาติดั้งเดิม</p>
          </div>
          <div className="footer-section">
            <h3>ติดต่อเรา</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 ถนนสุขุมวิท, กรุงเทพฯ</p>
            <p><i className="fas fa-phone"></i> 02-123-4567</p>
            <p><i className="fas fa-envelope"></i> info@aroided.com</p>
          </div>
          <div className="footer-section">
            <h3>เวลาทำการ</h3>
            <p>จันทร์ - ศุกร์: 10:00 - 22:00</p>
            <p>เสาร์ - อาทิตย์: 11:00 - 23:00</p>
          </div>
          <div className="footer-section">
            <h3>ติดตามเรา</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-line"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 อร่อยเด็ด. สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  );
}
