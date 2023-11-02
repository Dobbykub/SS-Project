import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import UserIndex from '@/components/User/Index'
import UserCreate from '@/components/User/CreateUser'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'
import Login from '@/components/Login'

import MicrowaveIndex from '@/components/Microwave/Index'
import MicrowaveCreate from '@/components/Microwave/CreateMicrowave'
import MicrowaveEdit from '@/components/Microwave/EditMicrowave'
import MicrowaveShow from '@/components/Microwave/ShowMicrowave'



Vue.use(Router)

export default new Router({
  routes: [
    // 1{} = 1 สมาชิกใน Array หรือ 1 route
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: '/user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: '/user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: '/user',
      component: UserShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/microwaves',
      name: 'microwaves',
      component: MicrowaveIndex
    },
    {
      path: '/microwave/create',
      name: 'microwave-create',
      component: MicrowaveCreate
    },
    {
      path: '/microwave/edit/:microwaveId',
      name: 'microwave-edit',
      component: MicrowaveEdit
    },
    {
      path: '/microwave/:microwaveId',
      name: '/microwave',
      component: MicrowaveShow
    }
  ]
})
