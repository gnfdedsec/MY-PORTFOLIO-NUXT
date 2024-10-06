<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    
    <main class="flex-grow container mx-auto p-4">
      <slot />
    </main>


      <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>