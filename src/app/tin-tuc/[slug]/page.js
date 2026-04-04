import NewsDetailPage from '@/components/news/NewsDetailPage';
import { getNewsArticleBySlug, getRelatedArticles } from '@/data/tourData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  return {
    title: article ? `${article.title} - Fresh Travel` : 'Bài viết không tồn tại',
    description: article ? article.excerpt : '',
  };
}

export default async function NewsDetailRoute({ params }) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  const relatedArticles = article ? getRelatedArticles(article.id, 4) : [];

  return <NewsDetailPage article={article} relatedArticles={relatedArticles} />;
}
