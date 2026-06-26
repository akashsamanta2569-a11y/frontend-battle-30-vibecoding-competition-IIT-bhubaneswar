'use client';

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { FeatureItem } from '@/components/features/featureData';
import { useFeatureContext } from '@/components/features/FeatureContext';

interface BentoCardProps {
  feature: FeatureItem;
}

export function BentoCard({ feature }: BentoCardProps) {
  const { activeFeatureId, setActiveFeatureId } = useFeatureContext();
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const isActive = activeFeatureId === feature.id;

  const spanClass = useMemo(() => {
    switch (feature.span) {
      case 'lg':
        return 'md:col-span-2 md:row-span-2';
      case 'md':
        return 'md:col-span-2';
      default:
        return 'md:col-span-1';
    }
  }, [feature.span]);

  return (
    <button
      type="button"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setSpotlight({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
      }}
      onClick={() => setActiveFeatureId(feature.id)}
      className={cn(
        'group relative h-full w-full overflow-hidden rounded-[28px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic',
        spanClass
      )}
      aria-pressed={isActive}
    >
      <Card
        className={cn(
          'relative h-full min-h-[220px] border-white/70 bg-white/70 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,43,54,0.12)]',
          isActive ? 'border-expedition/20 shadow-[0_24px_70px_rgba(17,76,90,0.14)]' : ''
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-70 transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,153,50,0.18), transparent 34%)`
          }}
        />
        <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${feature.accent}`} />
        <div className="relative flex h-full flex-col justify-between gap-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/70 text-2xl text-expedition shadow-sm">
              {feature.icon}
            </div>
            <Badge>{feature.badge}</Badge>
          </div>

          <div>
            <div className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-expedition/70">{feature.metric}</div>
            <h3 className="text-2xl font-semibold text-noir">{feature.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-noir/70">{feature.description}</p>
          </div>
        </div>
      </Card>
    </button>
  );
}
