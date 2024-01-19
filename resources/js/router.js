import { createRouter, createWebHistory } from 'vue-router';
const DashboardComponent = () => import('./Components/Dashboard/Dashboard.vue');
const UsuariosComponent = () => import('./Components/Usuarios/Index.vue');

const routes = [

    {
        path: '/',
        name: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '/usuarios',
        name: 'usuarios',
        component: UsuariosComponent
    },


];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
