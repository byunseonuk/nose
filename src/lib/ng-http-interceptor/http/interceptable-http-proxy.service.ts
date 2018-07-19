import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptorService } from './http-interceptor.service';

@Injectable()
export class InterceptableHttpProxyService implements ProxyHandler<any> {

  private static _callStack: string[] = [];

  private static _extractUrl(url: any[]): string {
    const dirtyUrl: string & { url: string } = url[0];
    return typeof dirtyUrl === 'object' && 'url' in dirtyUrl ? dirtyUrl.url : dirtyUrl;
  }

  constructor(private http: Http, private httpInterceptorService: HttpInterceptorService) {
  }

  request(url: string, options?): Observable<any> {

    const method = 'request';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }

  get(url: string, options?): Observable<any> {

    const method = 'get';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });

  }


  post(url: string, body: any, options?): Observable<any> {
    const method = 'post';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, body, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }

  put(url: string, body: any, options?): Observable<any> {
    const method = 'put';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, body, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }

  delete(url: string, options?): Observable<any> {
    const method = 'delete';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }

  patch(url: string, body: any, options?): Observable<any> {
    const method = 'patch';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, body, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }

  head(url: string, options?): Observable<any> {
    const method = 'head';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }

  options(url: string, options?): Observable<any> {
    const method = 'options';

    // create a object without prototype as the context object
    const context = Object.create(null);

    return this.httpInterceptorService
      ._interceptRequest(url, method, [url, options], context)
      .switchMap(args => {
        // Check for request cancellation
        if (!args) {
          return Observable.empty();
        }

        const response = this.http[method].apply(this.http, args);

        return this.httpInterceptorService._interceptResponse(
          InterceptableHttpProxyService._extractUrl(args), method, response, context);
      });
  }


}

export const _proxyTarget = () => null;

// Make sure all Http methods are known for Proxy Polyfill
Object.keys(Http.prototype).forEach(method => _proxyTarget[method] = `Http.${method}`);

export function _proxyFactory(http, interceptor) {
  return new InterceptableHttpProxyService(http, interceptor);
  // return safeProxy(_proxyTarget, new InterceptableHttpProxyService(http, interceptor));
}


export const InterceptableHttpProxyNoOverrideProviders = [
  {
    provide: InterceptableHttpProxyService,
    useFactory: _proxyFactory,
    deps: [Http, HttpInterceptorService]
  }
];
