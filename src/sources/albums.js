import {ownRequest} from '../utils/own-request'

const albumsApi = {
  getAll: () => ownRequest.get('/albums/'),
  getByAlbumId: (albumId) => ownRequest.get(`/albums/${albumId}`)
}


export default albumsApi
