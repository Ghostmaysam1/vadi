import { defineStore } from "pinia";
import type { Member } from "../types";


interface Store {
    team: Member[]
}

const images = ["https://picsum.photos/seed/0.06799319178048224/800/600", "https://picsum.photos/seed/0.2815178513811256/800/600", "https://picsum.photos/seed/0.6665297916592013/800/600", "https://picsum.photos/seed/0.7765853901376286/800/600"];

const useStore = defineStore("store", {
    state: (): Store => ({
        team: [
            {
                id: "345345-345345",
                name: "میثم آصفی",
                position: "توسعه دهنده Front-End",
                image: "/images/men.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "375145-395645",
                name: "عسل",
                position: "طراح",
                image: "/images/xb.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "905340-345305",
                name: "محسن",
                position: "توسعه دهنده Back-End",
                image: "/images/xa.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "342322-325345",
                name: "امیر اسدی",
                position: "Dev ops",
                image: "/images/xc.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "361341-645945",
                name: "میثم آصفی",
                position: "توسعه دهنده Front-End",
                image: "/images/xa.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "545525-345545",
                name: "میثم آصفی",
                position: "توسعه دهنده Full-Stack",
                image: "/images/xb.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            },
            {
                id: "34534-3364534",
                name: "پوریا بابایی",
                position: "مشاور اقتصادی و ناظر اجرا",
                image: "/team/babaee.png",
                projects: [{name: 'project 1', images}, {name: 'project 2', images}, {name: 'project 3', images}]
            }
        ]
    })
});

export default useStore;