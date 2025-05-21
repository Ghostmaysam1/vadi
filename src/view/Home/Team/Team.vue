<script setup lang="ts">
import { reactive } from 'vue';
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { useWindowSize } from '../../../utils/shared';
import { watch } from 'vue';
import Member from './Member/Member.vue';

const {width} = useWindowSize();

interface TeamMember {
    name: string,
    title: string,
    img: string
}

const team: TeamMember[] = [
    {
        name: 'میثم آصفی',
        title: 'Front-End',
        img: `/images/xa.png`
    },
    {
        name: 'محسن',
        title: 'Back-End',
        img: `/images/xa.png`
    },
    {
        name: 'امیر اسدی',
        title: 'Dev-ops',
        img: `/images/xa.png`
    },
    {
        name: 'عرفان احمدی',
        title: 'Digital-Marketing',
        img: `/images/xa.png`
    },
    {
        name: ' محمد پارسا درکه',
        title: 'Mobile',
        img: `/images/xa.png`
    },
    {
        name: 'آرزو محمدی',
        title: 'Designer',
        img: `/images/xb.png`
    },
    {
        name: 'جان ویک',
        title: 'Front-End',
        img: `/images/xa.png`
    },
]


const config = reactive({
    height: 500,
    itemsToShow: 3,
    gap: 20,
    wrapAround: true,
    mouseWheel: true
});
watch(width, (newValue)=>{
    if(newValue > 768) {
        // config.height = 400
        config.itemsToShow = 3;
    } else {
        config.itemsToShow = 1;
        // config.height = 400
    }
}, {immediate: true})
</script>

<template>
    <div class="w-full pt-5 my-10 flex flex-col items-center">
        <h3 class="w-fit text-center px-10 border border-black/10 shadow-lg py-2 rounded-full text-white bg-linear-to-br/oklab from-[#526168]/60 to-[#87675a]/60 text-4xl font-[600]">همکاران</h3>
        <div class="w-full md:h-[500px] flex gap-2 flex-col md:flex-row justify-evenly items-center px-5 mt-6">
            <Carousel v-bind="config" class="w-full md:w-[80%]">
                <Slide v-for="slide in team" :key="slide.name">
                    <Member :slide="slide" />
                </Slide>

                <template #addons>
                    <Pagination class="top-[105%]" />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<style>
:root {
    --vc-pgn-gap: 10px
}
.carousel__pagination-button {
  height: 5px;
  width: 5px;
  border-radius: 5px;
  background-color: black;
}

.carousel__pagination-button--active {
  background-color: red;
}
</style>