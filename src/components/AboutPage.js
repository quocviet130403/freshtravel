'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="ab-page">
      {/* Hero Section - KEPT */}
      <section className="ab-hero">
        <div className="ab-hero__content">
          <h1 className="ab-hero__title">
            Khám Phá <span className="ab-hero__highlight">Kỳ Quan</span> Cùng Fresh Travel
          </h1>
          <p className="ab-hero__desc">
            Với hơn 10 năm kinh nghiệm, Fresh Travel mang đến những hành trình du lịch trọn vẹn, khám phá những điểm đến ấn tượng nhất từ khắp nơi trên thế giới.
          </p>
          <Link href="/tour-nuoc-ngoai" className="ab-hero__btn">Khám phá ngay →</Link>
        </div>
        <div className="ab-hero__images">
          <div className="ab-hero__img ab-hero__img--1">
            <Image src="/images/korea-nami.png" alt="Du lịch" fill style={{ objectFit: 'cover' }} sizes="200px" />
          </div>
          <div className="ab-hero__img ab-hero__img--2">
            <Image src="/images/japan-fuji.png" alt="Du lịch" fill style={{ objectFit: 'cover' }} sizes="200px" />
          </div>
          <div className="ab-hero__img ab-hero__img--3">
            <Image src="/images/about-hero.png" alt="Du lịch" fill style={{ objectFit: 'cover' }} sizes="200px" />
          </div>
          <div className="ab-hero__img ab-hero__img--4">
            <Image src="/images/dalat-tea.png" alt="Du lịch" fill style={{ objectFit: 'cover' }} sizes="200px" />
          </div>
        </div>
      </section>

      {/* VỀ CHÚNG TÔI - D.Relax Style */}
      <section className="ab-about">
        <div className="ab-ornament">✦ ─── ❖ ─── ✦</div>
        <h2 className="ab-about__title">VỀ CHÚNG TÔI</h2>
        <p className="ab-about__text">
          Fresh Travel là đơn vị lữ hành uy tín hàng đầu Việt Nam, mang đến sự trải nghiệm tuyệt đối cho mỗi hành trình – đồng thời khắc sâu ấn tượng đẹp về một Việt Nam hiện đại và mến khách.
        </p>
        <p className="ab-about__text">
          Chúng tôi mong muốn Fresh Travel sẽ là nơi ghi dấu những kỷ niệm đáng nhớ nhất, nơi mỗi chuyến đi trở thành một câu chuyện đẹp đi cùng bạn suốt cuộc đời.
        </p>

        <div className="ab-about__collage">
          <div className="ab-about__col-left">
            <div className="ab-about__img-tall">
              <Image src="/images/about-team.png" alt="Đội ngũ Fresh Travel" fill style={{ objectFit: 'cover' }} sizes="400px" />
            </div>
          </div>
          <div className="ab-about__col-center">
            <div className="ab-about__img-sm">
              <Image src="/images/korea-palace.png" alt="Tour Hàn Quốc" fill style={{ objectFit: 'cover' }} sizes="300px" />
            </div>
            <div className="ab-about__img-sm">
              <Image src="/images/danang-hoian.png" alt="Hội An" fill style={{ objectFit: 'cover' }} sizes="300px" />
            </div>
          </div>
          <div className="ab-about__col-right">
            <div className="ab-about__img-tall">
              <Image src="/images/japan-fushimi.png" alt="Tour Nhật Bản" fill style={{ objectFit: 'cover' }} sizes="400px" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="ab-divider">
        <span className="ab-divider__text">✦ ─ From journey to memories ─ ✦</span>
      </div>

      {/* TẦM NHÌN */}
      <section className="ab-vision">
        <div className="ab-ornament">✦ ─── ❖ ─── ✦</div>
        <h2 className="ab-vision__title">TẦM NHÌN - FRESH TRAVEL</h2>
        <p className="ab-vision__text">
          Với mong muốn trở thành biểu tượng của sự tin cậy trong ngành du lịch tại Việt Nam. Chúng tôi kết hợp các trải nghiệm văn hóa bản địa cùng dịch vụ chuyên nghiệp, mang đến những hành trình độc đáo, sang trọng cho khách hàng trong nước và quốc tế.
        </p>
        <div className="ab-vision__banner">
          <Image src="/images/about-vision.png" alt="Tầm nhìn Fresh Travel" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </div>
      </section>

      {/* SỨ MỆNH */}
      <section className="ab-mission">
        <div className="ab-ornament">✦ ─── ❖ ─── ✦</div>
        <h2 className="ab-mission__title">SỨ MỆNH - FRESH TRAVEL</h2>
        <p className="ab-mission__text">
          Sứ mệnh của chúng tôi là kiến tạo những hành trình hoàn hảo, nơi mỗi khách hàng đều cảm nhận được sự quan tâm, chu đáo và tận tâm. Fresh Travel cam kết mang đến dịch vụ du lịch chất lượng cao với mức giá cạnh tranh nhất.
        </p>
        <div className="ab-mission__image">
          <Image src="/images/about-team.png" alt="Sứ mệnh Fresh Travel" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </div>
      </section>

      {/* GIÁ TRỊ CỐT LÕI */}
      <section className="ab-values">
        <div className="ab-ornament">✦ ─── ❖ ─── ✦</div>
        <h2 className="ab-values__title">GIÁ TRỊ MÀ FRESH TRAVEL MANG LẠI</h2>
        <div className="ab-values__grid">
          <div className="ab-values__item">
            <div className="ab-values__img">
              <Image src="/images/korea-nami.png" alt="Trải nghiệm đẳng cấp" fill style={{ objectFit: 'cover' }} sizes="250px" />
            </div>
            <h4>Trải nghiệm đẳng cấp</h4>
            <p>Lịch trình được thiết kế tinh tế, đảm bảo mỗi hành trình là một kỷ niệm đẹp</p>
          </div>
          <div className="ab-values__item">
            <div className="ab-values__img">
              <Image src="/images/japan-fuji.png" alt="Hành trình chuyên sâu" fill style={{ objectFit: 'cover' }} sizes="250px" />
            </div>
            <h4>Hành trình chuyên sâu</h4>
            <p>Đội ngũ chuyên gia am hiểu từng điểm đến, mang lại trải nghiệm sâu sắc</p>
          </div>
          <div className="ab-values__item">
            <div className="ab-values__img">
              <Image src="/images/about-team.png" alt="Đội ngũ tận tâm" fill style={{ objectFit: 'cover' }} sizes="250px" />
            </div>
            <h4>Đội ngũ tận tâm</h4>
            <p>Hướng dẫn viên chuyên nghiệp, nhiệt tình, luôn đồng hành cùng bạn</p>
          </div>
          <div className="ab-values__item">
            <div className="ab-values__img">
              <Image src="/images/phuquoc-resort.png" alt="Dịch vụ cao cấp" fill style={{ objectFit: 'cover' }} sizes="250px" />
            </div>
            <h4>Dịch vụ cao cấp</h4>
            <p>Khách sạn, resort, ẩm thực đạt chuẩn quốc tế tại mọi điểm đến</p>
          </div>
        </div>
      </section>
    </div>
  );
}
