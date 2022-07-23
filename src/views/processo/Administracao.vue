<template>
  <div>
    <p class="text-2xl mb-6">
          Painel de Administração
    </p>
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-text>
              <OpcoesAdministracao></OpcoesAdministracao>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import OpcoesAdministracao from './opcoesAdministracao.vue'

export default {
  components: {
    OpcoesAdministracao
},
  data() {
    return {}
  },
}
</script>
