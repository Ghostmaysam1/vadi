<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
</script>

<template>
    <div class="w-full font-yekanbakh min-h-[100dvh] flex flex-col pt-5 items-center">
        <Navbar />
        <slot></slot>
    </div>
</template>