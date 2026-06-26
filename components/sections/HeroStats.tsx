import { Badge } from '@/components/ui/badge';

const stats = [
  { label: 'Tasks automated', value: '84%' },
  { label: 'Avg. time saved', value: '12 hrs' },
  { label: 'NPS', value: '4.9/5' }
];

export function HeroStats() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-full border border-mint/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
          <div className="text-sm font-semibold text-expedition">{stat.value}</div>
          <div className="text-xs text-noir/60">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
