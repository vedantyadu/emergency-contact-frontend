import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'
import { ParamList, screens } from '@/utils/utils'
import ForgotPassword from '@screens/Account/ForgotPassword'
import FormInput from '@screens/utils/FormInput/FormInput'
import SubmitButton from '@screens/Account/SubmitButton'
import GuestButton from '@screens/Account/GuestButton'
import ToggleLogin from '@screens/Account/ToggleLogin'
import PasswordInput from '@screens/Account/PasswordInput'
import Heading from '@screens/Account/Heading'
import Error from '@screens/Account/Error'
import { useContext, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { setItem } from '@/utils/store'
import { AuthContext } from '@/context/AuthContext'



type loginDetails = {
  email: string,
  password: string
}


export default function Login() {

  const { setAuth } = useContext(AuthContext)
  const navigation = useNavigation<NavigationProp<ParamList>>()
  const [error, setError] = useState<string>('')
  const [details, setDetails] = useState<loginDetails>({email: '', password: ''})

  const submit = async () => {
    try {
      const response = await axios.post('/account/login', details)
      setItem('authtoken', response.data.authtoken)
      setAuth({auth: response.data.auth, id: response.data.userid})
      navigation.navigate(screens.PROFILE)
    }
    catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message)
      }
      else {
        console.log(err)
      }
    }
  }

  const goToSignup = () => {
    navigation.navigate(screens.SIGNUP)
  }
  
  return (
    <ScrollView contentContainerStyle={{display: 'flex', flexGrow: 1, alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20}}>
      <View style={stylesheet.container}>
        <Heading text='Login'/>
        <Error message={error}/>
        <FormInput mode='email' title='Email' value={details.email} onChange={text => setDetails({...details, email: text})}/>
        <PasswordInput title='Password' value={details.password} onChange={text => setDetails({...details, password: text})}/>
        <ForgotPassword/>
        <SubmitButton text='Login' callback={submit}/>
        <GuestButton/>
        <ToggleLogin callback={goToSignup} text="Don't have an account?"/>
      </View>
    </ScrollView>
  )
}


const stylesheet = StyleSheet.create({
  container: {
    maxWidth: 320,
    width: '100%'
  }
})
