<template>
 <div  class="flex flex-col items-center  border border-black mt-2 p-4 rounded-lg"> 

    <Icon icon="line-md:document-code" class="text-6xl text-orange-400" />

        <h1 class=" text-5xl mt-1 font-bold">
           MY  <span class="bg-gradient-to-r from-green-400 via-fuchsia-500 to-orange-500 bg-[length:100%_6px] bg-no-repeat bg-bottom font-mono text-7xl">SKILLS</span>
    </h1>
  
    <svg class="animate-bounce w-6 h-6 ...">
  <!-- ... -->dd
</svg>
    <div class="flex flex-row justify-center  items-center mt-10">
        <button class="border border-gray-500  rounded-md p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2">
            <Icon icon="teenyicons:wordpress-solid" class="text-6xl text-gray-900" />
        <span class="text-gray-500 mt-2 ml-2"> Wordpress</span>
      </button>
      <!-- ปุ่มที่มีเส้นขอบสีเขียวและไอคอน Docker -->
      <button class="border border-gray-500 p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2 rounded-xl  ">
        <Icon icon="devicon-plain:git-wordmark"  class="text-6xl text-gray-800" />
        <span class="text-slate-500 mt-2">Github</span>
      </button>
      <button class="border border-gray-500  rounded-md p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2">
        <Icon icon="file-icons:nextjs" class="text-6xl text-gray-900" />
        <span class="text-gray-500 mt-2 ml-2"> Next js</span>
      </button>
      <button class="border border-gray-500   p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2 rounded-xl ">
        <Icon icon="file-icons:docker" class="text-6xl text-gray-800" />
        <span class="text-gray-500 mt-2">Docker</span>
      </button>
      <button class="border border-gray-500  rounded-md p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2">
        <Icon icon="file-icons:test-react" class="text-6xl text-gray-900" />
        <span class="text-gray-500 mt-2 ml-2"> React js</span>
      </button>
      <button class="border border-gray-500 rounded-md p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2">
      <Icon icon="devicon-plain:php" class="text-6xl text-gray-800" />
      <span class="text-gray-500 mt-2">PHP</span>
    </button>
    <button class="border border-gray-500 rounded-md p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2">
        <Icon icon="file-icons:tailwind"  class="text-6xl text-gray-800" />
      <span class="text-gray-500 mt-2">Tailwind</span>
    </button>
    <button class="border border-gray-500 rounded-md p-4 flex items-center hover:bg-gray-50 transition duration-500 ml-2">
        <Icon icon="codicon:vscode-insiders" class="text-6xl text-gray-900" />
      <span class="text-gray-500 mt-2">VScode</span>
    </button>


    </div>
</div>
  </template>
  
  <script>
  import { Icon } from '@iconify/vue'; // อย่าลืมนำเข้า Iconify
  
  export default {
    components: {
      Icon
    }
  };
  </script>
  
  <style scoped>
  /* คุณสามารถเพิ่มการปรับแต่ง CSS เพิ่มเติมได้ที่นี่ */
  </style>
  