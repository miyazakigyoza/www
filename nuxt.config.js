export default {
  publicRuntimeConfig: {
    API: process.env.API_URL,
    TOKEN: process.env.API_TOKEN,
    NOTE_API: process.env.NOTE_API,
    NOTE_MAGAZINE_ID: process.env.NOTE_MAGAZINE_ID,
    HUBSPOT_PORTALID: process.env.HUBSPOT_PORTALID,
    HUBSPOT_FORMID: process.env.HUBSPOT_FORMID,
    GOOGLE_MAP: process.env.GOOGLE_MAP,
    GTAG_ID: process.env.GTAG_ID,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '宮崎県ひなた餃子連合会',
    titleTemplate: '%s | 宮崎県ひなた餃子連合会',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og:http://ogp.me/ns#',
      class: ['scroll-smooth'],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: '宮崎県ひなた餃子連合会' },
      { hid: 'og:title', property: 'og:title', content: '宮崎県ひなた餃子連合会' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:description', property: 'og:description', content: '' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.miyazakigyoza.jp/' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.miyazakigyoza.jp/img/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=IM+Fell+English+SC&family=Noto+Serif+Japanese:wght@400;900&display=block' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/v-scroll',
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
        'faCircleInfo',
        'faMapMarkerAlt',
        'faMap',
        'faCaretRight',
        'faPaperPlane',
        'faBullhorn',
        'faSpinner',
        'faAngleRight',
        'faAngleLeft',
        'faCarSide',
        'faPersonWalking',
      ],
      regular: [
        'faPaperPlane',
      ],
      brands: [
        'faTwitter',
        'faFacebook',
        'faLine',
      ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-gtag', {
      id: process.env.GTAG_ID,
      debug: false,
    }]
  ],

  router: {
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
