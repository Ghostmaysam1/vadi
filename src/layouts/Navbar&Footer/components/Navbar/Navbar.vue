<script setup lang="ts">
import Menu from "./components/Menu/Menu.vue";

const navItems = [
  { title: 'خدمات', path: '/services' },
  { title: 'ابزارها', path: '/tools' },
  { title: 'فروشگاه', path: '/shop' },
  { title: 'مقالات', path: '/blog' },
  { title: 'ارتباط با ما', path: '/contact' },
  { title: 'همکاران', path: '/team' }
];
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-blue-100/40 backdrop-blur-sm shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <RouterLink to="/" class="flex items-center gap-3 group">
          <img src="/vadi logo 1.png" alt="logo" class="h-12" />
          <h1 class="font-bold text-3xl text-[#4D5057]">VADI</h1>
        </RouterLink>

        <div class="hidden md:flex items-center gap-8">
          <ul class="flex gap-6">
            <li v-for="(item, index) in navItems" :key="index">
              <RouterLink 
                :to="item.path" 
                class="text-lg font-medium text-[#4D5057] hover:text-[#87675a] transition-colors duration-300"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>
          
          <div class="flex items-center gap-4">
            <RouterLink to="/account">
              <img src="/icons/userIcon.svg" alt="user" class="h-10 w-10" />
            </RouterLink>
          </div>
        </div>

        <div class="md:hidden flex items-center gap-4">
          <RouterLink to="/account">
            <img src="/icons/userIcon.svg" alt="user" class="h-10 w-10" />
          </RouterLink>
          <Menu />
        </div>
      </div>
    </div>
  </nav>
</template>