<style scoped>
.jodit_toolbar_popup-inline-target {
    z-index: 99999 !important;
}
</style>
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
                                label="Solicitante"
                                disabled
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-autocomplete
                                :items="dadosDepartamentos"
                                :disabled="dadosDepartamentos.length <= 1"
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
                                item-value='id'
                                class="mx-4"
                                chips
                                clearable
                                deletable-chips
                                label="Buscar usuários para ASSINAR o processo"
                                item-text="name"
                                multiple
                            >
                                <template v-slot:selection="data">
                                    <v-tooltip left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-chip
                                                :input-value="data.selected"
                                                close
                                                v-bind="attrs"
                                                v-on="on"
                                                @click:close="remove(data.item)"
                                                @click="data.select"
                                            >
                                                {{ data.item.name }}
                                            </v-chip>
                                        </template>
                                        <span>{{data.item.nome_departamento}}</span>
                                    </v-tooltip>
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
                        <v-col cols="6">
                            <v-autocomplete
                                v-model="usersSelectedAcp"
                                :loading="isLoadingAcp"
                                :items="dadosUsuariosAcp"
                                :search-input.sync="getUsersAcp"
                                hide-no-data
                                hide-selected
                                cache-items
                                item-value="id"
                                class="mx-4"
                                chips
                                clearable
                                deletable-chips
                                label="Buscar usuários para ACOMPANHAR o processo"
                                item-text="name"
                                multiple
                            >
                                <template v-slot:selection="data">
                                    <v-tooltip left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-chip
                                                :input-value="data.selected"
                                                close
                                                v-bind="attrs"
                                                v-on="on"
                                                @click:close="removeAcp(data.item)"
                                                @click="data.select"
                                            >
                                                {{ data.item.name }}
                                            </v-chip>
                                        </template>
                                        <span>{{data.item.nome_departamento}}</span>
                                    </v-tooltip>
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

                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div id="FaqEdit" v-bind:class="[joditContentIsEmpty ? 'force-is-danger' : '']">
                                <jodit-editor
                                    v-model.trim="joditContent"
                                    :buttons="buttons"
                                    :config="config"
                                />
                            </div>
                        </v-col>
                    </v-row>
                </v-container>          
                        
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
    import usuariosService from '../../services/users.service'
    import gerarAssinatura from '../../services/gerarAssinatura.service'
    import 'jodit/build/jodit.min.css'
    import { JoditEditor } from 'jodit-vue'
    export default {
        components: {
            JoditEditor
        },
        data() {
            return {
                panel: [2],
                nomeUsuario: this.$store.state.auth.user.name,
                dadosDepartamentos: [],
                primeiroDept: null,
                getUsers: null,
                dadosUsuarios: [],
                usersSelected: [],
                isLoading: false,
                getUsersAcp: null,
                dadosUsuariosAcp: [],
                usersSelectedAcp: [],
                isLoadingAcp: false,
                joditContentIsEmpty: false,
                joditContent: '',
                config: this.getDefaultJoditConfig(),
                buttons: this.getDefaultJoditButtons(),
                assinatura: {
                    nomeUsuario: 'Michel Junio Ferreira Rosa',
                    cargoUsuario: 'Coordenador',
                    departamentoUsuario: 'Sistemas de Informação',
                    dataAssinatura: '2022-03-01T20:42:50.000000Z',
                    fingerprint: require('@/assets/images/fingerprint.svg')
                },
                template: {
                    logoUnieuro: require('@/assets/images/logos/unieuro.png')
                },
                processo: {
                    numeroProcesso: '87a3e041-c41a-54ad-e340-7ed9e859cb77'
                }
            }
        },
        mounted() {
            this.getDepartamentosByUser()
            this.gerarAssinatura()
        },
        watch: {
            getUsers (val) {
                val && val !== this.select && this.getAllUsuarios(val)
            },
            getUsersAcp (val) {
                val && val !== this.select && this.getAllUsuariosAcp(val)
            },
            joditContent (newValue) {
                if (this.stripHtml(newValue).length === 0) {
                    this.joditContentIsEmpty = true
                } else {
                    this.joditContentIsEmpty = false
                }
            }
        },
        methods:{
            gerarAssinatura(){
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorCabecalho(this.processo))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorTemplate())
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorAssinatura(this.assinatura))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorAssinatura(this.assinatura))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorQrCode(this.processo))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorReferencia(this.processo))
            },
            getAllUsuarios(query){
                this.isLoading = true
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
            getAllUsuariosAcp(query){
                this.isLoadingAcp = true
                usuariosService.findUsersWithDepartments(query)
                .then((response) => {
                    if (response.data) {
                        this.dadosUsuariosAcp = response.data
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
                    this.isLoadingAcp = false
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
                const index = this.usersSelected.indexOf(item.id)
                if (index >= 0) this.usersSelected.splice(index, 1)
            },
            removeAcp (item) {
                console.log(item, this.usersSelectedAcp)
                const index = this.usersSelectedAcp.indexOf(item.id)
                if (index >= 0) this.usersSelectedAcp.splice(index, 1)
            },
        }
    }
</script>
