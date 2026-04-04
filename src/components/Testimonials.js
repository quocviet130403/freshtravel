'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Chị Hải Yến',
    tour: 'Du lịch Nhật Bản',
    rating: 4.5,
    image: '/images/testimonial-japan.png',
    quote: '"Nhật Bản đẹp hơn cả trong mơ"',
    text: 'Cảm ơn Du lịch Fresh Travel cùng em Tiên và em Huy đã tổ chức một hành trình Nhật Bản tuyệt vời, trọn vẹn đến từng chi tiết. Từ cảnh sắc thiên nhiên hùng vĩ, món ăn ngon miệng, khách sạn đẹp và những bức hình siêu đẹp,...',
  },
  {
    id: 2,
    name: 'Anh Tuấn Kiệt',
    tour: 'Du lịch Hoa Kỳ',
    rating: 4.5,
    image: '/images/testimonial-korea.png',
    quote: '"Hoàn Mỹ là nơi chúng ta gặp nhau, nơi hẹn hò của chúng ta"',
    text: 'Lần này đi Mỹ rất tuyệt vời, mình biết được rất nhiều điều. Trước giờ mình cũng đọc, cũng nghe, nhưng khi mình đến tận nơi, nhìn bằng mắt thì cảm thấy mình hiểu nhiều hơn...',
  },
  {
    id: 3,
    name: 'Chị Thu Hà',
    tour: 'Du lịch Châu Âu',
    rating: 5,
    image: '/images/testimonial-europe.png',
    quote: '"Châu Âu mộng mơ, trải nghiệm đáng nhớ cả đời"',
    text: 'Tour Châu Âu 10 ngày thực sự đáng giá từng đồng! Được tham quan những địa danh nổi tiếng, ăn uống ngon, nghỉ khách sạn đẹp. Cảm ơn Fresh Travel rất nhiều!',
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  return (
    <div className="ft-testi__stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="ft-testi__star ft-testi__star--full">★</span>
      ))}
      {hasHalf && <span className="ft-testi__star ft-testi__star--half">★</span>}
    </div>
  );
}

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // page 0 = show cards 0,1  |  page 1 = show cards 1,2
  const totalPages = 2;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setPage(prev => (prev + 1) % totalPages);
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const goTo = (idx) => { setPage(idx); resetTimer(); };
  const goPrev = () => { goTo((page - 1 + totalPages) % totalPages); };
  const goNext = () => { goTo((page + 1) % totalPages); };

  // Each card is 50% width, so page 0 = translateX(0), page 1 = translateX(-50%)
  const offset = page * 50;

  return (
    <section className="ft-testi" ref={sectionRef} id="testimonials">
      <div className="ft-testi__bg-globe"></div>
      <div className="ft-testi__bg-dots"></div>

      <div className="ft-testi__container">
        <div className={`ft-testi__header ${isVisible ? 'ft-testi--visible' : ''}`}>
          <h2 className="ft-testi__title">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI?</h2>
          <div className="ft-testi__divider"></div>
          <p className="ft-testi__subtitle">
            Hàng ngàn khách hàng đã tin tưởng và đồng hành cùng Fresh Travel
          </p>
        </div>

        {/* Slider – shows 2 cards at a time, slides to reveal 3rd */}
        <div className="ft-testi__slider">
          <button className="ft-testi__arrow ft-testi__arrow--prev" onClick={goPrev} aria-label="Previous">‹</button>
          <button className="ft-testi__arrow ft-testi__arrow--next" onClick={goNext} aria-label="Next">›</button>

          <div className="ft-testi__track" style={{ transform: `translateX(-${offset}%)` }}>
            {testimonials.map((item) => (
              <div key={item.id} className="ft-testi__slide">
                <div className={`ft-testi__card ${isVisible ? 'ft-testi__card--animate' : ''}`}>
                  {/* Photo */}
                  <div className="ft-testi__photo">
                    <div className="ft-testi__photo-frame">
                      <Image src={item.image} alt={`${item.name} - ${item.tour}`} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                  {/* Content below photo */}
                  <div className="ft-testi__body">
                    <div className="ft-testi__meta">
                      <div className="ft-testi__info">
                        <h4 className="ft-testi__name">{item.name}</h4>
                        <span className="ft-testi__tour">{item.tour}</span>
                        <StarRating rating={item.rating} />
                      </div>
                      <div className="ft-testi__review">
                        <p className="ft-testi__quote">{item.quote}</p>
                        <p className="ft-testi__text">{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="ft-testi__dots">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              className={`ft-testi__dot ${idx === page ? 'ft-testi__dot--active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
