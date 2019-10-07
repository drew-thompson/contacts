import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export const ROUTER_FEATURE_KEY = 'router';

export interface RouterPartialState {
  readonly [ROUTER_FEATURE_KEY]: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<RouterPartialState, fromRouter.RouterReducerState<any>>(
  ROUTER_FEATURE_KEY
);

export const {
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = fromRouter.getSelectors(selectRouter);

export const selectRouteId = selectRouteParam('id');
export const selectStatus = selectQueryParam('status');

export const routerReducers: ActionReducerMap<RouterPartialState> = {
  [ROUTER_FEATURE_KEY]: routerReducer
};
