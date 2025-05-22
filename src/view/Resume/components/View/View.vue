<script setup lang="ts">
import TopLayer from './components/TopLayer/TopLayer.vue';
import MidLayer from './components/MidLayer/MidLayer.vue';
import BottomLayer from './components/BottomLayer/BottomLayer.vue';
</script>

<template>
  <div class="w-full max-w-4xl mx-auto relative flex flex-col items-center px-4 pt-[100px]">
    <TopLayer />
    <MidLayer />
    <BottomLayer />
  </div>
</template>