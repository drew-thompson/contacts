import { InjectionToken } from '@angular/core';

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

export function getHash(value: string): number {
  let hash = 0;
  for (var i = 0; i < value.length; i++) {
    var character = value.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
