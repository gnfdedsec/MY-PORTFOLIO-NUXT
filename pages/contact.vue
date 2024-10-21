<template>
  <div class="container mx-auto p-4">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">ติดต่อเรา</div>
          <h2 class="block mt-1 text-lg leading-tight font-medium text-black">ข้อมูลการติดต่อ</h2>
          <div class="mt-4">
            <div class="flex items-center mb-3">
              <Icon icon="mdi:email" class="text-2xl text-gray-600 mr-2" />
              <a href="mailto:ssuraw@gmail.com" class="text-gray-700 hover:text-indigo-500">ssuraw@gmail.com</a>
            </div>
            <div class="flex items-center">
              <Icon icon="mdi:phone" class="text-2xl text-gray-600 mr-2" />
              <a href="tel:095-330-4804" class="text-gray-700 hover:text-indigo-500">09-533-04804</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'ContactPage',
  components: {
    Icon
  }
}
</script>

<style scoped>
/* ไม่จำเป็นต้องเพิ่ม CSS เพิ่มเติม เนื่องจากใช้ Tailwind CSS แล้ว */
</style>

