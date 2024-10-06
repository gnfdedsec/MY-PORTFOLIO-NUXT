// nuxt.config.ts

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [{ src: '~/plugins/iconify.js', mode: 'client' },
    { src: '~/plugins/particles.js', mode: 'client' }
  ] ,
  build: {
    transpile: ['particles.js']
  }// เพิ่มบรรทัดนี้

})
