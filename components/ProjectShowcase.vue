<template>
  <div class="p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="project in projects" :key="project.name" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <img :src="getImageUrl(project.image)" :alt="project.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ project.detail }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" :key="tech" class="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">{{ tech }}</span>
          </div>
          <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">ดูรายละเอียด</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    name: 'CVS ENKKU',
    image: '/img/card1.png',
    detail: 'ระบบจัดการข้อมูลสำหรับ ENKKU',
    technologies: ['Next.js', 'Tailwind CSS', 'JWT API','mysql']
  },
  {
    name: 'ENKKU Donations',
    image: '/img/card2.png',
    detail: 'ระบบรับบริจาคออนไลน์',
    technologies: ['PHP', 'Bulma','mysql']
  },
  {
    name: 'HRM',
    image: '/img/card3.png',
    detail: 'ระบบจัดการทรัพยากรบุคคล',
    technologies: ['React', 'Express.js']
  },
  {
    name: 'Multisite Management',
    image: '/img/card4.png',
    detail: 'ระบบจัดการหลายเว็บไซต์',
    technologies: ['WordPress', 'PHP']
  }
])

function getImageUrl(name) {
  return new URL(`/assets${name}`, import.meta.url).href
}
</script>

<style scoped>
.project-showcase {
  padding: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
