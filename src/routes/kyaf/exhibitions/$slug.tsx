import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../kyaf/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const ExhibitionDetailPage = lazy(() =>
  import('../../../kyaf/components/pages/ExhibitionDetailPage').then((m) => ({ default: m.ExhibitionDetailPage }))
);

function ExhibitionDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <ExhibitionDetailPage onNavigate={navigate} slug={slug || 'unwinding-architecture'} backPage={undefined} />;
}

export const Route = createFileRoute('/kyaf/exhibitions/$slug')({ component: ExhibitionDetailPageRoute });
