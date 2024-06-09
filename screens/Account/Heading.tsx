import { COLORS, FONTS } from '@/styles'
import { StyleSheet, Text } from 'react-native'


export default function Heading({text}: {text: string}) {
  return (
    <Text style={stylesheet.text}>{text}</Text>
  )
}


const stylesheet = StyleSheet.create({
  text: {
    fontFamily: FONTS.defaultBold,
    fontSize: 24,
    color: COLORS.primary,
    marginBottom: 40
  }
})
