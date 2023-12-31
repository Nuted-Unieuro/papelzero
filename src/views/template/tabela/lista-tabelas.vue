<style scoped>
.v-chip-expanded{
  width: 100px;
  align-content: center;
  justify-content: center;
}
</style>
<template>
  <v-data-table
    :headers="headers"
    :items="dados"
    :options.sync="options"
    :server-items-length="totalItens"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="descricao"
    :loading="loading">
  >
      <!-- Tabela de Assinaturas -->
      <template v-slot:[`item.template`]="{ item }">
        <jodit-editor
            v-model.trim="item.template"
            :buttons="buttons"
            :config="config"
        />
      </template>

      <template v-slot:top>
          <modalTemplateDrop :getDataFromApiParent="getDataFromApi" v-bind:item="item" v-bind:deleteItem="deleteItem" :key="keyItemDelete"></modalTemplateDrop>
        <v-toolbar flat>
          <v-toolbar-title>Lista de Templates</v-toolbar-title>
          <v-spacer></v-spacer>
          <modalTemplates persistent tabindex="-1" role="dialog" @keydown.esc="dialog = true" :getDataFromApiParent="getDataFromApi" v-bind:item="item" v-bind:editItem="editItem" v-bind:viewItem="viewItem" :key="keyItem"></modalTemplates>
        </v-toolbar>
      </template>

      <!-- Template Colunas Status -->
      <template v-slot:[`item.cod_status`]="{ item }">
        <v-chip
          :color="getColorStatus(item.cod_status)"
          dark
          label
          class='v-chip-expanded'
        >
          {{ getTextStatus(item.cod_status) }}
        </v-chip>
      </template>
      <!-- Template de formatação da coluna emissão -->
      <template v-slot:[`item.updated_at_template`]="{ item }">
       <span>{{ new Date(item.updated_at_template).toLocaleString() }}</span>
      </template>

      <!-- Template da coluna de ações -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs}">
            <v-icon
              small
              class="mr-2"
              v-bind="attrs"
              v-on="on"
              @click="viewTemplate(item)"
            >
              mdi-eye
            </v-icon>
          </template>
          <span>Visualizar Template</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs}">
            <v-icon
              small
              class="mr-2"
              v-bind="attrs"
              v-on="on"
              @click="editTemplate(item)"
            >
              mdi-pencil
            </v-icon>
          </template>
            <span>Editar Template</span>
        </v-tooltip>
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs}">
            <v-icon
              small
              v-bind="attrs"
                  v-on="on"
              @click="deleteTemplate(item)"
            >
              mdi-delete
            </v-icon>
          </template>
            <span>Excluir Template</span>
        </v-tooltip>
      </template>
  </v-data-table>
</template>

<script>
  import templatesService from '../../../services/templates.service'
  import assinaturasService from '../../../services/assinaturas.service'
  import 'jodit/build/jodit.min.css'
  import { JoditEditor } from 'jodit-vue'
  import modalTemplates from '../modal/template-modal.vue'
  import modalTemplateDrop from '../modal/template-modal-drop.vue'
export default {
  components: {
      JoditEditor,
      modalTemplates,
      modalTemplateDrop
  },
  data () {
    return {
      expanded: [],
      singleExpand: true,
      totalItens: 0,
      totalItensExpanded: 0,
      dados: [],
      loading: true,
      loadingExpanded: true,
      options: {},
      contextExpanded: null,
      optionsExpanded: {},
      config: this.getDefaultJoditConfig(),
      buttons: this.getDefaultJoditButtons(),
      item: null,
      editItem:false,
      deleteItem:false,
      viewItem:false,
      keyItem: 0,
      keyItemDelete: 1500,
      headers: [
        
        { text: 'Descrição', value: 'descricao' },
        { text: 'Responsável', value: 'name' },
        { text: 'Emissão', value: 'updated_at_template' },
        { text: 'Ações', value: 'actions', sortable: false }
      ],
      headersExpanded: [        
        { text: 'Usuário', value: 'name' },
        { text: 'Departamento', value: 'nome_departamento' },
        { text: 'Data e Hora da Ocorrência', value: 'dt_assinatura' },
        { text: 'Status', value: 'cod_status' },
        { text: 'Observações', value: 'observacao' },
      ],
      dadosExpanded: []
    }
  },
  watch: {
    options: {
      handler () {
        this.getDataFromApi()
      },
      deep: true,
    },
    optionsExpanded: {
      handler () {
          this.getDataExpanded(this.contextExpanded)
      },
      deep: true,
    },
  },
  methods: {
    getDataExpanded({item}) {
      this.loadingExpanded = true
      const { sortBy, sortDesc, page, itemsPerPage } = this.optionsExpanded
      if(item !== undefined){
        if(this.contextExpanded !== null && item.id != this.contextExpanded.id){
          this.optionsExpanded.page = 1;
        }
        this.contextExpanded = item
      }
      assinaturasService.assinaturasbyprocessos(this.optionsExpanded, this.contextExpanded)
        .then((response) => {
          if (response.data) {
            this.contextExpanded.assinaturas = response.data.data
            this.totalItensExpanded = response.data.total
            this.loadingExpanded = false
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
    getColorStatus (status) {
      switch(status){
        case 0:
          return '#4caf50'
        case 1:
          return '#ff9800'
        case 2:
          return '#f44336'
      }
    },
    getTextStatus (status) {
      switch(status){
        case 0:
          return 'Finalizado'
        case 1:
          return 'Tramitação'
        case 2:
          return 'Indeferido'
      }
    },
    getColorStatusExpanded (status) {
      switch(status){
        case 0:
          return '#4caf50'
        case 1:
          return '#ff9800'
        case 2:
          return '#f44336'
        case 3:
          return '#ff9800'
        case 4:
          return '#4caf50'
      }
    },
    getTextStatusExpanded (status) {
      switch(status){
        case 0:
          return 'Assinado'
        case 1:
          return 'Assinar'
        case 2:
          return 'Indeferido'
        case 3:
          return 'Pendente'
        case 4:
          return 'Executado'
      }
    },
    getDataFromApi () {
      this.loading = true
      const { sortBy, sortDesc, page, itemsPerPage } = this.options
      console.log(this.options)
      templatesService.findAll(this.options)
        .then((response) => {
          console.log(response)
          if (response.data) {
            this.dados = response.data.data
            this.totalItens = response.data.total
            this.loading = false
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
    editTemplate (item) {
      this.item = item
      this.keyItem++
      this.editItem = true
      this.viewItem = false
      console.log(item)
      //this.$refs.modalTemplates.dialog=true
    },
    deleteTemplate (item) {
      this.item = item
      this.keyItemDelete++
      this.deleteItem = true
      console.log(item)
      //this.$refs.modalTemplates.dialog=true
    },
    viewTemplate (item) {
      this.item = item
      this.keyItem++
      this.viewItem = true
      this.editItem = true
      console.log(item)
      //this.$refs.modalTemplates.dialog=true
    },
  },
}
</script>
