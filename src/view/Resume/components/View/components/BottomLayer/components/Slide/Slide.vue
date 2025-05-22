<template>
  <div
    class="bg-white rounded-xl overflow-hidden border-2 border-[#E8D8D8] hover:shadow-md transition-all duration-300 h-full flex flex-col">
    <div class="h-40 bg-gradient-to-r from-[#FFEEDA] to-[#FFC27A] flex items-center justify-center">
      <span class="text-[#87675a] font-medium">پیش‌نمایش پروژه</span>
    </div>
    <div class="p-4 flex-1 flex flex-col">
      <h4 class="text-lg font-semibold text-[#526168] mb-2">{{ title }}</h4>
      <p class="text-gray-600 text-sm mb-4">{{ description }}</p>

      <div class="mt-auto flex flex-wrap gap-2">
        <span v-for="(tag, index) in tags" :key="index"
          class="px-3 py-1 text-xs bg-[#FFEEDA] text-[#87675a] rounded-full">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  tags: Array
});
</script>