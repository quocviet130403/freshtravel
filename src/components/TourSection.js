import TourCard from './TourCard';
import Link from 'next/link';

export default function TourSection({ title, description, tours, viewAllHref = '#', id }) {
  return (
    <section className="ft-tour-section" id={id}>
      <div className="ft-tour-section__container">
        <div className="ft-tour-section__header">
          <h2 className="ft-tour-section__title">{title}</h2>
          <div className="ft-tour-section__divider"></div>
          {description && (
            <p className="ft-tour-section__desc">{description}</p>
          )}
        </div>

        <div className="ft-tour-section__grid">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="ft-tour-section__footer">
          <Link href={viewAllHref} className="ft-tour-section__view-all">
            XEM TẤT CẢ →
          </Link>
        </div>
      </div>
    </section>
  );
}
