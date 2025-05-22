import { defineStore } from "pinia";
import type { Member } from "../types";


interface Store {
    team: Member[]
}

const useStore = defineStore("store", {
    state: (): Store => ({
        team: [
            {
                id: "345345-345345",
                name: "میثم آصفی",
                position: "توسعه دهنده Front-End",
                image: "/images/men.png",
                skills: ["Vue.js", "React", "Typescript"],
            },
            {
                id: "375145-395645",
                name: "عسل",
                position: "طراح",
                image: "/images/xb.png",
                skills: ["Adobe XD", "Figma", "UI/UX"],
            },
            {
                id: "905340-345305",
                name: "محسن",
                position: "توسعه دهنده Back-End",
                image: "/images/xa.png",
                skills: ["NET.", "#C", "TypeScript"],
            },
            {
                id: "342322-325345",
                name: "امیر اسدی",
                position: "Dev ops",
                image: "/images/xc.png",
                skills: ["Deploy", "Github", "Docker", "Gitlab"],
            },
            {
                id: "361341-645945",
                name: "میثم آصفی",
                position: "توسعه دهنده Front-End",
                image: "/images/xa.png",
                skills: ["Vue.js", "React", "UI/UX"],
            },
            {
                id: "545525-345545",
                name: "میثم آصفی",
                position: "توسعه دهنده Full-Stack",
                image: "/images/xb.png",
                skills: ["Nodejs", "React", "UI/UX"],
            },
            {
                id: "34534-3364534",
                name: "پوریا بابایی",
                position: "مشاور اقتصادی و ناظر اجرا",
                image: "/team/babaee.png"
            }
        ]
    })
});

export default useStore;