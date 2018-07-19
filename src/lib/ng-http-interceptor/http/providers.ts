import { Provider } from '@angular/core';
import { HttpInterceptorService } from './http-interceptor.service';
import {
  InterceptableHttpProxyNoOverrideProviders
} from './interceptable-http-proxy.service';
import { InterceptableHttpProviders } from './interceptable-http';
import { InterceptableStoreFactory } from './interceptable-store';

export const HTTP_INTERCEPTOR_NO_OVERRIDE_PROVIDER: Provider[] = [
  InterceptableStoreFactory,
  HttpInterceptorService,
  ...InterceptableHttpProviders,
  ...InterceptableHttpProxyNoOverrideProviders
];
