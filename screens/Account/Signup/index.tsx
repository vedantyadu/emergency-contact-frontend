import { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ParamList, screens } from '@/utils/utils'
import FormInput from '@screens/utils/FormInput/FormInput'
import SubmitButton from '@screens/Account/SubmitButton'
import GuestButton from '@screens/Account/GuestButton'
import ToggleLogin from '@screens/Account/ToggleLogin'
import PasswordInput from '@screens/Account/PasswordInput'
import Heading from '@screens/Account/Heading'
import Error from '@screens/Account/Error'
import axios, { AxiosError } from 'axios'


type signupDetails = {
  email: string,
  fullname: string,
  password: string,
  confirmpassword: string
}


export default function Signup() {

  const navigation = useNavigation<NavigationProp<ParamList>>()
  const [details, setDetails] = useState<signupDetails>({email: '', fullname: '', password: '', confirmpassword: ''})
  const [error, setError] = useState<string>('')

  const submit = async () => {
    try {
      if (details.password == details.confirmpassword) {
        const response = await axios.post('/account/signup', {
          email: details.email,
          fullname: details.fullname,
          password: details.password
        })
        navigation.navigate(screens.LOGIN)
      } 
      else {
        throw 'PASSWORD_MATCH_ERROR'
      }
    }
    catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message)
      }
      else if (err == 'PASSWORD_MATCH_ERROR') {
        setError('Passwords do not match')
      }
      else {
        console.log(err)
      }
    }
  }

  const goToLogin = () => {
    navigation.navigate(screens.LOGIN)
  }
  
  return (
    <ScrollView contentContainerStyle={{display: 'flex', flexGrow: 1, alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20}}>
      <View style={stylesheet.container}>
        <Heading text='Create an account'/>
        <Error message={error}/>
        <FormInput mode='email' title='Email' value={details.email} onChange={text => setDetails({...details, email: text})}/>
        <FormInput mode='text' title='Full name' value={details.fullname} onChange={text => setDetails({...details, fullname: text})}/>
        <PasswordInput title='Password' value={details.password} onChange={text => setDetails({...details, password: text})}/>
        <PasswordInput title='Confirm password' value={details.confirmpassword} onChange={text => setDetails({...details, confirmpassword: text})}/>
        <SubmitButton text='Signup' callback={submit}/>
        <GuestButton/>
        <ToggleLogin callback={goToLogin} text="Already have an account?"/>
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
