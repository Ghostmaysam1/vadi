<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { ref } from 'vue'
import type { Project } from '../../../../../../../../types'
import { useWindowSize } from '../../../../../../../../utils/shared';
const {height} = useWindowSize();
defineProps<{
  project: Project;
}>();


const currentSlide = ref(0)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: "fade" as "fade",
  mouseDrag: false,
  touchDrag: false,
  height: height.value - 80 - 40 - 90 - 100,
}

const thumbnailsConfig = {
  height: 80,
  itemsToShow: 6,
  wrapAround: true,
  touchDrag: true,
  gap: 10,
}
</script>

<template>
  <div class="w-full snap-center h-[100vh] flex flex-col justify-start items-center overflow-hidden">
    <div class="h-[calc(100%-80px-40px-100px)] aspect-[2/1] rounded-t-2xl">
      <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
        <Slide v-for="image in project.images" :key="image">
          <img :src="image" alt="Gallery Image" class="rounded-[16px]" />
        </Slide>
      </Carousel>

      <Carousel class="mt-[10px]" v-bind="thumbnailsConfig" v-model="currentSlide">
        <Slide v-for="image in project.images" :key="image">
          <template #default="{ currentIndex }">
            <div class="cursor-pointer h-full w-full" @click="slideTo(currentIndex)">
              <img :src="image" alt="Thumbnail Image" class="thumbnail-image" />
            </div>
          </template>
        </Slide>
      </Carousel>
    </div>
    <div class="w-full h-9 opacity-100 flex justify-center items-center rounded-b-2xl">
      {{ project.name }}
    </div>
  </div>
</template>

<style scoped>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.is-active {
  opacity: 1;
}
</style>