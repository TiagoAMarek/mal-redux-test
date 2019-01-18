import axios from 'axios'

const apiUrl = 'https://api.jikan.moe/v3'

export default {

  async get(path) {
    return axios.get(apiUrl + path)
  },
}
