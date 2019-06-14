import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Music from '@/components/Music'
import CreateMusic from '@/components/CreateMusic'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/music',
            name: 'music',
            component: Music
        },
        {
            path: '/music/add',
            name: 'create-music',
            component: CreateMusic
        }
    ]
})