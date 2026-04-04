import TourListingPage from '@/components/tour/TourListingPage';
import { getToursByCategory, categoryInfo } from '@/data/tourDetailData';

export const metadata = {
  title: 'Tour Nước Ngoài - Fresh Travel',
  description: 'Khám phá thế giới cùng Fresh Travel – Tour Hàn Quốc, Nhật Bản, Trung Quốc và nhiều điểm đến hấp dẫn.',
};

export default function TourNuocNgoaiPage() {
  const tours = getToursByCategory('tour-nuoc-ngoai');
  const info = categoryInfo['tour-nuoc-ngoai'];

  return (
    <TourListingPage
      title={info.title}
      description={info.description}
      tours={tours}
      categorySlug="tour-nuoc-ngoai"
    />
  );
}
