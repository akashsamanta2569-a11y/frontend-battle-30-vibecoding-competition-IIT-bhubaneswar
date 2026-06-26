import { Badge } from '@/components/ui/badge';

export function HeroBadge() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>New • AI workflow OS</Badge>
      <span className="text-sm text-noir/70">Trusted by 10,000+ teams</span>
    </div>
  );
}
