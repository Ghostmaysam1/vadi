<script setup lang="ts">
import type { Member } from '../../../../../../types';

defineProps<{
  member: Member
}>()
</script>

<template>
  <div class="w-full relative z-30 _1232">
    <div class="w-full h-full min-h-[250px] bg-white bg-cover rounded-2xl">
      <div class="flex flex-col md:flex-row-reverse gap-6 h-full items-center">
        <div class="md:hidden w-full flex flex-col-reverse gap-6 p-4">
          <div class="w-full flex flex-col gap-4">
            <div class="bg-[#FFEEDA]/10 w-full p-4 gap-3 rounded-2xl">
              <h2 class="text-3xl font-bold text-[#526168] text-center">سلام من {{ member.name }} هستم</h2>
              <div class="flex justify-center items-center gap-2 my-3">
                <h3 class="text-lg font-semibold text-[#87675a]" v-text="member.position"></h3>
                <span class="h-1 w-[50px] bg-amber-300"></span>
              </div>
            </div>

            <div class="bg-[#FFEEDA]/10 rounded-2xl p-4">
              <p class="font-normal text-lg text-justify" v-text="member.bio"></p>
            </div>
          </div>

          <div class="w-full flex justify-center">
            <img :src="member.image" :alt="member.name" class="max-h-[300px] object-contain rounded-lg">
          </div>
        </div>

        <div class="hidden md:flex h-min flex-row-reverse gap-10 pl-32">
          <div dir="rtl">
            <div class="bg-[#FFEEDA]/10 w-full p-4 gap-3 rounded-2xl flex flex-col justify-center items-start">
              <h2 class="text-4xl font-bold text-[#526168]">سلام من {{ member.name }} هستم</h2>
              <div>
                <div class="flex items-center mb-3 flex-row gap-2">
                  <span class="h-1 w-[50px] bg-amber-300"></span>
                  <h3 class="text-lg font-semibold text-[#87675a]" v-text="member.position"></h3>
                </div>
              </div>
            </div>

            <div class="bg-[#FFEEDA]/10 gap-4 flex flex-col rounded-2xl p-4 h-full">
              <p class="w-[80%] font-normal text-2xl text-justify" v-text="member.bio"></p>
            </div>
          </div>

          <div class="scale-[105%] relative bottom-10">
            <img :src="member.image" :alt="member.name"
              class="h-full object-cover transition-transform duration-500 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-hidden::-webkit-scrollbar {
  display: none;
}

._1232 {
  height: calc(100vh - 80px);
}

@media (max-width: 767px) {
  ._1232 {
    height: auto;
    min-height: calc(100vh - 80px);
  }
}
</style>