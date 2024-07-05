import { ReactElement, createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import axios from 'axios'
import { getItem } from '@/utils/store'
import { COLORS } from '@/styles'


type GenericObject = {
  [key: string]: any
}


type ContextValue = {
  profileData: GenericObject,
  setProfileData: (value: GenericObject) => void
  QRURI: string | undefined,
  setQRURI: (value: string) => void
}


export const ProfileContext = createContext<ContextValue>({} as ContextValue)


export default function ProfileProvider({children}: {children: ReactElement}) {
  
  const [profileData, setProfileData] = useState<GenericObject>({})
  const [QRURI, setQRURI] = useState<string | undefined>()
  const { auth } = useContext(AuthContext)

  useEffect(() => {
    const getData = async () => {
      if (auth?.auth) {
        try {
          const response = await axios.get('/profile/data', {
            headers: {
              'Authorization': getItem('authtoken') || ''
            }
          })
          setProfileData(response.data)
        }
        catch (err) {
          console.log(err)
        }
      }
    }

    const generateQR = async () => {
      try {
        const response = await axios.get('/qr/generate', {
          params: {
            color: COLORS.text,
            bgcolor: COLORS.highlight1
          },
          headers: {
            authorization: getItem('authtoken') || ''
          }
        })
        setQRURI(response.data.svg)
      }
      catch (err) {
        console.log(err)
      }
    }

    getData()
    generateQR()
  }, [auth])


  return (
    <ProfileContext.Provider value={{profileData, setProfileData, QRURI, setQRURI}}>
      {children}
    </ProfileContext.Provider>
  )
}
