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
    '~/plugins/chakra-ui.js' // เพิ่ม plugin chakra-ui.js
  ],
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:5000/'
    }
  },
  compatibilityDate: '2024-10-08',
  // เพิ่มการกำหนดค่า vite เพื่อจัดการกับฟังก์ชันที่ไม่สามารถแปลงเป็นสตริงได้
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  }
})
