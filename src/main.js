import {createApp} from 'vue'
import App from './app/App.vue'
import router from "./app/Router";
import {addIcons, OhVueIcon} from "oh-vue-icons";
import {FcApproval} from "oh-vue-icons/icons/fc";

let app = createApp(App)

app.use(router)

addIcons(FcApproval)
app.component("v-icon", OhVueIcon);


app.mount("#app")

