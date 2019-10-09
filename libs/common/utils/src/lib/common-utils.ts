import { InjectionToken, OnDestroy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { ActionCreator } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

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

export class LifeCycleComponent implements OnDestroy {
  /** Trigger to cancel subscriptions when this component is destroyed. */
  protected destroyed$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  /**
   * Automatically unsubscribe from observable on component OnDestroy lifecycle event.
   *
   * @param stream Input Observable stream that will unsubscribe when the current component is destroyed
   */
  protected autoDestroy<T>(stream: Observable<T>): Observable<T> {
    return stream.pipe(takeUntil(this.destroyed$));
  }
}

export class ContainerComponent extends LifeCycleComponent {
  constructor(protected actions: Actions) {
    super();
  }

  /**
   * Facilitates listening to actions within the ngrx store.
   *
   *
   * @param actionCreator The type of action, must be one of the ActionTypes enums used in .actions files
   * @param [opts={ autoDestroying: true, persist: false }] Options to prevent autodestroying and persist
   * the observable beyond its first event
   * @param The mutated action, ready for listening
   */
  protected onAction(
    actionCreator: ActionCreator,
    opts: { autoDestroying?: boolean; persist?: boolean } = { autoDestroying: true, persist: false }
  ) {
    let action = this.actions.pipe(ofType(actionCreator));
    if (!opts.persist) {
      action = action.pipe(take(1));
    } else if (opts.autoDestroying === undefined) {
      opts.autoDestroying = true;
    }
    if (opts.autoDestroying) {
      action = this.autoDestroy(action);
    }
    return action;
  }
}
