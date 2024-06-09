import { AuthContext } from '@/context/AuthContext'
import { ReactElement, useContext } from 'react'
import Loading from '@screens/utils/Loading/Loading'
import LoginMessage from '@screens/utils/LoginMessage/LoginMessage'


export default function Protected({children}: {children: ReactElement[] | ReactElement}) {

  const { auth } = useContext(AuthContext)
  
  if (auth === undefined) {
    return (<Loading/>)
  }

  return (auth.auth? <>{children}</> : <LoginMessage/>)
}
