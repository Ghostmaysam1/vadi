<script setup lang="ts">
import Menu from "./components/Menu/Menu.vue";
</script>

<template>
  <nav
    class="w-[90%] h-[60px] rounded-full px-[10px] bg-[#FCF8F8] flex justify-between items-center"
  >
    <div class="h-full flex items-center gap-2">
      <img src="/logo.png" alt="logo" class="h-full" />
      <h1 class="font-segeoUI text-3xl text-[#4D5057]">VADI</h1>
    </div>

    <div class="h-full flex flex-row-reverse items-center gap-3">
      <Menu />
      <img src="/icons/userIcon.svg" alt="user" class="h-[50px]" />
      <ul class="hidden md:flex flex-row-reverse gap-2">
        <!-- desktop View -->
        <li>
          <RouterLink to="/"> خدمات </RouterLink>
        </li>
        <li>
          <RouterLink to="/"> ابزار ها </RouterLink>
        </li>
        <li>
          <RouterLink to="/"> فروشگاه </RouterLink>
        </li>
        <li>
          <RouterLink to="/"> مقالات </RouterLink>
        </li>
        <li>
          <RouterLink to="/"> ارتباط با ما </RouterLink>
        </li>
        <li>
          <RouterLink to="/"> همکاران </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>