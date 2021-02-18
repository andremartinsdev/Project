import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home/Home.vue'
import CadastroPaciente from './components/CadastroPaciente/Cadastro.vue'
import Consulta from './components/Consulta/Consulta.vue'
import Agenda from './components/Agenda/Agenda.vue'
import Relatorio from './components/Relatorios/Relatorio.vue'
import ConfigGeral from './components/Configuracoes/ConfiguracoesGeral.vue'
import Financeiro from './components/Financeiro/Financeiro.vue'
import Impressao from './components/Impressao/ImpressaoFicha.vue'
import Login from './components/Login/Login.vue'
import CadastroClinica from './components/CadastroClinica/CadastroClinica.vue'


Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Login,
        beforeRouteEnter(to, from, next){
            if(to.meta.adminOnly === true){
                next('/')
            }
        }
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
    },
    {
        path: '/Financeiro',
        component: Financeiro
    },
    {
        path: '/Impressao/:uuid',
        component: Impressao
    },
    {
        path:'/Home',
        component: Home
    },
    {
        path: '/CadastroClinica',
        component: CadastroClinica
    }
]

const router = new Router({
    mode: 'history',
    routes
  })

  export default router;