import axios from 'axios'

export enum screens {
  QR = 'qr',
  SEARCH = 'search',
  PROFILE = 'profile',
  LOGIN = 'login',
  SIGNUP = 'signup'
}  

export type ParamList = {
  [screens.QR]: undefined,
  [screens.SEARCH]: {id: string} | undefined,
  [screens.PROFILE]: undefined,
  [screens.LOGIN]: undefined,
  [screens.SIGNUP]: undefined
}

export const links: {[k in screens]: string} = {
  [screens.QR]: 'qr',
  [screens.SEARCH]: 'search/:id?',
  [screens.PROFILE]: 'profile',
  [screens.LOGIN]: 'account/login',
  [screens.SIGNUP]: 'account/signup' 
}  

export const WIDTH_THRESHOLD = 768

export type GenericObject = {
  [key: string]: any
}

export const configureAxios = () => {
  axios.defaults.baseURL = 'http://192.168.1.9:5000/'
  axios.defaults.withCredentials = true
}

export const defaultprofilepicture = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
