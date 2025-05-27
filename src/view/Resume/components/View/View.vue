<script setup lang="ts">
import { useRoute } from 'vue-router';
import useStore from '../../../../store';

import TopLayer from './components/TopLayer/TopLayer.vue';
import Projects from './components/Projects/Projects.vue';
const store = useStore();
const route = useRoute();

const member = store.team.filter((m) => m.id === route.params.id)[0];

</script>

<template>
  <div class="w-full relative flex flex-col items-center pt-[80px]">
    <TopLayer :member />
    <Projects :member />
  </div>
</template>