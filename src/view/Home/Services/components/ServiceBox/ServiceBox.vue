<script setup lang="ts">
const { src, title, icon } = defineProps<{
    src: `/images/${string}`,
    title: string,
    icon: string
}>();
</script>

<template>
    <div class="group relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden transition-all duration-500">
        <div 
            :style="{ backgroundImage: `url(${src})` }"
            class="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
        >
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div class="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
            <div class="transform transition-all duration-500 group-hover:-translate-y-2">
                <div v-if="icon" class="text-3xl sm:text-4xl mb-2 sm:mb-3 sm:opacity-80 sm:group-hover:opacity-100">
                    {{ icon }}
                </div>
                
                <h3 class="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{{ title }}</h3>
                
                <p class="text-gray-200 text-xs sm:text-sm mb-3 sm:mb-4 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    توضیحات مختصر درباره این خدمت
                </p>
                
                <button 
                    class="mt-2 sm:mt-4 px-4 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-[#526168] to-[#87675a] rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:transform sm:group-hover:translate-y-0 sm:translate-y-4"
                >
                    اطلاعات بیشتر
                </button>
            </div>
        </div>
    </div>
</template>