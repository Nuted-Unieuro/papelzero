import axios from 'axios'
import store from '../store/index'
import apiRoot from './api-root'

const API_URL = apiRoot()

class AuthService {
  login (user) {
    return axios
      .post(API_URL + 'api/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data) {
          // Brownser database
          localStorage.setItem('user', JSON.stringify(response.data.user))
          // Vue database
          store.commit('user', {
                cargo: response.data.user.cargo,
                cpf: response.data.user.cpf,
                created_at: response.data.user.created_at,
                email: response.data.user.email,
                email_verified_at: response.data.user.email_verified_at,
                matricula: response.data.user.matricula,
                name: response.data.user.name,
                tipo_acesso: response.data.user.tipo_acesso,
                updated_at: response.data.user.updated_at
            })
        }
        return response.data.user
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (user) {
    return axios
      .post(API_URL + 'api/register', {
        ...user
      })
      .then(response => {
        if (response.data) {
          // Brownser database
          localStorage.setItem('user', JSON.stringify(response.data))
          // Vue database
          store.commit('user', {
                cargo: response.data.cargo,
                cpf: response.data.cpf,
                created_at: response.data.created_at,
                email: response.data.email,
                email_verified_at: response.data.email_verified_at,
                matricula: response.data.matricula,
                name: response.data.name,
                tipo_acesso: response.data.tipo_acesso,
                updated_at: response.data.updated_at
            })
        }
        return response.data
      })
  }
}

export default new AuthService()
