<template>
  <div>
    <MainContent />
    <ShootingStarsBg> <div class="w-full "> 0 </div> </ShootingStarsBg>
    
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import AnimationFade from '~/components/AnimationFade.vue'
import ShootingStarsBg from '~/components/ShootingStarsBg.vue'

export default {
  components: {
    MainContent,
    AnimationFade,
    ShootingStarsBg
  },
  data() {
    return {
   
    }
  },
  methods: {

  }
}
</script>

<style scoped>
/* เก็บ CSS อื่นๆ ที่ไม่เกี่ยวกับ fade ไว้ */
</style>

