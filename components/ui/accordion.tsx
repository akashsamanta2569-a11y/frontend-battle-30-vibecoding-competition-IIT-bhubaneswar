'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({ title, content, defaultOpen = false, id, isOpen, onToggle }: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const panelId = useId();
  const triggerId = id ?? panelId;
  const isExpanded = isOpen ?? internalOpen;

  return (
    <div className="rounded-[24px] border border-mint/70 bg-white/70">
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={isExpanded}
          aria-controls={`${triggerId}-panel`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-noir focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-expedition focus-visible:ring-offset-2"
          onClick={() => {
            if (onToggle) {
              onToggle();
            } else {
              setInternalOpen((value) => !value);
            }
          }}
        >
          <span>{title}</span>
          <span className="text-lg text-expedition transition-transform duration-200" aria-hidden="true">
            {isExpanded ? '−' : '+'}
          </span>
        </button>
      </h3>
      <div
        id={`${triggerId}-panel`}
        role="region"
        aria-labelledby={triggerId}
        className={cn('grid overflow-hidden px-5 transition-all duration-300 ease-out', isExpanded ? 'grid-rows-[1fr] pb-5 pt-1' : 'grid-rows-[0fr] pb-0 pt-0')}
      >
        <div className="overflow-hidden text-sm leading-7 text-noir/80">{content}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
    isOpen?: boolean;
    onToggle?: () => void;
  }>;
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <AccordionItem
          key={`${item.title}-${index}`}
          title={item.title}
          content={item.content}
          defaultOpen={item.defaultOpen}
          isOpen={item.isOpen}
          onToggle={item.onToggle}
        />
      ))}
    </div>
  );
}
