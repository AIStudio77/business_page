import { ComponentType } from 'react';
import { SAMStore } from './SAMStore';

// Blueprint pattern implementation
export abstract class Blueprint {
  protected children: Map<string, Blueprint> = new Map();
  protected parent: Blueprint | null = null;
  protected store: SAMStore<any> | null = null;

  constructor(protected id: string) {}

  // Core blueprint method - returns React component
  abstract getComponent(): ComponentType<any>;

  // Tree structure methods
  addChild(id: string, blueprint: Blueprint): void {
    blueprint.parent = this;
    this.children.set(id, blueprint);
  }

  getChild(id: string): Blueprint | undefined {
    return this.children.get(id);
  }

  getParent(): Blueprint | null {
    return this.parent;
  }

  getId(): string {
    return this.id;
  }

  // Store management
  setStore(store: SAMStore<any>): void {
    this.store = store;
  }

  getStore<T>(): SAMStore<T> | null {
    return this.store as SAMStore<T> | null;
  }

  // Communication with parent/children
  sendToParent(message: any): void {
    if (this.parent) {
      this.parent.receiveFromChild(this.id, message);
    }
  }

  sendToChild(childId: string, message: any): void {
    const child = this.children.get(childId);
    if (child) {
      child.receiveFromParent(message);
    }
  }

  // Override these for inter-blueprint communication
  protected receiveFromChild(childId: string, message: any): void {
    // Default: do nothing
  }

  protected receiveFromParent(message: any): void {
    // Default: do nothing
  }

  // Cleanup
  destroy(): void {
    this.children.clear();
    this.parent = null;
    this.store = null;
  }
}