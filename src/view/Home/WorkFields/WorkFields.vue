<script setup lang="ts">
const images = [
  '/images/Field (1).jpg',
  '/images/Field (2).jpg',
  '/images/Field (3).jpg',
  '/images/Field (4).jpg',
  '/images/Field (5).jpg',
  '/images/Field (6).jpg',
  '/images/Field (7).jpg',
  '/images/Field (8).jpg',
];
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto py-8">
    <div 
      v-for="(image, index) in images" 
      :key="index"
      class="w-[200px] h-[200px] group transition-transform duration-300 hover:scale-105"
    >
      <img 
        :src="image"
        class="w-full h-full object-fill"
      />
    </div>
  </div>
</template>

<style scoped>
</style>