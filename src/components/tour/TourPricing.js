'use client';
import { useState } from 'react';

export default function TourPricing({ priceTable, departureFrom }) {
  const months = [...new Set(priceTable.map(p => p.month).filter(m => m > 0))].sort();
  const [activeMonth, setActiveMonth] = useState(0); // 0 = all

  const filtered = activeMonth === 0
    ? priceTable
    : priceTable.filter(p => p.month === activeMonth);

  return (
    <div className="td-pricing" id="section-pricing">
      <h2 className="td-section-title">Bảng giá <span className="td-pricing__sub">(Khởi hành từ {departureFrom})</span></h2>

      <div className="td-pricing__tabs">
        <button
          className={`td-pricing__tab ${activeMonth === 0 ? 'active' : ''}`}
          onClick={() => setActiveMonth(0)}
        >Tất cả</button>
        {months.map(m => (
          <button
            key={m}
            className={`td-pricing__tab ${activeMonth === m ? 'active' : ''}`}
            onClick={() => setActiveMonth(m)}
          >Tháng {m}</button>
        ))}
      </div>

      <div className="td-pricing__table-wrap">
        <table className="td-pricing__table">
          <thead>
            <tr>
              <th>NGÀY KHỞI HÀNH</th>
              <th>HẠNG TOUR / HÀNG KHÔNG</th>
              <th>GIÁ TOUR</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i}>
                <td>
                  <span className="td-pricing__date">{row.date}</span>
                  {row.season && <span className="td-pricing__season">({row.season})</span>}
                </td>
                <td>{row.airline}</td>
                <td><span className="td-pricing__price">{row.price}</span></td>
                <td><button className="td-pricing__book-btn">Giữ chỗ ngay</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
