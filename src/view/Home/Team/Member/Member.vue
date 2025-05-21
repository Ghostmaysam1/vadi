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
  <div class="border-b border rounded-lg w-2/3 md:w-full p-2 flex h-full flex-col items-center">
    <div class="h-2/3">
      <img :src="slide.img" class="h-full rounded-sm" />
    </div>
    <div class="flex flex-col items-center justify-evenly h-full">
      <p class="font-bold text-lg text-right">{{ slide.name }}</p>
      <p class="font-medium text-md">{{ slide.title }}</p>
      <RouterLink :to="`/team/${slide.name}`"><button class="bg-amber-950/30 cursor-pointer text-2xl font-black px-4 py-2 border rounded-lg">رزومه</button></RouterLink>
    </div>
  </div>
</template>
