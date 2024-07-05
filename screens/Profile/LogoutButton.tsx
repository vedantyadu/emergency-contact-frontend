import { COLORS, FONTS } from '@/styles'
import LogoutIcon from '@assets/svg/logout.svg'
import { Text, Pressable } from 'react-native'
import { deleteItem } from '@/utils/store'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'


export default function LogoutButton() {

  const { setAuth } = useContext(AuthContext)

  const logout = async () => {
    try {
      await deleteItem('authtoken')
      setAuth({auth: false, id: undefined})
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <Pressable onPress={logout} style={{display: 'flex', flexDirection: 'row', height: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginTop: 60}}>
      <Text style={{color: COLORS.error, fontFamily: FONTS.default, marginRight: 5}}>Logout</Text>
      <LogoutIcon width={15} height={15} color={COLORS.error}/>
    </Pressable>
  )
}
