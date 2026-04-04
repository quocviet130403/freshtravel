import TourTrongNuocListPage from '@/components/tour/TourTrongNuocListPage';
import { getToursByCategory, categoryInfo } from '@/data/tourDetailData';

export const metadata = {
  title: 'Tour Trong Nước - Fresh Travel',
  description: 'Trải nghiệm vẻ đẹp Việt Nam từ Bắc vào Nam – Đà Nẵng, Phú Quốc, Đà Lạt và nhiều điểm đến tuyệt vời.',
};

export default function TourTrongNuocPage() {
  const tours = getToursByCategory('tour-trong-nuoc');
  const info = categoryInfo['tour-trong-nuoc'];

  return (
    <TourTrongNuocListPage
      title={info.title}
      description={info.description}
      tours={tours}
    />
  );
}
