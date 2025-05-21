<script setup lang="ts">
import Accordion from './components/Accordion/Accordion.vue';

const FAQ: {question: string, answer: string}[] = [
    {
        question: 'وادی چیست؟',
        answer: 'وادی یک پلتفرم تخصصی در زمینه طراحی و دکوراسیون داخلی است که با هدف زیباتر کردن فضای زندگی شما فعالیت می‌کند. در وادی می‌توانید با طراحان حرفه‌ای ارتباط بگیرید، ایده بگیرید، و محصولات دکوراتیو متنوع را انتخاب و خریداری کنید. ما تلاش می‌کنیم تا فرآیند طراحی داخلی خانه‌ها را ساده، لذت‌بخش و حرفه‌ای کنیم.'
    },
    {
        question: 'خرید از وادی چگونه است',
        answer: 'فرآیند خرید در وادی بسیار ساده است. کافی است وارد وب‌سایت وادی شوید، محصول یا خدمات مورد نظر خود را انتخاب کنید، مشخصات آن را بررسی کرده و سپس سفارش خود را ثبت نمایید. پس از پرداخت، تیم وادی سفارش شما را در سریع‌ترین زمان ممکن پردازش و ارسال خواهد کرد.'
    },
    {
        question: 'پشتیبانی وادی چیست؟',
        answer: 'پشتیبانی وادی همیشه در کنار شماست. اگر در هر مرحله از خرید، استفاده از خدمات یا مشاوره طراحی به مشکلی برخوردید، می‌توانید با تیم پشتیبانی ما تماس بگیرید. پشتیبانی وادی از طریق تماس تلفنی، چت آنلاین و ارسال تیکت در دسترس است و تلاش می‌کند تا سریع‌ترین و بهترین پاسخ را به شما ارائه دهد.'
    }
]
</script>

<template>
    <section class="w-full py-16 bg-gradient-to-b from-[#f8f5f2] to-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="inline-block text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#526168] to-[#87675a] px-8 py-3">
                    سوالات متداول
                </h2>
                <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    پاسخ به پرسش‌های پرتکرار شما
                </p>
            </div>

            <div class="max-w-[80%] mx-auto space-y-4">
                <Accordion 
                    v-for="(faq, index) in FAQ" 
                    :key="index"
                    :question="faq.question" 
                    :answer="faq.answer"
                />
            </div>
        </div>
    </section>
</template>