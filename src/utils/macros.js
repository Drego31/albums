import PHome from 'components/pages/Home'
import PAlbum from 'components/pages/Album'
import PPhoto from 'components/pages/Photo'
import PUser from 'components/pages/User'

export const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const WRONG_CONNECTION_MESSAGE = 'We have a problem... Come back later! :)'

export const LINKS = [
  {component: PHome, path: '/', exact: true},
  {component: PAlbum, path: '/album/:albumId'},
  {component: PPhoto, path: '/photo/:photoId'},
  {component: PUser, path: '/user/:userId'}
]
