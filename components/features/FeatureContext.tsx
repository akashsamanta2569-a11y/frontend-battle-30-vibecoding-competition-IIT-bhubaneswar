'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface FeatureContextValue {
  activeFeatureId: string;
  setActiveFeatureId: (id: string) => void;
}

const FeatureContext = createContext<FeatureContextValue | null>(null);

export function FeatureProvider({ children }: { children: React.ReactNode }) {
  const [activeFeatureId, setActiveFeatureId] = useState('agents');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActiveFeatureId((current) => current || 'agents');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value = useMemo(() => ({ activeFeatureId, setActiveFeatureId }), [activeFeatureId]);

  return <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>;
}

export function useFeatureContext() {
  const context = useContext(FeatureContext);
  if (!context) {
    throw new Error('useFeatureContext must be used within FeatureProvider');
  }
  return context;
}
