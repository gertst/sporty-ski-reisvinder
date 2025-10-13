export default defineNuxtConfig({
  compatibilityDate: "2025-10-07",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],

  // Static site generation configuration
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  // GitHub Pages configuration - relative paths
  app: {
    baseURL:
      process.env.NODE_ENV === "production" ? "/sporty-ski-reisvinder/" : "/",
    buildAssetsDir: "_nuxt/",
    head: {
      title: "Sporty Ski Reisvinder",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Vind de perfecte Sporty Ski-reis voor jouw gezin! Beantwoord de stellingen en ontdek welke bestemming het beste bij jullie past.",
        },
      ],
      htmlAttrs: {
        lang: "nl",
      },
    },
  },

  typescript: {
    strict: true,
  },

  // Ensure compatibility with static hosting
  ssr: false,
});
