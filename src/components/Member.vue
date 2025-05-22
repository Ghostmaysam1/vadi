<script setup lang="ts">
defineProps<{
  member: {
    id: string;
    image: string;
    name: string;
    title: string;
    skills?: string[];
  }
}>();
</script>

<template>
  <div dir="rtl" class="group h-full min-w-[300px] px-4 py-6">
    <div
      class="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#87675a]/30">
      <div class="relative h-60 overflow-hidden">
        <img :src="member.image" :alt="member.name"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <div class="p-6 relative text-right z-30">
        <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
        <p class="text-[#87675a] font-medium mb-4">{{ member.title }}</p>

        <div v-if="member.skills" class="flex w-full flex-wrap gap-1 mb-5">
          <span v-for="(skill, index) in member.skills.slice(0, 3)" :key="index"
            class="px-3 py-1 bg-[#f3f0ed] text-sm rounded-full text-[#526168]">
            {{ skill }}
          </span>
          <span v-if="member.skills.length > 3" class="px-3 py-1 shadow-md text-xs bg-[#f3f0ed] text-[#526168] rounded-full">...</span>
        </div>

        <router-link :to="`/team/${member.name}`"
          class="inline-block px-6 cursor-pointer py-2 bg-gradient-to-r from-[#526168] to-[#87675a] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
          مشاهده رزومه
        </router-link>
      </div>

      <div class="absolute inset-0 bg-[#87675a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      </div>
    </div>
  </div>
</template>