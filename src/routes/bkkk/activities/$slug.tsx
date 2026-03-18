import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../bkkk/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const ActivityDetailPage = lazy(() =>
  import('../../../bkkk/components/pages/ActivityDetailPage').then((m) => ({ default: m.ActivityDetailPage }))
);

function ActivityDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <ActivityDetailPage onNavigate={navigate} slug={slug || 'liminal-signals'} backPage={undefined} />;
}

export const Route = createFileRoute('/bkkk/activities/$slug')({ component: ActivityDetailPageRoute });
