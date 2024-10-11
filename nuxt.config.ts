// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['chart.js']
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  }
})