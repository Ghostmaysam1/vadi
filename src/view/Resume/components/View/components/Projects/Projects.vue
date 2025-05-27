<script setup lang="ts">
import type { Member } from '../../../../../../types';
import Slide from './components/Slide/Slide.vue';
defineProps<{
  member: Member;
}>()
</script>

<template>
  <div class="w-full relative z-10 mt-[-20px]">
    <div class="w-full min-h-[250px] rounded-b-2xl p-6 shadow-lg">
      <h3
        class="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] mb-4 text-center">
        پروژه‌های منتخب</h3>

      <div class="flex flex-col items-center gap-4 scroll-smooth snap-mandatory">
        <Slide v-for="(project, index) in member.projects" :key="index" :project />
      </div>
    </div>
  </div>
</template>