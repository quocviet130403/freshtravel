import Image from 'next/image';
import Link from 'next/link';

export default function TourCard({ tour }) {
  return (
    <Link href={`/tour/${tour.slug}`} className="ft-tour-card" id={`tour-card-${tour.id}`}>
      <div className="ft-tour-card__image-wrap">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {tour.oldPrice && (
          <span className="ft-tour-card__badge">HOT</span>
        )}
      </div>

      <div className="ft-tour-card__body">
        <h3 className="ft-tour-card__title">
          {tour.title}
        </h3>

        <ul className="ft-tour-card__details">
          <li>
            <svg className="ft-tour-card__svg" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/></svg>
            <span>Mã tour: <strong>{tour.code}</strong></span>
          </li>
          <li>
            <svg className="ft-tour-card__svg" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Khởi hành: <strong>{tour.departure}</strong></span>
          </li>
          <li>
            <svg className="ft-tour-card__svg" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
            <span>Phương tiện: <strong className="ft-tour-card__transport">{tour.transport}</strong></span>
          </li>
          {tour.dates && tour.dates.length > 0 && (
            <li>
              <svg className="ft-tour-card__svg" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span className="ft-tour-card__dates-row">
                {tour.dates.map((d, i) => (
                  <span key={i} className="ft-tour-card__date-chip">{d}</span>
                ))}
              </span>
            </li>
          )}
        </ul>

        <div className="ft-tour-card__meta">
          <span className="ft-tour-card__duration">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {tour.duration}
          </span>
          {tour.seats && (
            <span className="ft-tour-card__seats">
              Còn nhận: <strong>{tour.seats}</strong>
            </span>
          )}
        </div>

        <div className="ft-tour-card__footer">
          <div className="ft-tour-card__price">
            {tour.oldPrice && (
              <span className="ft-tour-card__old-price">{tour.oldPrice}</span>
            )}
            <span className="ft-tour-card__current-price">{tour.price}</span>
          </div>
          <span className="ft-tour-card__btn" id={`book-tour-${tour.id}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            Đặt Ngay
          </span>
        </div>
      </div>
    </Link>
  );
}
