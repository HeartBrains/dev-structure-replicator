import { createFileRoute } from '@tanstack/react-router';
import { lazy } from 'react';
import { useAppNavigate } from '../../../bkkk/utils/useAppNavigate';
import { useParams } from '@tanstack/react-router';

const ArtistDetailPage = lazy(() =>
  import('../../../bkkk/components/pages/ArtistDetailPage').then((m) => ({ default: m.ArtistDetailPage }))
);

function ArtistDetailPageRoute() {
  const navigate = useAppNavigate();
  const { slug } = useParams({ strict: false }) as { slug: string };
  return <ArtistDetailPage onNavigate={navigate} slug={slug} backPage={undefined} />;
}

export const Route = createFileRoute('/bkkk/artists/$slug')({ component: ArtistDetailPageRoute });
