<template>
  <div class="project-showcase">
    <div class="row">
      <div class="col-md-3" v-for="project in projects" :key="project.name">
        <div class="card">
          <img :src="project.image" class="card-img-top" alt="Project Image">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.detail }}</p>
          </div>
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

