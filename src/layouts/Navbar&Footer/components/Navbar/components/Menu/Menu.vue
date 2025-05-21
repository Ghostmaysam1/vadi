<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const menuRef = ref<null | HTMLElement>(null);

const menuItems = [
  { title: 'خدمات', icon: '/icons/commitIcon.svg', path: '/services' },
  { title: 'ابزارها', icon: '/icons/toolsIcon.svg', path: '/tools' },
  { title: 'فروشگاه', icon: '/icons/shopIcon.svg', path: '/shop' },
  { title: 'مقالات', icon: '/icons/booksIcon.svg', path: '/blog' },
  { title: 'ارتباط با ما', icon: '/icons/contactusIcon.svg', path: '/contact' },
  { title: 'همکاران', icon: '/icons/teamIcon.svg', path: '/team' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(<any>event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative" ref="menuRef">
    <button 
      @click.stop="toggleMenu"
      class="p-2 focus:outline-none"
      aria-label="Menu"
    >
      <img 
        src="/icons/menuIcon.svg" 
        alt="menu" 
        class="h-10 w-10"
      />
    </button>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform opacity-0 -translate-y-2"
      enter-to-class="transform opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform opacity-100 translate-y-0"
      leave-to-class="transform opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
      >
        <ul class="py-2">
          <li 
            v-for="(item, index) in menuItems" 
            :key="index"
            class="hover:bg-gray-50 transition-colors"
          >
            <RouterLink
              :to="item.path"
              class="flex items-center gap-3 px-4 py-3 text-[#4D5057]"
              @click="closeMenu"
            >
              <img :src="item.icon" :alt="item.title" class="h-5 w-5" />
              <span>{{ item.title }}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>