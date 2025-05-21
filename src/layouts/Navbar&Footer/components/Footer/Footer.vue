<script setup lang="ts">
import List from './components/List/List.vue';
</script>

<template>
    <footer dir="rtl" class="w-full bg-gradient-to-b from-[#f8f5f2] to-white py-12">
        <div class="container mx-auto px-4">
            <div class="w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-sm p-8 border border-[#E8D8D8]">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <List title="منو" class="px-4 py-2">
                        <ul class="space-y-4">
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl"><RouterLink to="/">خدمات</RouterLink></li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl"><RouterLink to="/">ابزار</RouterLink></li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl"><RouterLink to="/">فروشگاه</RouterLink></li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl"><RouterLink to="/">مقالات</RouterLink></li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl"><RouterLink to="/">همکاران</RouterLink></li>
                        </ul>
                    </List>
                    
                    <List title="راه‌های ارتباطی" class="px-4 py-2">
                        <ul class="space-y-4">
                            <li class="flex flex-col md:flex-row gap-1 md:gap-2">
                                <span class="text-[#87675a] font-medium text-lg min-w-[100px] md:min-w-[120px]">آدرس:</span>
                                <span class="text-gray-600 text-lg">سه راه 22 بهمن،برج فناوری، طبقه طبقه اول</span>
                            </li>
                            <li class="flex flex-col md:flex-row gap-1 md:gap-2">
                                <span class="text-[#87675a] font-medium text-lg min-w-[100px] md:min-w-[120px]">تلفن:</span>
                                <span class="text-gray-600 text-lg">09811111111</span>
                            </li>
                            <li class="flex flex-col md:flex-row gap-1 md:gap-2">
                                <span class="text-[#87675a] font-medium text-lg min-w-[100px] md:min-w-[120px]">اینستاگرام:</span>
                                <span class="text-gray-600 text-lg">Vadi.design</span>
                            </li>
                            <li class="flex flex-col md:flex-row gap-1 md:gap-2">
                                <span class="text-[#87675a] font-medium text-lg min-w-[100px] md:min-w-[120px]">ایمیل:</span>
                                <span class="text-gray-600 text-lg">Vadi@gmail.com</span>
                            </li>
                        </ul>
                    </List>
                    
                    <List title="مقالات" class="px-4 py-2">
                        <ul class="space-y-4">
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl">مقالات برتر</li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl">تازه‌های طراحی</li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl">راهنمای خرید</li>
                            <li class="text-gray-700 hover:text-[#87675a] transition-colors duration-300 text-lg md:text-xl">سبک‌های دکوراسیون</li>
                        </ul>
                    </List>
                </div>
                
                <div class="mt-12 pt-6 border-t border-[#E8D8D8] text-center text-gray-500">
                    <p>© 2023 وادی - تمام حقوق محفوظ است</p>
                </div>
            </div>
        </div>
    </footer>
</template>