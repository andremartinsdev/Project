import Vue  from 'vue'
import Vuex  from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        paciente: [],
        option: false,
        pacienteSelected: "teste",
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
        adicao: {}
            
    },
    actions,
    mutations

})




export default store;