<template>
 <div  class="flex flex-col items-center  border border-black mt-2 p-4 rounded-lg"> 
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
        <button 
            v-for="(button, index) in buttons" 
            :key="index" 
            :class="{'md:flex': index >= 2 && index < 3, 'lg:flex': index >= 3, 'hidden': (index >= 2 && index < 3 && !isMdScreen) || (index >= 3 && !isLgScreen)}" 
            :style="{ animationDelay: `${index * 100}ms` }"
            class="brutalism-button animate__animated animate__fadeInUp"
            @click="handleButtonClick(button)"
        >
            <Icon :icon="button.icon" class="text-4xl md:text-6xl" />
            <span class="mt-2 text-sm md:text-base">{{ button.name }}</span>
        </button>
    </div>
</div>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue'; // อย่าลืมนำเข้า Iconify
  import { ref, onMounted } from 'vue';
  import 'animate.css';

  export default {
    components: {
      Icon
    },
    setup() {
      const buttons = [
        { name: 'Wordpress', icon: 'teenyicons:wordpress-solid' },
        { name: 'Github', icon: 'devicon-plain:git-wordmark', url: 'https://github.com/gnfdedsec?tab=repositories' },
        { name: 'Next.js', icon: 'file-icons:nextjs' },
        { name: 'Docker', icon: 'file-icons:docker' },
        { name: 'React.js', icon: 'file-icons:test-react' },
        { name: 'PHP', icon: 'devicon-plain:php' },
        { name: 'Tailwind', icon: 'file-icons:tailwind' },
        { name: 'VSCode', icon: 'codicon:vscode-insiders' },
        { name: 'PostgreSQL', icon: 'devicon-plain:postgresql-wordmark' },
        { name: 'MySQL', icon: 'devicon-plain:mysql-wordmark' },
      ];

      const isMdScreen = ref(false);
      const isLgScreen = ref(false);

      const handleButtonClick = (button) => {
        if (button.url) {
          window.open(button.url, '_blank');
        }
      };

      onMounted(() => {
        const checkScreenSize = () => {
          isMdScreen.value = window.innerWidth >= 768;
          isLgScreen.value = window.innerWidth >= 1024;
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        buttons.forEach((_, index) => {
          setTimeout(() => {
            const button = document.querySelectorAll('.brutalism-button')[index];
            button.classList.remove('translate-y-4', 'opacity-0');
          }, index * 100);
        });
      });

      return {
        buttons,
        isMdScreen,
        isLgScreen,
        handleButtonClick,
      };
    }
  };
  </script>
  
  <style scoped>
  @import 'animate.css';

  /* คุณสามารถเพิ่มการปรับแต่ง CSS เพิ่มเติมได้ที่นี่ */
  .brutalism-button {
    @apply flex flex-col items-center justify-center p-4 bg-white text-black border-2 border-black transition-colors duration-300;
  }
  
  .brutalism-button:hover {
    @apply bg-black text-white;
  }
  </style>
