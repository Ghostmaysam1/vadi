<script setup lang="ts">
import { reactive, watch } from 'vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { useWindowSize } from '../../../utils/shared';
import Member from '../../../components/Member.vue';
import useStore from '../../../store';
const store = useStore();

const { width } = useWindowSize();

const team = store.team;

const config = reactive({
  height: 550,
  itemsToShow: 3,
  gap: 0,
  wrapAround: true,
  mouseWheel: true,
  transition: 500
});

watch(width, (w)=>{
    if(w > 768) {
        if(w > 1024) {
          config.height = 550;
        }
        config.itemsToShow = 3;
    } else {
        config.itemsToShow = 1;
    }
}, {immediate: true})
</script>

<template>
  <section class="w-full py-16 bg-gradient-to-b from-[#f8f5f2] to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] px-8 py-3">
          تیم حرفه‌ای ما
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          متخصصان با تجربه در حوزه‌های مختلف فناوری
        </p>
      </div>

      <Carousel 
        v-bind="config" 
        class="w-full max-w-6xl lg:max-w-8xl mx-auto"
      >
        <Slide v-for="member in team" :key="member.name">
          <Member class="lg:w-full" :member="member" />
        </Slide>

        <template #addons>
          <Pagination class="top-[100%]" />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style>
.carousel__pagination-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #d1d5db;
  transition: all 0.3s;
}

.carousel__pagination-button--active {
  background-color: #87675a;
  transform: scale(1.2);
}

.carousel__pagination {
  gap: 8px;
}
</style>