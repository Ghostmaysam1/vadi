<script setup lang="ts">
import ServiceBox from './components/ServiceBox/ServiceBox.vue';
</script>

<template>
    <section class="w-full py-12 bg-gradient-to-b from-[#f8f5f2] to-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="inline-block text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] px-8 py-3">
                    خدمات تخصصی ما
                </h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    راهکارهای حرفه‌ای برای نیازهای منحصر به فرد شما
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
                <ServiceBox 
                    title="خدمات اجرا" 
                    src="/images/xa.png"
                    icon="🏗️"
                />
                <ServiceBox 
                    title="مشاوره حضوری" 
                    src="/images/xb.png"
                    icon="💼"
                />
                <ServiceBox 
                    title="خدمات VIP" 
                    src="/images/xc.png"
                    icon="✨"
                />
            </div>
        </div>
    </section>
</template>