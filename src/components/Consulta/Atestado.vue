<template>
   <div class="contentAtestado" contenteditable="true">
       <p align="center"></p>
    <p align="center">
        <font>ATESTADO
            MÉDICO</font>
    </p>
    <hr>
     <table width="100%" cellpadding="1" cellspacing="1">
        <tr>
            <td width="65%">
                <div>
                    <font size="2"  >O(A) SR.(A):
                        <input type="text"  name="nome" v-model="nomePaciente" value="Nome do paciente">
                        <br>
                        COMPARECEU A ESTA CLÍNICA PARA:
                    </font><br>
                    <input type="checkbox" id="checkbox1" checked>
                    <label for="checkbox1" class="p-2">
                        <font  size="2">CONSULTA</font>
                    </label>
                    <br><input type="checkbox" id="checkbox2">
                    <label for="checkbox2" class="p-2">
                        <font size="2">ACOMPANHAR FAMÍLIA:</font>
                        <input type="text" class="texto3" name="nome" size="40" value="Filho (a) menor de idade">
                    </label>
                </div>
            </td>
        </tr>
    </table>

    <hr>
    <font ><strong>PORTANTO, COMUNICAMOS QUE:</strong></font>
    <table width="100%" cellpadding="1" cellspacing="1">
        <tr>
            <td valign="top" width="65%">
                <font  size="2">
                    <div>
                        <input type="checkbox" id="checkbox10">
                        <label for="checkbox10" class="p-2">Nada apresenta que o impossibilite ao
                            <input type="text" name="nome" size="25" class="texto3" value="trabalho/escola/creche">
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox11">
                        <label for="checkbox11" class="p-2">Deverá permanecer em repouso no horário:</label>
                        <input type="text" name="nome" size="12" class="texto3" value="00:00 a 00:00h">
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox12">
                        <label for="checkbox12" class="p-2">Deverá permanecer em repouso no período da <b>MANHÃ</b></label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox13">
                        <label for="checkbox13" class="p-2">Deverá permanecer em repouso no período da <b>TARDE</b></label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox14">
                        <label for="checkbox14" class="p-2">Deverá permanecer em repouso no dia de hoje</label>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox15" >
                        <label class="p-2" for="checkbox15">Deverá permanecer em repouso no período de
                            <input type="text" class="texto " name="nome" size="10" value="-- dias">
                        </label>
                    </div>
                </font>
                <hr>
                <font  size="-1">AUTORIZO O MÉDICO ASSISTENTE A REGISTRAR O CID NESTE RELATÓRIO DE
                    ATENDIMENTO MÉDICO.<br>
                    <br>
                    Assinatura: __________________________________________<br>
                </font>
                <font >CID:
                    <input type="text" class="texto" name="nome" size="20" value="">
                </font>
            </td>
            <td valign="top">
                <font  >
                    <table width="200" cellspacing="0" cellpadding="0" border="1">
                        <tr>
                            <td valign="bottom" height="150" align="center">
                                <font size="-2">CARIMBO MÉDICO COM CRM</font>
                            </td>
                        </tr>
                    </table>
                </font>
            </td>
        </tr>
    </table>
    <hr>
    <font face="Calibri" size="2"><b>LOCAL DO ATENDIMENTO:</b></font>
    <font face="Calibri" size="1">
        <div>
            <label for="checkbox18"><b>Clínica Campinas:</b> Av. Guilherme de Campos, 500, Pq. Dom Pedro Shopping –
                (Ent. Colinas) – Campinas/SP – 19 3708 9900</label>
        </div>
    </font>
    <hr>
    </div>
</template>

<script>
import Paciente from '../../services/paciente'
export default {
    data(){
        return {

            nomePaciente: ""
        }
    },
created(){
this.readPaciente();
},
methods:{
readPaciente(){
    Paciente.read(this.$route.params.uuid).then(result =>{
        this.nomePaciente = result.data.paciente.nomePaciente
    })
}
}
}
</script>

<style>
.contentAtestado{
    background:white;
    padding: 10px;
    height: 800px;
}
</style>