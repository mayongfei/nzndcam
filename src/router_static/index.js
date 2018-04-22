import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ContactUs from '@/components/contactUs'
import AboutUs from '@/components/aboutUs'
import Software from '@/components/software'
import Products from '@/components/products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/software',
      name: 'software',
      component: Software
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})
