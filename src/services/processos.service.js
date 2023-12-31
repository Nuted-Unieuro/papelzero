import axios from 'axios'
import apiRoot from './api-root'

const API_URL = apiRoot()

const API_BASE_URL = `${API_URL}api`
class Service {
  findAll (data) {
    return axios.get(`${API_BASE_URL}/processos?page=${data.page}`)
  }

  processoByUsuario (data, query) {
    console.log("processoByUsuario", data)
    return axios.get(`${API_BASE_URL}/processobyusuario/${query}?page=${data.page}&filter=${data.filters.titulo}&usuario=${data.filters.usuario}&cod_status=${data.filters.cod_status}&nome_departamento=${data.filters.nome_departamento}`)
  }

  processospendentesusuario (query) {
    return axios.get(`${API_BASE_URL}/processospendentesusuario/${query}`)
  }
  processoByReferencia (data) {
    return axios.get(`${API_BASE_URL}/processobyreferencia/${data}`)
  }

  findAllByConnectedUser () {
    return axios.get(`${API_BASE_URL}/find-by-user`, { headers: authHeader() })
  }

  findById (id) {
    return axios.get(`${API_BASE_URL}/${id}`, { headers: authHeader() })
  }

  findByActivityId (id) {
    return axios.get(`${API_BASE_URL}/find-by-activity/${id}?id=${id}`, { headers: authHeader() })
  }

  getFacePictureById (id) {
    return axios.get(`${API_BASE_URL}/face-picture/${id}`, { headers: authHeader() })
  }

  approveRecognitionById (id, data = null) {
    return axios.put(`${API_BASE_URL}/approve/${id}`, data, { headers: authHeader() })
  }

  disapproveRecognitionById (id, data = null) {
    return axios.put(`${API_BASE_URL}/disapprove/${id}`, data, { headers: authHeader() })
  }

  save (data, id) {
    if (id) {
      return this.update(data, id)
    }
    return this.create(data)
  }

  create (data) {
    return axios.post(`${API_BASE_URL}/processos`, data)
  }

  update (data, id) {
    return axios.put(`${API_BASE_URL}/assinarProcesso/${id}`, data)
  }

  deleteById (id) {
    return axios.delete(`${API_BASE_URL}/${id}`, { headers: authHeader() })
  }
}

export default new Service()
