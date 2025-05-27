<script setup lang="ts">
import {ref} from 'vue';

import MemberResume from './components/MemberResume/MemberResume.vue';
import useStore from '../../store';;

const store = useStore();

const team = ref(store.team);

</script>

<template>
    <div class="bg-gradient-to-b from-[#f8f5f2] to-white py-16">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2
                    class="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] px-8 py-3">
                    تیم حرفه‌ای ما
                </h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    متخصصان خلاق و با تجربه در حوزه‌های مختلف
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8">
                <template v-for="member in team">
                    <MemberResume :member="member" />
                </template>
            </div>
        </div>
    </div>
</template>