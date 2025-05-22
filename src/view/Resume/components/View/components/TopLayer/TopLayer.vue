<script setup lang="ts">
import type { Member } from '../../../../../../types';

defineProps<{
  member: Member
}>()
</script>

<template>
  <div class="w-full relative z-30">
    <div class="flex justify-center gap-1 mb-[-2px]">
      <button
        class="px-8 py-3 bg-white rounded-t-2xl border-t-2 border-x-2 border-[#E8D8D8] text-black text-xl font-medium transition-all duration-300 hover:bg-[#FFB45C]">
        رزومه
      </button>
    </div>

    <div class="w-full min-h-[250px] bg-white rounded-2xl  border-2 border-[#E8D8D8] p-6 shadow-lg">
      <div class="flex flex-col md:flex-row gap-6 h-full">

        <div class="flex-1 flex flex-col gap-4">
          <div
            class="bg-[#FFEEDA] w-full p-4 rounded-2xl border-2 border-dashed border-[#E8D8D8] flex items-center justify-center">
            <h2 class="text-2xl font-bold text-[#526168]" v-text="member.name"></h2>
          </div>

          <div dir="rtl" class="bg-[#FFEEDA] rounded-2xl border-2 border-[#E8D8D8] p-4 h-full">
            <div class="flex justify-between items-center mb-3">
              <h3 class="text-lg font-semibold text-[#87675a]">مهارت‌های تخصصی</h3>
              <p class="text-md font-bold text-gray-600" v-text="member.position"></p>
            </div>

            <div dir="ltr" class="flex flex-wrap gap-2 overflow-x-auto scroll-hidden">
              <span v-for="(skill, index) in member.skills" :key="index"
                class="px-4 py-2 rounded-full bg-white border border-[#E8D8D8] text-sm font-medium shadow-sm hover:bg-[#FFEEDA] transition-colors">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 flex justify-center items-center">
          <div class="relative w-full h-64 md:h-full rounded-xl overflow-hidden border-2 border-[#E8D8D8] shadow-md">
            <img src="/images/xb.png" :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
</style>