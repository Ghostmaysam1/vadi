<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref(false);
</script>

<template>
  <div
    dir="rtl"
    class="overflow-hidden border border-[#52616830] rounded-xl shadow-sm transition-all duration-300"
    :class="{
      'bg-white shadow-md': isOpen,
      'bg-gray-50 hover:bg-gray-100': !isOpen,
      'mt-2': isOpen
    }"
  >
    <div 
      @click="isOpen = !isOpen"
      class="flex items-center justify-between p-6 cursor-pointer select-none"
    >
      <h3 class="text-lg md:text-xl font-semibold text-gray-800">
        {{ question }}
      </h3>
      <div class="transition-transform duration-300" :class="{ 'rotate-180': isOpen }">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          class="text-[#87675a]"
        >
          <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <div 
      class="px-6 overflow-hidden transition-all duration-500 ease-in-out"
      :class="{
        'pb-6': isOpen,
        'max-h-0': !isOpen,
        'max-h-[500px]': isOpen
      }"
    >
      <div class="border-t border-gray-200 pt-4">
        <p class="text-gray-600 leading-relaxed text-justify">
          {{ answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-h-0 {
  transition: max-height 0.3s ease-out, padding 0.3s ease;
}
.max-h-\[500px\] {
  transition: max-height 0.5s ease-in, padding 0.5s ease;
}
</style>