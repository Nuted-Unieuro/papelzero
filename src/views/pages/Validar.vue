<style >
    .jodit .jodit-wysiwyg {
        background-color: #fff !important;
    }
</style>
<template>
  <div>
    <div class="items-center ps-6 pe-5 pt-2 pb-5">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo-zero.png')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title text--primary">
            ZeroPapel
          </h2>
        </v-slide-x-transition>
      </router-link>
    </div>
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>Validar Processo</v-card-title>
          <v-card-text>
              <v-container fluid>
                    <v-row align="center">
                        <v-col class="d-flex" cols="10" sm="6">
                            <v-text-field
                                v-model="referenciaProcesso"
                                label="Referência do Processo"
                                >
                            </v-text-field>

                        </v-col>
                        <v-col class="d-flex" cols="2" sm="6">
                            <v-btn
                            class="ma-2"
                            :loading="loading"
                            :disabled="referenciaProcesso.length < 30"
                            color="info"
                            @click="getProcesso()"
                            >
                            Buscar Processo
                            </v-btn>
                        </v-col>
                    </v-row>
                    <p>*Busque o processo pelo número de referência fornecido ou indentifique no cabeçalho ou rodapé do arquivo.</p>
                    <v-col cols="6">
                           <v-alert
                            prominent
                            transition="scale-transition"
                            :value="notify.value"
                            :type="notify.type"
                            :color="notify.color"
                            >
                            {{notify.text}}
                            </v-alert>
                    </v-col>
                    <v-col class="d-flex" cols="12">
                        <v-row v-if="viewJodit">
                            <v-list-item-content>
                                <div id="NewProcesso">
                                    <jodit-editor
                                        v-model.trim="joditContent"
                                        :buttons="buttons"
                                        :config="config"
                                        readonly: true
                                    />
                                </div>
                            </v-list-item-content>
                        </v-row>
                    </v-col>
                </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import processosServices from '../../services/processos.service'
  import templatesService from '../../services/templates.service'
  import gerarAssinatura from '../../services/gerarAssinatura.service'
  import assinaturasService from '../../services/assinaturas.service'
  import 'jodit/build/jodit.min.css'
  import { JoditEditor } from 'jodit-vue'
  export default {
    name: 'validar',
      components: {
      JoditEditor
    },
    data () {
      return {
        referenciaProcesso: '',
        joditContent:"",
        config: this.getDefaultJoditConfigViewProcesso(),
        buttons: this.getDefaultJoditButtonsPush(),
        loading: false,
        joditContentIsEmpty: false,
        joditContent: '',
        viewJodit: false,
        item: null,
        assinatura: {
            nomeUsuario: '',
            cargoUsuario: '',
            departamentoUsuario: '',
            dataAssinatura: '',
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
        notify: {
                    value: false,
                    type: 'warning',
                    text: 'Inserido com sucesso',
                    color: 'red'
                },
      }
    },
    methods: {   
        getProcesso(){
            processosServices.processoByReferencia(this.referenciaProcesso)
            .then((response) => {
                console.log(response)
                if (response.data) {
                    if(response.data.length > 0){
                        this.item = response.data[0]
                        this.assinatura = this.getAssinaturasUsuarios(response.data[0])
                        this.joditContent = response.data[0].desc_documento
                        this.viewJodit = true
                    }
                    else{
                        this.viewJodit = false
                        this.notify.type = 'warning'
                        this.notify.color = 'red'
                        this.notify.text = 'Processo não encontrado, não finalizado ou indeferido!'
                        this.notify.value=true
                        this.alertTimeout()
                    }
                }
            }).catch((e) => {
                console.log(e.message)
                if (this.HTTP_UNAUTHORIZED === e.response.status ||
                    this.HTTP_FORBIDDEN === e.response.status) {
                this.logout(e.response.status)
                } else {
                    this.notify.type = 'warning'
                    this.notify.color = 'red'
                    this.notify.text = 'Processo não encontrado, ou não finalizado!'
                    this.notify.value=true
                    this.alertTimeout()
                }
            }).finally(() => {
                this.isLoading = false
            })
        },
        getAssinaturasUsuarios(item){
        let assinaturas = []
        assinaturasService.assinadosbyprocessos(item)
        .then((response) => {
          console.log(response)
          if (response.data) {
            console.log(response.data,'dados')
            assinaturas = response.data.map(function(item){
              let assinatura = {
                nomeUsuario: item.name,
                cargoUsuario: item.cargo,
                departamentoUsuario: item.nome_departamento,
                dataAssinatura: item.dt_assinatura,
                fingerprint: require('@/assets/images/fingerprint.svg')
              }
              return assinatura
            })
            console.log(assinaturas, 'assinaturas')
            this.assinatura = assinaturas
            this.gerarAssinatura()
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
      gerarAssinatura(){
        this.joditContent = ''
        if(this.item.sigilo){
          this.joditContent = this.joditContent.concat(gerarAssinatura.geradorConfidencial(this.templateInit))
        }
        this.joditContent = this.joditContent.concat(gerarAssinatura.geradorCabecalho(this.item))
        this.joditContent = this.joditContent.concat(this.item.desc_documento)
        this.assinatura.forEach(assinatura => {
          this.joditContent = this.joditContent.concat(gerarAssinatura.geradorAssinatura(assinatura))
        })
        if(this.item.cod_status == 0 || this.item.cod_status == 3){
          this.joditContent = this.joditContent.concat(gerarAssinatura.geradorQrCode(this.item))
        }
        this.joditContent = this.joditContent.concat(gerarAssinatura.geradorReferencia(this.item))
      }, 
        alertTimeout(){
            setTimeout(() => {
                this.notify.value=false
            },5000)
        },
    }
  }
</script>
