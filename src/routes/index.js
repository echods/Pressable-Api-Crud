import Home from '../components/Home.vue'
import SitesList from '../components/SitesList.vue'
import SiteShow from '../components/SiteShow.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/sites',
    component: SitesList,
    name: 'sites'
  },
  {
    path: '/sites/:id',
    component: SiteShow,
    name: 'site-show'
  }

  // { path: '/testing', component: TestAgain }
]

export default routes