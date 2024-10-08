// nuxt.config.ts

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: '~/plugins/iconify.js', mode: 'client' },
    { src: '~/plugins/particles.js', mode: 'client' },
    // เพิ่ม Axios plugin ถ้าคุณต้องการใช้ Axios
    // { src: '~/plugins/axios.js' }
  ],
  build: {
    transpile: ['particles.js']
  },
  // ลบบรรทัดนี้ออก
  // modules: ['@nuxtjs/axios'],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:5000/'
    }
  },
  compatibilityDate: '2024-10-08'
})
