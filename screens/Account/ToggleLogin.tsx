import { COLORS, FONTS } from '@/styles'
import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function ToggleLogin({text, callback}: {text: string, callback: () => void}) {
  return (
    <View style={stylesheet.view}>
      <Pressable style={stylesheet.button} onPress={callback}>
        <Text numberOfLines={1} ellipsizeMode='head' style={stylesheet.text}>{text}</Text>
      </Pressable>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 60,
    marginBottom: 20
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: FONTS.default,
    color: COLORS.highlight2,
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
})
