<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Anamnese</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <Anamnese/>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="light">Prescrição do Último Exame</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <PrescricaoUltimoExame/>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Acuidade Visual</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <AcuidadeVisual/>
      </b-collapse>
    </b-card>


    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="light">Cerametria</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
         <Cerametria/>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">Biomicroscopia</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Biomicro/>
        </b-card-body>
      </b-collapse>
    </b-card>


    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-6 variant="light">Oftalmoscopia</b-button>
      </b-card-header>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Oftalmoscopia/>
        </b-card-body>
      </b-collapse>
    </b-card>


    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-7 variant="info">Tonometria</b-button>
      </b-card-header>
      <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Tonometria/>
        </b-card-body>
      </b-collapse>
    </b-card>
    

      <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-8 variant="light">Reflexos Pupilares</b-button>
      </b-card-header>
      <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ReflexosPulpilares/>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-9 variant="info">PPC</b-button>
      </b-card-header>
      <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Ppc/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-10 variant="light">Avaliação Motora</b-button>
      </b-card-header>
      <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <AvMotora/>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-11 variant="info">Reservas Fusionais</b-button>
      </b-card-header>
      <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <ReservasFusionais/>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-12 variant="light">Amplitude de Acomodação</b-button>
      </b-card-header>
      <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <AmpliAcomodacao/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-13 variant="info">Flexibilidade e Facilidade de Acomodação</b-button>
      </b-card-header>
      <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <FlexAcomodacao/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-14 variant="light">Retinoscopia Estática</b-button>
      </b-card-header>
      <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Retinoscopia/>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-15 variant="info">Forometria</b-button>
      </b-card-header>
      <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Forometria/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-16 variant="light">Forometria</b-button>
      </b-card-header>
      <b-collapse id="accordion-16" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Subjetivo/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-17 variant="info">Afinamento</b-button>
      </b-card-header>
      <b-collapse id="accordion-17" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Afinamento/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-18 variant="light">Teste Ambulatorial</b-button>
      </b-card-header>
      <b-collapse id="accordion-18" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <TesteAmbulatorial/>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-19 variant="info">Adição</b-button>
      </b-card-header>
      <b-collapse id="accordion-19" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Adicao/>
        </b-card-body>
      </b-collapse>
    </b-card>

  <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-20 variant="light">Rx Final</b-button>
      </b-card-header>
      <b-collapse id="accordion-20" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <RxFinal/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-21 variant="info">DX</b-button>
      </b-card-header>
      <b-collapse id="accordion-21" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <Dx/>
        </b-card-body>
      </b-collapse>
    </b-card>

     <div class="mt-5">
                    <b-button  variant="primary" class="mb-3">
                      <b-icon-person-check-fill class="mr-3"></b-icon-person-check-fill>Salvar
                    </b-button>
                     <b-button  variant="danger" class="mb-3 ml-4">
                      <b-icon-x  class="mr-3"></b-icon-x>Cancelar
                    </b-button>
                  </div>
    
  </div>
</template>

<script>
import Anamnese from './Anamnese'
import PrescricaoUltimoExame from './PrescricaoUltExame'
import AcuidadeVisual from './AcuidadeVisual'
import Cerametria from './Cerametria'
import Biomicro from './Biomicro'
import Oftalmoscopia from './Oftalmoscopia'
import Tonometria from './Tonometria'
import ReflexosPulpilares from './ReflexosPulpilares'
import Ppc from './Ppc'
import AvMotora from './AvMotora'
import ReservasFusionais from './ReservasFusionais'
import AmpliAcomodacao from './AmpliDeAcomodacao'
import FlexAcomodacao from './FlexAcomodacao'
import Retinoscopia from './Retinoscopia'
import Forometria from './Forometria'
import Subjetivo from './Subjetivo'
import Afinamento from './Afinamento'
import TesteAmbulatorial from './TesteAmbulatorial'
import Adicao from './Adicao'
import RxFinal from './RxFinal'
import Dx from './Dx'

export default {
    components:{
        Anamnese,
        PrescricaoUltimoExame,
        AcuidadeVisual,
        Cerametria,
        Biomicro,
        Oftalmoscopia,
        Tonometria,
        ReflexosPulpilares,
        Ppc,
        AvMotora,
        ReservasFusionais,
        AmpliAcomodacao,
        FlexAcomodacao,
        Retinoscopia,
        Forometria,
        Subjetivo,
        Afinamento,
        TesteAmbulatorial,
        Adicao,
        RxFinal,
        Dx
    }

}
</script>

<style>

</style>