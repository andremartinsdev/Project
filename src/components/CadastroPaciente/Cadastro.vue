<template>
<div>
<SidebarNavbar/>
  <div class="formCliente">
    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Cadastro" active>
            <b-card class="formClienteCard">
              <b-container class="col-sm-6" fluid>
                <h3 class="mb-2">
                  Cadastro Paciente
                  <b-icon-person-plus class="ml-3"></b-icon-person-plus>
                </h3>
                <form @submit.prevent="editar()">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Nome Paciente</label>
                    <input type="text" v-model="paciente[0].nome" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Data de Nascimento</label>
                    <input type="date" v-model="paciente[0].DataNascimento" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" v-model="paciente[0].email" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Telefone</label>
                    <input type="text" v-model="paciente[0].Tel" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Ocupação</label>
                    <input type="text" v-model="paciente[0].ocupacao" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">CPF</label>
                    <input type="text" v-model="paciente[0].cpf" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">RG</label>
                    <input type="text" v-model="paciente[0].rg" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Endereço</label>
                    <input type="text" v-model="paciente[0].endereco" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Cidade</label>
                    <input type="text" v-model="paciente[0].cidade" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Estado</label>
                    <input type="text" v-model="paciente[0].estado" class="form-control" />
                  </div>

                  <div>
                    <b-button block variant="primary" type="submit" class="mb-3" >
                      <b-icon-person-check-fill class="mr-3"></b-icon-person-check-fill>Salvar
                    </b-button>
                     <b-button block variant="danger" class="mb-3">
                      <b-icon-x class="mr-3"></b-icon-x>Cancelar
                    </b-button>
                  </div>
                </form>
              </b-container>
            </b-card>
          </b-tab>
          <b-tab title="Pesquisa">
            <b-card class="formClienteCard">
              <b-input-group  class="mt-3">
                <b-form-input></b-form-input>
                <b-input-group-append>
                  <b-button variant="primary" >Pesquisar</b-button>
                </b-input-group-append>
              </b-input-group>
              <div>
               <table class="table table-sm text-center">
  <thead class="">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">Data de Nascimento</th>
      <th scope="col">CPF</th>
      <th scope="col">Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.first_name}}</td>
      <td>{{item.DataNascimento}}</td>
      <td>{{item.cpf}}</td>
      <td>
        <button type="button" class="btn btn-outline-danger btn-sm mr-2" @click="editar()">Excluir</button>
        <button type="button" class="btn btn-outline-primary btn-sm">Editar</button>
      </td>
    </tr>
    
  </tbody>
</table>
              </div>
            </b-card>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</div>
</template>

<script>
import SidebarNavbar from "../SidebarNavbar";
import { mapState, mapActions } from 'vuex'
 
export default {
  components:{
    SidebarNavbar
  },
  computed: {
 ...mapState({
        pacientes: state => state.paciente
      })
  },
  data() {
    return {
      
     paciente: [{
              nome: '',
              DataNascimento: '',
              email: '',
              Tel: '',
              ocupacao: '',
              cpf: '',
              rg: '',
              endereco: '',
              cidade: '',
              estado: ''
     }],
      

      items: [
        { id: 40, first_name: "Dickerson", DataNascimento:"10/09/1992", cpf: "100.111.111-23" },
        { id: 21, first_name: "Larsen", DataNascimento:"10/09/1992", cpf: "222.122.332-24" },
        { id: 89, first_name: "Geneva", DataNascimento:"10/09/1992", cpf: "323.299.233-12" },
        { id: 38, first_name: "Jami", DataNascimento:"10/09/1992", cpf: "122.234.112-32" }
      ]
    };
  },

 methods: {
    ...mapActions([
      'savePaciente',
      'deletePaciente',
      'updatePaciente',
      'selectPaciente',
      'selectPacienteId'
    ]),

    editar(){
      console.log(this.paciente[0].nome)
      this.savePaciente(this.paciente)
      this.deletePaciente()
      this.updatePaciente()
      this.selectPaciente()
      this.selectPacienteId()
    }
 }

};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Monda:wght@700&display=swap");
.formCliente {
  margin-top: 100px;
  border-radius: 10px;
  padding: 20px;
}
.formClienteCard {
  background: rgb(241, 240, 240);
}
.formCliente label,
button {
  font-family: "Monda", sans-serif;
}

.formCliente h3 {
  font-family: "Monda", sans-serif;
  text-align: center;
}
</style>