// nuxt.config.ts

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: '~/plugins/iconify.js', mode: 'client' }] // เพิ่มบรรทัดนี้
})
