'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function TourCategories() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ft-brand" ref={sectionRef} id="about-fresh-travel">
      {/* ===== BRAND STORY – Warm Elegant ===== */}
      <div className="ft-brand__story">
        {/* Decorative elements */}
        <div className="ft-brand__decor ft-brand__decor--lantern-l">🏮</div>
        <div className="ft-brand__decor ft-brand__decor--lantern-r">🏮</div>
        <div className="ft-brand__decor ft-brand__decor--flower-l">🌸</div>
        <div className="ft-brand__decor ft-brand__decor--flower-r">🌺</div>

        <div className={`ft-brand__story-inner ${isVisible ? 'ft-brand--visible' : ''}`}>
          {/* Circular Image */}
          <div className="ft-brand__image-wrap">
            <div className="ft-brand__image-ring"></div>
            <div className="ft-brand__image-circle">
              <Image
                src="/images/brand-story.png"
                alt="Fresh Travel - Câu chuyện thương hiệu"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="ft-brand__text">
            <h2 className="ft-brand__title">
              <span className="ft-brand__title-script">Fresh Travel</span>
              <span className="ft-brand__title-sub">Chuyên Gia Du Lịch Hàng Đầu</span>
            </h2>
            <p className="ft-brand__intro">
              Được phát triển từ đội ngũ chuyên gia du lịch dày dặn kinh nghiệm, Fresh Travel là sự kế thừa tinh hoa về chất lượng dịch vụ du lịch quốc tế.
            </p>

            <div className="ft-brand__feature">
              <h3 className="ft-brand__feature-title">Đặc trưng</h3>
              <p className="ft-brand__feature-text">
                Fresh Travel dung hòa hoàn hảo giữa dịch vụ cao cấp chuẩn 4-5 sao và mức giá cạnh tranh nhất thị trường, mang đến hành trình trọn vẹn cho mọi du khách.
              </p>
            </div>

            <div className="ft-brand__feature">
              <h3 className="ft-brand__feature-title">Sứ mệnh</h3>
              <p className="ft-brand__feature-text">
                Mang đến Trải Nghiệm Toàn Diện, nơi mỗi chuyến đi không chỉ dừng lại ở điểm đến mà còn là sự khám phá văn hóa, ẩm thực và con người.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
