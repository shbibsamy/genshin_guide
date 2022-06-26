import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/characters/CharactersView.vue'
import CharacterInfoView from '../views/characters/CharacterInfoView.vue'
import WeaponsView from '../views/weapons/WeaponsView.vue'
import EnemiesView from '../views/enemies/EnemiesView.vue'
import GuidesView from '../views/guides/GuidesView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/characters',
    name: 'Characters',
    component: CharactersView
  },
  {
    path: '/characters/info',
    name: 'Info',
    component: CharacterInfoView
  },
  {
    path: '/weapons',
    name: 'Weapons',
    component: WeaponsView
  },
  {
    path: '/enemies',
    name: 'Enemies',
    component: EnemiesView
  },
  {
    path: '/guides',
    name: 'Guides',
    component: GuidesView
  },
  // {
  //   path: '/weapons',
  //   name: 'weapons',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/WeaponsView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
