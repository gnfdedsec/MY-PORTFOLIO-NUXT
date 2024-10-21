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
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    detail: 'Personnel Management System for ENKKU Academic Staff',
    technologies: ['Next.js', 'Tailwind CSS', 'JWT API', 'MySQL']
  },
  {
    name: 'ENKKU Donations',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    detail: 'Online donation system for supporting faculty funds',
    technologies: ['PHP', 'Bulma', 'MySQL', 'Vanilla JS']
  },
  {
    name: 'HRM Realtime',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    detail: 'Human Resource Management System for the Faculty',
    technologies: ['PHP', 'Chart.js']
  },
  {
    name: 'Multisite Management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
    detail: 'Multiple Website Management System',
    technologies: ['WordPress', 'Ubuntu']
  },
  {
    name: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    detail: 'Project management skills for development teams',
    technologies: ['Freedcamp', 'Soft skill', 'Business Analytics']
  },
  {
    name: 'Teaster Project',
    image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    detail: 'Automated software testing skills and manual testing skills',
    technologies: ['Next.js', 'Discord.js', 'Jest', 'UAT']
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
