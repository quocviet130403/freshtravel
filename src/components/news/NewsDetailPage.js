'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NewsDetailPage({ article, relatedArticles }) {
  if (!article) {
    return (
      <main className="ft-news-detail">
        <div className="ft-news-detail__not-found">
          <h1>Bài viết không tồn tại</h1>
          <p>Xin lỗi, bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.</p>
          <Link href="/tin-tuc" className="ft-news-detail__back-btn">
            ← Quay lại trang tin tức
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="ft-news-detail">
      {/* Hero Banner */}
      <div className="ft-news-detail__hero">
        <div className="ft-news-detail__hero-overlay"></div>
        <Image
          src={article.image}
          alt={article.title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          priority
        />
        <div className="ft-news-detail__hero-content">
          <div className="ft-news-detail__tags">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="ft-news-detail__tag">{tag}</span>
            ))}
          </div>
          <h1 className="ft-news-detail__hero-title">{article.title}</h1>
          <div className="ft-news-detail__meta">
            <span className="ft-news-detail__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {article.date}
            </span>
            <span className="ft-news-detail__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
              {article.readTime}
            </span>
            <span className="ft-news-detail__meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              {article.author}
            </span>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="ft-news-detail__breadcrumb-bar">
        <div className="ft-news-detail__breadcrumb-container">
          <nav className="ft-news-detail__breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span className="ft-news-detail__breadcrumb-sep">/</span>
            <Link href="/tin-tuc">Tin tức</Link>
            <span className="ft-news-detail__breadcrumb-sep">/</span>
            <span className="ft-news-detail__breadcrumb-current">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Content Area */}
      <div className="ft-news-detail__container">
        <div className="ft-news-detail__layout">
          {/* Main Content */}
          <article className="ft-news-detail__content">
            <p className="ft-news-detail__excerpt">{article.excerpt}</p>

            {article.contentSections.map((section, idx) => (
              <div key={idx} className="ft-news-detail__section">
                <h2 className="ft-news-detail__section-heading">{section.heading}</h2>
                <p className="ft-news-detail__section-text">{section.text}</p>
                {section.image && (
                  <div className="ft-news-detail__section-image">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      width={800}
                      height={450}
                      style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                    />
                    <span className="ft-news-detail__image-caption">{section.heading}</span>
                  </div>
                )}
              </div>
            ))}

            {/* Share buttons */}
            <div className="ft-news-detail__share">
              <span className="ft-news-detail__share-label">Chia sẻ bài viết:</span>
              <div className="ft-news-detail__share-buttons">
                <button className="ft-news-detail__share-btn ft-news-detail__share-btn--fb" title="Chia sẻ Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
                <button className="ft-news-detail__share-btn ft-news-detail__share-btn--tw" title="Chia sẻ Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </button>
                <button className="ft-news-detail__share-btn ft-news-detail__share-btn--link" title="Sao chép liên kết" onClick={() => { navigator.clipboard.writeText(window.location.href); }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="ft-news-detail__cta">
              <h3 className="ft-news-detail__cta-title">Bạn muốn khám phá thêm?</h3>
              <p className="ft-news-detail__cta-text">Liên hệ Fresh Travel ngay để được tư vấn tour du lịch phù hợp nhất!</p>
              <div className="ft-news-detail__cta-buttons">
                <Link href="/lien-he" className="ft-news-detail__cta-btn ft-news-detail__cta-btn--primary">
                  Liên hệ tư vấn
                </Link>
                <Link href="/tour-nuoc-ngoai" className="ft-news-detail__cta-btn ft-news-detail__cta-btn--secondary">
                  Xem tour nổi bật
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="ft-news-detail__sidebar">
            <div className="ft-news-detail__sidebar-sticky">
              <h3 className="ft-news-detail__sidebar-title">Bài Viết Liên Quan</h3>
              <div className="ft-news-detail__related-list">
                {relatedArticles.map((related) => (
                  <Link key={related.id} href={`/tin-tuc/${related.slug}`} className="ft-news-detail__related-card">
                    <div className="ft-news-detail__related-img">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="120px"
                      />
                    </div>
                    <div className="ft-news-detail__related-body">
                      <h4 className="ft-news-detail__related-title">{related.title}</h4>
                      <span className="ft-news-detail__related-date">{related.date}</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter mini */}
              <div className="ft-news-detail__newsletter">
                <h4 className="ft-news-detail__newsletter-title">📬 Nhận tin mới nhất</h4>
                <p className="ft-news-detail__newsletter-text">Đăng ký để nhận ưu đãi độc quyền từ Fresh Travel</p>
                <Link href="/lien-he" className="ft-news-detail__newsletter-btn">Đăng ký ngay</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
