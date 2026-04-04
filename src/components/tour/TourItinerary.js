'use client';
import { useState } from 'react';

export default function TourItinerary({ itinerary }) {
  const [expanded, setExpanded] = useState({});

  const toggle = (day) => {
    setExpanded(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const expandAll = () => {
    const allExpanded = {};
    itinerary.forEach(item => { allExpanded[item.day] = true; });
    setExpanded(allExpanded);
  };

  return (
    <div className="td-itinerary" id="section-itinerary">
      <div className="td-itinerary__header">
        <h2 className="td-section-title">Lịch trình tour</h2>
        <button className="td-itinerary__expand-btn" onClick={expandAll}>
          Xem chi tiết ▼
        </button>
      </div>

      <div className="td-itinerary__timeline">
        {itinerary.map((item) => (
          <div key={item.day} className={`td-itinerary__day ${expanded[item.day] ? 'expanded' : ''}`}>
            <div className="td-itinerary__dot" />
            <button className="td-itinerary__day-header" onClick={() => toggle(item.day)}>
              <span className="td-itinerary__day-title">
                <strong>Ngày {item.day}:</strong> {item.title}
              </span>
              <span className="td-itinerary__chevron">{expanded[item.day] ? '▲' : '▼'}</span>
            </button>
            {expanded[item.day] && (
              <div className="td-itinerary__day-content">
                {item.details.map((d, i) => (
                  <div key={i} className="td-itinerary__detail">
                    <span className="td-itinerary__time">{d.time}</span>
                    <p className="td-itinerary__desc">{d.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
