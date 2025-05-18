<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen: Ref<boolean> = ref(false);
const listEl: Ref<HTMLUListElement | null> = ref(null);
const menuBtn: Ref<HTMLImageElement | null> = ref(null);

onMounted(() => {
  document.addEventListener("click", documentListener);
  console.log("add");
});

onUnmounted(() => {
  document.removeEventListener("click", documentListener);
  console.log("remove")
});

const documentListener = (e: MouseEvent) => {
  if (listEl.value && menuBtn.value && e.target != listEl.value && e.target != menuBtn.value) {
    isMenuOpen.value = false;
  }
};
</script>

<template>
  <div class="md:hidden relative">
    <img
      ref="menuBtn"
      src="/icons/menuIcon.svg"
      alt="menu"
      @click="isMenuOpen = !isMenuOpen"
      class="h-[50px]"
    />

    <ul
      ref="listEl"
      v-if="isMenuOpen"
      class="w-[200px] h-auto py-3 px-2 flex flex-col items-end bg-white md:hidden gap-6 text-lg absolute top-13 right-[10px]"
    >
      <li>
        <RouterLink to="/" class="flex">
          خدمات
          <img src="/icons/commitIcon.svg" alt="" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="flex">
          ابزار ها
          <img src="/icons/toolsIcon.svg" alt="" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="flex">
          فروشگاه
          <img src="/icons/shopIcon.svg" alt="" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="flex">
          مقالات
          <img src="/icons/booksIcon.svg" alt="" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="flex">
          ارتباط با ما
          <img src="/icons/contactusIcon.svg" alt="" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/" class="flex">
          همکاران
          <img src="/icons/teamIcon.svg" alt="" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li a {
  gap: 10px;
}
</style>
