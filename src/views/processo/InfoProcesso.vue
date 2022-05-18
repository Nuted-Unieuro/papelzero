<style >
    .jodit .jodit-wysiwyg {
        background-color: #fff !important;
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
                                @change="(event) => changeUserAssinatura(event)"
                                auto-select-first
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
            </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Informações Sobre o Processo</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>

                <v-container>
                    <v-row align="center">
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="tituloProcesso"
                                label="Título do Processo"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-autocomplete
                                :items="dadosTemplates"
                                item-text='descricao'
                                item-value='id_template'
                                label="Templates"
                                chips
                                v-model="primeiroTemplate"
                                clearable
                                deletable-chips
                                auto-select-first
                                @change="(event) => selectedTemplate(event)"
                            ></v-autocomplete>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-tooltip top>
                                <template v-slot:activator="{ on, attrs }">
                                    <div v-on="on" v-bind="attrs">
                                        <v-switch
                                            v-model="sigilo"
                                            label="Documento Interno"
                                            color="#f44336"
                                            :value="sigilo = sigilo ? true : false"
                                            hide-details
                                            v-bind="attrs"
                                            v-on="on"
                                            >
                                        </v-switch>
                                    </div>                                    
                                </template>
                                <span>Se habilitado, somente usuários autenticados que participam do processo podem visualizar.</span>
                            </v-tooltip>
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
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Assinaturas e Encaminhamentos</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>

                <v-container>
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <v-autocomplete
                                v-model="usersSelected"
                                :loading="isLoading"
                                :items="dadosUsuarios"
                                :search-input.sync="getUsers"
                                hide-no-data
                                hide-selected
                                item-value='id'
                                class="mx-4"
                                chips
                                @change="changeComboAssinaturas()"
                                :disable-lookup="true"
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
                                                :close="data.item.user_id !== dadosDepartamentos[0].id"
                                                v-bind="attrs"
                                                v-on="on"
                                                @click:close="data.item.user_id !== dadosDepartamentos[0].id ? remove(data.item) : ''"
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
                        <v-col cols="12" sm="12" md="6">
                            <v-autocomplete
                                v-model="usersSelectedAcp"
                                :loading="isLoadingAcp"
                                :items="dadosUsuariosAcp"
                                :search-input.sync="getUsersAcp"
                                hide-no-data
                                hide-selected
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
                <b>Submeter Processo</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>

                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-btn
                                class="ma-2"
                                :loading="loading"
                                :disabled="loading"
                                color="info"
                                @click="submeterProcesso()"
                                >
                                Registrar Processo
                                </v-btn>
                                <p>*Ao clicar em Registrar Processo, você concorda em assinar o documento digitalmente e se responsabiliza pelo seu conteúdo. Todos os participantes do processo serão notificados.</p>
                            </v-col>
                        <v-col cols="6">
                           <v-alert
                            prominent
                            transition="scale-transition"
                            :value="notify.value"
                            :type="notify.type"
                            >
                            {{notify.text}}
                            </v-alert>
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
    import templatesService from '../../services/templates.service'
    import processosService from '../../services/processos.service'
    import gerarAssinatura from '../../services/gerarAssinatura.service'
    import 'jodit/build/jodit.min.css'
    import { JoditEditor } from 'jodit-vue'
    export default {
        components: {
            JoditEditor
        },
        data() {
            return {
                panel: [0],
                sigilo: false,
                nomeUsuario: this.$store.state.auth.user.name,
                infoProcesso: '',
                tituloProcesso: '',
                dadosDepartamentos: [],
                dadosTemplates: [],
                primeiroTemplate: null,
                primeiroDept: null,
                getUsers: null,
                dadosUsuarios: [],
                usersSelected: [],
                cacheAssinaturas: [],
                cacheAssinaturasAcp: [],
                isLoading: false,
                getUsersAcp: null,
                dadosUsuariosAcp: [],
                usersSelectedAcp: [],
                isLoadingAcp: false,
                loading: false,
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
                },
                templateInit: {
                    confidencial: require('@/assets/images/confidencial.svg')
                },
                loadSubmit: false,
                loaderSubmit: null,
                userLogadoAssintaura: [],
                notify: {
                    value: false,
                    type: 'success',
                    text: 'Inserido com sucesso',
                    color: 'green'
                },
            }
        },
        mounted() {
            this.getDepartamentosByUser()
            this.getTemplates()
            this.getUsuarioLogadoAssinatura(this.$store.state.auth.user.id)

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
            },
            usersSelected (newSelectedArray, oldSelectedArray) {
                this.pushOrRemoveAssinaturas(newSelectedArray)
            },
            usersSelectedAcp (newSelectedArray, oldSelectedArray) {
                this.pushOrRemoveAssinaturasAcp(newSelectedArray)
            },
        },
        methods:{
            selectedTemplate(event){
                console.log(event)
                let template = ''
                let x = this.dadosTemplates.map(function(item){
                    if(item.id === event){
                        template = item.template
                    }
                })
                this.joditContent = template
                console.log(template)
            },
            changeComboAssinaturas () {
                let userLogado = _.find(this.userLogadoAssintaura, {dept_id:this.primeiroDept})
                console.log(this.userLogadoAssintaura, 'paga1')
                this.usersSelected.filter(obj1 => obj1==userLogado.id).length > 0 ? this.usersSelected : this.usersSelected.push(userLogado.id)
            },
            submeterProcesso() {
                this.loading = true
                this.validarCampos()
                //this.createProcess()
                this.loading = false

            },
            validarCampos(){
                this.notify = 
                    {
                        value: true,
                        type: 'success',
                        text: 'O Processo foi Registrado com Sucesso',
                        color: 'green'
                    }
                let assintantes = this.cacheAssinaturas
                let observadores = this.cacheAssinaturasAcp
                let count = assintantes.length + observadores.length
                console.log(count, 'count')
                if(this.primeiroDept === null){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Selecione o departamento do solicitante'
                }else if(this.tituloProcesso === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'O título do processo não pode ser vazio'
                }else if(this.joditContent === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'O processo não pode ser vazio'
                }else if(count < 2){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Selecione ao menos dois participantes no processo'
                }else{
                    this.createProcess()
                    this.alertTimeout()
                }
            },
            alertTimeout(){
                setTimeout(() => {
                    this.notify.value=false
                },5000)
            },
            createProcess(){
                console.log('conteudo processo')
                console.log(this.joditContent)
                console.log('assinantes')
                console.log(this.cacheAssinaturas)
                console.log('acompanhantes')
                console.log(this.cacheAssinaturasAcp)
                console.log("sigilo")
                console.log(this.sigilo)
                console.log("responsavel")
                console.log(this.userLogadoAssintaura)
                let dadosProcessos = {}
                dadosProcessos.conteudo = this.joditContent
                dadosProcessos.assinantes = this.cacheAssinaturas
                dadosProcessos.observadores = this.cacheAssinaturasAcp
                dadosProcessos.sigilo = this.sigilo
                dadosProcessos.solicitante = [_.find(this.userLogadoAssintaura, {dept_id:this.primeiroDept})]
                dadosProcessos.tituloProcesso = this.tituloProcesso
                console.log(dadosProcessos)
                processosService.save(dadosProcessos)
                    .then((response) => {
                        console.log(response)
                    if (this.HTTP_CREATED === response.status || this.HTTP_OK === response.status) {
                        this.showSuccess()
                    }
                    }).catch((e) => {
                    this.handleError(e)
                    }).finally(() => {
                    this.isLoading = false
                    })
            },
            pushOrRemoveAssinaturas(dados){
                this.cacheAssinaturas =  this.dadosUsuarios.filter(obj1 => dados.find(obj2 => obj1.id===obj2));
                console.log('array cache')
                console.log(dados)
                console.log(this.dadosUsuarios)
                console.log(this.cacheAssinaturas)
            },
            pushOrRemoveAssinaturasAcp(dados){
                this.cacheAssinaturasAcp =  this.dadosUsuariosAcp.filter(obj1 => dados.find(obj2 => obj1.id===obj2));
                console.log('array cache')
                console.log(dados)
                console.log(this.dadosUsuariosAcp)
                console.log(this.cacheAssinaturasAcp)
            },
            gerarAssinatura(){
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorConfidencial(this.templateInit))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorCabecalho(this.processo))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorTemplate())
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorAssinatura(this.assinatura))
                this.assinatura.nomeUsuario = "Juliana Patricia Ferraz de Souza"
                this.assinatura.cargoUsuario = "Pró-reitora Acadêmica"
                this.assinatura.departamentoUsuario = "Reitoria"
                this.assinatura.dataAssinatura = "2022-03-02T17:42:50.000000Z"
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorAssinatura(this.assinatura))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorQrCode(this.processo))
                this.joditContent = this.joditContent.concat(gerarAssinatura.geradorReferencia(this.processo))
            },
            getAllUsuarios(query){
                this.isLoading = true
                usuariosService.findUsersWithDepartments(query)
                .then((response) => {
                    if (response.data) {
                        response.data =  response.data.filter(obj1 => !this.usersSelected.find(obj2 => obj1.id===obj2));
                        this.dadosUsuarios = response.data
                        this.dadosUsuarios = this.dadosUsuarios.concat(this.cacheAssinaturas)
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
            getUsuarioLogadoAssinatura(query){
                this.isLoading = true
                usuariosService.findUsersWithDepartmentsLogado(query)
                .then((response) => {
                    if (response.data) {
                        this.userLogadoAssintaura = response.data
                        this.dadosUsuarios = response.data
                        this.cacheAssinaturas = this.dadosUsuarios
                        this.usersSelected = [response.data[0].id]
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
                        response.data =  response.data.filter(obj1 => !this.usersSelectedAcp.find(obj2 => obj1.id===obj2));
                        this.dadosUsuariosAcp = response.data
                        this.dadosUsuariosAcp = this.dadosUsuariosAcp.concat(this.cacheAssinaturasAcp)
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
            getTemplates(){
                templatesService.findAllNotPage()
                .then((response) => {
                    if (response.data) {
                        this.dadosTemplates = response.data
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
            changeUserAssinatura (item) {
                let userLogado = _.find(this.userLogadoAssintaura, {dept_id:item})
                console.log(userLogado)
                this.usersSelected = [userLogado.id]
                console.log(item)
            }
        }
    }
</script>
