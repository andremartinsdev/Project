import validate from 'validate.js'

function ValidarPaciente(data) {
    const constraints = {
        NOMEPACIENTE: {
            presence: {
                allowEmpty: false,
                message: 'O campo Nome não pode ficar em branco.',
            },
            length: {
                maximum: 100,
                message: 'O campo Nome não pode ter mais de 100 caracteres.'
            }
        },
        EMAIL: {
            length: {
                maximum: 50,
                message: 'O campo de Email não pode ter mais de 50 caracteres'
            }
        },
        TELEFONE: {
            length: {
                maximum: 50,
                message: 'O campo de Telefone não pode ter mais de 50 caracteres'
            }
        }
    }
    return validate(data, constraints, { fullMessages: false })
}

export default {
    ValidarPaciente 
}

