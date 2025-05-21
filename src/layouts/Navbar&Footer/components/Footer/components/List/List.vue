<script setup lang="ts">
const { title } = defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="h-full flex flex-col items-start gap-4">
        <div class="flex flex-col w-full">
            <h3 class="text-2xl font-bold text-[#526168] mb-2">{{ title }}</h3>
            <div class="flex w-full gap-1 items-center">
                <span class="h-[3px] w-1/4 rounded-full bg-[#87675a]"></span>
                <span class="h-[3px] w-3/4 rounded-full bg-[#87675a]/30"></span>
            </div>
        </div>
        <div class="w-full">
            <slot></slot>
        </div>
    </div>
</template>