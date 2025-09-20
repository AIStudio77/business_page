import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AppBlueprint } from '../blueprints/AppBlueprint';

// Context for blueprint system
const BlueprintContext = createContext<AppBlueprint | null>(null);

// Hook to access the app blueprint and its stores
export function useAppBlueprint() {
  const context = useContext(BlueprintContext);
  if (!context) {
    throw new Error('useAppBlueprint must be used within AppProviders');
  }
  return context;
}

// Hook to access stores through blueprint
export function useStores() {
  const appBlueprint = useAppBlueprint();
  return {
    themeStore: appBlueprint.getThemeStore(),
    carouselStore: appBlueprint.getCarouselStore(),
    contentStore: appBlueprint.getContentStore()
  };
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
  const [appBlueprint] = useState(() => {
    const blueprint = new AppBlueprint();
    blueprint.initializeChildren();
    return blueprint;
  });

  return (
    <BlueprintContext.Provider value={appBlueprint}>
      {children}
    </BlueprintContext.Provider>
  );
}