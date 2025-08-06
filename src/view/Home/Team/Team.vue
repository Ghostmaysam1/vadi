<script setup lang="ts">
import { useWindowSize } from '../../../utils/shared';
import Member from '../../../components/Member.vue';
import useStore from '../../../store';
const store = useStore();
import '@splidejs/vue-splide/css/default';
import { reactive } from 'vue';

const { width } = useWindowSize();

const team = store.team;

const options = reactive({
  type: 'loop',
  rewind: true,
  perPage: 2,
  perMove: 1,
  arrows: false,
  dragMinThreshold: 15,
  breakpoints: {
    999999: {
      perPage: 4
    },
    1280: {
      perPage: 3
    },
    1024: {
      perPage: 2
    },
    768: {
      perPage: 2
    },
    640: {
      perPage: 1,
    }
  }
})

</script>

<template>
  <section class="w-full py-16 bg-gradient-to-b from-[#f8f5f2] to-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2
          class="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] px-8 py-3">
          تیم حرفه‌ای ما
        </h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          متخصصان با تجربه در حوزه‌های مختلف فناوری
        </p>
      </div>

      <Splide :options="options" class="h-[590px]" aria-label="My Favorite Images">
        <SplideSlide v-for="member in team" :key="member.name" class="h-[590px]">
          <Member class="lg:w-full" :member="member" />
        </SplideSlide>
      </Splide>

    </div>
  </section>
</template>

<style scoped>
.splide__pagination__page.is-active {
  background: #000;
}
</style>