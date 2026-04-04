'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BookingPage({ tour, initialAdults = 1, initialChildren = 0, initialInfants = 0, initialDate = '' }) {
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [infants, setInfants] = useState(initialInfants);
  const [selectedDate, setSelectedDate] = useState(initialDate || tour?.departureDates?.[0] || '');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [agreed, setAgreed] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', address: '', notes: ''
  });

  // Passenger list
  const [passengerList, setPassengerList] = useState([]);

  // Generate passenger rows when counts change
  useMemo(() => {
    const list = [];
    for (let i = 0; i < adults; i++) list.push({ type: 'Người lớn', name: '', gender: 'Nam', dob: '' });
    for (let i = 0; i < children; i++) list.push({ type: 'Trẻ em', name: '', gender: 'Nam', dob: '' });
    for (let i = 0; i < infants; i++) list.push({ type: 'Em bé', name: '', gender: 'Nam', dob: '' });
    setPassengerList(list);
  }, [adults, children, infants]);

  const parsePrice = (str) => {
    if (!str) return 0;
    return parseInt(str.replace(/[^\d]/g, ''), 10);
  };

  const adultPrice = parsePrice(tour?.price);
  const childPrice = Math.round(adultPrice * 0.85);
  const infantPrice = Math.round(adultPrice * 0.3);
  const formatPrice = (n) => n.toLocaleString('vi-VN') + 'đ';

  const totalPrice = useMemo(() => {
    return adults * adultPrice + children * childPrice + infants * infantPrice;
  }, [adults, children, infants, adultPrice, childPrice, infantPrice]);

  const counter = (value, setter, min = 0) => (
    <div className="bk-counter">
      <button className="bk-counter__btn bk-counter__btn--minus" onClick={() => setter(Math.max(min, value - 1))} disabled={value <= min}>−</button>
      <span className="bk-counter__val">{value}</span>
      <button className="bk-counter__btn bk-counter__btn--plus" onClick={() => setter(value + 1)}>+</button>
    </div>
  );

  const updateField = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const updatePassenger = (index, field, value) => {
    setPassengerList(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  if (!tour) {
    return (
      <div className="bk-page">
        <div className="bk-not-found">
          <h1>Tour không tồn tại</h1>
          <Link href="/">← Về trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bk-page">
      <h1 className="bk-page__title">ĐẶT TOUR</h1>
      <div className="bk-page__underline"></div>

      <div className="bk-layout">
        {/* LEFT: Form */}
        <div className="bk-form-col">
          {/* Customer Info */}
          <section className="bk-card">
            <h2 className="bk-card__heading">THÔNG TIN KHÁCH HÀNG</h2>
            <div className="bk-form-grid">
              <div className="bk-form-group">
                <label className="bk-label">Họ & Tên<span className="bk-required">*</span></label>
                <input className="bk-input" placeholder="Nguyễn Văn A" value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} />
              </div>
              <div className="bk-form-group">
                <label className="bk-label">Số Điện Thoại<span className="bk-required">*</span></label>
                <input className="bk-input" placeholder="096 969 3791" value={formData.phone} onChange={e => updateField('phone', e.target.value)} />
              </div>
              <div className="bk-form-group">
                <label className="bk-label">Email<span className="bk-required">*</span></label>
                <input className="bk-input" type="email" placeholder="NguyenvanA@gmail.com" value={formData.email} onChange={e => updateField('email', e.target.value)} />
              </div>
              <div className="bk-form-group">
                <label className="bk-label">Địa Chỉ</label>
                <input className="bk-input" placeholder="Số nhà A, Phố B, Đường C, Hà Nội" value={formData.address} onChange={e => updateField('address', e.target.value)} />
              </div>
            </div>
            <div className="bk-form-group bk-form-group--full">
              <label className="bk-label">Ghi Chú</label>
              <textarea className="bk-textarea" rows={3} placeholder="Vui lòng để lại nội dung..." value={formData.notes} onChange={e => updateField('notes', e.target.value)} />
            </div>
            <p className="bk-note">* Vui lòng điền vào các trường bắt buộc</p>
          </section>

          {/* Passenger Count */}
          <section className="bk-card">
            <h2 className="bk-card__heading">SỐ LƯỢNG HÀNH KHÁCH</h2>
            <div className="bk-passengers-grid">
              <div className="bk-passenger-type">
                <div>
                  <strong>Người lớn</strong>
                  <span className="bk-passenger-desc">Từ 12 tuổi trở lên</span>
                </div>
                {counter(adults, setAdults, 1)}
              </div>
              <div className="bk-passenger-type">
                <div>
                  <strong>Trẻ em</strong>
                  <span className="bk-passenger-desc">Từ 2 đến 12 tuổi</span>
                </div>
                {counter(children, setChildren)}
              </div>
              <div className="bk-passenger-type">
                <div>
                  <strong>Em bé</strong>
                  <span className="bk-passenger-desc">Dưới 2 tuổi</span>
                </div>
                {counter(infants, setInfants)}
              </div>
            </div>
          </section>

          {/* Coupon Code */}
          <section className="bk-card">
            <h2 className="bk-card__heading">Mã giảm giá</h2>
            <div className="bk-coupon">
              <input className="bk-input bk-coupon__input" placeholder="Nhập mã giảm giá" value={coupon} onChange={e => setCoupon(e.target.value)} />
              <button className="bk-coupon__btn">Áp dụng</button>
            </div>
          </section>

          {/* Passenger List */}
          <section className="bk-card">
            <h2 className="bk-card__heading">DANH SÁCH KHÁCH HÀNG</h2>
            {passengerList.map((p, i) => (
              <div key={i} className="bk-pax-row">
                <div className="bk-pax-row__header">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>{p.type}</span>
                </div>
                <div className="bk-pax-row__fields">
                  <div className="bk-form-group">
                    <label className="bk-label">Họ và Tên</label>
                    <input className="bk-input" placeholder="Ví dụ: Họ và tên" value={p.name} onChange={e => updatePassenger(i, 'name', e.target.value)} />
                  </div>
                  <div className="bk-form-group bk-form-group--small">
                    <label className="bk-label">Giới tính</label>
                    <select className="bk-input" value={p.gender} onChange={e => updatePassenger(i, 'gender', e.target.value)}>
                      <option>Nam</option>
                      <option>Nữ</option>
                    </select>
                  </div>
                  <div className="bk-form-group">
                    <label className="bk-label">Ngày sinh</label>
                    <input className="bk-input" type="date" value={p.dob} onChange={e => updatePassenger(i, 'dob', e.target.value)} />
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Payment Method */}
          <section className="bk-card">
            <h2 className="bk-card__heading">THÔNG TIN THANH TOÁN</h2>
            <label className={`bk-payment-option ${paymentMethod === 'cod' ? 'bk-payment-option--active' : ''}`}>
              <div className="bk-payment-option__left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                <span>COD</span>
              </div>
              <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
            </label>
            <label className={`bk-payment-option ${paymentMethod === 'card' ? 'bk-payment-option--active' : ''}`}>
              <div className="bk-payment-option__left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/><path d="M7 15h.01M11 15h2"/></svg>
                <span>Visa / MasterCard / PayPal</span>
              </div>
              <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
            </label>
          </section>

          {/* Terms */}
          <label className="bk-terms">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
            <span>Tôi đồng ý với <a href="#" className="bk-terms__link">Chính Sách</a> bảo vệ dữ liệu cá nhân và <a href="#" className="bk-terms__link">các điều khoản trên</a></span>
          </label>
        </div>

        {/* RIGHT: Sidebar summary */}
        <div className="bk-summary-col">
          <div className="bk-summary">
            {/* Tour image + title */}
            <div className="bk-summary__header">
              <div className="bk-summary__img">
                <Image src={tour.image || tour.images?.[0] || '/images/tour-japan.png'} alt={tour.title} fill style={{ objectFit: 'cover' }} sizes="160px" />
              </div>
              <div className="bk-summary__title-area">
                <h3 className="bk-summary__tour-name">{tour.title}</h3>
                <p className="bk-summary__code">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a746" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/></svg>
                  Mã Tour: <strong>{tour.code || tour.id}</strong>
                </p>
              </div>
            </div>

            <div className="bk-summary__divider"></div>

            {/* Trip summary */}
            <h4 className="bk-summary__section-title">TÓM TẮT CHUYẾN ĐI</h4>
            <div className="bk-summary__route">
              <div className="bk-summary__point">
                <span className="bk-summary__point-label">Điểm đi</span>
                <strong className="bk-summary__point-code">{tour.departureFrom?.substring(0, 3).toUpperCase() || 'HCM'}</strong>
                <span className="bk-summary__point-name">{tour.departureFrom}</span>
              </div>
              <svg className="bk-summary__plane" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
              <div className="bk-summary__point">
                <span className="bk-summary__point-label">Điểm đến</span>
                <strong className="bk-summary__point-code">{tour.route?.split(' - ').slice(-1)[0]?.substring(0, 3).toUpperCase() || 'JP'}</strong>
                <span className="bk-summary__point-name">{tour.route?.split(' - ').slice(-1)[0]}</span>
              </div>
            </div>

            <div className="bk-summary__details">
              <div className="bk-summary__detail-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>Ngày đi: <strong>{selectedDate}</strong></span>
              </div>
              <div className="bk-summary__detail-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Thời gian: <strong>{tour.duration}</strong></span>
              </div>
              <div className="bk-summary__detail-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                <span>Phương tiện: <strong>{tour.airline}</strong></span>
              </div>
              <div className="bk-summary__detail-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.12 2h3a2 2 0 0 1 2 1.72"/></svg>
                <span>Số chỗ còn nhận: <strong>{tour.seats || '20'}</strong></span>
              </div>
            </div>

            <div className="bk-summary__divider"></div>

            {/* Pricing */}
            <h4 className="bk-summary__section-title">SỐ LƯỢNG HÀNH KHÁCH</h4>
            <div className="bk-summary__pricing">
              {adults > 0 && (
                <div className="bk-summary__price-row">
                  <span>Người lớn:</span>
                  <span>{adults} x {formatPrice(adultPrice)}</span>
                </div>
              )}
              {children > 0 && (
                <div className="bk-summary__price-row">
                  <span>Trẻ em:</span>
                  <span>{children} x {formatPrice(childPrice)}</span>
                </div>
              )}
              {infants > 0 && (
                <div className="bk-summary__price-row">
                  <span>Em bé:</span>
                  <span>{infants} x {formatPrice(infantPrice)}</span>
                </div>
              )}
              <div className="bk-summary__price-row">
                <span>Giảm giá:</span>
                <span>-0đ</span>
              </div>
            </div>

            <div className="bk-summary__divider"></div>

            <div className="bk-summary__total">
              <span>TỔNG TIỀN</span>
              <strong>{formatPrice(totalPrice)}</strong>
            </div>

            <button className="bk-summary__submit" disabled={!agreed}>Đặt ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
