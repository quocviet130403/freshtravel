'use client';
import { useState } from 'react';

export default function BookingModal({ tour, isOpen, onClose }) {
  const [form, setForm] = useState({
    departureDate: tour?.departureDates?.[0] || '',
    departureFrom: tour?.departureFrom || 'Hồ Chí Minh',
    adults: '1',
    children: '0',
    babies: '0',
    title: 'Ông',
    fullName: '',
    phone: '',
    email: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) {
      alert('Vui lòng điền Họ tên và Số điện thoại!');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bm-overlay" onClick={onClose}>
      <div className="bm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="bm-success">
            <div className="bm-success__icon">✅</div>
            <h3>Gửi yêu cầu thành công!</h3>
            <p>Chúng tôi sẽ liên hệ bạn trong vòng 24h. Cảm ơn bạn đã tin tưởng Fresh Travel!</p>
            <button className="bm-submit" onClick={onClose}>Đóng</button>
          </div>
        ) : (
          <>
            <div className="bm-header">
              <h3 className="bm-title">GỬI YÊU CẦU:</h3>
              <p className="bm-tour-name">{tour?.title}</p>
            </div>

            <form className="bm-form" onSubmit={handleSubmit}>
              {/* Row 1: Date + Departure */}
              <div className="bm-row bm-row--2">
                <div className="bm-field">
                  <label>Ngày khởi hành:</label>
                  <select name="departureDate" value={form.departureDate} onChange={handleChange}>
                    {tour?.departureDates?.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="bm-field">
                  <label>Điểm khởi hành:</label>
                  <select name="departureFrom" value={form.departureFrom} onChange={handleChange}>
                    <option>Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Passengers */}
              <div className="bm-row bm-row--3">
                <div className="bm-field">
                  <label>Người lớn</label>
                  <select name="adults" value={form.adults} onChange={handleChange}>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="bm-field">
                  <label>Trẻ em (2-12)</label>
                  <select name="children" value={form.children} onChange={handleChange}>
                    {[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="bm-field">
                  <label>Em bé (&lt;2)</label>
                  <select name="babies" value={form.babies} onChange={handleChange}>
                    {[0,1,2,3].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 3: Title + Name */}
              <div className="bm-row bm-row--2">
                <div className="bm-field">
                  <label>Quý danh:</label>
                  <select name="title" value={form.title} onChange={handleChange}>
                    <option>Ông</option>
                    <option>Bà</option>
                    <option>Anh</option>
                    <option>Chị</option>
                  </select>
                </div>
                <div className="bm-field">
                  <label>Họ tên: <span className="bm-required">(*)</span></label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nhập họ tên" />
                </div>
              </div>

              {/* Row 4: Phone + Email */}
              <div className="bm-row bm-row--2">
                <div className="bm-field">
                  <label>Số điện thoại: <span className="bm-required">(*)</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Nhập số điện thoại" />
                </div>
                <div className="bm-field">
                  <label>Email:</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Nhập email" />
                </div>
              </div>

              {/* Row 5: Note */}
              <div className="bm-field">
                <label>Yêu cầu đặc biệt:</label>
                <textarea name="note" value={form.note} onChange={handleChange} rows={4} placeholder="Nhập yêu cầu đặc biệt (nếu có)" />
              </div>

              <button type="submit" className="bm-submit">Gửi yêu cầu</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
