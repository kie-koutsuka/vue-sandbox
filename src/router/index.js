import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
import residentsList from '../pages/residentsList.vue'
import clinicList from '../pages/clinicList.vue'
import drugList from '../pages/drugList.vue'

const routes = [
/*  { path: '/home/:residentsId?',
    name: 'Home',
    component: Home,
    props: true }, */
  {
    path: '/',           // ← 追加部分
    redirect: '/residentsList'  // ← ここで初期表示ページを指定
  },
  { path: '/residentsList',
    name: 'residentsList',
    component: residentsList },

  { path: '/clinicList',
    name: 'clinicList',
    component: clinicList },

  { path: '/drugList',
    name: 'drugList',
    component: drugList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
