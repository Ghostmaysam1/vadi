<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

import Login from './Auth/Login/Login.vue';
import SignUp from './Auth/SignUp/SignUp.vue';
</script>

<template>
  <div class="w-full min-h-[100vh]">
    <KeepAlive><Login  v-if="route.path == '/login'" /></KeepAlive>
    <KeepAlive><SignUp v-if="route.path == '/signup'" /></KeepAlive>
  </div>
</template>
