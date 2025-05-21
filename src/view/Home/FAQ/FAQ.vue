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
    <div class="w-full pt-5 flex flex-col items-center">
        <h3 class="w-fit text-center px-10 border border-black/10 shadow-lg py-2 rounded-full text-white bg-linear-to-br/oklab from-[#526168]/60 to-[#87675a]/60 text-4xl font-[600]">سوالات متداول</h3>
        <div class="w-full py-8 px-5 flex flex-col gap-2">
            <template v-for="faq in FAQ" :key="faq.question">
                <Accordion :question="faq.question" :answer="faq.answer" />
            </template>
        </div>
    </div>
</template>