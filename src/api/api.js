import fetch from '../utils/asyncFetch'

const api = {
  login: (params) => {
    return fetch.post(`/v1/login/`,params)
  },
  recommended: (params) => {
    return fetch.get(`/v1/recommended/`)
  },
}

export default api
