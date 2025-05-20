<script setup lang="ts">
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer/Footer.vue';
</script>

<template>
    <div class="w-full font-yekanbakh min-h-[100dvh] flex flex-col items-center">
        <Navbar />
        <slot></slot>
        <Footer />
    </div>
</template>