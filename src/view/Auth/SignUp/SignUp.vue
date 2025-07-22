<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink, useRouter } from "vue-router";
import useApi from "../../../store/api";
import type { RegisterData } from "../../../types";
const Api = useApi();
const router = useRouter();

const registerData = reactive<RegisterData>({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
  password: "",
  confirmPassword: "",
  emailAddress: "",
});

const handleRegister = async () => {
  const response = await Api.Register(registerData);

  if (response.type == 'success') {
    router.push('/auth/login');
  } else {
    alert("مشکلی پیش آمده لطفا دوباره امتحان کنید");
  }
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-[#f8f5f2] to-white flex items-center justify-center pt-14">
    <div class="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E8D8D8]" dir="rtl">
      <div class="flex border-b border-[#E8D8D8]">
        <RouterLink to="login">
          <button
            class="flex-1 text-gray-500 hover:text-[#526168] py-4 px-6 text-center font-medium text-lg focus:outline-none transition-all duration-300">
            ورود
          </button>
        </RouterLink>
        <RouterLink to="signup">
          <button
            class="flex-1 text-[#87675a] border-b-2 border-[#87675a] py-4 px-6 text-center font-medium text-lg focus:outline-none transition-all duration-300">
            ثبت‌نام
          </button>
        </RouterLink>
      </div>

      <div class="p-8">
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-[#526168] text-center mb-6">
            ایجاد حساب کاربری
          </h2>

          <form @submit.prevent="handleRegister">
            <div class="mb-3 flex gap-2">
              <div>
                <input type="text" v-model="registerData.firstName" placeholder="نام"
                  class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                  required />
              </div>

              <div>
                <input type="text" v-model="registerData.lastName" placeholder="نام خانوادگی"
                  class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                  required />
              </div>
            </div>

            <div class="mb-1">
              <div class="mb-3">
                <input type="text" v-model="registerData.phoneNumber" placeholder="تلفن"
                  class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                  required />
              </div>
            </div>

            <div class="mb-3"> <!-- ========== Password =========== -->
              <input type="password" v-model="registerData.password" placeholder="گذرواژه"
                class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                required />
            </div>

            <div class="mb-3"> <!-- ========== re-Password =========== -->
              <input type="password" v-model="registerData.confirmPassword" placeholder="تایید گذواژه"
                class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none focus:ring-2 focus:ring-[#87675a] transition-all"
                required />
            </div>
            <!-- ========================== -->



            <button type="submit"
              class="w-full bg-gradient-to-r from-[#526168] to-[#87675a] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87675a]">
              ثبت‌نام
            </button>
          </form>

          <div class="text-center text-sm text-gray-600 mt-4">
            با ثبت‌نام، موافقت خود را با
            <a href="#" class="text-[#87675a] hover:underline">قوانین و مقررات</a>
            اعلام می‌کنید
          </div>
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
