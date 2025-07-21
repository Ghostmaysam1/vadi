<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="w-full min-h-[100vh]">
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Component :is="Component" />
      </KeepAlive>
    </RouterView>
  </div>
</template>
