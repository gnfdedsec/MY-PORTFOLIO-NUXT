<template>
    <header class="bg-gray-900 text-white p-5">
      <div class="container mx-auto flex justify-between items-center">
        <div class=" w-40 md:w-80 lg:w-[400px]">
          <NuxtLink to="/">
            <img src="@/assets/img/logo.png" alt="Profile Image" class="h-full w-full object-cover">
          </NuxtLink>
        </div>
        
        <!-- Hamburger menu สำหรับมือถือและ iPad -->
        <button @click="toggleMenu" class="md:hidden">
          <Icon icon="heroicons-outline:menu" class="text-3xl" />
        </button>

        <!-- เมนูสำหรับหน้าจอขนาดใหญ่ -->
        <nav class="hidden md:block">
          <ul class="flex space-x-6">
            <li><a href="#" class="hover:text-green-300"><Icon icon="material-symbols-light:home-and-garden-outline" class="text-2xl" /> Home</a></li>
            <li><a href="#" class="hover:text-green-300"><Icon icon="arcticons:shareme" class="text-2xl" /> Skills</a></li>
            <li><a href="#" class="hover:text-green-300"><Icon icon="la:project-diagram" class="text-2xl" /> Project</a></li>
            <li><a href="#" class="hover:text-green-300"><Icon icon="line-md:compass-loop" class="text-2xl" /> Contact</a></li>
          </ul>
        </nav>
      </div>

      <!-- เมนูแบบ dropdown สำหรับมือถือและ iPad -->
      <nav v-if="isMenuOpen" class="md:hidden mt-4">
        <ul class="space-y-2">
          <li><a href="#" class="block hover:text-green-300"><Icon icon="material-symbols-light:home-and-garden-outline" class="text-2xl" /> Home</a></li>
          <li><a href="#" class="block hover:text-green-300"><Icon icon="arcticons:shareme" class="text-2xl" /> Skills</a></li>
          <li><a href="#" class="block hover:text-green-300"><Icon icon="la:project-diagram" class="text-2xl" /> Project</a></li>
          <li><a href="#" class="block hover:text-green-300"><Icon icon="line-md:compass-loop" class="text-2xl" /> Contact</a></li>
        </ul>
      </nav>
    </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>
