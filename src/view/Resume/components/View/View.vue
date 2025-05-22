<script setup lang="ts">
import TopLayer from './components/TopLayer/TopLayer.vue';
import MidLayer from './components/MidLayer/MidLayer.vue';
import BottomLayer from './components/BottomLayer/BottomLayer.vue';
import { useRoute } from 'vue-router';
import useStore from '../../../../store';
const store = useStore();
const route = useRoute();

const member = store.team.filter((m)=> m.id === route.params.id)[0];

</script>

<template>
  <div class="w-full max-w-4xl mx-auto relative flex flex-col items-center px-4 pt-[100px]">
    <TopLayer :member="member" />
    <MidLayer />
    <BottomLayer />
  </div>
</template>