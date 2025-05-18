<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderFooter from './layouts/Header&Footer/Navbar&Footer.vue';
</script>

<template>
  <HeaderFooter>
    <RouterView />
  </HeaderFooter>
</template>