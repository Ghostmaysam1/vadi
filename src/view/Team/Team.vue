<script setup lang="ts">
import Member from './components/Member.vue';

const team = [
    {
        name: "میثم آصفی",
        position: "توسعه دهنده فرانت‌اند",
        image: "/images/xc.png",
        skills: ["Vue.js", "React", "UI/UX"],
    },
    {
        name: "میثم آصفی",
        position: "توسعه دهنده فرانت‌اند",
        image: "/images/xa.png",
        skills: ["Vue.js", "React", "UI/UX"],
    },
    {
        name: "میثم آصفی",
        position: "توسعه دهنده فرانت‌اند",
        image: "/images/xb.png",
        skills: ["Vue.js", "React", "UI/UX"],
    },
    {
        name: "میثم آصفی",
        position: "توسعه دهنده فرانت‌اند",
        image: "/images/xc.png",
        skills: ["Vue.js", "React", "UI/UX"],
    },
    {
        name: "میثم آصفی",
        position: "توسعه دهنده فرانت‌اند",
        image: "/images/xa.png",
        skills: ["Vue.js", "React", "UI/UX"],
    },
    {
        name: "میثم آصفی",
        position: "توسعه دهنده فرانت‌اند",
        image: "/images/xb.png",
        skills: ["Vue.js", "React", "UI/UX"],
    },
];
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

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <template v-for="member in team">
                    <Member :name="member.name" :position="member.position" :image="member.image" :skills="member.skills" />
                </template>
            </div>
        </div>
    </div>
</template>