import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
});
