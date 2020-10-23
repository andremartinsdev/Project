import Vue  from 'vue'
import Vuex  from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        limpar: false,
        dadosClinica: {},
        idConsulta: -1,
        paciente: [],
        option: false,
        pacienteSelected: -1,
        afinamento:{},
        acuidade: {},
        amplitude:{},
        anamnese:{},
        prescricaoUltimoExame:{},
        cerametria: {},
        biomicro: {},
        oftalmoscopia: {},
        tonometria: {},
        reflexoPulpilar: {},
        ppc: {},
        avMotara: {},
        reservasFusionais:{},
        flexDeAcomodacao: {},
        retinoscopia:{},
        forometria:{},
        subjetivo:{},
        testeAmbulatorial:{},
        adicao: {},
        rxFinal:{},
        dx:{}
            
    },
    actions,
    mutations

})




export default store;