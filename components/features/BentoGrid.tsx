import { featureData } from '@/components/features/featureData';
import { BentoCard } from '@/components/features/BentoCard';

export function BentoGrid() {
  return (
    <div className="hidden md:grid md:grid-cols-3 md:gap-5">
      {featureData.map((feature) => (
        <BentoCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
