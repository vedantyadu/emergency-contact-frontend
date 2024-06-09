import { GenericObject } from '@/utils/utils'
import axios from 'axios'
import { ReactElement, createContext, useEffect, useState } from 'react'

type searchParams = {
  id: string | undefined,
  details: GenericObject | undefined,
  setId: (id: string | undefined) => void | undefined,
  setDetails: (data: GenericObject) => void
}

export const SearchContext = createContext<searchParams>({} as searchParams)


export function SearchProvider({children}: {children: ReactElement}) {

  const [id, setId] = useState<string | undefined>()
  const [details, setDetails] = useState<object | undefined>()

  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await axios.get(`/profile/search/${id}`)
      setDetails(res.data)
      console.log(res.data)
    }
    if (id) {
      fetchUserDetails()
    }
  }, [id])

  return (
    <SearchContext.Provider value={{id, setId, details, setDetails}}>
      { children }
    </SearchContext.Provider>
  )
}
