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
          <v-toolbar-title>Criar Novo Template</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              text
              @click="saveTemplate"
              class="mt-3"
              :loading="loading"
              :disabled="loading"
            >
              Criar Template
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
                required
              ></v-text-field>
              </v-col>
              <v-col cols="2">
                <v-switch
                  v-model="viewTemplate"
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
    data () {
      return {
        dialog: false,
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
      }
    },
    methods: {
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