import { COLORS, FONTS } from '@/styles'
import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function ForgotPassword() {
  return (
    <View style={stylesheet.view}>
      <Pressable style={stylesheet.button}>
        <Text numberOfLines={1} ellipsizeMode='head' style={stylesheet.text}>Forgot password?</Text>
      </Pressable>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden'
  },
  button: {
    overflow: 'hidden'
  },
  text: {
    fontFamily: FONTS.default,
    fontSize: 12,
    color: COLORS.highlight2
  }
})
