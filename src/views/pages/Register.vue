<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/images/logos/logo-zero.png')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">
              ZeroPapel
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Seja bem vindo! 🚀
          </p>
          <p class="mb-2">
            Faça seu cadastrado aqui.
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form @submit.prevent="handleRegister">
            <v-text-field
              v-model="user.name"
              outlined
              label="Nome Completo"
              placeholder="Seu nome"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              outlined
              label="Email"
              placeholder="email@unieuro.edu.br"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="user.cpf"
              outlined
              label="CPF"
              placeholder="111.222.333-44"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="user.matricula"
              outlined
              label="Matricula"
              placeholder="1234"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Senha"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <!-- <v-checkbox
              hide-details
              class="mt-1"
            >
              <template #label>
                <div class="d-flex align-center flex-wrap">
                  <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy &amp; terms</a>
                </div>
              </template> 
            </v-checkbox>-->

            <v-btn
              block
              color="primary"
              class="mt-6"
              type="submit"
              
              native-type="submit"
            >
              Registrar
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Você já tem uma conta?
          </span>
          <router-link :to="{ name:'pages-login' }">
            Entre aqui
          </router-link>
        </v-card-text>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="190"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const isLoading = ref(false)
    const user = {
      cargo: null,
      cpf: null,
      email: null,
      matricula: null,
      name: null,
      tipo_acesso: null,
      password: null
    }
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      isPasswordVisible,
      username,
      email,
      password,
      socialLink,
      user,
      isLoading,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
    methods: {
    handleRegister () {
      this.isLoading = true
      console.log(this)
        this.$store.dispatch('auth/register', this.user)
          .then(() => {
            this.$router.push('/pages/login')
          },
          error => {
            this.isLoading = false
            //console.log(error)
            this.showCustomError('Não autorizado!')
          })
      
    }
  }
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
