'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

import type { Route } from "next";

const links: ReadonlyArray<{
  href: Route;
  label: string;
}> = [
  { href: "/#features" as Route, label: "Features" },
  { href: "/#workflow" as Route, label: "Workflow" },
  { href: "/#pricing" as Route, label: "Pricing" },
  { href: "/#faq" as Route, label: "FAQ" },
];

const getHashSelector = (href: Route) => {
  const value = typeof href === 'string' ? href : String(href);
  if (value.includes('#')) {
    return `#${value.split('#').pop()}`;
  }

  return value;
};

const getSectionId = (href: Route) => {
  const selector = getHashSelector(href);
  return selector.startsWith('#') ? selector.slice(1) : selector.replace(/^[\/]+/, '');
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = links
      .map((link) => getHashSelector(link.href))
      .map((selector) => document.querySelector(selector));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-arctic/75 backdrop-blur-xl">
      <Container as="div" className="flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-3 rounded-full px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic" aria-label="Northstar AI home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-expedition text-sm font-semibold text-arctic">N</span>
          <span className="text-base font-semibold tracking-tight text-noir">Northstar AI</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const sectionId = getSectionId(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  activeSection === sectionId ? 'text-expedition' : 'text-noir/70 hover:text-noir'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" variant="primary" asChild>
            <Link href="#pricing">Get Started</Link>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-mint/80 bg-white/70 p-2 text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2 focus-visible:ring-offset-arctic md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="block h-5 w-5 text-center text-lg">☰</span>
        </button>
      </Container>

      {isOpen ? (
        <div id="mobile-nav" className="border-t border-white/70 bg-arctic/95 px-4 py-4 md:hidden">
          <Container as="div" className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-noir/80 hover:bg-white/70 hover:text-noir"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" variant="primary" className="mt-2 w-full justify-center" asChild>
              <Link href="#pricing" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
