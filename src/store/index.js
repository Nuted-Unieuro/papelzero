import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth
  },
  state: {
    /* User */
    id: null,
    cargo: null,
    cpf: null,
    created_at: null,
    email: null,
    email_verified_at: null,
    matricula: null,
    name: null,
    tipo_acesso: null,
    updated_at: null,
    notification: 0
  },
  mutations: {
    basic (state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user (state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
      if (payload.roles) {
        state.userRoles = payload.roles
      }
      if (payload.token) {
        state.userToken = payload.token
      }
      if (payload.userId) {
        state.userId = payload.userId
      }
      if (payload.roles) {
        state.role = (payload.roles.indexOf('ROLE_MANAGER') >= 0 || payload.roles.indexOf('ROLE_ADMIN') >= 0 || payload.roles.indexOf('ROLE_SUPERVISOR') >= 0 || payload.roles.indexOf('ROLE_USER') >= 0)
      }
      if (payload.roles) {
        state.roleSupervisor = (payload.roles.indexOf('ROLE_SUPERVISOR') >= 0)
      }
      if (payload.roles) {
        state.roleAdmin = (payload.roles.indexOf('ROLE_ADMIN') >= 0)
      }
      if (payload.roles) {
        state.roleManager = (payload.roles.indexOf('ROLE_MANAGER') >= 0)
      }
      if (payload.roles) {
        state.roleUser = (payload.roles.indexOf('ROLE_USER') >= 0)
      }
    },
  },
  actions: {

  }
})
