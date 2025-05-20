<script setup lang="ts">
import ServiceBox from './components/ServiceBox/ServiceBox.vue';
</script>

<template>
    <div class="w-full pt-5 flex flex-col items-center">
        <h3 class="w-fit text-center px-10 border border-black/10 shadow-lg py-2 rounded-full text-white bg-linear-to-br/oklab from-[#526168]/60 to-[#87675a]/60 text-4xl font-[600]">خدمات</h3>
        <div class="w-full md:h-[500px] flex gap-2 flex-col md:flex-row justify-evenly items-center px-5 mt-6">
            <ServiceBox title="خدمات اجرا" src="/images/xa.png" />
            <ServiceBox title="مشاوره حضوری" src="/images/xb.png" />
            <ServiceBox title="VIP خدمات" src="/images/xc.png" />
        </div>
    </div>
</template>