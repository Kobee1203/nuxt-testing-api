// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      noscript: [{ children: 'Javascript is required' }],
    },
  },
  vite: {
    server: {
      hmr: {
        host: 'localhost',
      },
    },
  },
});
