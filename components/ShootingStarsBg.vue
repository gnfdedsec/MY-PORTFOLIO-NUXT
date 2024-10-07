<template>
  <div class="shooting-stars-container">
    <div class="night">
      <div v-for="n in 2" :key="n" class="shooting_star"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShootingStarsBg'
}
</script>

<style scoped>
.shooting-stars-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.night {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1f2937; /* เปลี่ยนเป็น gray-800 */
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
}

.shooting_star {
  position: absolute;
  left: 0; /* เปลี่ยนจาก 50% เป็น 0 */
  top: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #22c55e, rgba(34, 197, 94, 0)); /* เปลี่ยนเป็นสีเขียว */
  border-radius: 999px;
  filter: drop-shadow(0 0 6px #22c55e); /* เปลี่ยนเป็นสีเขียว */
  animation: tail 6000ms ease-in-out infinite, shooting 6000ms ease-in-out infinite;
}

.shooting_star::before {
  content: '';
  position: absolute;
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(34, 197, 94, 0), #22c55e, rgba(34, 197, 94, 0)); /* เปลี่ยนเป็นสีเขียว */
  transform: translateX(50%) rotateZ(45deg);
  border-radius: 100%;
  animation: shining 6000ms ease-in-out infinite;
}

/* ... ส่วนที่เหลือของ CSS ยังคงเหมือนเดิม ... */

@keyframes tail {
  0% { width: 0; }
  30% { width: 100px; }
  100% { width: 0; }
}

@keyframes shining {
  0% { width: 0; }
  50% { width: 30px; }
  100% { width: 0; }
}

@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100vw); /* เปลี่ยนจาก 300px เป็น 100vw */
  }
}
</style>
