'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function TourTrongNuocListPage({ title, description, tours }) {
  const [sortBy, setSortBy] = useState('default');

  const sortedTours = [...tours].sort((a, b) => {
    if (sortBy === 'price-asc') return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    if (sortBy === 'price-desc') return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
    return 0;
  });

  return (
    <div className="tln-page">
      {/* Hero Banner */}
      <div className="tln-hero">
        <div className="tln-hero__overlay"></div>
        <div className="tln-hero__content">
          <h1 className="tln-hero__title">{title}</h1>
        </div>
        {/* Search Bar */}
        <div className="tln-hero__search">
          <div className="tln-hero__search-inner">
            <div className="tln-hero__search-field">
              <label className="tln-hero__search-label">Điểm đến</label>
              <select className="tln-hero__search-input">
                <option>Tất cả</option>
                <option>Đà Lạt</option>
                <option>Phú Quốc</option>
                <option>Nha Trang</option>
                <option>Hạ Long</option>
                <option>Sa Pa</option>
              </select>
            </div>
            <div className="tln-hero__search-field">
              <label className="tln-hero__search-label">Ngày khởi hành</label>
              <input className="tln-hero__search-input" type="date" />
            </div>
            <div className="tln-hero__search-field">
              <label className="tln-hero__search-label">Ngân sách</label>
              <select className="tln-hero__search-input">
                <option>Chọn mức giá?</option>
                <option>Dưới 5 triệu</option>
                <option>5 - 10 triệu</option>
                <option>10 - 20 triệu</option>
                <option>Trên 20 triệu</option>
              </select>
            </div>
            <button className="tln-hero__search-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="tln-container">
        {/* Breadcrumb */}
        <div className="tln-breadcrumb">
          <Link href="/">Home</Link>
          <span>&gt;&gt;</span>
          <span className="tln-breadcrumb__current">{title}</span>
        </div>

        {/* Title + Description */}
        <div className="tln-header">
          <h2 className="tln-header__title">{title}</h2>
          <div className="tln-header__underline"></div>
          <p className="tln-header__desc">{description}</p>
        </div>

        {/* Two-column layout */}
        <div className="tln-layout">
          {/* Sidebar */}
          <aside className="tln-sidebar">
            <div className="tln-sidebar__card">
              <h3 className="tln-sidebar__heading">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                Tìm Tour
              </h3>
              <div className="tln-sidebar__group">
                <label className="tln-sidebar__label">Ngân sách</label>
                <div className="tln-sidebar__options">
                  <label className="tln-sidebar__option">
                    <input type="checkbox" /> Dưới 5 triệu
                  </label>
                  <label className="tln-sidebar__option">
                    <input type="checkbox" /> 5 - 10 triệu
                  </label>
                  <label className="tln-sidebar__option">
                    <input type="checkbox" /> 10 - 20 triệu
                  </label>
                  <label className="tln-sidebar__option">
                    <input type="checkbox" /> Trên 20 triệu
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="tln-main">
            {/* Results bar */}
            <div className="tln-results-bar">
              <span className="tln-results-bar__count">
                Chúng tôi tìm thấy <strong>{tours.length}</strong> Tour cho quý khách
              </span>
              <div className="tln-results-bar__sort">
                <span>Sắp xếp theo :</span>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                  <option value="default">Mặc định</option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                </select>
              </div>
            </div>

            {/* Tour List */}
            <div className="tln-list">
              {sortedTours.map((tour) => (
                <div key={tour.id} className="tln-card">
                  <div className="tln-card__img">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <div className="tln-card__body">
                    <h3 className="tln-card__title">{tour.title}</h3>
                    <div className="tln-card__details">
                      <div className="tln-card__row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/></svg>
                        <span>Mã Tour: <strong>{tour.code || tour.id}</strong></span>
                      </div>
                      <div className="tln-card__row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>Khởi hành: <strong className="tln-card__blue">{tour.departureFrom || 'Hồ Chí Minh'}</strong></span>
                      </div>
                      <div className="tln-card__row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                        <span>Phương tiện: <strong className="tln-card__blue">{tour.airline}</strong></span>
                      </div>
                      <div className="tln-card__row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        <span>Ngày khởi hành: </span>
                        {tour.departureDates.slice(0, 3).map((d, i) => (
                          <span key={i} className="tln-card__date-chip">{d}</span>
                        ))}
                      </div>
                      <div className="tln-card__row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>{tour.duration}</span>
                        <span className="tln-card__seats">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 4.18 2 2 0 0 1 5.12 2h3a2 2 0 0 1 2 1.72"/></svg>
                          Số chỗ còn nhận: <strong className="tln-card__green">{tour.seats || '20'}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="tln-card__footer">
                      <div className="tln-card__price">
                        <span className="tln-card__price-label">Giá từ</span>
                        <strong>{tour.price}</strong>
                      </div>
                      <Link href={`/tour/${tour.slug}`} className="tln-card__cta">
                        XEM CHI TIẾT
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
