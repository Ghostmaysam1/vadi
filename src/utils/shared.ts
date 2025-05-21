import {ref, onMounted, onUnmounted, type Ref} from 'vue';


export function useWindowSize(): {width: Ref<number>; height: Ref<number>} {
    let width = ref<number>(window.innerWidth);
    let height = ref<number>(window.innerHeight);
    onMounted(()=>{
        window.addEventListener('resize', onResize);
    })
    onUnmounted(()=>{
        window.removeEventListener('resize', onResize);
    })
    const onResize = ()=>{
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    return {width, height};
}