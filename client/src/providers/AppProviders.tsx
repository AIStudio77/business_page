import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeStore } from '../core/ThemeStore';
import { CarouselStore } from '../core/CarouselStore';

// Context for stores
const StoresContext = createContext<{
  themeStore: ThemeStore;
  carouselStore: CarouselStore;
} | null>(null);

// Hook to access stores
export function useStores() {
  const context = useContext(StoresContext);
  if (!context) {
    throw new Error('useStores must be used within AppProviders');
  }
  return context;
}

// Hook for specific store state
export function useStoreState<T>(store: { getState(): T; subscribe(fn: () => void): () => void }) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, [store]);

  return state;
}

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  const [stores] = useState(() => ({
    themeStore: new ThemeStore(),
    carouselStore: new CarouselStore()
  }));

  return (
    <StoresContext.Provider value={stores}>
      {children}
    </StoresContext.Provider>
  );
}