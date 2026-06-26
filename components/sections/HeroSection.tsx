'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { BackgroundEffects } from '@/components/sections/BackgroundEffects';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { HeroBadge } from '@/components/sections/HeroBadge';
import { HeroStats } from '@/components/sections/HeroStats';

export function HeroSection() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setSpotlight({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden border-b border-white/70 bg-[linear-gradient(135deg,_rgba(241,246,244,1),_rgba(217,232,226,0.85))]">
      <BackgroundEffects />
      <Container as="div" className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:py-32">
        <div className="relative z-10 max-w-2xl">
          <HeroBadge />
          <Heading as="h1" className="mt-6 text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
            Move from prompts to production-grade workflows.
          </Heading>
          <Text className="mt-6 max-w-xl text-lg text-noir/75">
            Northstar AI gives teams a premium operating layer for orchestrating launches, support, and customer intelligence with one calm command center.
          </Text>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" variant="primary" asChild>
              <Link href="#pricing">Start free</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#workflow">See the workflow</Link>
            </Button>
          </div>
          <HeroStats />
        </div>

        <div className="relative z-10">
          <div
            className="pointer-events-none absolute inset-0 rounded-[40px] opacity-70"
            style={{
              background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,153,50,0.24), transparent 30%)`
            }}
          />
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
