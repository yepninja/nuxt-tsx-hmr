
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  buildModules: [
    '@nuxt/typescript-build',
    function () {
      this.extendBuild((config, { isClient, isModern }) => {
        // @ts-ignore
        const tsRules = config.module.rules.filter(r => r.test.test('.tsx') || r.test.test('.ts'))

        tsRules.forEach((rule) => {
          // @ts-ignore
          rule.use.unshift('vue-hot-reload-loader')
        })
      })
    }
  ]
}

export default config
