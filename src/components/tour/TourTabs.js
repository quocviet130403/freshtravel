'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const tabs = [
  { id: 'intro', label: 'Giới thiệu' },
  { id: 'itinerary', label: 'Lịch trình' },
  { id: 'pricing', label: 'Bảng giá' },
  { id: 'reviews', label: 'Đánh giá' },
  { id: 'qna', label: 'Hỏi đáp' },
  { id: 'similar', label: 'Tour tương tự' },
];

export default function TourTabs({ tour, activeTab, onTabChange }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      const el = document.getElementById('td-tabs-anchor');
      if (el) { setIsSticky(el.getBoundingClientRect().top <= 60); }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollToSection = (id) => {
    onTabChange(id);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="td-tabs-anchor" />
      <div className={`td-tabs ${isSticky ? 'td-tabs--sticky' : ''}`}>
        <div className="td-tabs__inner">
          <div className="td-tabs__list">
            {tabs.map(t => (
              <button
                key={t.id}
                className={`td-tabs__tab ${activeTab === t.id ? 'td-tabs__tab--active' : ''}`}
                onClick={() => scrollToSection(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          {isSticky && (
            <div className="td-tabs__sticky-price">
              {tour.oldPrice && <del>{tour.oldPrice}</del>}
              <strong>{tour.price}</strong>
              <span>/ khách</span>
              <Link href="/lien-he" className="td-tabs__sticky-btn">Chọn ngày</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
