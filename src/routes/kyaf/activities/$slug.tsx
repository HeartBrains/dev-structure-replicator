import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../kyaf/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const ActivityDetailPage = lazy(() =>
  import('../../../kyaf/components/pages/ActivityDetailPage').then((m) => ({ default: m.ActivityDetailPage }))
);

function ActivityDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <ActivityDetailPage onNavigate={navigate} slug={slug || 'neon-reveries'} backPage={undefined} />;
}

export const Route = createFileRoute('/kyaf/activities/$slug')({ component: ActivityDetailPageRoute });
