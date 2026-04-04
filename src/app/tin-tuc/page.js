import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/data/tourData';

export const metadata = {
  title: 'Tin Tức Du Lịch | Fresh Travel',
  description: 'Cập nhật tin tức du lịch, kinh nghiệm, mẹo hay và ưu đãi hấp dẫn từ Fresh Travel.',
};

export default function TinTucPage() {
  const featured = newsArticles.filter((a) => a.featured);
  const regular = newsArticles.filter((a) => !a.featured);

  return (
    <main className="ft-news-page">
      {/* Page Banner */}
      <div className="ft-news-page__banner">
        <div className="ft-news-page__banner-overlay"></div>
        <Image src="/images/bg-travel-collage.png" alt="Tin tức du lịch" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        <div className="ft-news-page__banner-content">
          <h1 className="ft-news-page__banner-title">TIN TỨC DU LỊCH</h1>
          <p className="ft-news-page__banner-desc">Kinh nghiệm • Mẹo hay • Ưu đãi • Cẩm nang du lịch</p>
          <nav className="ft-news-page__breadcrumb">
            <Link href="/">Trang chủ</Link> <span>/</span> <span>Tin tức</span>
          </nav>
        </div>
      </div>

      <div className="ft-news-page__container">
        {/* Featured Row - 2 large cards */}
        <div className="ft-news-page__featured-row">
          {featured.map((article) => (
            <Link key={article.id} href={`/tin-tuc/${article.slug}`} className="ft-news-page__featured-card">
              <div className="ft-news-page__featured-img">
                <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} sizes="50vw" />
                <div className="ft-news-page__featured-overlay">
                  <h2 className="ft-news-page__featured-title">{article.title}</h2>
                  <p className="ft-news-page__featured-excerpt">{article.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Regular articles - 2 column grid */}
        <div className="ft-news-page__grid">
          {regular.map((article) => (
            <Link key={article.id} href={`/tin-tuc/${article.slug}`} className="ft-news-page__card">
              <div className="ft-news-page__card-img">
                <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} sizes="120px" />
              </div>
              <div className="ft-news-page__card-body">
                <h3 className="ft-news-page__card-title">{article.title}</h3>
                <span className="ft-news-page__card-date">📅 {article.date}</span>
                <p className="ft-news-page__card-excerpt">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
