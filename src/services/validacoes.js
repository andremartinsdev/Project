import validate from 'validate.js'
function ValidaAgendamento(data) {
    const constraints = {

        idPaciente: {
            presence: {
                allowEmpty: false,
                message: 'O campo idPaciente não pode ficar em branco.',
            }

        },
        procedimento: {
            presence:{
                allowEmpty: false,
                message: 'O campo Procedimento não pode ficar em branco.',
            }
        },
        titulo: {
            presence:{
                allowEmpty: false,
                message: 'O campo titulo não pode ficar em branco.',
            }
        },
        data: {
            presence: {
                allowEmpty: false,
                message: 'O campo data não pode ficar em branco.',
            }
        },
        valorConsulta : {
            presence: {
                allowEmpty: false,
                message: 'O campo data não pode ficar em branco.',
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })

}

function ValidaProcedimento(data) {
    const constraints = {

        text: {
            presence: {
                allowEmpty: false,
                message: 'O campo Descrição não pode ficar em branco.',
            }

        }
        
    }
    return validate(data, constraints, { fullMessages: false })

}


export default {
    ValidaAgendamento,
    ValidaProcedimento
}

