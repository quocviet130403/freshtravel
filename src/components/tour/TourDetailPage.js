'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TourGallery from './TourGallery';
import TourSidebar from './TourSidebar';
import TourTabs from './TourTabs';
import TourItinerary from './TourItinerary';
import TourPricing from './TourPricing';
import TourReviews from './TourReviews';

export default function TourDetailPage({ tour, similarTours = [] }) {
  const [activeTab, setActiveTab] = useState('intro');

  if (!tour) {
    return (
      <div className="td-not-found">
        <h1>Tour không tồn tại</h1>
        <Link href="/">← Về trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="td-page">
      {/* Breadcrumb */}
      <div className="td-breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <Link href={`/${tour.category}`}>{
          tour.category === 'tour-nuoc-ngoai' ? 'Tour Nước Ngoài' :
          tour.category === 'tour-trong-nuoc' ? 'Tour Trong Nước' : 'Tour Khách Đoàn'
        }</Link>
        <span>›</span>
        <span className="td-breadcrumb__current">{tour.title}</span>
      </div>

      {/* Title + Rating */}
      <h1 className="td-title">{tour.title}</h1>
      <div className="td-meta">
        <span className="td-meta__rating">{tour.rating}</span>
        <span className="td-meta__reviews">{tour.reviewCount} đánh giá</span>
        <span className="td-meta__price-top">
          {tour.oldPrice && <del>{tour.oldPrice}</del>}
          Giá từ <strong>{tour.price}</strong>
        </span>
      </div>

      {/* Hero: Gallery + Sidebar */}
      <div className="td-hero">
        <div className="td-hero__gallery">
          <TourGallery images={tour.images} title={tour.title} />
        </div>
        <div className="td-hero__sidebar">
          <TourSidebar tour={tour} />
        </div>
      </div>
      {/* Feature Badges */}
      <div className="td-badges">
        <div className="td-badge td-badge--navy">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          {tour.duration}
        </div>
        {tour.promo && (
          <div className="td-badge td-badge--orange">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
            {tour.promo}
          </div>
        )}
        <div className="td-badge td-badge--green">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Khởi hành: {tour.departureFrom || 'Hồ Chí Minh'}
        </div>
        <div className="td-badge td-badge--blue">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
          {tour.airline}
        </div>
      </div>

      {/* Tab Navigation */}
      <TourTabs tour={tour} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <div className="td-content">
        <div className="td-content__main">
          {/* Intro */}
          <div id="section-intro" className="td-section">
            <h2 className="td-section-title">Giới thiệu</h2>
            <p className="td-intro__desc">{tour.description}</p>

            <h3 className="td-intro__sub">Điểm nổi bật</h3>
            <ul className="td-intro__highlights">
              {tour.highlights.map((h, i) => (
                <li key={i}><span className="td-intro__check">✔️</span> {h}</li>
              ))}
            </ul>

            <div className="td-intro__meta-tags">
              {tour.visitPoints && (
                <p><strong>Điểm tham quan:</strong> {tour.visitPoints}</p>
              )}
              {tour.themes && (
                <p><strong>Chủ đề:</strong> {tour.themes}</p>
              )}
            </div>
          </div>

          {/* Itinerary */}
          <TourItinerary itinerary={tour.itinerary} />

          {/* Pricing */}
          <TourPricing priceTable={tour.priceTable} departureFrom={tour.departureFrom} />

          {/* Service Details */}
          <div className="td-service" id="section-service">
            <h2 className="td-section-title">Quy định dịch vụ</h2>
            <div className="td-service__cols">
              <div className="td-service__col">
                <h4 className="td-service__heading td-service__heading--inc">✅ Giá bao gồm</h4>
                <ul className="td-service__list">
                  {tour.includes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div className="td-service__col">
                <h4 className="td-service__heading td-service__heading--exc">❌ Giá không bao gồm</h4>
                <ul className="td-service__list">
                  {tour.excludes.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
            {tour.cancelPolicy && tour.cancelPolicy.length > 0 && (
              <div className="td-service__cancel">
                <h4>📋 Chính sách hủy tour</h4>
                <ul>{tour.cancelPolicy.map((c, i) => <li key={i}>{c}</li>)}</ul>
              </div>
            )}
          </div>

          {/* Reviews + QnA */}
          <TourReviews 
            reviews={tour.reviews} 
            qna={tour.qna} 
            rating={tour.rating} 
            reviewCount={tour.reviewCount} 
          />

          {/* Similar Tours */}
          <div className="td-similar" id="section-similar">
            <h2 className="td-section-title">Tour tương tự</h2>
            <div className="td-similar__grid">
              {similarTours.map((t) => (
                <Link href={`/tour/${t.slug}`} key={t.id} className="td-similar__card">
                  <div className="td-similar__img">
                    <Image src={t.image} alt={t.title} fill style={{ objectFit: 'cover' }} sizes="300px" />
                  </div>
                  <div className="td-similar__body">
                    <h4>{t.title}</h4>
                    <p className="td-similar__info">{t.duration} | {t.airline}</p>
                    <p className="td-similar__price">
                      {t.oldPrice && <del>{t.oldPrice}</del>}
                      <strong>{t.price}</strong>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
