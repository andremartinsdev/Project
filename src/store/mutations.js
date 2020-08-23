import * as MutationsTypes from './mutations-types'
//import axios from 'axios'


export default {
     [MutationsTypes.SAVE_PACIENTE]  (state,paciente){
            paciente
    },
    [MutationsTypes.DELETE_PACIENTE] (state, idPaciente){
        alert(`deletado com sucesso`, state, idPaciente)
    },
    [MutationsTypes.UPDATE_PACIENTE] (state, event){
        alert("Atualizado com sucesso", state, event)
    },
    [MutationsTypes.SELECT_PACIENTE] (state, event){
        state.pacienteSelected = event;
    },
    [MutationsTypes.SELECT_PACIENTE_ID] (state, event, id){
        alert("Registro do cliente Fulano selecionado", state, event, id)
    },
    [MutationsTypes.ALTER_OPTION](state, option){
        state.option = !option
    },
    [MutationsTypes.PACIENTE_SELECTED](state, idPaciente){
        state.pacienteSelected = idPaciente;
    }
}