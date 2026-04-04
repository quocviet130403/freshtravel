import TourDetailPage from '@/components/tour/TourDetailPage';
import { getTourBySlug, getSimilarTours } from '@/data/tourDetailData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  return {
    title: tour ? `${tour.title} - Fresh Travel` : 'Tour không tồn tại',
    description: tour ? tour.description : '',
  };
}

export default async function TourDetailRoute({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  const similar = tour ? getSimilarTours(tour) : [];

  return <TourDetailPage tour={tour} similarTours={similar} />;
}
