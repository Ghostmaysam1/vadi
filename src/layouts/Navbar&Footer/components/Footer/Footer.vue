<script setup lang="ts">
import List from './components/List/List.vue';
</script>

<template>
    <div class="w-full h-[480px] flex justify-center py-3" dir="rtl">
        <div class="w-[90%] h-[420px] rounded-4xl bg-[#FCF8F8] py-2 px-1 flex justify-between">
           <List title="منو" class="min-w-1/6">
            <ul class="flex flex-col gap-2">
                <li class="text-md md:text-2xl"><RouterLink to="/">خدمات</RouterLink></li>
                <li class="text-md md:text-2xl"><RouterLink to="/">ابزار</RouterLink></li>
                <li class="text-md md:text-2xl"><RouterLink to="/">فروشگاه</RouterLink></li>
                <li class="text-md md:text-2xl"><RouterLink to="/">مقالات</RouterLink></li>
                <li class="text-md md:text-2xl"><RouterLink to="/">همکاران</RouterLink></li>
            </ul>
           </List> 
           <List title="راه های ارتباطی" class="min-w-1/5 max-w-2/5">
            <ul class="flex flex-col gap-4">
                <li class="text-md md:text-2xl">
                    <p>آدرس:</p>
                    سه راه 22 بهمن سه راه 22 بهمن سه راه 22 بهمن سه راه 22 بهمن سه راه 22 بهمن
                </li>
                <li class="text-md md:text-2xl">تلفن: 09811111111</li>
                <li class="text-md md:text-2xl">Vadi.design :اینستاگرام</li>
                <li class="text-md md:text-2xl">Vadi@gmail.com :ایمیل</li>
            </ul>
           </List>
           <List title="مقالات" class="min-w-1/6">
            <ul class="flex flex-col gap-2">
                <li class="text-md md:text-2xl">مقالات برتر</li>
                <li class="text-md md:text-2xl">___</li>
                <li class="text-md md:text-2xl">___</li>
                <li class="text-md md:text-2xl">___</li>
                <li class="text-md md:text-2xl">___</li>
            </ul>
           </List>
        </div>
    </div>
</template>