'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`wcu ${isVisible ? 'wcu--visible' : ''}`} ref={ref} id="why-choose-us">

      {/* Main Content */}
      <div className="wcu__main">
        <div className="wcu__main-container">
          {/* Header */}
          <div className="wcu__header">
            <span className="wcu__badge">✨ VÌ SAO CHỌN FRESH TRAVEL</span>
            <h2 className="wcu__title">
              Biến Mỗi Chuyến Đi Thành <br/>
              <span className="wcu__title-gradient">Kỷ Niệm Đáng Nhớ</span>
            </h2>
            <p className="wcu__subtitle">
              Với hơn 15 năm kinh nghiệm, Fresh Travel tự hào là đối tác đồng hành đáng tin cậy
              cho hơn 50,000 khách hàng trên mọi hành trình khám phá thế giới.
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="wcu__showcase">
            <div className="wcu__showcase-left">
              <div className="wcu__showcase-img wcu__showcase-img--main">
                <Image
                  src="/images/wcu-resort.png"
                  alt="Khu nghỉ dưỡng sang trọng bên bờ biển"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="600px"
                />
                <div className="wcu__showcase-overlay">
                  <span className="wcu__showcase-tag">🌴 Resort 5 sao ven biển</span>
                </div>
              </div>
            </div>
            <div className="wcu__showcase-right">
              <div className="wcu__showcase-img wcu__showcase-img--secondary">
                <Image
                  src="/images/wcu-team.png"
                  alt="Du khách Việt Nam tại Nhật Bản"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="400px"
                />
                <div className="wcu__showcase-overlay">
                  <span className="wcu__showcase-tag">🌸 Khách hàng tại Nhật Bản</span>
                </div>
              </div>
              <div className="wcu__showcase-quote">
                <div className="wcu__quote-mark">✦</div>
                <p className="wcu__quote-text">
                  Không chỉ là chuyến đi — mà là hành trình chạm đến những điều tuyệt vời nhất đang chờ bạn phía trước.
                </p>
                <div className="wcu__quote-author">
                  <strong>Fresh Travel</strong>
                  <span>Trọn vẹn từng khoảnh khắc</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="wcu__cta">
            <Link href="/lien-he" className="wcu__cta-btn wcu__cta-btn--primary">
              Tư Vấn Miễn Phí →
            </Link>
            <Link href="/tour-nuoc-ngoai" className="wcu__cta-btn wcu__cta-btn--outline">
              Khám Phá Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
