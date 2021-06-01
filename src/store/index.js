import Vue  from 'vue'
import Vuex  from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        limpar: false,
        dadosClinica: [],
        user:"",
        token:"",
        uuidClinica: "",
        idConsulta: -1,
        paciente: [],
        pacienteSelect: [],
        procedimentoSelect: [],
        option: false,
        uuidAgendamento: "",
        pacienteSelected: -1,
        uuidFichaClinica:-1,
        openModal: false,
        fichaClinica:{
            afinamento:{},
            acuidade: {},
            amplitude:{},
            anamnese:{},
            prescricaoUltimoExame:{},
            cerametria: {},
            biomicro: {},
            oftalmoscopia: [],
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
        }
        
            
    },
    actions,
    mutations

})




export default store;