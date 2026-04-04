'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ phản hồi sớm nhất.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="ct-page">
      {/* Hero Banner */}
      <section className="ct-hero">
        <div className="ct-hero__overlay" />
        <div className="ct-hero__content">
          <h1 className="ct-hero__title">Liên Hệ Với Chúng Tôi</h1>
          <p className="ct-hero__breadcrumb">Trang chủ &nbsp;/&nbsp; Liên hệ</p>
        </div>
      </section>

      {/* Keep In Touch + Form */}
      <section className="ct-main">
        <div className="ct-main__left">
          <h2 className="ct-main__heading">
            Luôn Kết Nối <span className="ct-main__accent">Cùng Bạn</span>
          </h2>
          <p className="ct-main__desc">
            Dù bạn có thắc mắc về tour du lịch, lịch trình, chương trình khuyến mãi hay bất cứ điều gì, đội ngũ Fresh Travel luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ ngay với chúng tôi qua form bên dưới.
          </p>

          <form className="ct-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Họ và tên"
              className="ct-form__input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="ct-form__input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Tiêu đề"
              className="ct-form__input"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
            />
            <textarea
              placeholder="Nội dung tin nhắn"
              className="ct-form__textarea"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button type="submit" className="ct-form__btn">GỬI TIN NHẮN ✈</button>
          </form>
        </div>

        <div className="ct-main__right">
          <div className="ct-main__illustration">
            <Image src="/images/about-team.png" alt="Liên hệ Fresh Travel" fill style={{ objectFit: 'cover' }} sizes="500px" />
          </div>
        </div>
      </section>

      {/* Contact Info Blocks */}
      <section className="ct-info">
        <div className="ct-info__card">
          <div className="ct-info__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          </div>
          <h4 className="ct-info__title">Ghé Thăm</h4>
          <p className="ct-info__text">163A Nguyễn Văn Thủ,<br/>Phường Tân Định, TP. HCM</p>
        </div>
        <div className="ct-info__card">
          <div className="ct-info__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h4 className="ct-info__title">Gọi Cho Chúng Tôi</h4>
          <p className="ct-info__text">Hotline: 0933 21 79 79<br/>Tổng đài: 1900 63 61 68</p>
        </div>
        <div className="ct-info__card">
          <div className="ct-info__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <h4 className="ct-info__title">Email</h4>
          <p className="ct-info__text">marketing@freshtravel.vn<br/>booking@freshtravel.vn</p>
        </div>
      </section>

      {/* Google Maps */}
      <section className="ct-map">
        <h2 className="ct-map__title">Địa Chỉ Của Chúng Tôi</h2>
        <div className="ct-map__frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3!2d106.69!3d10.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzI0LjAiTiAxMDbCsDQxJzI0LjAiRQ!5e0!3m2!1svi!2s!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fresh Travel Location"
          />
        </div>
      </section>
    </div>
  );
}
