import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../bkkk/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const MovingImageDetailPage = lazy(() =>
  import('../../../bkkk/components/pages/MovingImageDetailPage').then((m) => ({ default: m.MovingImageDetailPage }))
);

function MovingImageDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <MovingImageDetailPage onNavigate={navigate} slug={slug || 'inviting-you-to-die-with-me'} backPage={undefined} />;
}

export const Route = createFileRoute('/bkkk/moving-image/$slug')({ component: MovingImageDetailPageRoute });
