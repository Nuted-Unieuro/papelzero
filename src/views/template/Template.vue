<template>
  <div>
    <p class="text-2xl mb-6">
      Templates
    </p>
      <v-row>
    <!-- basic -->
    <v-col cols="12">
      <v-card class="elevation-2">
        <lista-templates></lista-templates>        
      </v-card>
    </v-col>
  </v-row>
  </div>
</template>

<script>
import listaTemplates from './tabela/lista-tabelas.vue'

export default {
  components: {
    listaTemplates
  },
  setup() {
    return {}
  },
}
</script>
