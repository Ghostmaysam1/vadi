<script setup lang="ts">
import type { Member } from '../types';

defineProps<{
  member: Member
}>();
</script>

<template>
  <div dir="rtl" class="group h-full min-w-[250px] px-4 pt-6">
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

        <p>{{ member.bio.slice(0, member.bio.length / 2.5 + (Math.random() * 5)) + '...' }} </p>

        <div class="flex justify-end">

          <router-link :to="`/team/${member.id}`"
            class="inline-block px-6 cursor-pointer py-2 bg-gradient-to-r from-[#526168] to-[#87675a] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
            مشاهده رزومه
          </router-link>
        </div>
      </div>

      <div class="absolute inset-0 bg-[#87675a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
    </div>
  </div>
</template>