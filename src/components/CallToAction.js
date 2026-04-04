import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="ft-cta" id="cta-section">
      <div className="ft-cta__banner">
        {/* Background Image */}
        <Image
          src="/images/cta-banner.png"
          alt="Du lịch cùng Fresh Travel"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
        {/* Overlay */}
        <div className="ft-cta__overlay"></div>

        {/* Content */}
        <div className="ft-cta__content">
          <div className="ft-cta__left">
            <span className="ft-cta__tag">🌴 ƯU ĐÃI ĐẶC BIỆT</span>
            <h2 className="ft-cta__title">
              Khám Phá Thiên Đường<br />
              <span className="ft-cta__title-highlight">Nghỉ Dưỡng Cao Cấp</span>
            </h2>
            <p className="ft-cta__desc">
              Đặt tour ngay hôm nay để nhận ưu đãi giảm đến <strong>30%</strong> cho các chuyến du lịch biển đảo mùa hè 2026
            </p>
            <div className="ft-cta__actions">
              <Link href="/lien-he" className="ft-cta__btn ft-cta__btn--primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Tư Vấn Ngay
              </Link>
              <Link href="/tour-nuoc-ngoai" className="ft-cta__btn ft-cta__btn--outline">
                Xem Tất Cả Tour →
              </Link>
            </div>
          </div>

          <div className="ft-cta__right">
            <div className="ft-cta__promo-card">
              <span className="ft-cta__promo-badge">HOT</span>
              <div className="ft-cta__promo-discount">30%</div>
              <div className="ft-cta__promo-text">GIẢM GIÁ</div>
              <div className="ft-cta__promo-note">Đặt trước 30/04</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
