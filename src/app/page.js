import HeroSection from '@/components/HeroSection';
import TourCategories from '@/components/TourCategories';
import WhyChooseUs from '@/components/WhyChooseUs';
import TourSection from '@/components/TourSection';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import NewsSection from '@/components/NewsSection';
import { toursCaoCap, toursNoShopping, toursThietKe } from '@/data/tourData';

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== WHY CHOOSE US ===== */}
      <WhyChooseUs />

      {/* ===== TOUR CAO CẤP ===== */}
      <TourSection
        id="tour-cao-cap"
        title="TOUR CAO CẤP"
        description="Tour Cao Cấp Fresh Travel mang đến cơ hội du lịch trọn vẹn với giá tốt nhất. Khám phá hàng loạt ưu đãi tour đặc biệt và săn ngay những hot deal tour hấp dẫn đến Trung Quốc, Hàn Quốc, Nhật Bản cùng nhiều điểm đến nổi tiếng."
        tours={toursCaoCap}
        viewAllHref="/tours/cao-cap"
      />

      {/* ===== TOUR NO SHOPPING ===== */}
      <TourSection
        id="tour-no-shopping"
        title="TOUR NO SHOPPING"
        description="Tour No Shopping Fresh Travel cam kết không đưa khách vào các điểm mua sắm. Tận hưởng 100% thời gian khám phá và trải nghiệm văn hóa tại các điểm đến nổi tiếng."
        tours={toursNoShopping}
        viewAllHref="/tours/no-shopping"
      />

      {/* ===== TOUR THIẾT KẾ ===== */}
      <TourSection
        id="tour-thiet-ke"
        title="TOUR THIẾT KẾ"
        description="Tour Thiết Kế mang đến hành trình độc đáo, khác biệt. Được xây dựng đặc biệt cho những ai yêu thích sự khám phá và trải nghiệm mới mẻ."
        tours={toursThietKe}
        viewAllHref="/tours/thiet-ke"
      />

      {/* ===== ĐỊA ĐIỂM NỔI BẬT ===== */}
      <FeaturedDestinations />

      {/* ===== CTA BANNER ===== */}
      <CallToAction />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== TIN TỨC ===== */}
      <NewsSection />
    </>
  );
}
