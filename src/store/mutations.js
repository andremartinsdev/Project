import * as MutationsTypes from './mutations-types'


export default {
    [MutationsTypes.SAVE_PACIENTE] (state, paciente){
        state.paciente.push(paciente)
    },
    [MutationsTypes.DELETE_PACIENTE] (state, idPaciente){
        alert(`deletado com sucesso`, state, idPaciente)
    },
    [MutationsTypes.UPDATE_PACIENTE] (state, event){
        alert("Atualizado com sucesso", state, event)
    },
    [MutationsTypes.SELECT_PACIENTE] (state, event){
        alert("Registros selecionado com sucesso", state, event)
    },
    [MutationsTypes.SELECT_PACIENTE_ID] (state, event, id){
        alert("Registro do cliente Fulano selecionado", state, event, id)
    }
}