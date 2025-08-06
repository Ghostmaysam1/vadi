<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Member } from '../types';
import { useWindowSize } from '../utils/shared';

const {member} = defineProps<{
  member: Member
}>();

const {width} = useWindowSize();

function sliceText(txt: string, finalLength: number): string {
  let arr = txt.split(' ');

  let arr2 = [];
  let length = 0;

  for(let i=0;i<arr.length;i++) {
    if(length + arr[i].length < finalLength) {
      arr2.push(arr[i]);
      length += arr[i].length
    }
  }

  let text = arr2.join(' ');
  return text.length < finalLength ? text : text + '...';
}

const bio = ref(sliceText(member.bio, 100))

watch(width, (w)=>{
    if(w > 768) {
        if(w > 1024) {
          bio.value = sliceText(member.bio, 100)
        }else {
          bio.value = sliceText(member.bio, 60)
        }
    } else {
        bio.value = sliceText(member.bio, 50)
    }
}, {immediate: true})
</script>

<template>
  <div dir="rtl" class="group h-full min-w-[250px] px-4 py-1">
    <div
      class="relative h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#87675a]/30">
      <div class="relative h-3/5 overflow-hidden">
        <img :src="member.image" :alt="member.name"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div class="text-right h-2/5 py-2 px-1 flex justify-between flex-col">
        <div>
          <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
          <p class="text-[#87675a] font-medium mb-4">{{ member.position }}</p>
        </div>

        <p v-text="bio"></p>

        <div class="flex justify-end px-1 py-1">

          <router-link :to="`/team/${member.id}`"
            class="inline-block px-6 cursor-pointer py-2 bg-gradient-to-r from-[#526168] to-[#87675a] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
            مشاهده رزومه
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>