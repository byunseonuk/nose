export const SAFE_PROXY_TRAPS = ['get', 'set', 'apply'];

export function identityFactory_(ref) {
  return ref;
}

export function identityFactory(provide, obj) {
  return {
    provide,
    useFactory: identityFactory_,
    deps: [obj]
  };
}

