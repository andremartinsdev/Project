import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home/Home.vue'
import CadastroPaciente from './components/CadastroPaciente/Cadastro.vue'
import Consulta from './components/Consulta/Consulta.vue'
import Agenda from './components/Agenda/Agenda.vue'
import Relatorio from './components/Relatorios/Relatorio.vue'
import ConfigGeral from './components/Configuracoes/ConfiguracoesGeral.vue'


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
    },
    {
        path: '/Relatorio',
        component: Relatorio
    },
    {
        path: '/ConfiguracaoGeral',
        component: ConfigGeral
    }
]

const router = new Router({
    mode: 'history',
    routes
  })

  export default router;