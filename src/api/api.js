import fetch from '../utils/asyncFetch'

const api = {
  login: (params) => {
    return fetch.post(`/v1/login/`,params)
  },
}

export default api
