<script setup lang="ts">
const images = [
  '/images/Field (1).jpg',
  '/images/Field (2).jpg',
  '/images/Field (3).jpg',
  '/images/Field (4).jpg',
  '/images/Field (5).jpg',
  '/images/Field (6).jpg',
  '/images/Field (7).jpg',
  '/images/Field (8).jpg',
];
</script>

<template>
  <div class="px-4 py-12 bg-gradient-to-b from-[#f8f5f2] to-white">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="relative overflow-hidden rounded-xl shadow-lg group transition-all duration-500 hover:shadow-2xl hover:shadow-[#87675a]/30"
        >
          <img 
            :src="image"
            class="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">

            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#526168] to-[#87675a] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.grid > div {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }
.grid > div:nth-child(7) { animation-delay: 0.7s; }
.grid > div:nth-child(8) { animation-delay: 0.8s; }
</style>