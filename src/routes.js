import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/create', component: CreatePage},
        { path: '/:index?', component: PageViewer, props: true},
    ]
})

export default router;