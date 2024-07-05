import * as secureStore from 'expo-secure-store'
import { Platform } from 'react-native'


export function setItem(key: string, value: string) {
  if (Platform.OS == 'web') {
    localStorage.setItem(key, value)
  }
  else {
    secureStore.setItem(key, value)
  }
}

export async function deleteItem(key: string) {
  if (Platform.OS == 'web') {
    localStorage.removeItem(key)
  }
  else {
    await secureStore.deleteItemAsync(key)
  }
}

export function getItem(key: string) {
  if (Platform.OS == 'web') {
    return localStorage.getItem(key)
  }
  else {
    return secureStore.getItem(key)
  }
}
