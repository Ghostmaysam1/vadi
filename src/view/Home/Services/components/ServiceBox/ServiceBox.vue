<script setup lang="ts">
const {src, title} = defineProps<{
    src: `/images/${string}`,
    title: string
}>();
</script>

<template>
    <div :style="{backgroundImage: `url(${src})`}" class="bg-cover w-1/5 h-[70%] rounded-md flex justify-center items-center backdrop-grayscale-25 hover:shadow-2xl shadow-amber-600/30 opacity-80 hover:opacity-100 transition-all duration-500">
        <p class="w-fit cursor-pointer text-center px-10 border border-black/10 shadow-lg py-2 rounded-full text-white bg-linear-to-br/oklab from-[#526168]/60 to-[#87675a]/60 backdrop-blur-sm text-lg hover:font-bold hover:scale-110 transition-all duration-75 font-[400]" v-text="title"></p>
    </div>
</template>