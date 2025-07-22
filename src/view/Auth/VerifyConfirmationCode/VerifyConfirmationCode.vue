<script setup lang="ts">
import { reactive } from 'vue';
import useApi from '../../../store/api';
import type { VerifyConfirmationCodeData } from '../../../types';
import { useRouter } from 'vue-router';
const router = useRouter();
const Api = useApi();

const VerifyConfirmationCodeData = reactive<VerifyConfirmationCodeData>({
    phoneNumber: '',
    token: ''
})

async function handleForm() {
    const response = await Api.VerifyConfirmationCode(VerifyConfirmationCodeData);

    if (response.type == 'success')
        router.push('/login')
    else
        alert("مشکلی پیش آمد لطفا دوباره امتحان کنید")
}
</script>

<template>
    <div class="min-h-screen bg-gradient-to-b from-[#f8f5f2] to-white flex items-center justify-center p-4">
        <div class="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden border border-[#E8D8D8]" dir="rtl">


            <div class="p-8">
                <div class="space-y-6">
                    <h2 class="text-2xl font-bold text-[#526168] text-center mb-6">
                        تایید کد
                    </h2>

                    <form @submit.prevent="handleForm">
                        <div class="mb-4">
                            <input type="text" v-model="VerifyConfirmationCodeData.token" placeholder="کد 6 رقمی"
                                class="w-full px-4 py-3 rounded-lg border border-[#E8D8D8] focus:outline-none text-center focus:ring-2 focus:ring-[#87675a] transition-all"
                                required />
                        </div>

                        <button type="submit"
                            class="w-full bg-gradient-to-r from-[#526168] to-[#87675a] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#87675a]">
                            ارسال کد
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>