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
      <template v-slot:activator="{ on: dialog, attrs }">
        <v-tooltip left>
        <template v-slot:activator="{ on: tooltip}">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="{ ...tooltip, ...dialog }"
            elevation="12"
            >
            <v-icon dark>
                mdi-plus
            </v-icon>
            </v-btn>
        </template>
            <span>Criar Novo Template</span>
        </v-tooltip>
      </template>
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
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              v-if="!disabled"
              text
              @click="saveTemplate"
              class="mt-3"
              :loading="loading"
              :disabled="loading"
            >
              {{buttonModal}}
            </v-btn>
          </v-toolbar-items>
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
                v-model="nomeTemplate"
                :counter="50"
                label="Nome do Template"
                :disabled="disabled"
                required
              ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-switch
                  v-model="viewTemplate"
                  :disabled="disabled"
                  :label="`Habilitar Template?`"
              ></v-switch>
              </v-col>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <div id="NewTemplate">
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
  import templatesService from '../../../services/templates.service'
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
      }
    }, 
    data () {
      return {
        dialog: this.editItem,
        nomeTemplate: null,
        joditContent:"",
        config: this.getDefaultJoditConfigTemplate(),
        buttons: this.getDefaultJoditButtons(),
        id:null,
        user_id: 1,
        loader: null,
        loading: false,
        erroAlert: false,
        textErroAlert: null,
        typeErroAlert: null,
        viewTemplate: true,
        titleModal: 'Criar Novo Template',
        buttonModal: 'Criar Template',
        disabled: true
      }
    },
    created() {
      console.log('created', this.editItem,this.item)
      if (this.editItem) {
        this.nomeTemplate = this.item.descricao
        this.joditContent = this.item.template
        this.id = this.item.id_template
        this.viewTemplate = this.item.visible
        this.titleModal = "Editar Template"
        this.buttonModal = "Editar Template",
        this.disabled = false
      }
      if (this.viewItem) {
        this.nomeTemplate = this.item.descricao
        this.joditContent = this.item.template
        this.id = this.item.id_template
        this.viewTemplate = this.item.visible
        this.titleModal = "Visualizar Template"
        this.buttonModal = "Editar Template",
        this.disabled = true
        this.config.readonly = this.disabled
      }
    },
    watch: {
      dialog(visible) {
        if (visible) {
          console.log(this.editItem, this.viewItem,'tse')
          this.nomeTemplate = null
          this.joditContent = ""
          this.id = null
          this.viewTemplate = true
          this.titleModal = "Criar Novo Template"
          this.buttonModal = "Criar Template"
          this.erroAlert = false
          this.disabled = false
          console.log("Dialog was opened!")
          
        } else {
          console.log("Dialog was closed!")
        }
      }
      },
    methods: {      
      reset () {
        this.dialog = false
      },
      saveTemplate(){
        this.loading = true
        this.erroAlert = false
        let newTemplate = 
          {
            'descricao': this.nomeTemplate, 
            'template': this.joditContent, 
            'user_id': this.user_id,
            'visible': this.viewTemplate
          }
        if(newTemplate.descricao == null || 
          newTemplate.descricao == `` || 
          newTemplate.template == null ||
          newTemplate.template == ``){
            this.typeErroAlert = 'error'
            this.textErroAlert = 'Preencha todos os campos'
            this.erroAlert = true
            console.log(newTemplate, this.erroAlert)
            this.loading = false
            return
        }
        templatesService.save(newTemplate, this.id)
          .then((response) => {
            console.log(response)
            if (response.data) {
              this.id = response.data.id
              this.loading = false
              this.erroAlert = true
              this.typeErroAlert = 'success'
              this.textErroAlert = 'Template Inserido com Sucesso!'
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