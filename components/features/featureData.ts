export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  metric: string;
  badge: string;
  accent: string;
  span: 'sm' | 'md' | 'lg';
  icon: string;
};

export const featureData: FeatureItem[] = [
  {
    id: 'agents',
    title: 'AI Agents',
    description: 'Launch multi-step agents with guardrails, approvals, and audited reasoning built in.',
    metric: '4.8x faster',
    badge: 'Auto',
    accent: 'from-forsythia/30 to-saffron/20',
    span: 'lg',
    icon: '✦'
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Coordinate handoffs between tools, humans, and systems without fragile scripts.',
    metric: '88% less toil',
    badge: 'Flow',
    accent: 'from-expedition/20 to-expedition/10',
    span: 'md',
    icon: '◌'
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    description: 'Surface hidden signals and forecast outcomes before they become operational issues.',
    metric: '12.4 hrs saved',
    badge: 'Insight',
    accent: 'from-mint/70 to-white/70',
    span: 'md',
    icon: '◍'
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Keep every action compliant with encryption, SSO, and granular permissions.',
    metric: 'SOC 2 ready',
    badge: 'Secure',
    accent: 'from-saffron/20 to-forsythia/10',
    span: 'sm',
    icon: '◎'
  },
  {
    id: 'routing',
    title: 'Multi-Model Routing',
    description: 'Send each task to the best model for price, quality, and latency balance.',
    metric: '31% lower cost',
    badge: 'Adaptive',
    accent: 'from-white/90 to-mint/60',
    span: 'sm',
    icon: '⬢'
  },
  {
    id: 'monitoring',
    title: 'Real-Time Monitoring',
    description: 'Observe every workflow in-flight with live health signals and failure recovery.',
    metric: '24/7 visibility',
    badge: 'Observe',
    accent: 'from-expedition/15 to-white/80',
    span: 'md',
    icon: '◐'
  }
];
