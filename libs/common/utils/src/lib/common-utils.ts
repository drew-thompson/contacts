import { InjectionToken } from '@angular/core';
import { Contact } from '@contacts/api-interface';

/**
 * Injection token for an app's environment file.
 * This **must be provided** in each app's `app.module.ts`.
 *
 * @example
 * providers: [
 *  { provide: ENVIRONMENT, useValue: environment }
 * ]
 */
export const ENVIRONMENT = new InjectionToken<string>('environment');

export function getHash(value: string): string {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i);
    // tslint:disable-next-line: no-bitwise
    hash = (hash << 5) - hash + character;
    // tslint:disable-next-line: no-bitwise
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString();
}

export function debounceEvent(delay: number = 150): MethodDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    let timeout = null;

    const original = descriptor.value;

    descriptor.value = function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}
