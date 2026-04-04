import BookingPage from '@/components/tour/BookingPage';
import { getTourBySlug } from '@/data/tourDetailData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  return {
    title: tour ? `Đặt Tour - ${tour.title} - Fresh Travel` : 'Đặt Tour',
  };
}

export default async function BookingRoute({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const tour = getTourBySlug(slug);

  return (
    <BookingPage
      tour={tour}
      initialAdults={Number(sp.adults) || 1}
      initialChildren={Number(sp.children) || 0}
      initialInfants={Number(sp.infants) || 0}
      initialDate={sp.date || ''}
    />
  );
}
