<script setup lang="ts">
defineProps<{
  member: {
    img: string;
    name: string;
    title: string;
    expertise?: string[];
  };
}>();
</script>

<template>
  <div class="group h-full px-4 py-6">
    <div class="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#87675a]/30">
      <!-- Image Section -->
      <div class="relative h-60 overflow-hidden">
        <img 
          :src="member.img" 
          :alt="member.name"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <!-- Content Section -->
      <div class="p-6 text-center">
        <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
        <p class="text-[#87675a] font-medium mb-4">{{ member.title }}</p>
        
        <!-- Expertise Tags -->
        <div v-if="member.expertise" class="flex flex-wrap justify-center gap-2 mb-5">
          <span 
            v-for="(skill, index) in member.expertise" 
            :key="index"
            class="px-3 py-1 bg-[#f3f0ed] text-sm rounded-full text-[#526168]"
          >
            {{ skill }}
          </span>
        </div>

        <router-link 
          :to="`/team/${member.name}`"
          class="inline-block px-6 py-2 bg-gradient-to-r from-[#526168] to-[#87675a] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
        >
          مشاهده رزومه
        </router-link>
      </div>

      <!-- Hover Effect -->
      <div class="absolute inset-0 bg-[#87675a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
</template>