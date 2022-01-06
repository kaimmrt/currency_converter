import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import ProcessList from "@/views/ProcessList.vue";

const routes = [
    {
        name: 'MainPage',
        path: "/main",
        component: MainPage,
    }, {
        name: 'ProcessList',
        path: "/process_list",
        component: ProcessList,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router