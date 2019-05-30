import {ownRequest} from '../utils/own-request'

const photosApi = {
  getAllByAlbumId: (albumId) => ownRequest.get(`/photos/?albumId=${albumId}`),
  getById: (id) => ownRequest.get(`/photos/${id}`)
}


export default photosApi
