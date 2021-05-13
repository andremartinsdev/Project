import * as MutationsType from './mutations-types'

export default {
    savePaciente({commit}, paciente ){
        return commit(MutationsType.SAVE_PACIENTE, paciente)
    },
    deletePaciente({commit}, event){
        return commit(MutationsType.DELETE_PACIENTE, event)
    },
    updatePaciente({commit}, event){
        return commit(MutationsType.UPDATE_PACIENTE, event)
    },
    selectPaciente({commit}, event){
        return commit(MutationsType.SELECT_PACIENTE, event)
    },
    selectPacienteId({commit}, event, id){
        return commit(MutationsType.SELECT_PACIENTE_ID, event, id)
    },
    alterOption({commit}, option){
        return commit(MutationsType.ALTER_OPTION, option)
    },
    pacienteSelected({commit}, idPaciente){
        return commit(MutationsType.SELECT_PACIENTE, idPaciente)
    },
    afinamento({commit}, afinamento){
        return commit(MutationsType.AFINAMENTO, afinamento)
        
    }, 
    openModal({commit}, openModal){
        return commit(MutationsType.openModal, openModal)
    },
    pacienteSelect({commit}, pacienteSelect){
        return commit(MutationsType.pacienteSelect, pacienteSelect)
    }
}