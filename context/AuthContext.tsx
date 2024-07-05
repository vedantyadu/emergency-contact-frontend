import { ReactElement, createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getItem } from '@/utils/store'


type Auth = {
  auth: boolean,
  id: string | undefined
}

type ContextValue = {
  auth: Auth,
  setAuth: (state: Auth) => void
}


export const AuthContext = createContext<ContextValue>({} as ContextValue)


export function AuthProvider({children}: {children: ReactElement | ReactElement[]}) {

  const [auth, setAuth] =  useState<Auth>({} as Auth)

  useEffect(() => {
    const auth = async () => {
      try {
        const response = await axios.get('/account/auth', {
          headers: {
            'Authorization': getItem('authtoken') || ''
          }
        })
        setAuth({auth: response.data.auth, id: response.data.id})
      }
      catch (err) {
        console.log(err)
      }
    }
    auth()
  }, [])

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
