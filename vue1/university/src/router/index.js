// { }:花括号中的是部分导入，按需引入，一切皆模块
import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件(后缀可以要可以不要)
import Home from "../views/Home"
import List from "../views/List"
import ListNotice from "../views/ListNotice"
import DetailNotice from "../views/DetailNotice"
import DetailCarousel from "../views/DetailCarousel"
import DetailVideo from "../views/DetailVideo"
import DetailImage from "../views/DetailImage"
import Search from "../views/Search"

// 创建路由列表
const routes = [
    { path: '/', name:'root', component: Home },  // root
    { path: '/home',name:'home', component: Home }, 
    { path: '/search',name:'search', component: Search }, 
    { path: '/list/:newType',name:'list', component: List },
    { path: '/listNotice',name:'listNotice', component: ListNotice },
    { path: '/detailNotice/:id',name:'detailNotice', component: DetailNotice },
    { path: '/detailCarousel/:id',name:'detailCarousel', component: DetailCarousel },
    { path: '/detailVideo/:id',name:'detailVideo', component: DetailVideo },
    { path: '/detailImage/:id',name:'detailImage', component: DetailImage },
    { path: '/detail/:newType/:id', name:'detail', component:()=> import('../views/Detail.vue')}

]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes 
})

export default router