<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();

const loginData = ref({
  email: "",
  password: "",
  remember: false,
});

const handleLogin = () => {
  router.push('/')
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#f8f5f2] to-white flex items-center justify-center p-4"
  >
    <div
      class="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E8D8D8]"
    >
      <div class="flex border-b border-[#E8D8D8]">
        <RouterLink to="login">
            <button
          class="flex-1 text-[#87675a] border-b-2 border-[#87675a] py-4 px-6 text-center font-medium text-lg focus:outline-none transition-all duration-300"
        >
          ورود
        </button>
        </RouterLink>
        <RouterLink to="signup">
            <button
          class="flex-1 text-gray-500 hover:text-[#526168] py-4 px-6 text-center font-medium text-lg focus:outline-none transition-all duration-300"
        >
          ثبت‌نام
        </button>
        </RouterLink>
      </div>

      <div class="p-8">
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#526168] text-center mb-6">
            ورود به حساب کاربری
          </h2>

          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <input
                type="email"
                v-model="loginData.email"
                placeholder="ایمیل"
                class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                required
              />
            </div>

            <div class="mb-4">
              <input
                type="password"
                v-model="loginData.password"
                placeholder="رمز عبور"
                class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                required
              />
            </div>

            <div class="flex items-center justify-between mb-6">
              <div class="flex gap-1 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  v-model="loginData.remember"
                  class="h-4 w-4 text-[#87675a] focus:ring-[#87675a] border-[#E8D8D8] rounded"
                />
                <label for="remember" class="mr-2 block text-sm text-gray-700"
                  >مرا به خاطر بسپار</label
                >
              </div>
              <button
                type="button"
                class="text-sm text-[#87675a] hover:underline"
              >
                فراموشی رمز عبور؟
              </button>
            </div>

            <button
              type="submit"
              class="w-full bg-gradient-to-r from-[#526168] to-[#87675a] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87675a]"
            >
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button[aria-selected="true"] {
  transition: all 0.3s ease;
}

input:focus {
  box-shadow: 0 0 0 2px rgba(135, 103, 90, 0.2);
}
</style>