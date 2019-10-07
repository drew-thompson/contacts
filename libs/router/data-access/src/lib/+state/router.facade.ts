import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRouter from './router.reducer';

@Injectable()
export class RouterFacade {
  routeId$ = this.store.pipe(select(fromRouter.selectRouteId));
  queryParams$ = this.store.pipe(select(fromRouter.selectQueryParams));

  constructor(private store: Store<fromRouter.RouterPartialState>) {}

  getQueryParam(key: string): Observable<string> {
    return this.store.select(fromRouter.selectQueryParam(key));
  }
}
