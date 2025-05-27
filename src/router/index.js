import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
import residentsList from '../pages/residentsList.vue'
import clinicList from '../pages/clinicList.vue'
import drugList from '../pages/drugList.vue'
import prescriptionDrugsList from '../pages/prescriptionDrugsList.vue'

const routes = [
/*  { path: '/home/:residentsId?',
    name: 'Home',
    component: Home,
    props: true }, */
  {
    path: '/',
    redirect: '/residentsList'  //初期表示ページを指定
  },

  { path: '/residentsList', //入居者一覧
    name: 'residentsList',
    component: residentsList },

  { path: '/prescriptionDrugsList/:residentId', //処方薬情報一覧
    name: 'prescriptionDrugsList',
    component: prescriptionDrugsList },

/*
  { path: '/delResidentsData', //入居者削除
    name: 'delResidentsData',
    component: delResidentsData },

  { path: '/printPage', //印刷レイアウト画面
    name: 'printPage',
    component: printPage },

 */

  { path: '/clinicList', //処方医院一覧
    name: 'clinicList',
    component: clinicList },

  { path: '/drugList', //薬名称一覧
    name: 'drugList',
    component: drugList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
