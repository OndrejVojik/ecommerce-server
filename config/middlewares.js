module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:', 'https://ondrejvojik.github.io/ecommerce-client'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://ondrejvojik.github.io/ecommerce-client'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://ondrejvojik.github.io/ecommerce-client'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://ondrejvojik.github.io/ecommerce-client'], // Allow requests from your local development environment
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization'],
      keepHeadersOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];