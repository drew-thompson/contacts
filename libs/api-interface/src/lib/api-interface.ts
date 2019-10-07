/**
 * Response format of an API call with a data payload.
 */
export interface ApiResponse<T = any> {
  data: T;
}
