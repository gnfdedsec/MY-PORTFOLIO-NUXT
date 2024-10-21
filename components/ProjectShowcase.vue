<template>
  <div class="p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="project in projects" :key="project.name" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ project.detail }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in project.technologies" :key="tech" class="px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">{{ tech }}</span>
          </div>
          <a href="#" class="inline-block text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-colors duration-300">View Details</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    name: 'CVS Interest Research',
    image: 'https://img.freepik.com/free-vector/human-resources-concept-illustration_114360-7801.jpg',
    detail: 'Personnel Management System for ENKKU Academic Staff',
    technologies: ['Next.js', 'Tailwind CSS', 'JWT API', 'MySQL']
  },
  {
    name: 'ENKKU Donations',
    image: 'https://img.freepik.com/free-vector/charity-concept-illustration_114360-8220.jpg',
    detail: 'Online Donation System for Faculty Fund Support',
    technologies: ['PHP', 'Bulma', 'MySQL', 'Vanilla JS'] 
  },
  {
    name: 'HRM Realtime',
    image: 'https://img.freepik.com/free-vector/human-resources-management-concept-illustration_114360-8370.jpg',
    detail: 'Human Resource Management System for the Faculty',
    technologies: ['PHP', 'Chart.js']
  },
  {
    name: 'Multisite Management',
    image: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-cms-illustration_23-2149387396.jpg',
    detail: 'Multiple Website Management System',
    technologies: ['WordPress', 'Ubuntu']
  }
])
</script>

<style scoped>
.project-showcase {
  padding: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
