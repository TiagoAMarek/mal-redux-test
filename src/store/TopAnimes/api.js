import Handler from '../../common/ApiHandler'

export default {

  async getTopAnimes() {
    return Handler.get('/top/anime')
  }
}
