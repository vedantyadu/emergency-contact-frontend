import { COLORS, FONTS } from '@/styles'
import { Pressable, StyleSheet, Text } from 'react-native'


export default function SubmitButton({text, callback}: {text: string, callback: () => void}) {
  return (
    <Pressable style={stylesheet.button} onPress={callback}>
      <Text numberOfLines={1} style={stylesheet.text}>{text}</Text>
    </Pressable>
  )
}


const stylesheet = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    height: 40,
    paddingHorizontal: 10, 
    marginTop: 20,
    borderRadius: 10
  },
  text: {
    fontFamily: FONTS.defaultBold,
    color: COLORS.bg
  }
})
