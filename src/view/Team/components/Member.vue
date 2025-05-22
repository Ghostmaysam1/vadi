<script setup lang="ts">
const {name, image, position, skills} = defineProps<{
    name: string;
    image: string;
    position: string;
    skills: string[]
}>()
</script>

<template>
    <div
        class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 border border-[#E8D8D8]">
        <!-- تصویر عضو تیم -->
        <div class="relative h-64 overflow-hidden">
            <img :src="image" :alt="name"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <!-- اطلاعات عضو تیم -->
        <div class="p-6">
            <h3 class="text-xl font-bold text-[#526168]">{{ name }}</h3>
            <p class="text-[#87675a] font-medium mb-3">{{ position }}</p>

            <!-- مهارت‌ها -->
            <div class="flex flex-wrap gap-2 mt-2">
                <span v-for="(skill, i) in skills" :key="i"
                    class="px-3 py-1 text-xs bg-[#f3f0ed] text-[#526168] rounded-full">
                    {{ skill }}
                </span>
            </div>
        </div>
    </div>
</template>