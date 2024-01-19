import { createRouter, createWebHistory } from 'vue-router';
const DashboardComponent = () => import('./Components/Dashboard/Dashboard.vue');

const routes = [

    {
        path: '/',
        name: 'dashboard',
        component: DashboardComponent
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
