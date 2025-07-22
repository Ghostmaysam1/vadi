import { defineStore } from "pinia";
import type { Member, UserData } from "../types";


interface Store {
    team: Member[],
    user: UserData
}

const images = ["/v/1/1.jpg","/v/1/2.jpg","/v/1/3.jpg","/v/1/4.jpg","/v/1/5.jpg",];

const useStore = defineStore("store", {
    state: (): Store => ({
        team: [
            {
                id: "34534-3364534",
                name: "پوریا بابایی",
                position: "مشاور اقتصادی و ناظر اجرا",
                bio: `اقتصادی‌ترین مسیر را جهت اجرای طرح‌های دکوراسیون داخلی
مدنظر شما پیشنهاد دهم و هم در اجرایش نظارت داشته باشم.
و به این ترتیب با کمک یکدیگر، بهترین حالت را برای تحقق رویای شما
در حوزه دکوراسیون داخلی خانه یا محل کارتان را ایجاد می‌کنیم.`,
                image: "/team/babaee.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "361341-645945",
                name: "میثم آصفی",
                position: "توسعه دهنده Front-End",
                image: "/team/men.png",
                bio: `اقتصادی‌ترین مسیر را جهت اجرای طرح‌های دکوراسیون داخلی
مدنظر شما پیشنهاد دهم و هم در اجرایش نظارت داشته باشم.
و به این ترتیب با کمک یکدیگر، بهترین حالت را برای تحقق رویای شما
در حوزه دکوراسیون داخلی خانه یا محل کارتان را ایجاد می‌کنیم.`,
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "545525-345545",
                name: "میثم آصفی",
                position: "توسعه دهنده Full-Stack",
                image: "/images/xa.png",
                bio: `اقتصادی‌ترین مسیر را جهت اجرای طرح‌های دکوراسیون داخلی
مدنظر شما پیشنهاد دهم و هم در اجرایش نظارت داشته باشم.
و به این ترتیب با کمک یکدیگر، بهترین حالت را برای تحقق رویای شما
در حوزه دکوراسیون داخلی خانه یا محل کارتان را ایجاد می‌کنیم.`,
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            }
        ],
        user: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            emailAddress: ''
        }
    })
});

export default useStore;