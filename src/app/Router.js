import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Power4 from "@/pages/games/Power-4";
import Tetris from "@/pages/games/Tetris";
import WhoIsThis from "@/pages/games/Who-is-This";
import Snake from "@/pages/games/Snake";
import BattleShip from "@/pages/games/BattleShip";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/power_4', name: 'Power 4', component: Power4},
    {path: '/tetris', name: 'Tetris', component: Tetris},
    {path: '/who_is_this', name: 'Who-is-this', component: WhoIsThis},
    {path: '/snake', name: 'Snake', component: Snake},
    {path: '/battleship', name: 'BattleShip', component: BattleShip},
    {path: '/:pathMatch(.*)*', name: 'Error-Page', component: () => import("../pages/Error.vue")}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
