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
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          Deseja realmente excluir este template?
        </v-card-title>
        <v-card-text>Isso excluirá definitivamente o template. Não será possível recuperá-lo!</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            depressed
            color="primary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="error"
            @click="deleteTemplate"
            :loading="loading"
            :disabled="loading"
            
          >
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
      deleteItem: {
        type: Boolean
      },
      viewItem: {
        type: Boolean
      },
      getDataFromApiParent: {
        type: Function
      },
    }, 
    data () {
      return {
        dialog: this.deleteItem,
        loading: false,
      }
    },
    methods: {  
      getDataFromApi: function () {
        this.getDataFromApiParent();
      },    
      reset () {
        this.dialog = false
      },
      deleteTemplate(){
        this.loading = true
       
        templatesService.deleteById(this.item.id_template)
          .then((response) => {
            console.log(response)
            if (response.data) {
              this.id = response.data.id
              this.loading = false
              this.dialog = false
              this.getDataFromApi()
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