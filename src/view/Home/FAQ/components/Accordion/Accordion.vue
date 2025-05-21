<!-- <script setup lang="ts">
import {ref} from 'vue';

const {question, answer} = defineProps<{
    question: string;
    answer: string;
}>();

const isOpen = ref(false);
</script>

<template>
    <div class="h-fit px-4 py-5 flex flex-col w-full border border-black/50" @click="isOpen = !isOpen" dir="rtl">
        <div v-text="question"></div>
        <div v-text="answer" class="overflow-hidden transition-all duration-500" :style="{height: isOpen ? '100%' : '0px'}"></div>
    </div>
</template> -->

<script setup lang="ts">
import {ref} from 'vue';
const {question, answer} = defineProps<{
    question: string;
    answer: string;
}>()
const isOpen = ref(false);
</script>

<template>
    <div :style="{background: isOpen ? '#D5D5D5': '#F3F3F3'}" class="accordion  flex w-full flex-col px-10 py-10 rounded-xl border border-black/50" dir="rtl">
        <div @click="isOpen = !isOpen" class="flex justify-between items-center cursor-pointer">
            <p class="text-xl flex items-center gap-4 font-medium"> {{ question }}</p>
        </div>
        <template v-if="isOpen">
            <br>
            <hr>
            <br>
        </template>
        <div dir="rtl" :style="{'height': isOpen ? 'auto' : '0'}" class="overflow-hidden">{{ answer }}</div>
    </div>
</template>

<style scoped>
.accordion {
    user-select: none;
}
</style>