import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsVue from "@/views/JobsVue.vue";
import NotFound from "@/components/NotFound.vue";
import JobVue from "@/views/JobVue.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";
const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsVue
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobVue,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView,
        }
    ]
})

export default routes;