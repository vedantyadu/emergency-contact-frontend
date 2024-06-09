import { COLORS, FONTS } from '@/styles'
import { ParamList, screens } from '@/utils/utils'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, Text } from 'react-native'


export default function GuestButton() {

  const navigation = useNavigation<NavigationProp<ParamList>>()

  const guestContinue = () => {
    navigation.navigate(screens.SEARCH)
  }

  return (
    <Pressable onPress={guestContinue} style={stylesheet.button}>
      <Text numberOfLines={1} style={stylesheet.text}>Continue as a guest</Text>
    </Pressable>
  )
}


const stylesheet = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.highlight2,
    paddingHorizontal: 10,
    height: 40,
    marginTop: 10, 
    borderRadius: 10
  },
  text: {
    fontFamily: FONTS.default,
    color: COLORS.highlight2
  }
})
