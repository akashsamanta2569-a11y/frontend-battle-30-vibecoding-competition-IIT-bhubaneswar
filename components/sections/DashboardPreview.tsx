import { Badge } from '@/components/ui/badge';

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] rounded-[32px] border border-white/80 bg-[radial-gradient(circle_at_top_left,_rgba(255,153,50,0.22),_transparent_38%),linear-gradient(135deg,_rgba(255,255,255,0.95),_rgba(217,232,226,0.84))] p-4 shadow-premium backdrop-blur-xl">
      <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(rgba(17,76,90,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(17,76,90,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-noir p-5 text-arctic">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-forsythia" />
            <span className="h-2.5 w-2.5 rounded-full bg-saffron" />
            <span className="h-2.5 w-2.5 rounded-full bg-expedition" />
          </div>
          <Badge className="border-white/20 bg-white/10 text-[10px] text-arctic">Live • Agent sync</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[20px] border border-white/10 bg-white/10 p-4">
            <div className="mb-4 flex items-center justify-between text-sm text-arctic/70">
              <span>Execution pipeline</span>
              <span>98.4%</span>
            </div>
            <div className="space-y-3">
              {['Ingest signal', 'Draft response', 'Validate outcome'].map((step, index) => (
                <div key={step} className="flex items-center justify-between rounded-2xl border border-white/10 bg-noir/40 px-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-expedition text-sm font-medium text-arctic">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </div>
                  <span className="text-xs text-arctic/60">Ready</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[20px] border border-white/10 bg-white/10 p-4">
              <p className="mb-3 text-sm text-arctic/70">AI throughput</p>
              <div className="text-3xl font-semibold text-arctic">+240%</div>
            </div>
            <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-forsythia/30 to-saffron/20 p-4">
              <div className="mb-2 text-sm text-noir">Automation health</div>
              <div className="text-2xl font-semibold text-noir">Stable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
