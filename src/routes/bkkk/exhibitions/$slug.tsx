import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../bkkk/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const ExhibitionDetailPage = lazy(() =>
  import('../../../bkkk/components/pages/ExhibitionDetailPage').then((m) => ({ default: m.ExhibitionDetailPage }))
);

function ExhibitionDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <ExhibitionDetailPage onNavigate={navigate} slug={slug || 'unwinding-architecture'} backPage={undefined} />;
}

export const Route = createFileRoute('/bkkk/exhibitions/$slug')({ component: ExhibitionDetailPageRoute });
