export default {
  publicRuntimeConfig: {
    API: process.env.API_URL,
    TOKEN: process.env.API_TOKEN,
    NOTE_API: process.env.NOTE_API,
    NOTE_MAGAZINE_ID: process.env.NOTE_MAGAZINE_ID,
    HUBSPOT_PORTALID: process.env.HUBSPOT_PORTALID,
    HUBSPOT_FORMID: process.env.HUBSPOT_FORMID,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '宮崎県ひなた餃子連合会',
    htmlAttrs: {
      lang: 'ja',
      class: ['scroll-smooth'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=IM+Fell+English+SC&family=Noto+Serif+Japanese:wght@900' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faInfoCircle',
        'faMapMarkerAlt',
      ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  router: {
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
