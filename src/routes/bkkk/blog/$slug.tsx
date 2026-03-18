import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../bkkk/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const BlogDetailPage = lazy(() =>
  import('../../../bkkk/components/pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage }))
);

function BlogDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <BlogDetailPage onNavigate={navigate} slug={slug || 'art-as-reflection'} />;
}

export const Route = createFileRoute('/bkkk/blog/$slug')({ component: BlogDetailPageRoute });
