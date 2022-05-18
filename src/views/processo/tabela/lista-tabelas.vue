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
    item-key="uuid"
    show-expand
    :loading="loading"
    @item-expanded="getDataExpanded">
  >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Lista de Processos</v-toolbar-title>
          <v-spacer></v-spacer>
          <modalProcessos persistent @keydown.esc="dialog = true" v-bind:item="item" v-bind:editItem="editItem" v-bind:viewItem="viewItem" :key="keyItem"></modalProcessos>
          <assinaturaModalProcessos persistent @keydown.esc="dialog = true" v-bind:item="item" v-bind:editItem="editItemAssinatura" v-bind:viewItem="viewItemAssinatura" :key="keyItemAssinatura"></assinaturaModalProcessos>
        </v-toolbar>
      </template>
      <!-- Tabela de Assinaturas -->
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" item-key="uuid">
          <br>
          <v-data-table
            :headers="headersExpanded"
            :items="item.assinaturas"
            :colspan="headers.length"
            :items-per-page="5"
            :options.sync="optionsExpanded"
            :server-items-length="totalItensExpanded"
            :loading="loadingExpanded"
            item-key="item.id"
            class="elevation-10"
          >
            <!-- Template Colunas Status da Tabela de Assinaturas -->
            <template v-slot:[`item.cod_status`]="{ item }">
              <v-chip
                :color="getColorStatusExpanded(item.cod_status)"
                dark
                label
                class='v-chip-expanded'
              >
                {{ getTextStatusExpanded(item.cod_status) }}
              </v-chip>
            </template>
            <!-- Cabeçalho da Tabela de Assinaturas -->
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Registro de Assinaturas e Encaminhamentos</v-toolbar-title>
              </v-toolbar>
            </template>
            <!-- Formatação da coluna Data da Tabela de Assinaturas -->
            <template v-slot:[`item.dt_assinatura`]="{ item }">
              <span>{{ item.dt_assinatura != null ? new Date(item.dt_assinatura).toLocaleString() : "Aguardando Aprovação" }}</span>
            </template>   
            <!-- Template de formatação da coluna observação -->
            <template v-slot:[`item.observacao`]="{ item }">
            <span>{{ item.observacao != null ? item.observacao : "Não há!" }}</span>
            </template>       
          </v-data-table>
          <br>
        </td>         
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
      <template v-slot:[`item.created_at`]="{ item }">
       <span>{{ new Date(item.created_at).toLocaleString() }}</span>
      </template>

      <!-- Template da coluna de ações -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon v-if="item.dt_assinatura == null && item.cod_status != 2"
          small
          class="mr-2"
          @click="assinarProcesso(item)"
        >
          mdi-pencil-lock
        </v-icon>
        <v-icon
          small
          @click="viewTemplate(item)"
        >
          mdi-eye
        </v-icon>
      </template>
  </v-data-table>
</template>

<script>
  import procesosService from '../../../services/processos.service'
  import assinaturasService from '../../../services/assinaturas.service'
  import modalProcessos from './processo-view-modal.vue'
  import assinaturaModalProcessos from './processo-assinatura-modal.vue'
export default {
  components: {
      modalProcessos,
      assinaturaModalProcessos
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
      item: null,
      editItem:false,
      viewItem:false,
      keyItem: 0,
      editItemAssinatura:false,
      viewItemAssinatura:false,
      keyItemAssinatura: 0,
      keyItemDelete: 1500,
      headers: [
        
        { text: 'Título', value: 'titulo' },
        { text: 'Responsável', value: 'name' },
        { text: 'Departamento', value: 'nome_departamento' },
        { text: 'Emissão', value: 'created_at' },
        { text: 'Status', value: 'cod_status', align: 'center' },
        { text: 'Ações', value: 'actions', sortable: false },
        { text: 'Registros', value: 'data-table-expand' },
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
      procesosService.processoByUsuario(this.options, this.$store.state.auth.user.id)
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
    viewTemplate (item) {
      this.item = item
      this.keyItem++
      this.viewItem = true
      this.editItem = true
      console.log(item)
      //this.$refs.modalTemplates.dialog=true
    },
    assinarProcesso (item) {
      this.item = item
      this.keyItemAssinatura++
      this.viewItemAssinatura = true
      this.editItemAssinatura = true
      console.log(item)
      //this.$refs.modalTemplates.dialog=true
    },
  },
}
</script>
