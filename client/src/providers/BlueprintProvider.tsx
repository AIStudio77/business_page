import { createContext, useContext, useState, ReactNode } from 'react';
import { AppBlueprint } from '../blueprints/AppBlueprint';

// Context for blueprint system
const BlueprintContext = createContext<{
  appBlueprint: AppBlueprint;
} | null>(null);

// Hook to access blueprints
export function useBlueprints() {
  const context = useContext(BlueprintContext);
  if (!context) {
    throw new Error('useBlueprints must be used within BlueprintProvider');
  }
  return context;
}

interface BlueprintProviderProps {
  children: ReactNode;
}

export function BlueprintProvider({ children }: BlueprintProviderProps) {
  const [appBlueprint] = useState(() => new AppBlueprint());
  
  return (
    <BlueprintContext.Provider value={{ appBlueprint }}>
      {children}
    </BlueprintContext.Provider>
  );
}

// HOC to inject blueprint functionality into components
export function withBlueprint<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  blueprintId: string
) {
  return function BlueprintComponent(props: T) {
    const { appBlueprint } = useBlueprints();
    const blueprint = appBlueprint.getChild(blueprintId);
    
    if (!blueprint) {
      console.warn(`Blueprint ${blueprintId} not found`);
      return <WrappedComponent {...props} />;
    }
    
    // Get the enhanced component from the blueprint
    const EnhancedComponent = blueprint.getComponent();
    return <EnhancedComponent {...props} />;
  };
}