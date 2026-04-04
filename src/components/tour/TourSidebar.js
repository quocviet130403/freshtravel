'use client';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function TourSidebar({ tour }) {
  const router = useRouter();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [selectedDate, setSelectedDate] = useState(tour.departureDates?.[0] || '');

  // Parse price string to number (e.g. "29.990.000đ" → 29990000)
  const parsePrice = (str) => {
    if (!str) return 0;
    return parseInt(str.replace(/[^\d]/g, ''), 10);
  };

  const adultPrice = parsePrice(tour.price);
  const childPrice = Math.round(adultPrice * 0.85);
  const infantPrice = Math.round(adultPrice * 0.3);

  const formatPrice = (n) => n.toLocaleString('vi-VN') + 'đ';

  const totalPrice = useMemo(() => {
    return adults * adultPrice + children * childPrice + infants * infantPrice;
  }, [adults, children, infants, adultPrice, childPrice, infantPrice]);

  const counter = (value, setter, min = 0) => (
    <div className="td-booking__counter">
      <button
        className="td-booking__counter-btn"
        onClick={() => setter(Math.max(min, value - 1))}
        disabled={value <= min}
      >−</button>
      <span className="td-booking__counter-val">{value}</span>
      <button
        className="td-booking__counter-btn"
        onClick={() => setter(value + 1)}
      >+</button>
    </div>
  );

  return (
    <div className="td-sidebar-wrap">
      {/* Card 1: Tour Info */}
      <div className="td-info-card">
        <h3 className="td-info-card__title">Thông tin Tour</h3>
        <div className="td-info-card__rows">
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/></svg>
            </span>
            <span className="td-info-card__label">Mã Tour:</span>
            <span className="td-info-card__value">{tour.code || tour.id}</span>
          </div>
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span className="td-info-card__label">Hành Trình:</span>
            <span className="td-info-card__value">{tour.route}</span>
          </div>
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </span>
            <span className="td-info-card__label">Ngày Đi:</span>
            <span className="td-info-card__value">{selectedDate || tour.departureDates?.[0]}</span>
          </div>
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <span className="td-info-card__label">Thời Gian:</span>
            <span className="td-info-card__value">{tour.duration}</span>
          </div>
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            </span>
            <span className="td-info-card__label">Phương Tiện:</span>
            <span className="td-info-card__value td-info-card__value--blue">{tour.airline}</span>
          </div>
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <span className="td-info-card__label">Xuất Phát:</span>
            <span className="td-info-card__value">{tour.departureFrom}</span>
          </div>
          <div className="td-info-card__row">
            <span className="td-info-card__icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            <span className="td-info-card__label">Số Chỗ Nhận:</span>
            <span className="td-info-card__value td-info-card__value--red">{tour.seats || '20 chỗ'}</span>
          </div>
        </div>
      </div>

      {/* Card 2: Booking */}
      <div className="td-booking-card">
        {/* Date picker */}
        <div className="td-booking__section">
          <label className="td-booking__label">Chọn Ngày Khởi Hành</label>
          <select
            className="td-booking__date-select"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            {tour.departureDates?.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Passengers */}
        <div className="td-booking__section td-booking__section--row">
          <div className="td-booking__passenger">
            <span className="td-booking__passenger-type">Người lớn</span>
            <span className="td-booking__passenger-price">x {formatPrice(adultPrice)}</span>
          </div>
          {counter(adults, setAdults, 1)}
        </div>

        <div className="td-booking__section td-booking__section--row">
          <div className="td-booking__passenger">
            <span className="td-booking__passenger-type">Trẻ em</span>
            <span className="td-booking__passenger-price">x {formatPrice(childPrice)}</span>
          </div>
          {counter(children, setChildren)}
        </div>


        {/* Total */}
        <div className="td-booking__total">
          <span>Tổng cộng:</span>
          <strong>{formatPrice(totalPrice)}</strong>
        </div>

        <button className="td-booking__submit" onClick={() => router.push(`/booking/${tour.slug}?adults=${adults}&children=${children}&infants=${infants}&date=${selectedDate}`)}>ĐẶT NGAY</button>
        <p className="td-booking__note">* Quý khách sẽ chưa phải thanh toán bất kỳ khoản nào</p>
      </div>
    </div>
  );
}
