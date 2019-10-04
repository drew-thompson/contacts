import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Environment } from '@contacts/api-interface';
import { ENVIRONMENT } from './common-utils';

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {
  constructor(@Inject(ENVIRONMENT) private environment: Environment) {}

  /**
   * Prepend outgoing API requests with required base URL.
   *
   * @description
   * Firebase requires this prepending for determining GCP function rewrites.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.isApiRequest(req)) {
      const url = this.prependOrigin(req.url);
      const outgoing: HttpRequest<any> = req.clone({ url });
      return next.handle(outgoing);
    }

    return next.handle(req);
  }

  private isApiRequest(req: HttpRequest<any>): boolean {
    return req.url.startsWith('api');
  }

  private prependOrigin(initial: string): string {
    return `${this.environment.apiBase}/${initial}`;
  }
}
