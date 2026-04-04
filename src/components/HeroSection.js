'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`ft-hero ${isLoaded ? 'ft-hero--loaded' : ''}`} id="hero-section">
      <Image
        src="/images/hero-banner.png"
        alt="Fresh Travel - Khám phá thế giới"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="ft-hero__bg"
      />
      <div className="ft-hero__overlay"></div>

      {/* Animated floating particles */}
      <div className="ft-hero__particles">
        <span className="ft-hero__particle ft-hero__particle--1">✦</span>
        <span className="ft-hero__particle ft-hero__particle--2">✧</span>
        <span className="ft-hero__particle ft-hero__particle--3">●</span>
        <span className="ft-hero__particle ft-hero__particle--4">✦</span>
        <span className="ft-hero__particle ft-hero__particle--5">✧</span>
        <span className="ft-hero__particle ft-hero__particle--6">●</span>
      </div>

      {/* Main Content */}
      <div className="ft-hero__content">
        <div className="ft-hero__badge">
          <span className="ft-hero__badge-dot"></span>
          CHUYÊN GIA DU LỊCH HÀNG ĐẦU VIỆT NAM
        </div>

        <h1 className="ft-hero__slogan">
          <span className="ft-hero__slogan-line1">Khám Phá Thế Giới</span>
          <span className="ft-hero__slogan-line2">Cùng <span className="ft-hero__brand">Fresh Travel</span></span>
        </h1>
        <p className="ft-hero__subtitle">
          Trải nghiệm du lịch đẳng cấp — Dịch vụ chuẩn 4-5 sao — Cam kết giá tốt nhất
        </p>

        {/* Quick stats */}
        <div className="ft-hero__quick-stats">
          <div className="ft-hero__quick-stat">
            <span className="ft-hero__quick-stat-number">500+</span>
            <span className="ft-hero__quick-stat-label">Tour</span>
          </div>
          <div className="ft-hero__quick-stat-divider"></div>
          <div className="ft-hero__quick-stat">
            <span className="ft-hero__quick-stat-number">50K+</span>
            <span className="ft-hero__quick-stat-label">Khách hàng</span>
          </div>
          <div className="ft-hero__quick-stat-divider"></div>
          <div className="ft-hero__quick-stat">
            <span className="ft-hero__quick-stat-number">4.9★</span>
            <span className="ft-hero__quick-stat-label">Đánh giá</span>
          </div>
        </div>
      </div>

      {/* Search Filter Bar - Centered */}
      <div className="ft-hero__search-wrapper">
        <div className="ft-hero__search">
          {/* Tabs */}
          <div className="ft-hero__search-tabs">
            <button className="ft-hero__search-tab ft-hero__search-tab--active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Tour
            </button>
            <button className="ft-hero__search-tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Khách sạn
            </button>
            <button className="ft-hero__search-tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              Combo
            </button>
          </div>

          {/* Search fields */}
          <div className="ft-hero__search-inner">
            <div className="ft-hero__search-field">
              <label className="ft-hero__search-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Điểm đến
              </label>
              <select className="ft-hero__search-input">
                <option>Bạn muốn đi đâu?</option>
                <option>Hàn Quốc</option>
                <option>Nhật Bản</option>
                <option>Trung Quốc</option>
                <option>Đài Loan</option>
                <option>Châu Âu</option>
                <option>Châu Úc</option>
                <option>Đông Nam Á</option>
              </select>
            </div>

            <div className="ft-hero__search-divider" />

            <div className="ft-hero__search-field">
              <label className="ft-hero__search-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Ngày khởi hành
              </label>
              <input type="date" className="ft-hero__search-input" />
            </div>

            <div className="ft-hero__search-divider" />

            <div className="ft-hero__search-field">
              <label className="ft-hero__search-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                Số người
              </label>
              <select className="ft-hero__search-input">
                <option>Số khách?</option>
                <option>1 người</option>
                <option>2 người</option>
                <option>3-5 người</option>
                <option>6-10 người</option>
                <option>Trên 10 người</option>
              </select>
            </div>

            <div className="ft-hero__search-divider" />

            <div className="ft-hero__search-field">
              <label className="ft-hero__search-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                Ngân sách
              </label>
              <select className="ft-hero__search-input">
                <option>Chọn mức giá?</option>
                <option>Dưới 10 triệu</option>
                <option>10 - 20 triệu</option>
                <option>20 - 50 triệu</option>
                <option>Trên 50 triệu</option>
              </select>
            </div>

            <button className="ft-hero__search-btn" aria-label="Tìm kiếm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="ft-hero__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,60 C320,100 420,20 720,50 C1020,80 1200,30 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}
