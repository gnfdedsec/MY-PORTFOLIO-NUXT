<template>
  <div class="p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="project in projects" :key="project.name" class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">{{ project.name }}</h3>
          <p class="text-gray-600 text-sm mb-4">{{ project.detail }}</p>
          <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">ดูรายละเอียด</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'CVS ENKKU',
          image: 'path/to/cvs-enkku-image.jpg',
          detail: 'เทคโนโลยีที่ใช้: Vue.js, Node.js'
        },
        {
          name: 'ENKKU Donations',
          image: 'path/to/enkku-donations-image.jpg',
          detail: 'การออกแบบ: ไดอะแกรมต่างๆ'
        },
        {
          name: 'HRM',
          image: 'path/to/hrm-image.jpg',
          detail: 'รูปหน้าจอโปรแกรม'
        },
        {
          name: 'Multisite',
          image: 'path/to/multisite-image.jpg',
          detail: 'เอกสารประกอบเพิ่มเติม'
        }
      ]
    };
  }
};
</script>

<style scoped>
.project-showcase {
  padding: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
