import * as MutationsTypes from './mutations-types'


export default {


    [MutationsTypes.ALTER_OPTION](state, option) {
        state.option = !option
    },
    [MutationsTypes.PACIENTE_SELECTED](state, idPaciente) {
        state.pacienteSelected = idPaciente;
    }, 
    [MutationsTypes.FICHA_CLINICA](state, fichaClinica) {
        state.fichaClinica = fichaClinica;
    },
    [MutationsTypes.AFINAMENTO](state, afinamento) {
        state.fichaClinica.afinamento = afinamento;
    },
    [MutationsTypes.ACUIDADE](state, acuidade) {
        state.fichaClinica.acuidade = acuidade[0];
        console.log(acuidade[0])
    },
    [MutationsTypes.AMPLITUDE_ACOMODACAO](state, amplitude) {
        state.fichaClinica.amplitude = amplitude;
    },
    [MutationsTypes.ANAMNESE](state, anamnese) {
        state.fichaClinica.anamnese = anamnese;
    },
    [MutationsTypes.PRESCRICAO_ULTIMO_EXAME](state, prescricaoUltimoExame) {
        state.fichaClinica.prescricaoUltimoExame = prescricaoUltimoExame
    },
    [MutationsTypes.CERAMETRIA](state, cerametria) {
        state.fichaClinica.cerametria = cerametria;
    },
    [MutationsTypes.BIOMICRO](state, biomicro) {
        state.fichaClinica.biomicro = biomicro;
    },
    [MutationsTypes.OFTALMOSCOPIA](state, oftalmoscopia) {
        state.fichaClinica.oftalmoscopia = oftalmoscopia
    },
    [MutationsTypes.TONOMETRIA](state, tonometria) {
        state.fichaClinica.tonometria = tonometria
    },
    [MutationsTypes.REFLEXO_PULPILAR](state, reflexoPulpilar) {
        state.fichaClinica.reflexoPulpilar = reflexoPulpilar
    },
    [MutationsTypes.PPC](state, ppc) {
        state.fichaClinica.ppc = ppc;
    },
    [MutationsTypes.AV_MOTORA](state, avMotora) {
        state.fichaClinica.avMotora = avMotora;
    },
    [MutationsTypes.RESERVAS_FUSIONAIS](state, reservasFusionais) {
        state.fichaClinica.reservasFusionais = reservasFusionais;
    },
    [MutationsTypes.FLEXIBILIDADE_ACOMODACAO](state, flexiDeAcomodacao) {
        state.fichaClinica.flexiDeAcomodacao = flexiDeAcomodacao
    },
    [MutationsTypes.RETINOSCOPIA](state, retinoscopia) {
        state.fichaClinica.retinoscopia = retinoscopia
    },
    [MutationsTypes.FOROMETRIA](state, forometria) {
        state.fichaClinica.forometria = forometria;
    },
    [MutationsTypes.SUBJETIVO](state, subjetivo) {
        state.fichaClinica.subjetivo = subjetivo
    },
    [MutationsTypes.TESTE_AMBULATORIAL](state, testeAmbulatorial) {
        state.fichaClinica.testeAmbulatorial = testeAmbulatorial;
    },
    [MutationsTypes.ADICAO](state, adicao) {
        state.fichaClinica.adicao = adicao;
    },
    [MutationsTypes.RX_FINAL](state, rxFinal) {
        state.fichaClinica.rxFinal = rxFinal;
    },
    [MutationsTypes.DX](state, dx) {
        state.fichaClinica.dx = dx
    },
    [MutationsTypes.ID_CONSULTA](state, idConsulta) {
        state.idConsulta = idConsulta;
    },
    [MutationsTypes.LIMPAR](state, limpar) {
        state.limpar = limpar
    },
    [MutationsTypes.DADOS_CLINICA](state, dadosClinica) {
        state.dadosClinica = dadosClinica
    },
    [MutationsTypes.UUID_AGENDAMENTO](state, uuidAgendamento) {
        state.uuidAgendamento = uuidAgendamento
    }
}