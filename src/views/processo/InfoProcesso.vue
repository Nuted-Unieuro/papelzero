<template>
  <div>
    <v-expansion-panels v-model="panel" focusable inset multiple>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Informações Sobre o Solicitante</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container fluid>
                    <v-row align="center">
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="nomeUsuario"
                                label="Nome do Solicitante"
                                disabled
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                :items="dadosDepartamentos"
                                item-text='nome_departamento'
                                item-value='id'
                                label="Departamento"
                            ></v-select>
                        </v-col>
                    </v-row>
                </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Assinaturas e Encaminhamentos</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Processo</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
    import DepartamentosService from '../../services/departamentos.service'

export default {

  data() {
    return {
        panel: [0],
        nomeUsuario: "Michel Junio Ferreira Rosa",
        dadosDepartamentos: [],
    }
  },
  mounted() {
      this.getAllDepartamentos()
  },
  methods:{
    getAllDepartamentos(){
        DepartamentosService.findAll()
        .then((response) => {
            if (response.data) {
                this.dadosDepartamentos = response.data
            }
        }).catch((e) => {
            console.log(e.message)
            if (this.HTTP_UNAUTHORIZED === e.response.status ||
                this.HTTP_FORBIDDEN === e.response.status) {
                this.logout(e.response.status)
            } else {
                this.showError()
            }
        }).finally(() => {
        this.isLoading = false
        })
    }
  }
}
</script>
