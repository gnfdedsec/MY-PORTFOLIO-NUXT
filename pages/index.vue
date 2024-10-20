<template>
  <div>
    <MainContent />
    <ShootingStarsBg><div class="w-full">0</div></ShootingStarsBg>
    <FavoriteQuote />
    <h1 class="text-3xl sm:text-4xl md:text-4xl mt-1 font-bold text-center">
      MY <span class="bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_6px] bg-no-repeat bg-bottom font-mono text-6xl sm:text-4xl md:text-3xl">SKILLS</span>
    </h1>
    <SkillSet />
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue'
import FavoriteQuote from '@/components/FavoriteQuote.vue'
import SkillSet from '~/components/SkillSet.vue'
import ShootingStarsBg from '~/components/ShootingStarsBg.vue'

export default {
  name: 'IndexPage',
  components: {
    MainContent,
    FavoriteQuote,
    SkillSet,
    ShootingStarsBg
  }
}
</script>

<style scoped>
/* เก็บ CSS อื่นๆ ที่ไม่เกี่ยวกับ fade ไว้ */
</style>
