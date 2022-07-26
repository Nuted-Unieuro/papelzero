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
            Seja bem-vindo! 👋🏻
          </p>
          <p class="mb-2">
            Por favor, entre com suas credenciais.
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form @submit.prevent="handleLogin">
            <v-text-field
              v-model="user.email"
              outlined
              label="Email"
              placeholder="email@unieuro.edu.br"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="user.password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <!-- <v-checkbox
                label="Lembrar-me"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>

   
              <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Recuperar Senha?
              </a> -->
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
              type="submit"
              :loading="isLoading"
              native-type="submit"
            >
              Entrar
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
<!--         <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Novo por aqui?
          </span>
          <router-link :to="{name:'pages-register'}">
            Crie sua conta
          </router-link>
        </v-card-text> -->
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
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

import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import User from '../../models/users'

export default {
  data() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')

    return {
      isPasswordVisible,
      email,
      password,
      user: new User('', ''),
      isLoading: false,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
    computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created () {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    handleLogin () {
      this.isLoading = true
      console.log(this)
        this.$store.dispatch('auth/login', this.user)
          .then(() => {
            this.$router.push('/')
          },
          error => {
            this.isLoading = false
            //console.log(error)
            this.showCustomError('Não autorizado!')
          })
      
    },
    resetPassword () {
      this.$router.push('/reset-password')
    },
    changePassword () {
      this.$router.push('/changepassword')
    }
  }
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
