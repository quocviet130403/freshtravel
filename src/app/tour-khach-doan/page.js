import TourListingPage from '@/components/tour/TourListingPage';
import { getToursByCategory, categoryInfo } from '@/data/tourDetailData';

export const metadata = {
  title: 'Tour Khách Đoàn - Fresh Travel',
  description: 'Giải pháp du lịch chuyên biệt cho doanh nghiệp – Team Building, Gala Dinner, nghỉ dưỡng đoàn.',
};

export default function TourKhachDoanPage() {
  const tours = getToursByCategory('tour-khach-doan');
  const info = categoryInfo['tour-khach-doan'];

  return (
    <TourListingPage
      title={info.title}
      description={info.description}
      tours={tours}
      categorySlug="tour-khach-doan"
    />
  );
}
