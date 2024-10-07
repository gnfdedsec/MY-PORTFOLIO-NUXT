<template>
    <div class="relative w-full h-full mx-auto my-8 bg-gray-800 p-5 rounded-xl border-2 border-green-500 ">
      <div class="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-15   text-white">
        <div class="relative p-6">
          <h2 class="text-2xl font-bold uppercase mb-4">
            💻 Work <span class="text-green-400">philosophy</span>
          </h2>
          <p class="text-lg">{{ quote }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quote: "Always hungry for knowledge, I consistently develop myself with contemporary skills"
      }
    }
  }
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์เพิ่มเติมตามต้องการ */
  </style>