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
                            <v-autocomplete
                                :items="dadosDepartamentos"
                                item-text='nome_departamento'
                                item-value='id'
                                label="Departamento"
                                chips
                                v-model="primeiroDept"
                                clearable
                                deletable-chips
                                auto-select-first
                            ></v-autocomplete>
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

                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-autocomplete
                                v-model="usersSelected"
                                :loading="isLoading"
                                :items="dadosUsuarios"
                                :search-input.sync="getUsers"
                                hide-no-data
                                hide-selected
                                cache-items
                                class="mx-4"
                                chips
                                label="Buscar usuários para assinar o processo"
                                item-text="name"
                                item-value="name"
                                multiple
                            >
                                <template v-slot:selection="data">
                                    <v-chip
                                        :input-value="data.selected"
                                        close
                                        @click="data.select"
                                        @click:close="remove(data.item)"
                                    >
                                        {{ data.item.name }}
                                    </v-chip>
                                </template>
                                <template v-slot:item="data">
                                    <template>
                                        <v-list-item-content>
                                            <v-list-item-title v-html="data.item.matricula + ' - ' + data.item.name"></v-list-item-title>
                                            <v-list-item-subtitle v-html="data.item.nome_departamento"></v-list-item-subtitle>
                                        </v-list-item-content>
                                    </template>
                                </template>
                            </v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
              
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
    import usuariosService from '../../services/users.service'
    export default {
        data() {
            return {
                panel: [1],
                nomeUsuario: this.$store.state.auth.user.name,
                dadosDepartamentos: [],
                primeiroDept: null,
                getUsers: null,
                dadosUsuarios: [],
                usersSelected: [],
                isLoading: false

            }
        },
        mounted() {
            this.getDepartamentosByUser()
        },
        watch: {
            getUsers (val) {
                val && val !== this.select && this.getAllUsuarios(val)
            },
        },
        methods:{
            getAllUsuarios(query){
                usuariosService.findUsersWithDepartments(query)
                .then((response) => {
                    if (response.data) {
                        this.dadosUsuarios = response.data
                        console.log('entrou', this.dadosUsuarios)
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
            },
            getDepartamentosByUser(){
                console.log(this.$store.state.auth.user, 'store')
                usuariosService.findUserWithDepartament(this.$store.state.auth.user)
                .then((response) => {
                    if (response.data) {
                        this.dadosDepartamentos = response.data[0].departamentos
                        this.primeiroDept = response.data[0].departamentos[0].id
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
            },
            remove (item) {
                const index = this.usersSelected.indexOf(item.name)
                if (index >= 0) 
                    this.usersSelected.splice(index, 1)
                },
        }
    }
</script>
