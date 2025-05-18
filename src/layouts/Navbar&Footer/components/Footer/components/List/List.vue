<script setup lang="ts">
const {title} = defineProps<{
    title: string;
}>()
</script>

<template>
    <div class="h-full flex flex-col items-center gap-2">
        <h3 class="text-xl md:text-2xl font-bold" v-text="title"></h3>
        <span class="flex w-full gap-1 items-center justify-between">
            <span class="h-1 w-[20%] rounded-full bg-slate-700"></span>
            <span class="h-1 w-[50%] rounded-full bg-slate-700"></span>
            <span class="h-1 w-[20%] rounded-full bg-slate-700"></span>
        </span>
        <slot></slot>
    </div>
</template>