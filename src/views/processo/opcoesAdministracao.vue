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
                <b>Cadastrar Usuário</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container fluid>
                    <v-row align="center">
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="nomeUsuario"
                                label="Nome Completo"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="cpf"
                                label="CPF"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="matricula"
                                label="Matrícula"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="cargo"
                                label="Cargo"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="email"
                                label="E-mail"
                                >
                            </v-text-field>
                        </v-col>
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-select
                                v-model="tipo_acesso"
                                :items="itens_tipo_acesso"
                                :menu-props="{ maxHeight: '400' }"
                                label="Tipo de Acesso"
                                persistent-hint
                            ></v-select>
                        </v-col>
                         <v-col class="d-flex" cols="12" sm="6">
                            <v-combobox
                                v-model="dept_usuario"
                                :items="todos_departamentos"
                                label="Selecione os Departamentos do Usuário"
                                multiple
                                chips
                            ></v-combobox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-btn
                                class="ma-2"
                                :loading="loading"
                                :disabled="loading"
                                color="info"
                                @click="cadastrarUsuario()"
                                >
                                Cadastrar Usuário
                                </v-btn>
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
        <v-expansion-panel>
            <v-expansion-panel-header>
                <b>Cadastrar Departamento</b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-container fluid>
                    <v-row align="center">
                        <v-col class="d-flex" cols="12" sm="6">
                            <v-text-field
                                v-model="nomeDepartamento"
                                label="Nome Departamento"
                                >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-btn
                                class="ma-2"
                                :loading="loading"
                                :disabled="loading"
                                color="info"
                                @click="cadastrarDepartamento()"
                                >
                                Cadastrar Departamento
                                </v-btn>
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
    import departamentosService from '../../services/departamentos.service'
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
                nomeUsuario: '',
                cpf: '',
                matricula: '',
                cargo: '',
                email: '',
                tipo_acesso: '',
                todos_departamentos: [],
                dept_usuario: null,
                nomeDepartamento: '',
                itens_tipo_acesso: [{value: 0, text: 'Administrador'}, {value: 1, text: 'Usuário'}, {value: 2, text: 'Template'} ],
                sigilo: false,
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
            this.getDepartamentos()
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
            cadastrarUsuario() {
                this.loading = true
                this.validarCamposCadastrarUsuario()
                //this.createProcess()
                this.loading = false

            },
            cadastrarDepartamento() {
                this.loading = true
                this.validarCamposCadastrarDepartamento()
                //this.createProcess()
                this.loading = false

            },
            validarCamposCadastrarUsuario(){
                this.notify = 
                    {
                        value: true,
                        type: 'success',
                        text: 'O Usuário foi cadastrado com Sucesso',
                        color: 'green'
                    }
        
                if(this.nomeUsuario === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe o Nome do Usuário'
                }else if(this.cpf === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe o CPF do Usuário'
                }else if(this.matricula === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe a matrícula do Usuário'
                }else if(this.email === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe o e-mail do Usuário'
                }else if(this.tipo_acesso === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe o Tipo de Acesso do Usuário'
                }else if(this.dept_usuario == null){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe o Tipo de Acesso do Usuário'
                }else{
                    this.createUser()
                    this.alertTimeout()
                }
            },
            validarCamposCadastrarDepartamento(){
                this.notify = 
                    {
                        value: true,
                        type: 'success',
                        text: 'O Departamento foi cadastrado com Sucesso',
                        color: 'green'
                    }
        
                if(this.nomeDepartamento === ''){
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Informe o Nome do Departamento'
                }else{
                    this.createDepartamento()
                    this.alertTimeout()
                }
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
            createUser(){
                let dadosUsuario = {}
                dadosUsuario.nomeUsuario = this.nomeUsuario
                dadosUsuario.cpf = this.cpf
                dadosUsuario.matricula = this.matricula
                dadosUsuario.cargo = this.cargo
                dadosUsuario.email = this.email
                dadosUsuario.dept_usuario = this.dept_usuario
                dadosUsuario.tipo_acesso = this.tipo_acesso
                console.log(dadosUsuario)
                usuariosService.save(dadosUsuario)
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
            createDepartamento(){
                let dadosDepartamento = {}
                dadosDepartamento.nomeDepartamento = this.nomeDepartamento
                console.log(dadosDepartamento)
                departamentosService.save(dadosDepartamento)
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
            getDepartamentos(){
                departamentosService.findAll()
                .then((response) => {
                    if (response.data) {
                        this.todos_departamentos = response.data.map(function(i){
                            return {"value": i.id, "text": i.nome_departamento }
                        })
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
