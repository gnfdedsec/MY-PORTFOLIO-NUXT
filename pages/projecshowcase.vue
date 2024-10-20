<template>
    <div id="app">
      <ProjectShowcase />
    </div>
</template>

<script>
import ProjectShowcase from './components/ProjectShowcase.vue';

export default {
  components: {
    ProjectShowcase
  }
};
</script>

<style>
/* เพิ่มสไตล์ที่ต้องการ */
#app {
  /* ตัวอย่างการเพิ่มสไตล์ */
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
