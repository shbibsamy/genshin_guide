import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharactersView from '../views/characters/CharactersView.vue'
import CharacterInfoView from '../views/characters/CharacterInfoView.vue'
import WeaponsView from '../views/weapons/WeaponsView.vue'
import EnemiesView from '../views/enemies/EnemiesView.vue'
import GuidesView from '../views/guides/GuidesView.vue'
import GuidesDetailView from '../views/guides/GuidesDetailView.vue'
import ConnectionView from '../views/account/ConnectionView.vue'

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
    component: CharacterInfoView,
    props: true
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
  {
    path: '/guides/:title',
    name: 'GuidesDetail',
    component: GuidesDetailView,
    props: true,
  },
  {
    path: '/account',
    name: 'Account',
    component: ConnectionView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
