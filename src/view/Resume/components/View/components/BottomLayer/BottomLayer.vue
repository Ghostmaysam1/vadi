<script setup lang="ts">
import Slide from './components/Slide/Slide.vue';

const projects = [
  {
    title: 'سیستم مدیریت محتوا',
    description: 'طراحی رابط کاربری برای پنل مدیریت',
    tags: ['UI Design', 'Dashboard', 'Vue.js']
  },
  {
    title: 'اپلیکیشن موبایل',
    description: 'تجربه کاربری برای استارتاپ سلامت',
    tags: ['Mobile', 'UX Research', 'Figma']
  },
  {
    title: 'وبسایت شرکتی',
    description: 'طراحی مدرن برای برند لوکس',
    tags: ['Web Design', 'Branding', 'Animation']
  }
];
</script>

<template>
  <div class="w-full relative z-10 mt-[-20px]">
    <div class="w-full min-h-[250px]  bg-white rounded-b-2xl border-2 border-[#E8D8D8] p-6 shadow-lg">
      <h3
        class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] mb-4 text-center">
        پروژه‌های منتخب</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Slide v-for="(project, index) in projects" :key="index" :title="project.title"
          :description="project.description" :tags="project.tags" />
      </div>
    </div>
  </div>
</template>