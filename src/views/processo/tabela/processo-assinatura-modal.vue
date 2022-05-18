<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title> {{ titleModal }} </v-toolbar-title>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
        <v-alert
          border="top"
          dark
          :value="erroAlert"
          dismissible
          :type="typeErroAlert"
          elevation="7"
          transition="slide-y-transition"
          class="mt-3"
        >
          {{ textErroAlert }}
        </v-alert>
          <!-- <v-subheader></v-subheader> -->
          <v-list-item>
            <v-list-item-content>          
              <v-col cols="10">
                <v-text-field
                  v-model="nomeProcesso"
                  :counter="50"
                  label="Nome do Processo"
                  :readonly="disabled"
                  required
                ></v-text-field>
              </v-col>              
              <v-col cols="2">
                <v-switch
                  v-model="viewProcesso"
                  :label="`Documento Interno?`"
                  hint="Você pode alterar o status de sigilo do processo, tornando o mesmo público ou privado."
                  persistent-hint
                ></v-switch>
              </v-col>
              <v-col cols="4">
                <v-textarea
                  name="input-5-1"
                  v-model="observacao"
                  label="Observações"
                  value=""
                  auto-grow
                  rows="1"
                  hint="Esta oberservação será publicada junto ao processo, mas será exibida apenas para os participantes do processo."
                  persistent-hint
                ></v-textarea>
              </v-col>
              <v-col cols="2">
                <v-select
                  v-model="deferir"
                  :items="itemsDecisao"
                  :menu-props="{ maxHeight: '400' }"
                  label="O que deseja fazer?"
                  hint="Deferir: O processo será assinado e prosseguirá com as tramitações de aprovação. Indeferir: O processo será assinado e não será publicado."
                  persistent-hint
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-btn
                  class="ma-2"
                  :loading="loading"
                  :disabled="loading || deferir == null"
                  color="info"
                  @click="assinarProcesso()"
                  persistent-hint
                  >
                  Assinar Processo
                </v-btn>
              </v-col>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item>
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
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
</template>

<script>
  import processoService from '../../../services/processos.service'
  import gerarAssinatura from '../../../services/gerarAssinatura.service'
  import assinaturasService from '../../../services/assinaturas.service'
  import 'jodit/build/jodit.min.css'
  import { JoditEditor } from 'jodit-vue'
  export default {
      components: {
      JoditEditor
    },
     props: {
      item: {
        type: Object
      },
      editItem: {
        type: Boolean
      },
      viewItem: {
        type: Boolean
      },
    }, 
    data () {
      return {
        dialog: this.editItem,
        nomeProcesso: null,
        joditContent:"",
        config: this.getDefaultJoditConfigViewProcesso(),
        buttons: this.getDefaultJoditButtonsPush(),
        id:null,
        user_id: this.$store.state.auth.user.id,
        loader: null,
        loading: false,
        erroAlert: false,
        textErroAlert: null,
        typeErroAlert: null,
        viewProcesso: true,
        titleModal: 'Criar Novo Processo',
        buttonModal: 'Criar Processo',
        disabled: true,
        observacao: "",
        deferir: null,
        assinatura_id: null,
        itemsDecisao: [{value: 0, text: 'Deferir Processo'}, {value: 2, text: 'Indeferir Processo'}],
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
      }
    },
    created: function() {
      console.log('created', this.editItem,this.item)
      if (this.viewItem) {
        this.nomeProcesso = this.item.titulo
        this.joditContent = this.item.desc_documento
        this.id = this.item.id
        this.assinatura_id = this.item.id_assinatura
        this.viewProcesso = this.item.sigilo
        this.titleModal = "Assinar Processo"
        this.buttonModal = "Editar Processo",
        this.disabled = true
        this.config.readonly = this.disabled
        this.assinatura = this.getAssinaturasUsuarios(this.item)
        
      }
    },
    methods: {   
      gerarAssinatura(){
        console.log(this.item.sigilo)
        this.joditContent = ''
        if(this.item.sigilo){
          this.joditContent = this.joditContent.concat(gerarAssinatura.geradorConfidencial(this.templateInit))
        }
        this.joditContent = this.joditContent.concat(gerarAssinatura.geradorCabecalho(this.item))
        this.joditContent = this.joditContent.concat(this.item.desc_documento)
        this.assinatura.forEach(assinatura => {
          this.joditContent = this.joditContent.concat(gerarAssinatura.geradorAssinatura(assinatura))
        })
        if(this.item.dt_encerramento != null){
          this.joditContent = this.joditContent.concat(gerarAssinatura.geradorQrCode(this.item))
        }
        this.joditContent = this.joditContent.concat(gerarAssinatura.geradorReferencia(this.item))
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
      getDataFromApi: function () {
        this.getDataFromApiParent();
      },  
      reset () {
        this.dialog = false
      },
      assinarProcesso(){
        this.loading = true
        this.erroAlert = false
        let assinarProcesso = 
          {
            'observacao': this.observacao, 
            'user_id': this.user_id,
            'departamento_id': this.item.departamento_id,
            'visible': this.viewProcesso,
            'processo_id': this.id,
            'deferir': this.deferir,
            'assinatura_id': this.assinatura_id
          }
        processoService.update(assinarProcesso, this.id)
          .then((response) => {
            console.log(response)
            if (response.data) {
              this.id = response.data.id
              this.loading = false
              this.$router.go()
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
    }
  }
</script>