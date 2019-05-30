import {ownRequest} from '../utils/own-request'

const usersApi = {
  getByUserId: (id) => ownRequest.get(`/users/${id}`)
}


export default usersApi
