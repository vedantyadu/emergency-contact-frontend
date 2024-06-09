import { COLORS, FONTS } from '@/styles'
import { ParamList, screens } from '@/utils/utils'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function LoginMessage() {

  const navigation = useNavigation<NavigationProp<ParamList>>()

  const gotoLogin = () => {
    navigation.navigate(screens.LOGIN)
  }

  return (
    <View style={stylesheet.view}>
      <Text style={stylesheet.text}>Login to view this page</Text>
      <Pressable style={stylesheet.button} onPress={gotoLogin}>
        <Text style={stylesheet.buttonText}>Login</Text>
      </Pressable>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    flex: 1,
    display: 'flex',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: COLORS.text,
    fontFamily: FONTS.default
  },
  button: {
    height: 40,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.bg,
    fontFamily: FONTS.defaultBold,
  }
})
