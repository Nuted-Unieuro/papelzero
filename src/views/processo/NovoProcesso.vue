<template>
  <div>
    <p class="text-2xl mb-6">
          Criar Novo Processo
    </p>
    <v-row>
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title>Dados do Processo</v-card-title>
          <v-card-text>
              <info-processo></info-processo>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import InfoProcesso from './InfoProcesso.vue'

export default {
  components: {
    InfoProcesso,
  },
  data() {
    return {}
  },
}
</script>
