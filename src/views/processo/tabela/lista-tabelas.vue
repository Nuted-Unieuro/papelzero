<template>
  <v-data-table
    :headers="headers"
    :items="dados"
    :options.sync="options"
    :server-items-length="totalItens"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    show-expand
    :loading="loading"
  >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <br>
          <v-data-table
            :headers="headersExpanded"
            :items="item.assinaturas"
            :colspan="headers.length"
            :items-per-page="5"
            class="elevation-10"
          >
          <template v-slot:top>
            <v-toolbar
              flat
            >
            <v-toolbar-title>Registro de Assinaturas e Encaminhamentos</v-toolbar-title>
            </v-toolbar>
          </template>
          <template v-slot:[`item.dt_assinatura`]="{ item }">
            <span>{{ new Date(item.dt_assinatura).toLocaleString() }}</span>
          </template>
          
          </v-data-table>
          <br>
        </td>
         
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
       <span>{{ new Date(item.created_at).toLocaleString() }}</span>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil-lock
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-eye
        </v-icon>
      </template>
  </v-data-table>
</template>

<script>
  import procesosService from '../../../services/processos.service'
export default {
  data () {
    return {
      expanded: [],
      singleExpand: true,
      totalItens: 0,
      dados: [],
      loading: true,
      options: {},
      headers: [
        
        { text: 'Título', value: 'titulo' },
        { text: 'Emissão', value: 'created_at' },
        { text: 'Hash', value: 'uuid' },
        { text: 'Responsável', value: 'user.name' },
        { text: 'Status', value: 'dt_encerramento' },
        { text: 'Ações', value: 'actions', sortable: false },
        { text: 'Assinaturas', value: 'data-table-expand' },
      ],
      headersExpanded: [        
        { text: 'Usuário', value: 'user_id' },
        { text: 'Data', value: 'dt_assinatura' },
        { text: 'Status', value: 'status' }
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
  },
  methods: {
    getDataExpanded(item) {
      console.log(item)
    },
    getDataFromApi () {
      this.loading = true
      const { sortBy, sortDesc, page, itemsPerPage } = this.options
      console.log(this.options)
      procesosService.findAll(this.options)
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

    editItem (item) {
      this.editedIndex = this.dados.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.dados.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    /**
     * In a real application this would be a call to fetch() or axios.get()
     */
    fakeApiCall () {
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options

        let items = this.getDesserts()
        const total = items.length

        if (sortBy.length === 1 && sortDesc.length === 1) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy[0]]
            const sortB = b[sortBy[0]]

            if (sortDesc[0]) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (itemsPerPage > 0) {
          items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        }

        setTimeout(() => {
          resolve({
            items,
            total,
          })
        }, 1000)
      })
    },
    getDesserts () {
      return [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ]
    },
  },
}
</script>
