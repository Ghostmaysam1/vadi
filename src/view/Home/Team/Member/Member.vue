<script setup lang="ts">
const { slide } = defineProps<{
  slide: {
    img: string;
    name: string;
    title: string;
  };
}>();
</script>

<template>
  <div class="border-b rounded-lg w-2/3 md:w-full p-2 flex h-full flex-col items-center">
    <div class="h-2/3">
      <img :src="slide.img" class="h-full rounded-sm" />
    </div>
    <div class="flex flex-col items-center justify-evenly h-full">
      <p class="font-bold text-lg text-right">{{ slide.name }}</p>
      <p class="font-medium text-md">{{ slide.title }}</p>
      <button>رزومه</button>
    </div>
  </div>
</template>
