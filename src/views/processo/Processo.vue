<template>
  <div>
    <p class="text-2xl mb-6">
      Processos
    </p>
      <v-row>
    <!-- basic -->
    <v-col cols="12">
      <v-card class="elevation-2">
        <lista-processos></lista-processos>        
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import listaProcessos from './tabela/lista-tabelas.vue'

export default {
  components: {
    listaProcessos,
  },
  setup() {
    return {}
  },
}
</script>
