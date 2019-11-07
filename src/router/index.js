import VueRouter from 'vue-router'
import Msite from '../Pages/Msite/Msite.vue'
import Order from '../Pages/Order/Order.vue'
import Profile from '../Pages/Profile/Profile.vue'
import Search from '../Pages/Search/Search.vue'
import Login from '../Pages/Login/Login.vue'
const router=new VueRouter({
    routes:[
        {
            path:'/',redirect:'/msite'
        },
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/login',
            component:Login
        }
    ]
})
export default router
