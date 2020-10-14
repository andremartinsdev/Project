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
    },
    [MutationsTypes.AFINAMENTO](state, afinamento){
        state.afinamento = afinamento;
    },
    [MutationsTypes.ACUIDADE](state, acuidade){
        state.acuidade = acuidade[0];
    },
    [MutationsTypes.AMPLITUDE_ACOMODACAO](state, amplitude){
        state.amplitude = amplitude;
    },
    [MutationsTypes.ANAMNESE](state, anamnese){
        state.anamnese = anamnese;
    },
    [MutationsTypes.PRESCRICAO_ULTIMO_EXAME](state, prescricaoUltimoExame){
        state.prescricaoUltimoExame = prescricaoUltimoExame
    },
    [MutationsTypes.CERAMETRIA](state, cerametria){
        state.cerametria = cerametria;
    },
    [MutationsTypes.BIOMICRO](state, biomicro){
        state.biomicro = biomicro;
    },
    [MutationsTypes.OFTALMOSCOPIA](state, oftalmoscopia){
        state.oftalmoscopia = oftalmoscopia
    },
    [MutationsTypes.TONOMETRIA](state, tonometria){
        state.tonometria = tonometria
    },
    [MutationsTypes.REFLEXO_PULPILAR](state, reflexoPulpilar){
        state.reflexoPulpilar = reflexoPulpilar
    },
    [MutationsTypes.PPC](state, ppc){
        state.ppc = ppc;
    },
    [MutationsTypes.AV_MOTORA](state, avMotora){
        state.avMotora = avMotora;
    },
    [MutationsTypes.RESERVAS_FUSIONAIS](state, reservasFusionais){
        state.reservasFusionais = reservasFusionais;
    },
    [MutationsTypes.FLEXIBILIDADE_ACOMODACAO](state, flexiDeAcomodacao){
        state.flexiDeAcomodacao = flexiDeAcomodacao
    },
    [MutationsTypes.RETINOSCOPIA](state, retinoscopia){
        state.retinoscopia = retinoscopia
    },
    [MutationsTypes.FOROMETRIA](state, forometria){
        state.forometria = forometria;
    },
    [MutationsTypes.SUBJETIVO](state, subjetivo){
        state.subjetivo = subjetivo
    },
    [MutationsTypes.TESTE_AMBULATORIAL](state, testeAmbulatorial){
        state.testeAmbulatorial = testeAmbulatorial;
    },
    [MutationsTypes.ADICAO](state, adicao){
        state.adicao = adicao;
    }
}