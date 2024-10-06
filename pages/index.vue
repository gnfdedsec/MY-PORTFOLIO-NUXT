<template>
  <div>
    <div @mouseenter="showSkillSet">
      <MainContent />
    </div>
    <transition name="fade">
      <SkillSet v-if="isSkillSetVisible" />
    </transition>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import SkillSet from '~/components/SkillSet.vue'

export default {
  components: {
    MainContent,
    SkillSet
  },
  data() {
    return {
      isSkillSetVisible: false
    }
  },
  methods: {
    showSkillSet() {
      this.isSkillSetVisible = true; // แสดง SkillSet เมื่อเมาส์เลื่อนเข้ามาครั้งเดียว
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active ในบางเวอร์ชัน */ {
  opacity: 0;
}
</style>
