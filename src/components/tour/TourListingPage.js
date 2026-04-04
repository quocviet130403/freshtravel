import Link from 'next/link';
import Image from 'next/image';

export default function TourListingPage({ title, description, tours, categorySlug }) {
  return (
    <div className="tl-page">
      {/* Breadcrumb */}
      <div className="tl-breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <span className="tl-breadcrumb__current">{title}</span>
      </div>

      {/* Header */}
      <div className="tl-header">
        <h1 className="tl-header__title">{title}</h1>
        <p className="tl-header__desc">{description}</p>
      </div>

      {/* Tour Grid */}
      <div className="tl-grid">
        {tours.map((tour) => (
          <Link href={`/tour/${tour.slug}`} key={tour.id} className="tl-card">
            <div className="tl-card__img">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {tour.promo && <span className="tl-card__badge">{tour.promo}</span>}
              {tour.rating && (
                <span className="tl-card__rating">{tour.rating}</span>
              )}
            </div>
            <div className="tl-card__body">
              <h3 className="tl-card__title">{tour.title}</h3>
              <div className="tl-card__info">
                <span>🕐 {tour.duration}</span>
                <span>✈️ {tour.airline}</span>
              </div>
              <div className="tl-card__route">
                <span>📍 {tour.route}</span>
              </div>
              <div className="tl-card__dates">
                <span>📅 Khởi hành: </span>
                {tour.departureDates.slice(0, 3).map((d, i) => (
                  <span key={i} className="tl-card__date-chip">{d}</span>
                ))}
                {tour.departureDates.length > 3 && <span className="tl-card__more">+{tour.departureDates.length - 3}</span>}
              </div>
              <div className="tl-card__footer">
                <div className="tl-card__price">
                  {tour.oldPrice && <del>{tour.oldPrice}</del>}
                  <strong>{tour.price}</strong>
                </div>
                <span className="tl-card__cta">Xem chi tiết →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
