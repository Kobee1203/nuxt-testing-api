// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/hotel',
    head: {
      noscript: [{ children: 'Javascript is required' }],
    },
  },
});
