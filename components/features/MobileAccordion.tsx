'use client';

import { useMemo } from 'react';
import { Accordion } from '@/components/ui/accordion';
import { featureData } from '@/components/features/featureData';
import { useFeatureContext } from '@/components/features/FeatureContext';

export function MobileAccordion() {
  const { activeFeatureId, setActiveFeatureId } = useFeatureContext();

  const items = useMemo(
    () =>
      featureData.map((feature) => ({
        title: feature.title,
        content: (
          <div className="space-y-3">
            <p>{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-mint/70 px-3 py-1 text-sm font-medium text-expedition">{feature.metric}</span>
              <span className="rounded-full border border-mint/70 px-3 py-1 text-sm text-noir/70">{feature.badge}</span>
            </div>
          </div>
        ),
        isOpen: activeFeatureId === feature.id,
        onToggle: () => setActiveFeatureId(feature.id)
      })),
    [activeFeatureId, setActiveFeatureId]
  );

  return <div className="md:hidden"><Accordion items={items} /></div>;
}
