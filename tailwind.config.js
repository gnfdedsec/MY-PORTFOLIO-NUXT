/** @type {import('tailwindcss').Config} */
const { addIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./src/*.html" // รวมเส้นทางไฟล์ที่ต้องการใช้
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors({
      iconSets: ['iconoir'], // เพิ่มเซ็ต 'iconoir' ที่ต้องการใช้
    }),
  ],
};
