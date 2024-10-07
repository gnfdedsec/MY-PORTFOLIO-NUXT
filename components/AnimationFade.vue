<template>
    <div class="animation-fade">
      <transition name="fade">
        <p v-if="isMessageVisible" class="message">
          <slot></slot>
        </p>
      </transition>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'AnimationFade',
    setup() {
      const isMessageVisible = ref(false);
      let lastScrollPosition = 0;
  
      const handleScroll = () => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition > lastScrollPosition) {
          isMessageVisible.value = true;
        }
        lastScrollPosition = currentScrollPosition;
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        isMessageVisible,
      };
    },
  };
  </script>
  
  <style scoped>
  .animation-fade {
    @apply bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out;
  }
  
  .message {
    @apply mt-2 text-gray-600;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>