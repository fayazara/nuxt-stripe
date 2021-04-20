export default {
  target: "static",
  head: {
    title: "stripe-nuxt",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://js.stripe.com/v3/"
      }
    ]
  },
  plugins: ["~plugins/modal.js"],
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/axios", "@nuxt/content"],
  content: {},
  tailwindcss: {
    jit: true
  },
  axios: {
    baseURL: process.env.BASE_URL
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },
  build: {}
};
