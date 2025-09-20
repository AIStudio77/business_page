import { SAMStore, type Action } from './SAMStore';

export interface ThemeState {
  mode: 'light' | 'dark';
  isTransitioning: boolean;
}

export class ThemeStore extends SAMStore<ThemeState> {
  constructor() {
    super({
      mode: 'light',
      isTransitioning: false
    });
    
    // Initialize theme from localStorage or system preference
    this.initializeTheme();
  }

  apply(action: Action): void {
    switch (action.type) {
      case 'TOGGLE_THEME':
        this.state = {
          ...this.state,
          mode: this.state.mode === 'light' ? 'dark' : 'light',
          isTransitioning: true
        };
        this.persistTheme();
        this.applyThemeToDOM();
        
        // Clear transition flag after animation
        setTimeout(() => {
          this.state = { ...this.state, isTransitioning: false };
          this.notify();
        }, 200);
        break;
        
      case 'SET_THEME':
        this.state = {
          ...this.state,
          mode: action.payload as 'light' | 'dark'
        };
        this.persistTheme();
        this.applyThemeToDOM();
        break;
    }
    this.notify();
  }

  private initializeTheme(): void {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.state.mode = saved || (systemDark ? 'dark' : 'light');
    this.applyThemeToDOM();
  }

  private persistTheme(): void {
    localStorage.setItem('theme', this.state.mode);
  }

  private applyThemeToDOM(): void {
    const root = document.documentElement;
    if (this.state.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}