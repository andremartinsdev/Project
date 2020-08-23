import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home/Home.vue'
import CadastroPaciente from './components/CadastroPaciente/Cadastro.vue'
import Consulta from './components/Consulta/Consulta.vue'
import Agenda from './components/Agenda/Agenda.vue'


Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/CadastroPaciente',
        component: CadastroPaciente
    },
    {
        path: '/Consulta',
        component: Consulta
    },
    {
        path: '/Agenda',
        component: Agenda
    }
]

const router = new Router({
    mode: 'history',
    routes
  })

  export default router;