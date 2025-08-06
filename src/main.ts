import { createApp, defineComponent } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import VueSplide, {Splide, SplideSlide} from '@splidejs/vue-splide';

const app = createApp(App);
const pinia = createPinia();

defineComponent({
    components: {
        Splide,
        SplideSlide
    }
})

app.use( router );
app.use( pinia );
app.use( VueSplide )

app.mount("#app");
