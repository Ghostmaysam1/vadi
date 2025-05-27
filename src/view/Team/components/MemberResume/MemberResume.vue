<script setup lang="ts">
import type { Member } from '../../../../types';

defineProps<{
    member: Member;
}>()
</script>

<template>
    <div dir="rtl"
        class="group h-full bg-slate-950 border border-black/10 shadow-sm flex gap-3 justify-between rounded-xl min-w-[250px] px-4 py-6">
        <div class="h-full w-2/5 xl:w-1/5">
            <img :src="member.image" :alt="member.name" class="rounded-full w-full aspect-square object-cover bg-white">
        </div>

        <div class="flex flex-col justify-between pt-5 w-full h-full gap-4">
            <div class="flex flex-col gap-2 lg:gap-5">
                <p v-text="member.name" class="font-bold text-2xl md:text-3xl lg:text-4xl text-white"></p>
                <p v-text="member.position" class="text-[#87675a] lg:text-xl"></p>
                <template class="hidden lg:block text-white">
                    <p class="">{{ member.bio.slice(0,member.bio.length / 2.5 + (Math.random() * 5)) + '...' }}</p>
                </template>
            </div>

            <div class="w-full flex justify-end">
                <router-link :to="`/team/${member.id}`"
                    class="inline-block px-6 md:text-lg xl:text-2xl cursor-pointer py-2 bg-gradient-to-r from-[#526168] to-[#87675a] text-white rounded-full text-sm font-medium hover:shadow-lg transition-all">
                    مشاهده رزومه
                </router-link>
            </div>
        </div>
    </div>
</template>