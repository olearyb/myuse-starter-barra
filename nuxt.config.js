export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    { src: "~assets/styles/myuse.scss", lang: "scss" },
    { src: "~assets/styles/custom.scss", lang: "scss" },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: "~/plugins/vue-chart.js", mode: "client",
    src: "~/plugins/vuex-persistedstate.js", ssr: false,
  }],
  /*plugins: [
    {
      src: "~/plugins/vue-chart.js",
      mode: "client",
    },
  ],*/
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //"@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "vue-swatches/nuxt", '@neneos/nuxt-animate.css'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Open Sans",
      },
      icons: "mdi",
    },
    customVariables: ["~/assets/styles/variables.scss"],
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: "#1976D2",
          accent: "#1263C7",
          secondary: "#FFEB3B",
          info: "#8CBBE9",
          warning: "#FFC107",
          error: "#F44336",
          success: "#00E676",
        },
      },
    },
  },
  /*
   ** Customize the generated output folder
   */
  generate: {
    dir: "public",
  },

  /*
   ** Customize the base url
   */
  router: {
    base: "/myuse-starter-barra/", //this is whatever the project is named
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    /*
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },*/
  },
}
