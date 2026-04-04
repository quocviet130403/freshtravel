import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/data/tourData';

export default function NewsSection() {
  return (
    <section className="ft-news" id="news-section">
      <div className="ft-news__container">
        <div className="ft-news__header">
          <h2 className="ft-news__title">TIN TỨC MỚI NHẤT</h2>
          <div className="ft-news__divider"></div>
          <p className="ft-news__desc">
            Với mong muốn mang đến khách hàng những trải nghiệm tuyệt vời nhất,
            FreshTravel đã không ngừng cải thiện và mở rộng phạm vi hoạt động.
          </p>
        </div>

        <div className="ft-news__grid">
          {/* Featured news */}
          <div className="ft-news__featured">
            <Link href={`/tin-tuc/${newsArticles[0].slug}`} className="ft-news__featured-card">
              <div className="ft-news__featured-image">
                <Image
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="ft-news__featured-body">
                <span className="ft-news__date">{newsArticles[0].date}</span>
                <h3 className="ft-news__featured-title">{newsArticles[0].title}</h3>
                <p className="ft-news__excerpt">{newsArticles[0].excerpt}</p>
              </div>
            </Link>
          </div>

          {/* News list - show 3 more */}
          <div className="ft-news__list">
            {newsArticles.slice(1, 4).map((article) => (
              <Link href={`/tin-tuc/${article.slug}`} key={article.id} className="ft-news__list-card" id={`news-${article.id}`}>
                <div className="ft-news__list-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="ft-news__list-body">
                  <span className="ft-news__date">{article.date}</span>
                  <h4 className="ft-news__list-title">{article.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="ft-news__footer">
          <Link href="/tin-tuc" className="ft-news__view-all">
            XEM TẤT CẢ →
          </Link>
        </div>
      </div>
    </section>
  );
}
