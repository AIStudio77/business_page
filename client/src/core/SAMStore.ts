// Simple SAM (State-Action-Model) pattern implementation
export interface Action<T = any> {
  type: string;
  payload?: T;
}

export abstract class SAMStore<T> {
  protected state: T;
  protected listeners: Set<() => void> = new Set();

  constructor(initialState: T) {
    this.state = initialState;
  }

  // Core SAM method - decides how to apply proposed actions
  abstract apply(action: Action): void;

  // Get current state
  getState(): T {
    return { ...this.state };
  }

  // Subscribe to state changes
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  // Notify all listeners of state changes
  protected notify(): void {
    this.listeners.forEach(listener => listener());
  }

  // Propose an action (SAM pattern terminology)
  propose(action: Action): void {
    this.apply(action);
  }
}